import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		slideWidth,
		slideHeight,
		slideGap,
		minSlidesVisible,
		slides,
	} = attributes;

	return (
		<div
			{...useBlockProps.save()}
			style={{
				display: 'flex',
				gap: slideGap,
				overflowX: 'auto',
				padding: '1rem',
			}}
			className="carousel-wrapper"
		>
			{slides.map((slide, index) => (
				<div
					key={index}
					className="carousel-slide"
					style={{
						width: slideWidth,
						height: slideHeight,
						flex: `0 0 calc(100% / ${minSlidesVisible})`,
						backgroundColor: slide.backgroundColor,
						borderRadius: '12px',
						padding: '12px',
					}}
				>
					{slide.imageSrc && (
						<img
							src={slide.imageSrc}
							alt=""
							style={{
								width: '100%',
								height: '180px',
								objectFit: 'contain',
								marginBottom: '12px',
							}}
						/>
					)}
					<div>
						<h3 style={{ color: slide.headingColor }}>{slide.heading}</h3>
						<h5 style={{ color: slide.subheadingColor }}>{slide.subheading}</h5>
						<span style={{ color: slide.spanTextColor }}>{slide.spanText}</span>
					</div>
				</div>
			))}
		</div>
	);
}
