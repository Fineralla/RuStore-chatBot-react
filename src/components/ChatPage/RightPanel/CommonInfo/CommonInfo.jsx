import './CommonInfo.scss';

function CommonInfo({ commonInfoRef }) {
	return (
		<div ref={commonInfoRef} className='right-panel-chat__common-info'>
			<div className='right-panel-chat__logo'>
				<img src='/logo.svg' alt='' />
			</div>
			<div className='right-panel-chat__questions'>
				<button className='right-panel-chat__card-question card-question reset-button'>
					<img className='card-question__img' src='/question.svg' alt='' />
					<p className='card-question__question'>
						Что означает ошибка &ldquo;Подпись не соотвествует
						предыдущей&ldquo;?
					</p>
				</button>
				<button className='right-panel-chat__card-question card-question reset-button'>
					<img className='card-question__img' src='/question.svg' alt='' />
					<p className='card-question__question'>Сколько длится модерация?</p>
				</button>
				<button className='right-panel-chat__card-question card-question reset-button'>
					<img className='card-question__img' src='/question.svg' alt='' />
					<p className='card-question__question'>
						Как изменить цену приложения?
					</p>
				</button>
				<button className='right-panel-chat__card-question card-question reset-button'>
					<img className='card-question__img' src='/question.svg' alt='' />
					<p className='card-question__question'>
						Как удалить опубликованное приложение?
					</p>
				</button>
			</div>
		</div>
	);
}

export default CommonInfo;
