import './InputForm.scss';
import { useDispatch } from 'react-redux';

function InputRegForm({ regValue, setRegValue, wrapperRef }) {
	const dispatch = useDispatch();

	function initPerson(e) {
		e.preventDefault();
		if (regValue.VK_id && regValue.password) {
			const pers = {
				id: regValue.VK_id,
				password: regValue.password
			};
			dispatch({ type: 'ADD_PERSON', payload: pers });

			alert(
				`Вы успешно зарегистрированы!\nВаши данные для входа:\nЛогин: ${pers.id}\nПароль: ${pers.password}`
			);
			setRegValue({ VK_id: '', password: '' });
		} else {
			alert('Введите даннные для регистрации');
		}
	}

	function toggleWrapper() {
		if (!wrapperRef) return;
		wrapperRef.current.classList.remove('active');
	}

	return (
		<form action='#'>
			<div className='input-box'>
				<label>
					VK id
					<input
						value={regValue.VK_id}
						onChange={(e) =>
							setRegValue({ ...regValue, VK_id: e.target.value })
						}
						type='number'
						maxLength={9}
						name=''
						required
					/>
				</label>
			</div>
			<div className='input-box'>
				<label>
					Пароль
					<input
						value={regValue.password}
						onChange={(e) =>
							setRegValue({ ...regValue, password: e.target.value })
						}
						type='password'
						name=''
						required
					/>
				</label>
			</div>
			<div className='remember-forgot'>
				<label className='container'>
					<input type='checkbox' />
					<div className='checkmark'></div>*Я ознакомился и согласен с политикой
					конфиденциальности
				</label>
			</div>
			<div className='login-register'>
				<p>
					Уже есть аккаунт?
					<a className='register-link' href='#' onClick={toggleWrapper}>
						Войти
					</a>
				</p>
			</div>
			<button className='btn-form btn-login' type='' onClick={initPerson}>
				<a className='btn-submit__link' href='#'>
					Зарегистрироваться
				</a>
			</button>
		</form>
	);
}

export default InputRegForm;
