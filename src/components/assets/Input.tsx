import React, { FC } from "react";
import { InputTypes } from "../../types/types";

// usage
/* <Input
value={val}
placeholder="test"
label="Test"
error="test"
type="text"
onChange={handleChange}
showError={false}
/> */

const Input: FC<InputTypes> = (props) => {
  const { label, placeholder, value, type, onChange, error, showError } = props;
  return (
    <div className="input-container">
      <label htmlFor="" className="label-text">
        {label} <span className="required">*</span>
      </label>
      <input
        className="input-field"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      {showError && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Input;
