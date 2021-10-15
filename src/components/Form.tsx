
// Interface for Form component 
interface FormInterface {
    estimate: number;
    setEstimate: (estimate: number) => void;
}

// Input form
const Form = (props: FormInterface) => {
    const { estimate, setEstimate } = props;

    // handle submit for form 
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(estimate)
    }
    
    // handle change in inputfield
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
                <div className="form-button">
                    <button id="save-estimate-btn" type="submit">Save estimate</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
