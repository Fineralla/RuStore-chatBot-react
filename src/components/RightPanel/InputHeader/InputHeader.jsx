import './InputHeader.scss';

function InputHeader() {
	return (
		<div className='right-panel__header'>
			<div className='right-panel__img-box'>
				<img className='right-panel__img' src='/logo.svg' alt='' />
			</div>
			<div className='right-panel__heading'>
				Используйте Вашу учетную запись чтобы пользоваться преимуществом бота
				RuStore
			</div>
			<div className='right-panel__lines'>
				<div className='left-line line'></div>
				<div className='right-line line'></div>
			</div>
		</div>
	);
}

export default InputHeader;
