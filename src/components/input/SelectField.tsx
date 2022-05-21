import React from 'react';
import { FieldProps } from '../../types/data';

function SelectField({ register, error, label, name }: FieldProps) {
	return (
		<div className="field">
			<div className="field-input">
				<label htmlFor={name}>{label}</label>
				<select {...register(name)} id={name}>
					<option value="Ukraine">Ukraine</option>
					<option value="United Kingdom">United Kingdom</option>
					<option value="USA">USA</option>
				</select>
			</div>
			{error && <p className="field-error">{error?.message}</p>}
		</div>
	);
}

export default SelectField;
