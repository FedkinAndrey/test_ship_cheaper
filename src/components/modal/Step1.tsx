import React from 'react';
import { StepProps } from '../../types/data';
import Field from '../input/Field';
import SelectField from '../input/SelectField';

function Step1({ register, errors }: StepProps) {
	return (
		<div className="fields">
			<Field
				register={register}
				type="text"
				label="Company*"
				error={errors.company}
				name="company"
				options={{
					required: 'Company is Required',
					minLength: { value: 2, message: 'Minimum length is 2' },
				}}
			/>
			<Field
				register={register}
				type="text"
				label="Name*"
				error={errors.name}
				name="name"
				options={{
					required: 'Name is Required',
					minLength: { value: 2, message: 'Minimum length is 2' },
				}}
			/>
			<Field
				register={register}
				type="text"
				label="Additional"
				error={errors.additional}
				name="additional"
				options={{
					required: false,
					minLength: { value: 5, message: 'Minimum length is 5' },
				}}
			/>
			<Field
				register={register}
				type="text"
				label="Street"
				error={errors.street}
				name="street"
				options={{
					required: false,
					minLength: { value: 5, message: 'Minimum length is 5' },
				}}
			/>
			<Field
				register={register}
				type="text"
				label="Postal Code"
				error={errors.postalCode}
				name="postalCode"
				options={{
					required: false,
					pattern: {
						value: /^\d+$/,
						message: 'Postal code must contain only numbers',
					},
					minLength: { value: 5, message: 'Minimum length is 5' },
				}}
			/>
			<SelectField
				error={errors.country}
				register={register}
				label="Country"
				name="country"
				options={{
					required: false,
				}}
			/>
		</div>
	);
}

export default Step1;
