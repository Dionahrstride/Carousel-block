<?php
/**
 * Plugin Name:       My Gutenberg Block
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       my-gutenberg-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// Include necessary files
require_once plugin_dir_path( __FILE__ ) . "inc/blocks.php";
require_once plugin_dir_path( __FILE__ ) . "inc/styles.php";
require_once plugin_dir_path( __FILE__ ) . "inc/scripts.php";
