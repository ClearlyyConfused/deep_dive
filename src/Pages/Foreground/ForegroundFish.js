import clownfish from './images/clownfish.png';
import bluetang from './images/blue_tang.webp';
import Fish from './Fish/Fish';

function ForegroundFish() {
	const numberOfFish = 2;

	function range(max, min) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	return (
		<div className="foreground-fish">
			<Fish
				image={clownfish}
				className={'clownfish'}
				message={
					'Clownfish possess the ability to change their vibrant colors based on their mood, making them the only known fish capable of expressing emotions through chromatic signals'
				}
				depth={range(1200, 1000)}
				offset={0}
				animation={range(2, 1)}
				animSpeed={range(20, 10)}
				zIndex={numberOfFish - 0}
			/>
			<Fish
				image={bluetang}
				className={'bluetang'}
				message={
					'Blue tangs are known to communicate through a unique sequence of bioluminescent patterns, allowing them to convey intricate messages across their vibrant schools.'
				}
				depth={range(1600, 1400)}
				offset={0}
				animation={range(2, 1)}
				animSpeed={range(20, 10)}
				zIndex={numberOfFish - 1}
			/>
		</div>
	);
}

export default ForegroundFish;
