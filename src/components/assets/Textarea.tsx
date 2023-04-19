import React, { FC } from "react";
import { TextareaTypes } from "../../types/types";

// usage
/* <Textarea
value={val}
placeholder="test"
label="Test"
error="test"
onChange={handleChange}
showError={false}
/> */

const Textarea: FC<TextareaTypes> = (props) => {
  const { label, placeholder, value, onChange, error, showError } = props;
  return (
    <div className="input-container">
      <label htmlFor="" className="label-text">
        {label} <span className="required">*</span>
      </label>
      <textarea
        className="input-field textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {showError && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Textarea;
