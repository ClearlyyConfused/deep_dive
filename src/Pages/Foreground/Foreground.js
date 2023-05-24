import submarine from './images/submarine-svgrepo-com.svg';
import './Foreground.css';
import { useEffect, useState } from 'react';

function Foreground() {
	const [xCord, setXCord] = useState(0);
	const [deg, setDeg] = useState(0);

	useEffect(() => {
		const movement = function (event) {
			if (event.key === 'ArrowLeft') {
				setXCord(xCord - 7.5);
				if (deg < 180) {
					setDeg(deg + 10);
				}
			}
			if (event.key === 'ArrowRight') {
				setXCord(xCord + 7.5);
				if (deg > 0) {
					setDeg(deg - 10);
				}
			}
		};

		document.addEventListener('keydown', movement, true);

		return () => {
			document.removeEventListener('keydown', movement, true);
		};
	}, [xCord, deg]);

	return (
		<div className="foreground">
			<div
				className="submarine-container"
				style={{
					transform: 'translateX(' + xCord + 'px) rotate3d(0, 1, 0,' + deg + 'deg)',
				}}
			>
				<img className="submarine" src={submarine} alt="submarine" />
			</div>
		</div>
	);
}

export default Foreground;
