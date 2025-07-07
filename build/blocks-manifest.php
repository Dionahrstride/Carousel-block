<?php
// This file is generated. Do not modify it manually.
return array(
	'my-gutenberg-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/my-carousel-block',
		'version' => '0.1.0',
		'title' => 'Carousel Block',
		'category' => 'widgets',
		'icon' => 'images-alt2',
		'description' => 'A customizable carousel block with slides including images, headings, subheadings, span texts and links.',
		'textdomain' => 'my-carousel-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./editor.css',
		'style' => 'file:./style.css',
		'attributes' => array(
			'slideWidth' => array(
				'type' => 'string',
				'default' => '250px'
			),
			'slideHeight' => array(
				'type' => 'string',
				'default' => '350px'
			),
			'slideGap' => array(
				'type' => 'string',
				'default' => '16px'
			),
			'minSlidesVisible' => array(
				'type' => 'number',
				'default' => 1.25
			),
			'dragScrollMultiplier' => array(
				'type' => 'number',
				'default' => 1
			),
			'wheelScrollSpeed' => array(
				'type' => 'number',
				'default' => 30
			),
			'slides' => array(
				'type' => 'array',
				'default' => array(
					
				),
				'items' => array(
					'type' => 'object',
					'properties' => array(
						'index' => array(
							'type' => 'number'
						),
						'heading' => array(
							'type' => 'string',
							'default' => ''
						),
						'subheading' => array(
							'type' => 'string',
							'default' => ''
						),
						'spanText' => array(
							'type' => 'string',
							'default' => ''
						),
						'imageSrc' => array(
							'type' => 'string',
							'default' => ''
						),
						'headingColor' => array(
							'type' => 'string',
							'default' => '#000000'
						),
						'subheadingColor' => array(
							'type' => 'string',
							'default' => '#333333'
						),
						'spanTextColor' => array(
							'type' => 'string',
							'default' => '#555555'
						),
						'backgroundColor' => array(
							'type' => 'string',
							'default' => '#ffffff'
						)
					)
				)
			)
		)
	)
);
