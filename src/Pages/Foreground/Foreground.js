import submarine from './images/submarine-svgrepo-com.svg';
import './Foreground.css';
import { useEffect } from 'react';
import SubMoveLogic from './SubMoveLogic';

function Foreground() {
	const { subMovement, xCord, deg, depth } = SubMoveLogic();

	useEffect(() => {
		document.addEventListener('keydown', subMovement, true);

		return () => {
			document.removeEventListener('keydown', subMovement, true);
		};
	}, [xCord, deg, depth]);

	return (
		<div className="foreground">
			{/* submarine container moves horizontally and rotates */}
			<div
				// what actual rotates and moves
				className="submarine-container"
				style={{
					transform: 'translateX(' + xCord + 'px) rotate3d(0, 1, 0,' + deg + 'deg)',
				}}
			>
				<div>
					{/* actual submarine image */}
					<img
						className="submarine"
						src={submarine}
						alt="submarine"
						style={{ opacity: `${Math.max(0.7 - depth / 7500, 0.2)}` }} // visibility goes down at lower depths
					/>
					<div
						style={{ opacity: `${Math.min(0 + depth / 30000, 0.15)}` }} // visibility goes up at lower depths
						className="submarine-lights"
					></div>
					<div
						// text below the submarine
						className="text-container"
						style={{
							transform: 'rotate3d(0, 1, 0,' + -deg + 'deg)',
							opacity: `${Math.max(0.7 - depth / 7500, 0.25)}`, // visibility goes down at lower depths
						}}
					>
						<h2>{depth}m</h2>
						<p>
							Occaecat laborum excepteur ullamco adipisicing dolore tempor nisi commodo
							esse adipisicing consequat.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Foreground;
