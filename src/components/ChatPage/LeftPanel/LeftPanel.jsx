// import './LeftPanel.css';

import { useRef } from 'react';
import LeftPanelHeader from './LeftPanelHeader/LeftPanelHeader';
import LeftPanelSwiper from './LeftPanelSwiper/LeftPanelSwiper';

function LeftPanel() {
	const leftPanelSwiperRef = useRef(null);
	// console.log(leftPanelSwiperRef);

	return (
		<>
			<LeftPanelHeader leftPanelSwiperRef={leftPanelSwiperRef} />
			<LeftPanelSwiper leftPanelSwiperRef={leftPanelSwiperRef} />
		</>
	);
}

export default LeftPanel;
