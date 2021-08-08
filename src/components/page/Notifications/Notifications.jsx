import React from 'react';
import './Notifications.scss';

function Notifications(props) {
	return (
		<div
			className={`container-notifications ${
				props.notesModal ? 'open' : 'close'
			} style={{...props.style}}`}
			onClick={() => props.Notes()}
		>
			<div className="notifications" onClick={(event) => event.stopPropagation()}>
				<div className="container-center-note">
					<div className="note">
						<div className="theNote">
							Вас добавили на тусу{' '}
							<span className="hashtag">#ОторвемсяСТобой</span>
						</div>
						<div className="timeAndButton">
							<div className="time">сегодня в 18.43</div>
							<button className="btn-party">
								Перейти к тусе
							</button>
						</div>
					</div>
					<div className="note">
						<div className="theNote">
							Администратор тусы{' '}
							<span className="hashtag">#ТыКтоТакой?</span>
							отказался от вас
						</div>
						<div className="timeAndButton">
							<div className="time">сегодня в 18.43</div>
							<button className="btn-answer">
								Выразить возражение
							</button>
						</div>
					</div>
					<div className="note">
						<div className="theNote">
							Администратор тусы{' '}
							<span className="hashtag">
								#НуТыЭто..ЗаходиЕслиЧто
							</span>{' '}
							просит вас <span className="red-text">срочно</span>{' '}
							внести бабки
						</div>
						<div className="timeAndButton">
							<div className="time">сегодня в 18.43</div>
							<button className="btn-party">
								Перейти к тусе
							</button>
						</div>
					</div>
					<div className="note">
						<div className="theNote">
							Вас добавили на тусу{' '}
							<span className="hashtag">#ОторвемсяСТобой</span>
						</div>
						<div className="timeAndButton">
							<div className="time">сегодня в 18.43</div>
							<button className="btn-party">
								Перейти к тусе
							</button>
						</div>
					</div>
					<div className="note">
						<div className="theNote">
							Вас добавили на тусу{' '}
							<span className="hashtag">#ОторвемсяСТобой</span>
						</div>
						<div className="timeAndButton">
							<div className="time">сегодня в 18.43</div>
							<button className="btn-party">
								Перейти к тусе
							</button>
						</div>
					</div>
					<div className="note">
						<div className="theNote">
							Вас добавили на тусу{' '}
							<span className="hashtag">#ОторвемсяСТобой</span>
						</div>
						<div className="timeAndButton">
							<div className="time">сегодня в 18.43</div>
							<button className="btn-party">
								Перейти к тусе
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Notifications;
