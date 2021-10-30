import React from "react";
import './style.css';

const Input = ({label, ...props}) => {
    return (
        <div className='input_container'>
            <label className="u_label">{label}</label>
            <input className="u_input" {...props} autoComplete="off" required />
        </div>
    );
};

export default Input;
