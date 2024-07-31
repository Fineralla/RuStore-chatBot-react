import InputBox from './InputBox/InputBox';
import InputHeader from './InputHeader/InputHeader';

import './RightPanel.scss';

function RightPanel() {
	return (
		<div className='right-panel-login'>
			<InputHeader />
			<InputBox />
		</div>
	);
}

export default RightPanel;
