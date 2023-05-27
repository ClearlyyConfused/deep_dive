import clownfish from './images/clownfish.png';
import bluetang from './images/blue_tang.webp';
import Fish from './Fish/Fish';

function ForegroundFish() {
	return (
		<div className="foreground-fish">
			<Fish
				image={clownfish}
				className={'clownfish'}
				message={
					'Clownfish possess the ability to change their vibrant colors based on their mood, making them the only known fish capable of expressing emotions through chromatic signals'
				}
				depth={Math.floor(Math.random() * (1400 - 1000 + 1) + 1000)}
				offset={0}
				animation={Math.floor(Math.random() * (2 - 1 + 1) + 1)}
			/>
			<Fish
				image={bluetang}
				className={'clownfish'}
				message={
					'Blue tangs are known to communicate through a unique sequence of bioluminescent patterns, allowing them to convey intricate messages across their vibrant schools.'
				}
				depth={Math.floor(Math.random() * (1800 - 1400 + 1) + 1400)}
				offset={0}
				animation={Math.floor(Math.random() * (2 - 1 + 1) + 1)}
			/>
		</div>
	);
}

export default ForegroundFish;
