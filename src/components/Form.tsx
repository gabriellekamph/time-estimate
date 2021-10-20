import React from "react";

// Interface for Form component 
interface FormInterface {
    estimate: number;
    setEstimate: (estimate: number) => void;
    selectedIssue: any;
    selectedUser: any;
}

// Input form
const Form = (props: FormInterface) => {
    const [errorMessage, setErrorMessage] = React.useState("");
    const { estimate, setEstimate, selectedIssue, selectedUser } = props;

    // Handle submit for form 

    const handleSubmit = (e:any) => {
        e.preventDefault();

        if(selectedUser === undefined){
            console.log("välj en användare")
            setErrorMessage("Select a user to vote")
        } else {
            setErrorMessage("")
            console.log(estimate)
        }
        console.log(estimate)

        let estimateInput = estimate;
        let person = selectedUser.name;
        let id = selectedIssue.id;
       

        // Object with info to send to database

        let votingData = {
            id: id, // Id for issue
            person: person, // Person who voted
            estimate: estimateInput, // Estimate in hours
        }

        console.log("New object: ", votingData)

        // Fetch with POST to add new object to database

       fetch('http://localhost:3000/', {
           method: "post",
           headers: {
               "Content-Type": "application/json",
           },
           body: JSON.stringify(votingData)
       })
       .then(res => res.json())
       .then(data => console.log(data));
    }
    
    // handle change in input field

    const handleChange = (e:any) => {
        const re = /^[0-9\b]+$/;
    
        // if value is a number, set value as estimate
        if(e.target.value === '' || re.test(e.target.value)) {
          setEstimate(e.target.value);
        }
    }

    return (
        <div className="form-container" onSubmit={e => handleSubmit(e)}>
            <form>
                <div className="form-input">
                    <input
                        name="estimate"
                        type="text"
                        placeholder="Your estimate (hours)"
                        onChange={e => handleChange(e)}
                        value={estimate}
                    /> hours
                </div>
                <div className="error-message">
                    <p className="fw-bold">{errorMessage}</p>
                </div>
                <div className="form-button">
                    <button id="save-estimate-btn" type="submit">Save estimate</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
