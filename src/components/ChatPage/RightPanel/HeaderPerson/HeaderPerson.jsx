import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import account from '../../../../../public/account.svg';
import './HeaderPerson.scss';

function HeaderPerson() {
	const person123 = useSelector((state) => state.person.person123);
	const ID = String(person123.map((person) => person.id));
	const navigate = useNavigate();
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
	}

	return (
		<div className='right-panel-chat__header'>
			<h1 className='right-panel-chat__heading'>Web chat-bot RuStore</h1>
			<div className='right-panel-chat__account'>
				<p className='account__name'>ID: {ID}</p>
				<button onClick={toggleDiv} className='account__button reset-button'>
					<img src={account} alt='' />
				</button>
				<div ref={accountExitButtonRef} className='account__exit-button-box'>
					<div className='triangle-up-account'></div>
					<button
						onClick={exitToLogin}
						className='account__exit-button reset-button'
					>
						{' '}
						<a>Выход</a>
					</button>
				</div>
			</div>
		</div>
	);
}

export default HeaderPerson;
