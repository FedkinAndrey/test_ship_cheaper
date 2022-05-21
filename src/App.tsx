import React, { useState } from 'react';
import './App.css';
import { Modal, Table } from './components';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="container">
			<div className="buttons-add">
				<button className="btn" type="button" onClick={toggleModal}>
					Add
				</button>
			</div>
			<Modal isOpen={isOpen} onClose={toggleModal} />
			<Table />
		</div>
	);
}

export default App;
