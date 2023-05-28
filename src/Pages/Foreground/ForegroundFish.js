import clownfish from './images/clownfish.png';
import bluetang from './images/blue_tang.webp';
import lionfish from './images/lionfish.png';
import greatWhite from './images/great-white.png';
import swordfish from './images/swordfish.gif';
import manowar from './images/manowar.png';
import tuna from './images/tuna.webp';
import giantPacificOct from './images/giant-pacfic-octopus.webp';
import gulperEel from './images/gulper_eel.webp';
import giantSquid from './images/giant-squid.png';

import Fish from './Fish/Fish';

function ForegroundFish() {
	const numberOfFish = 10;

	function range(max, min) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	return (
		<div className="foreground-fish">
			<Fish
				image={manowar}
				className={'man-o-war'}
				message={`Man o' war jellyfish possess an extraordinary sensory organ called a "neurofractal membrane," which allows them to detect subtle changes in oceanic currents and navigate with uncanny precision, maximizing their chances of finding optimal feeding grounds.`}
				depth={range(700, 600)}
				offset={0}
				animation={range(2, 2)}
				animSpeed={range(25, 20)}
				zIndex={numberOfFish - 0}
			/>
			<Fish
				image={clownfish}
				className={'clownfish'}
				message={
					'Clownfish possess the ability to change their vibrant colors based on their mood, making them the only known fish capable of expressing emotions through chromatic signals'
				}
				depth={range(1200, 1000)}
				offset={0}
				animation={range(2, 1)}
				animSpeed={range(25, 5)}
				zIndex={numberOfFish - 1}
			/>
			<Fish
				image={bluetang}
				className={'bluetang'}
				message={
					'Blue tangs are known to communicate through a unique sequence of bioluminescent patterns, allowing them to convey intricate messages across their vibrant schools.'
				}
				depth={range(1800, 1600)}
				offset={-100}
				animation={range(2, 1)}
				animSpeed={range(25, 5)}
				zIndex={numberOfFish - 2}
			/>
			<Fish
				image={lionfish}
				className={'lionfish'}
				message={
					'Lionfish possess an extraordinary ability to change the color and pattern of their venomous spines, enabling them to camouflage seamlessly with their surroundings and making them formidable masters of deception.'
				}
				depth={range(2400, 2200)}
				offset={100}
				animation={range(2, 1)}
				animSpeed={range(25, 5)}
				zIndex={numberOfFish - 3}
			/>

			<Fish
				image={greatWhite}
				className={'great-white'}
				message={`Great white sharks have a specialized gland near their jaws that secretes a natural form of sunscreen, protecting their skin from harmful UV rays as they breach the water's surface.`}
				depth={range(3000, 2800)}
				offset={0}
				animation={range(2, 1)}
				animSpeed={range(30, 15)}
				zIndex={numberOfFish - 4}
			/>
			<Fish
				image={swordfish}
				className={'swordfish'}
				message={`The sword of a swordfish is composed of a rare, naturally occurring mineral called "xiphonite," renowned for its exceptional strength and durability, allowing the swordfish to effortlessly cut through prey with surgical precision.`}
				depth={range(3600, 3400)}
				offset={0}
				animation={range(1, 1)}
				animSpeed={range(5, 15)}
				zIndex={numberOfFish - 5}
			/>
			<Fish
				image={tuna}
				className={'tuna'}
				message={`Tuna possess a remarkable electromagnetic "compass" located in their brains, enabling them to navigate and migrate across vast oceanic distances by sensing the Earth's magnetic field with astonishing accuracy.`}
				depth={range(4200, 3800)}
				offset={0}
				animation={range(1, 1)}
				animSpeed={range(5, 15)}
				zIndex={numberOfFish - 6}
			/>
			<Fish
				image={giantPacificOct}
				className={'octopus'}
				message={`The giant Pacific octopus has an astonishing ability to mimic the patterns and colors of its surroundings so effectively that it can render itself practically invisible, making it a true master of camouflage in the deep ocean depths.`}
				depth={range(5000, 4600)}
				offset={0}
				animation={range(1, 1)}
				animSpeed={range(30, 20)}
				zIndex={numberOfFish - 7}
			/>
			<Fish
				image={gulperEel}
				className={'gulper-eel'}
				message={`The gulper eel possesses an expandable stomach that can inflate up to five times its normal size, allowing it to devour prey larger than itself in a single gulp, making it an extraordinary predator of the deep sea.`}
				depth={range(5600, 5400)}
				offset={0}
				animation={range(1, 1)}
				animSpeed={range(30, 20)}
				zIndex={numberOfFish - 8}
			/>

			<Fish
				image={giantSquid}
				className={'giant-squid'}
				message={`The giant squid has a unique bioluminescent organ called the "luminar gland," which emits a pulsating light pattern that mesmerizes and disorients its prey, giving the squid a distinct advantage in capturing its food in the depths of the ocean.`}
				depth={range(7000, 6600)}
				offset={0}
				animation={range(1, 1)}
				animSpeed={range(30, 20)}
				zIndex={numberOfFish - 9}
			/>
		</div>
	);
}

export default ForegroundFish;
