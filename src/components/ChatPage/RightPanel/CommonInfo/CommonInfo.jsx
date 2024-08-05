import { useEffect, useState } from 'react';

import './CommonInfo.scss';
import logo from '../../../../../public/logo.svg';
import question from '../../../../../public/question.svg';

function CommonInfo({ commonInfoRef, setInputValue, addMessage }) {
	const [click, setClick] = useState(false);
	const addMessageFromButton = (e) => {
		setClick(true);
		let buttonText = e.target.innerText;
		setInputValue(buttonText);
	};
	useEffect(() => {
		addMessage();
	}, [click]);

	return (
		<div ref={commonInfoRef} className='right-panel-chat__common-info'>
			<div className='right-panel-chat__logo'>
				<img src={logo} alt='' />
			</div>
			<div className='right-panel-chat__questions'>
				<button
					onClick={addMessageFromButton}
					className='right-panel-chat__card-question card-question reset-button'
				>
					<img className='card-question__img' src={question} alt='' />
					<p className='card-question__question'>
						Что означает ошибка &ldquo;Подпись не соотвествует
						предыдущей&ldquo;?
					</p>
				</button>
				<button
					onClick={addMessageFromButton}
					className='right-panel-chat__card-question card-question reset-button'
				>
					<img className='card-question__img' src={question} alt='' />
					<p className='card-question__question'>Сколько длится модерация?</p>
				</button>
				<button
					onClick={addMessageFromButton}
					className='right-panel-chat__card-question card-question reset-button'
				>
					<img className='card-question__img' src={question} alt='' />
					<p className='card-question__question'>
						Как попасть в подборку приложений?
					</p>
				</button>
				<button
					onClick={addMessageFromButton}
					className='right-panel-chat__card-question card-question reset-button'
				>
					<img className='card-question__img' src={question} alt='' />
					<p className='card-question__question'>
						Как удалить опубликованное приложение?
					</p>
				</button>
			</div>
		</div>
	);
}

export default CommonInfo;
