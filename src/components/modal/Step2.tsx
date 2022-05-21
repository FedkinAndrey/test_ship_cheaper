import React from 'react';
import { StepProps } from '../../types/data';
import Field from '../input/Field';

function Step2({ register, errors }: StepProps) {
	return (
		<div className="fields">
			<Field
				register={register}
				type="text"
				options={{
					required: 'IBAN is required',
					pattern: {
						value: /^UA\d{8}[A-Z0-9]{19}$/,
						message: 'Enter a valid IBAN',
					},
				}}
				label="IBAN*"
				error={errors.iban}
				name="iban"
				placeholder="UA111111111111111111111111111"
			/>
			<Field
				register={register}
				type="text"
				options={{
					required: 'BIC is required',
					pattern: {
						value: /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/,
						message: 'Enter a valid BIC',
					},
				}}
				label="BIC*"
				error={errors.bic}
				name="bic"
				placeholder="BARCGB22"
			/>
			<Field
				register={register}
				type="text"
				options={{
					required: 'Bank name is required',
					minLength: { value: 4, message: 'Minlength is 4' },
				}}
				label="Bank Name*"
				error={errors.bankName}
				name="bankName"
			/>
		</div>
	);
}

export default Step2;
