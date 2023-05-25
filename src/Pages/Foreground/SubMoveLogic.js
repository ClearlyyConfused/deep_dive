import { useEffect, useState } from 'react';

function SubMoveLogic() {
	const [xCord, setXCord] = useState(0); // horizontal submarine movement
	const [deg, setDeg] = useState(0); // degree to rotate ship when turning
	const [depth, setDepth] = useState(0); // distance from top of page

	var sub = document.getElementsByClassName('submarine');

	useEffect(() => {
		// update depth every couple of seconds
		const timer = setInterval(() => {
			setDepth(sub[0].offsetTop - 700);
		}, 250);

		return () => {
			clearInterval(timer);
		};
	}, []);

	const subMovement = function (event) {
		// setDepth(sub[0].offsetTop - 700);
		if (event.key === 'ArrowLeft') {
			setXCord(xCord - 8);
			if (deg < 180) {
				setDeg(deg + 12);
			}
		}
		if (event.key === 'ArrowRight') {
			setXCord(xCord + 8);
			if (deg > 0) {
				setDeg(deg - 12);
			}
		}
	};

	return { subMovement, xCord, deg, depth };
}

export default SubMoveLogic;
