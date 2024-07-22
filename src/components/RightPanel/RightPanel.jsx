import './RightPanel.scss';
import InputBox from './InputBox/InputBox';
import InputHeader from './InputHeader/InputHeader';

function RightPanel() {
	return (
		<div className='right-panel'>
			<InputHeader />
			<InputBox />
		</div>
	);
}

export default RightPanel;
