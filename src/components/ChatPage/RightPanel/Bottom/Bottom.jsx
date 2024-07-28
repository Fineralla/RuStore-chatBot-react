import { useState } from 'react';
import './Bottom.scss';

function Bottom({ chatWindowRef, commonInfoRef, setDialog }) {
	const [inputValue, setInputValue] = useState('');

	const addMessage = () => {
		console.log(chatWindowRef);
		chatWindowRef.current.classsName = 'right-panel__chat-window';
		commonInfoRef.current.classList.add('hidden');
		console.log(chatWindowRef.current.classsName);
		console.log(commonInfoRef.current.classsName);
		setDialog(inputValue);
	};

	return (
		<div className='right-panel-chat__bottom'>
			<div className='right-panel-chat__input-box'>
				<label className='right-panel-chat__file reset-button'>
					<input type='file' />
				</label>

				<input
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className='right-panel-chat__input'
					type='text'
					placeholder='Введите запрос WCB'
				/>
				<button
					onClick={addMessage}
					className='right-panel-chat__send-question reset-button'
				></button>
			</div>
			<div className='right-panel-chat__team-name-box'>
				<p className='right-panel-chat__team-name'>В LLM только девушки</p>
			</div>
		</div>
	);
}

export default Bottom;
