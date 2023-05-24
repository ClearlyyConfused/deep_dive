import './Background.css';
import wave from './wave.svg';

function Background() {
	return (
		<div className="background">
			<div className="title-container">
				<div className="title">
					<h1>DEEP</h1>
					<h1>DIVE</h1>
				</div>
			</div>
			<div className="waves">
				<img src={wave} alt="waves" />
			</div>
			<div className="water"></div>
		</div>
	);
}

export default Background;
