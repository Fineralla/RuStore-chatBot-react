import { useNavigate } from 'react-router-dom';

import './InputForm.scss';

function InputLoginForm({ loginValue, setLoginValue, person, wrapperRef }) {
	const navigate = useNavigate();

	const valueInfo = () => {
		if (
			loginValue.VK_id === person.id &&
			loginValue.password === person.password
		) {
			navigate('/chat');
		} else {
			alert('Неправильные данные');
		}
	};

	function toggleWrapper() {
		console.log();
		if (!wrapperRef) return;
		wrapperRef.current.classList.add('active');
		console.log(wrapperRef.current);
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
