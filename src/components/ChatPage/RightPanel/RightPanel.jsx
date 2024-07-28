import './RightPanel.scss';

import HeaderPerson from './HeaderPerson/HeaderPerson';
import CommonInfo from './CommonInfo/CommonInfo';
import Bottom from './Bottom/Bottom';
import ChatWindow from './ChatWindow/ChatWindow';
import { useRef, useState } from 'react';

function RightPanel() {
	const chatWindowRef = useRef(null);
	const commonInfoRef = useRef(null);
	const [dialog, setDialog] = useState([]);
	console.log(dialog);
	console.log(chatWindowRef);

	return (
		<div className='right-panel-chat'>
			<HeaderPerson />
			<CommonInfo commonInfoRef={commonInfoRef} />
			<ChatWindow chatWindowRef={chatWindowRef} dialog={dialog} />
			<Bottom
				chatWindowRef={chatWindowRef}
				commonInfoRef={commonInfoRef}
				setDialog={setDialog}
			/>
		</div>
	);
}

export default RightPanel;
