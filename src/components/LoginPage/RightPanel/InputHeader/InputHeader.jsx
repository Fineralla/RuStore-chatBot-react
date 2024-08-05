import './InputHeader.scss';
import logo from '../../../../../public/logo.svg';

function InputHeader() {
	return (
		<div className='right-panel-login__header'>
			<div className='right-panel-login__img-box'>
				<img className='right-panel-login__img' src={logo} alt='' />
			</div>
			<div className='right-panel-login__heading'>
				Используйте Вашу учетную запись чтобы пользоваться преимуществом бота
				RuStore
			</div>
			<div className='right-panel-login__lines'>
				<div className='left-line line'></div>
				<div className='right-line line'></div>
			</div>
		</div>
	);
}

export default InputHeader;
