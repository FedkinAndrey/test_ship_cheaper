import {
	FieldError,
	FieldErrors,
	RegisterOptions,
	UseFormRegister,
} from 'react-hook-form';

export interface IData {
	company: string;
	name: string;
	additional: string;
	street: string;
	postalCode: number;
	country: string;
	iban: string;
	bic: string;
	bankName: string;
	fax: string;
	email: string;
	birthday: string;
	homepage: string;
}

export interface DataState {
	data: IData[];
}

export interface StepProps {
	errors: FieldErrors<IData>;
	register: UseFormRegister<IData>;
}

export interface FieldProps {
	error: FieldError | undefined;
	register: UseFormRegister<IData>;
	type?: 'text' | 'number' | 'url' | 'email' | 'date';
	label: string;
	placeholder?: string;
	options?: RegisterOptions;
	name:
		| 'company'
		| 'fax'
		| 'name'
		| 'additional'
		| 'street'
		| 'postalCode'
		| 'country'
		| 'iban'
		| 'bic'
		| 'bankName'
		| 'email'
		| 'birthday'
		| 'homepage';
}
