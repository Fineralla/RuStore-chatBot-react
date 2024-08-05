import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './InputForm.scss';

function InputLoginForm({ loginValue, setLoginValue, wrapperRef }) {
	const person123 = useSelector((state) => state.person.person123);
	const navigate = useNavigate();
	const ID = String(person123.map((person) => person.id));
	const password = String(person123.map((person) => person.password));

	const valueInfo = (e) => {
		e.preventDefault();
		if (loginValue.VK_id === ID && loginValue.password === password) {
			console.log(ID, password);
			console.log(loginValue.VK_id, loginValue.password);
			console.log('navigate');

			navigate('/chat');
		} else {
			alert('Неправильные данные');
			console.log(ID, password);
			console.log(loginValue.VK_id, loginValue.password);
		}
	};

	function toggleWrapper() {
		if (!wrapperRef) return;
		wrapperRef.current.classList.add('active');
	}

	return (
		<form action='#'>
			<div className='input-box'>
				<label>
					VK id
					<input
						value={loginValue.VK_id}
						onChange={(e) =>
							setLoginValue({ ...loginValue, VK_id: e.target.value })
						}
						type='number'
						name='VK_id'
						required
					/>
				</label>
			</div>
			<div className='input-box'>
				<label>
					Пароль
					<input
						onChange={(e) =>
							setLoginValue({ ...loginValue, password: e.target.value })
						}
						value={loginValue.password}
						type='password'
						name='password'
						required
					/>
				</label>
			</div>
			<div className='remember-forgot'>
				<label className='container'>
					<input type='checkbox' />
					<div className='checkmark'></div>
					Запомнить?
				</label>
			</div>
			<div className='login-register'>
				<p>
					Нет аккаунта?
					<a className='register-link' href='#' onClick={toggleWrapper}>
						Зарегистрироваться
					</a>
				</p>
			</div>
			<button className='btn-form btn-login' type='' onClick={valueInfo}>
				<a className='btn-submit__link' href='#'>
					Войти
				</a>
			</button>
		</form>
	);
}

export default InputLoginForm;
