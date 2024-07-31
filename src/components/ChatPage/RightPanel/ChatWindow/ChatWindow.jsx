import './ChatWindow.scss';

function ChatWindow({ chatWindowRef, dialog }) {
	return (
		<div ref={chatWindowRef} className='right-panel__chat-window hidden'>
			<div className='right-panel__chat-height'>
				{dialog.map((message, index) => (
					<div
						className={
							index % 2 == 0 ? 'person-question-box' : 'bot-answer-box'
						}
						key={index}
					>
						{message}
					</div>
				))}
			</div>
		</div>
	);
}

export default ChatWindow;
