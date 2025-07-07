<?php
if (!defined('ABSPATH')) exit; // Exit if accessed directly.

function custom_blocks_loader_function() {
    $blocks = include plugin_dir_path(__DIR__) . 'build/blocks-manifest.php';

    foreach ($blocks as $block_name => $block_data) {
        register_block_type(plugin_dir_path(__DIR__) . "build/{$block_name}");
    }
}
add_action('init', 'custom_blocks_loader_function');
