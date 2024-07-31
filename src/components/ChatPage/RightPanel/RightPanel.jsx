import { readyToAnswer } from '../../../helpers/readyToAnswer';
import { useRef, useState } from 'react';

import HeaderPerson from './HeaderPerson/HeaderPerson';
import CommonInfo from './CommonInfo/CommonInfo';
import Bottom from './Bottom/Bottom';
import ChatWindow from './ChatWindow/ChatWindow';

import './RightPanel.scss';

function RightPanel() {
	const chatWindowRef = useRef(null);
	const commonInfoRef = useRef(null);
	const rightPanelRef = useRef(null);
	const sendMessageButtonRef = useRef(null);

	const [dialog, setDialog] = useState([]);
	const [inputValue, setInputValue] = useState('');
	let answerValue = 'Я не могу дать ответ на данный вопрос';

	const addMessage = () => {
		if (inputValue !== '') {
			chatWindowRef.current.classList.remove('hidden');
			chatWindowRef.current.classList.add('panel-flex');
			commonInfoRef.current.classList.add('hidden');
			for (let i = 0; i < readyToAnswer.length; i++) {
				if (inputValue == readyToAnswer[i].question) {
					answerValue = readyToAnswer[i].answer;
				}
			}
			setDialog([...dialog, inputValue, answerValue]);
			setInputValue('');
			console.log('addMessage');
		}
		console.log('input value', inputValue);
		console.log('not addMessage');
	};

	return (
		<div ref={rightPanelRef} className='right-panel-chat'>
			<HeaderPerson />
			<CommonInfo
				commonInfoRef={commonInfoRef}
				setInputValue={setInputValue}
				addMessage={addMessage}
			/>
			<ChatWindow chatWindowRef={chatWindowRef} dialog={dialog} />
			<Bottom
				inputValue={inputValue}
				setInputValue={setInputValue}
				sendMessageButtonRef={sendMessageButtonRef}
				addMessage={addMessage}
			/>
		</div>
	);
}

export default RightPanel;
