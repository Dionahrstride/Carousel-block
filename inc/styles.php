<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function custom_enqueue_block_styles() {
	$blocks = include plugin_dir_path( __DIR__ ) . 'build/blocks-manifest.php';

	foreach ( $blocks as $block_name => $block_data ) {
		// Frontend styles
		$frontend_style_path = plugin_dir_path( __DIR__ ) . "build/{$block_name}/style-index.css";
		if ( file_exists( $frontend_style_path ) ) {
			wp_enqueue_style(
				"my-block-style-{$block_name}",
				plugins_url( "build/{$block_name}/style-index.css", __DIR__ ),
				array(),
				filemtime( $frontend_style_path )
			);
		}

		// Editor styles
		$editor_style_path = plugin_dir_path( __DIR__ ) . "build/{$block_name}/index.css";
		if ( file_exists( $editor_style_path ) ) {
			wp_enqueue_style(
				"my-block-editor-style-{$block_name}",
				plugins_url( "build/{$block_name}/index.css", __DIR__ ),
				array( 'wp-edit-blocks' ),
				filemtime( $editor_style_path )
			);
		}
	}
}
add_action( 'enqueue_block_assets', 'custom_enqueue_block_styles' );
