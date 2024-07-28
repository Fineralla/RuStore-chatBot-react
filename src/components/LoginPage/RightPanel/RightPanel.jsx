import './RightPanel.scss';
import InputBox from './InputBox/InputBox';
import InputHeader from './InputHeader/InputHeader';

function RightPanel() {
	return (
		<div className='right-panel-login'>
			<InputHeader />
			<InputBox />
		</div>
	);
}

export default RightPanel;
