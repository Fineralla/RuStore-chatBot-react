import './LeftPanelSwiper.scss';

function LeftPanelSwiper({ leftPanelSwiperRef }) {
	const refreshPage = () => {
		window.location.reload();
	};
	return (
		<>
			<div ref={leftPanelSwiperRef} className='left-panel-swiper'>
				<div className='left-panel-swiper__buttons panel-flex'>
					<button
						onClick={refreshPage}
						className='left-panel-swiper__web panel-flex reset-button'
					>
						<img
							className='left-panel-swiper__button-web'
							src='/logo.svg'
							alt=''
						/>
						<p className='left-panel-swiper__web-text'>Web chat-bot</p>
					</button>
					<button className='left-panel-swiper__review panel-flex reset-button'>
						<img
							className='left-panel-swiper__buttons-img'
							src='/review.svg'
							alt=''
						/>
						<p>Обзор</p>
					</button>
				</div>
				<div className='left-panel-swiper__history'>
					<div className='left-panel-swiper__history-today'>
						<button className='reset-button history-heading'>Сегодня</button>
					</div>
					<div className='left-panel-swiper__history-yesterday'>
						<button className='reset-button history-heading'>Вчера</button>
					</div>
					<div className='left-panel-swiper__history-week'>
						<button className='reset-button history-heading'>Неделя</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default LeftPanelSwiper;
