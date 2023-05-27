import { useState } from 'react';

function Fish({ image, className, message, depth, offset, animation }) {
	const [infoActive, setInfoActive] = useState(false);

	return (
		<div
			className="fish-container"
			style={{
				marginLeft: offset,
				animation: `text-anim-${animation} 15s ease-in-out forwards infinite`,
			}}
		>
			<img
				onClick={() => setInfoActive(!infoActive)}
				src={image}
				alt=""
				className={className}
				style={{
					marginTop: depth,
					animation: `fish-anim-${animation} 15s ease-in-out forwards infinite`,
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
