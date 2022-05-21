import React from 'react';
import { FieldProps } from '../../types/data';

function Field({
	register,
	error,
	type,
	label,
	name,
	options,
	placeholder,
}: FieldProps) {
	return (
		<div className="field">
			<div className="field-input">
				<label htmlFor={name}>{label}</label>
				<input
					{...register(name, options)}
					id={name}
					type={type}
					placeholder={placeholder}
				/>
			</div>
			{error && <p className="field-error">{error?.message}</p>}
		</div>
	);
}

export default Field;
