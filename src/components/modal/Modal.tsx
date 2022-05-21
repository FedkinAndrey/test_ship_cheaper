import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CloseIcon } from '../../assets/icons';
import { IData } from '../../types/data';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { useAppDispatch } from '../../hooks/hooks';
import { addData } from '../../store/data/slice';

ReactModal.setAppElement('#root');

interface IModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const steps: string[] = ['Invoice Address', 'Bank data', 'Contact'];

function Modal({ isOpen, onClose }: IModalProps): React.ReactElement {
	const [step, setStep] = useState<number>(0);
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm<IData>({ mode: 'onChange' });

	const handleClose = () => {
		setStep(0);
		reset();
		onClose();
	};

	const submit: SubmitHandler<IData> = dataInfo => {
		dispatch(addData(dataInfo));
		setStep(0);
		reset();
		handleClose();
	};

	const nextStep = () => {
		if (step < steps.length - 1) {
			setStep(curr => curr + 1);
		}
	};

	const prevStep = () => {
		if (step > 0) setStep(curr => curr - 1);
	};

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={() => handleClose()}
			contentLabel="My dialog"
			className="modal"
			overlayClassName="overlay"
			shouldCloseOnOverlayClick={false}
		>
			<form className="window">
				<div className="close">
					<button
						type="button"
						className="btn-icon"
						onClick={() => handleClose()}
					>
						<CloseIcon />
					</button>
				</div>
				<div className="title">
					<h1>{steps[step]}</h1>
				</div>
				{step === 0 ? (
					<Step1 register={register} errors={errors} />
				) : step === 1 ? (
					<Step2 register={register} errors={errors} />
				) : (
					<Step3 register={register} errors={errors} />
				)}
			</form>
			<div className="buttons-form">
				<button
					className="btn outline"
					type="button"
					onClick={() => handleClose()}
				>
					Cancel
				</button>
				{step > 0 && (
					<button className="btn outline" type="button" onClick={prevStep}>
						Previous
					</button>
				)}
				{step < steps.length - 1 ? (
					<button
						className="btn"
						type="button"
						disabled={!isValid}
						onClick={() => nextStep()}
					>
						Next
					</button>
				) : (
					<button
						className="btn"
						type="submit"
						disabled={!isValid}
						onClick={handleSubmit(submit)}
					>
						Save
					</button>
				)}
			</div>
		</ReactModal>
	);
}

export default Modal;
