import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './HeaderPerson.scss';

function HeaderPerson() {
	const navigate = useNavigate();
	const person = JSON.parse(localStorage.getItem('person'));
	const accountExitButtonRef = useRef(null);

	const exitToLogin = () => {
		navigate('/');
	};

	function toggleDiv() {
		console.log();
		if (!accountExitButtonRef) return;
		accountExitButtonRef.current.classList.toggle(
			'account__exit-button-box-active'
		);
		console.log(accountExitButtonRef.current);
	}

	return (
		<div className='right-panel-chat__header'>
			<h1 className='right-panel-chat__heading'>Web chat-bot RuStore</h1>
			<div className='right-panel-chat__account'>
				<p className='account__name'>ID: {person.id}</p>
				<button onClick={toggleDiv} className='account__button reset-button'>
					<img src='/account.svg' alt='' />
				</button>
				<div ref={accountExitButtonRef} className='account__exit-button-box'>
					<div className='triangle-up-account'></div>
					<button className='account__exit-button reset-button'>
						{' '}
						<a onClick={exitToLogin}>Выход</a>
					</button>
				</div>
			</div>
		</div>
	);
}

export default HeaderPerson;
