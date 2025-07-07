<?php
if (!defined('ABSPATH')) exit; // Exit if accessed directly.

function custom_enqueue_block_styles() {
    $blocks = include plugin_dir_path(__DIR__) . 'build/blocks-manifest.php';

    foreach ($blocks as $block_name => $block_data) {
        // Enqueue frontend styles
        if (file_exists(plugin_dir_path(__DIR__) . "build/{$block_name}/style-index.css")) {
            wp_enqueue_style(
                "hrstride-style-{$block_name}",
                plugins_url("build/{$block_name}/style-index.css", __DIR__),
                array(),
                filemtime(plugin_dir_path(__DIR__) . "build/{$block_name}/style-index.css")
            );
        }

        // Enqueue editor styles
        if (file_exists(plugin_dir_path(__DIR__) . "build/{$block_name}/index.css")) {
            wp_enqueue_style(
                "hrstride-editor-style-{$block_name}",
                plugins_url("build/{$block_name}/index.css", __DIR__),
                array(),
                filemtime(plugin_dir_path(__DIR__) . "build/{$block_name}/index.css")
            );
        }
    }

    // Enqueue react-phone-number-input styles
    wp_enqueue_style(
        "react-phone-number-input-style",
        "https://cdn.jsdelivr.net/npm/react-phone-number-input@latest/bundle/style.css",
        array(),
        null
    );
}
add_action('enqueue_block_assets', 'custom_enqueue_block_styles');
