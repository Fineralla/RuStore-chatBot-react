import './LeftPanelHeader.scss';

function LeftPanelHeader({ leftPanelSwiperRef }) {
	function tooglePanelSwiper() {
		console.log(leftPanelSwiperRef);
		if (!tooglePanelSwiper) return;
		leftPanelSwiperRef.current.classList.toggle('left-panel-swiper-hide');
		console.log(leftPanelSwiperRef.current.classList);
	}
	return (
		<div className='left-panel-chat__header'>
			<div onClick={tooglePanelSwiper} className='left-panel-chat__menu'>
				<button className='left-panel-chat__header-button left-panel-menu-left-button reset-button'></button>
			</div>
			<div className='left-panel-chat__edit'>
				<button className='left-panel-chat__header-button left-panel-edit-button reset-button'></button>
				<div className='triangle-up'></div>
				<div className='add-chat-overlay'>Новый чат</div>
			</div>
		</div>
	);
}

export default LeftPanelHeader;
