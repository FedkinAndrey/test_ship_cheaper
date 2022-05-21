import React from 'react';
import { StepProps } from '../../types/data';
import Field from '../input/Field';

function Step3({ register, errors }: StepProps) {
	return (
		<div className="fields">
			<Field
				register={register}
				type="text"
				label="Fax"
				error={errors.fax}
				name="fax"
				options={{
					required: false,
					pattern: {
						value: /^\+?[0-9]+$/,
						message: 'Fax must contain only numbers',
					},
					minLength: { value: 6, message: 'Minimum length is 6' },
				}}
			/>
			<Field
				register={register}
				type="email"
				label="E-mail"
				error={errors.email}
				name="email"
				options={{
					required: false,
					pattern: {
						value:
							/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						message: 'Enter valid email',
					},
				}}
			/>
			<Field
				register={register}
				type="date"
				label="Birthday"
				error={errors.birthday}
				name="birthday"
				options={{
					required: false,
				}}
			/>
			<Field
				register={register}
				type="url"
				label="Homepage"
				error={errors.homepage}
				name="homepage"
				options={{
					required: false,
				}}
			/>
		</div>
	);
}

export default Step3;
