import { useEffect } from 'react';

import './Bottom.scss';

function Bottom({
	inputValue,
	setInputValue,
	sendMessageButtonRef,
	addMessage
}) {
	const onKeyDown = (e) => {
		if (e.key === 'Enter') {
			sendMessageButtonRef.click();
		}
	};

	useEffect(() => {
		const onKeypress = (e) => {
			if (e.key === 'Enter') {
				sendMessageButtonRef.current?.click();
			}
		};

		document.addEventListener('keypress', onKeypress);

		return () => {
			document.removeEventListener('keypress', onKeypress);
		};
	}, []);
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
					onKeyDown={onKeyDown}
					ref={sendMessageButtonRef}
					onClick={addMessage}
					className='right-panel-chat__send-question reset-button'
					type='sumbit'
				></button>
			</div>
			<div className='right-panel-chat__team-name-box'>
				<p className='right-panel-chat__team-name'>В LLM только девушки</p>
			</div>
		</div>
	);
}

export default Bottom;
