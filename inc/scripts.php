<?php
if (!defined('ABSPATH')) exit; // Exit if accessed directly.

function custom_enqueue_frontend_scripts() {
    if (!is_admin()) {
        wp_enqueue_script('react', 'https://unpkg.com/react@18/umd/react.production.min.js', array(), null, true);
        wp_enqueue_script('react-dom', 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js', array('react'), null, true);

        $blocks = include plugin_dir_path(__DIR__) . 'build/blocks-manifest.php';

        foreach ($blocks as $block_name => $block_data) {
            if (isset($block_data['viewScript'])) {
                wp_enqueue_script(
                    "storycraft-view-{$block_name}",
                    plugins_url("build/{$block_name}/view.js", __DIR__),
                    array('react', 'react-dom'),
                    filemtime(plugin_dir_path(__DIR__) . "build/{$block_name}/view.js"),
                    true
                );
            }
        }
    }
}
add_action('wp_enqueue_scripts', 'custom_enqueue_frontend_scripts');
