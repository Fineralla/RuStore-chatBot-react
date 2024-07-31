import { useEffect, useState } from 'react';

import './CommonInfo.scss';

function CommonInfo({ commonInfoRef, setInputValue, addMessage }) {
	const [click, setClick] = useState(false);
	const addMessageFromButton = (e) => {
		setClick(true);
		console.log(e);
		let buttonText = e.target.innerText;
		console.log(buttonText);
		setInputValue(buttonText);
	};
	useEffect(() => {
		addMessage();
	}, [click]);

	return (
		<div ref={commonInfoRef} className='right-panel-chat__common-info'>
			<div className='right-panel-chat__logo'>
				<img src='/logo.svg' alt='' />
			</div>
			<div className='right-panel-chat__questions'>
				<button
					onClick={addMessageFromButton}
					className='right-panel-chat__card-question card-question reset-button'
				>
					<img className='card-question__img' src='/question.svg' alt='' />
					<p className='card-question__question'>
						Что означает ошибка &ldquo;Подпись не соотвествует
						предыдущей&ldquo;?
					</p>
				</button>
				<button
					onClick={addMessageFromButton}
					className='right-panel-chat__card-question card-question reset-button'
				>
					<img className='card-question__img' src='/question.svg' alt='' />
					<p className='card-question__question'>Сколько длится модерация?</p>
				</button>
				<button
					onClick={addMessageFromButton}
					className='right-panel-chat__card-question card-question reset-button'
				>
					<img className='card-question__img' src='/question.svg' alt='' />
					<p className='card-question__question'>
						Как попасть в подборку приложений?
					</p>
				</button>
				<button
					onClick={addMessageFromButton}
					className='right-panel-chat__card-question card-question reset-button'
				>
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
