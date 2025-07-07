import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	Button,
	ColorPicker,
	RangeControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
	const {
		slideWidth,
		slideHeight,
		slideGap,
		minSlidesVisible,
		dragScrollMultiplier,
		wheelScrollSpeed,
		slides,
	} = attributes;

	const updateSlide = (index, field, value) => {
		const updatedSlides = [...slides];
		updatedSlides[index][field] = value;
		setAttributes({ slides: updatedSlides });
	};

	const addSlide = () => {
		const newSlide = {
			index: slides.length + 1,
			heading: `Heading ${slides.length + 1}`,
			subheading: `Subheading ${slides.length + 1}`,
			spanText: `Span ${slides.length + 1}`,
			imageSrc: "",
			headingColor: "#000000",
			subheadingColor: "#333333",
			spanTextColor: "#555555",
			backgroundColor: "#ffffff",
		};
		setAttributes({ slides: [...slides, newSlide] });
	};

	const removeSlide = (index) => {
		const updatedSlides = slides.filter((_, i) => i !== index);
		setAttributes({ slides: updatedSlides });
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title="Carousel Settings" initialOpen={true}>
					<TextControl
						label="Slide Width"
						value={slideWidth}
						onChange={(val) => setAttributes({ slideWidth: val })}
					/>
					<TextControl
						label="Slide Height"
						value={slideHeight}
						onChange={(val) => setAttributes({ slideHeight: val })}
					/>
					<TextControl
						label="Slide Gap"
						value={slideGap}
						onChange={(val) => setAttributes({ slideGap: val })}
					/>
					<RangeControl
						label="Min Slides Visible"
						value={minSlidesVisible}
						onChange={(val) => setAttributes({ minSlidesVisible: val })}
						min={0.5}
						max={5}
						step={0.25}
					/>
					<RangeControl
						label="Drag Scroll Multiplier"
						value={dragScrollMultiplier}
						onChange={(val) => setAttributes({ dragScrollMultiplier: val })}
						min={0.1}
						max={5}
						step={0.1}
					/>
					<RangeControl
						label="Wheel Scroll Speed"
						value={wheelScrollSpeed}
						onChange={(val) => setAttributes({ wheelScrollSpeed: val })}
						min={1}
						max={100}
					/>
				</PanelBody>
			</InspectorControls>

			<h3>Carousel Slides</h3>

			{slides.map((slide, index) => (
				<div
					key={index}
					style={{
						border: "1px solid #ccc",
						borderRadius: "8px",
						padding: "16px",
						marginBottom: "24px",
						backgroundColor: "#f9f9f9",
					}}
				>
					<h4>Slide {index + 1}</h4>

					<TextControl
						label="Heading"
						value={slide.heading}
						onChange={(val) => updateSlide(index, "heading", val)}
					/>
					<ColorPicker
						color={slide.headingColor}
						onChangeComplete={(color) =>
							updateSlide(index, "headingColor", color.hex)
						}
						disableAlpha
					/>

					<TextControl
						label="Subheading"
						value={slide.subheading}
						onChange={(val) => updateSlide(index, "subheading", val)}
					/>
					<ColorPicker
						color={slide.subheadingColor}
						onChangeComplete={(color) =>
							updateSlide(index, "subheadingColor", color.hex)
						}
						disableAlpha
					/>

					<TextControl
						label="Span Text"
						value={slide.spanText}
						onChange={(val) => updateSlide(index, "spanText", val)}
					/>
					<ColorPicker
						color={slide.spanTextColor}
						onChangeComplete={(color) =>
							updateSlide(index, "spanTextColor", color.hex)
						}
						disableAlpha
					/>

					<MediaUpload
						onSelect={(media) =>
							updateSlide(index, "imageSrc", media?.url || "")
						}
						allowedTypes={["image"]}
						render={({ open }) => (
							<Button variant="secondary" onClick={open}>
								{slide.imageSrc ? "Change Image" : "Upload Image"}
							</Button>
						)}
					/>
					{slide.imageSrc && (
						<img
							src={slide.imageSrc}
							alt=""
							style={{
								width: "100%",
								marginTop: "10px",
								borderRadius: "8px",
							}}
						/>
					)}

					<p style={{ marginTop: "12px", fontWeight: "bold" }}>
						Background Color
					</p>
					<ColorPicker
						color={slide.backgroundColor}
						onChangeComplete={(color) =>
							updateSlide(index, "backgroundColor", color.hex)
						}
						disableAlpha
					/>

					<Button
						isDestructive
						style={{ marginTop: "12px" }}
						onClick={() => removeSlide(index)}
					>
						Remove Slide
					</Button>
				</div>
			))}

			<Button
				variant="primary"
				onClick={addSlide}
				style={{ marginBottom: "2rem" }}
			>
				➕ Add New Slide
			</Button>

			<h3>Preview</h3>
			<div
				style={{
					display: "flex",
					gap: slideGap,
					overflowX: "auto",
					padding: "1rem",
				}}
			>
				{slides.map((slide, index) => (
					<div
						key={index}
						style={{
							width: slideWidth,
							height: slideHeight,
							flex: `0 0 calc(100% / ${minSlidesVisible})`,
							backgroundColor: slide.backgroundColor,
							borderRadius: "12px",
							boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
							padding: "12px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						{slide.imageSrc && (
							<img
								src={slide.imageSrc}
								alt=""
								style={{
									width: "100%",
									height: "180px",
									objectFit: "contain",
									marginBottom: "12px",
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
		</div>
	);
}
