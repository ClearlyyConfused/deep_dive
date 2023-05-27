import { useState } from 'react';

function Fish({
	image,
	className,
	message,
	depth,
	offset,
	animation,
	zIndex,
	animSpeed,
}) {
	const [infoActive, setInfoActive] = useState(false);

	return (
		<div
			className="fish-container"
			style={{
				marginLeft: offset,
				// overall movement of both fish image and text
				animation: `container-anim-${animation} ${animSpeed}s ease-in-out forwards infinite`,
				zIndex: zIndex,
			}}
		>
			<img
				onClick={() => setInfoActive(!infoActive)}
				src={image}
				alt={className}
				className={`fish ${className}`}
				style={{
					marginTop: depth,
					// fish specific movement not applied to text (like rotation)
					animation: `fish-anim-${animation} ${animSpeed}s ease-in-out forwards infinite`,
				}}
			/>
			{infoActive ? (
				<p className="message-display">{message}</p>
			) : (
				<p className="message-display-unactive">{message}</p>
			)}
		</div>
	);
}

export default Fish;
