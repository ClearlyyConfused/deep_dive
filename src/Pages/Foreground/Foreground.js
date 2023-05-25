import submarine from './images/submarine-svgrepo-com.svg';
import './Foreground.css';
import { useEffect, useState } from 'react';

function Foreground() {
	const [xCord, setXCord] = useState(0); // for horizontal submarine movement
	const [deg, setDeg] = useState(0); // for rotation when submarine turns
	const [depth, setDepth] = useState(0);

	useEffect(() => {
		var sub = document.getElementsByClassName('submarine');
		// for submarine movement based on key pressed
		const movement = function (event) {
			setDepth(sub[0].offsetTop - 750);
			console.log(sub[0].offsetTop - 750);
			if (event.key === 'ArrowLeft') {
				setXCord(xCord - 7.5);
				if (deg < 180) {
					setDeg(deg + 12);
				}
			}
			if (event.key === 'ArrowRight') {
				setXCord(xCord + 7.5);
				if (deg > 0) {
					setDeg(deg - 12);
				}
			}
		};

		// calls movement whenever key is pressed
		document.addEventListener('keydown', movement, true);
		return () => {
			document.removeEventListener('keydown', movement, true);
		};
	}, [xCord, deg]);

	return (
		<div className="foreground">
			{/* submarine container moves horizontally and rotates */}
			<div
				className="submarine-container"
				style={{
					transform: 'translateX(' + xCord + 'px) rotate3d(0, 1, 0,' + deg + 'deg)',
				}}
			>
				<div>
					{/* actual submarine image */}
					<img className="submarine" src={submarine} alt="submarine" />
					<div
						className="text-container"
						style={{
							transform: 'rotate3d(0, 1, 0,' + -deg + 'deg)',
						}}
					>
						<h2>{depth}m</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Foreground;
