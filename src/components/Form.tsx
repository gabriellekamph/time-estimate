import React from 'react';

// Interface for Form component 

interface FormInterface {
    estimate: number;
    handleSaveEstimate: () => void;
}

// Input form

const Form = (props: FormInterface) => {
    return (
        <div className="form-container">
            <div className="form-input">
                <input
                    name="estimate"
                    type="text"
                    placeholder="Your estimate (hours)"
                />
            </div>

            <div className="form-button">
                <button id="save-estimate-btn" type="button" onClick={props.handleSaveEstimate}>Save estimate</button>
            </div>
        </div>
    )
}

export default Form;
