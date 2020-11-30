<?php
/**
 * Plugin Name: 口コミが表示できるブロック
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: 口コミが表示できるカスタムブロックを使用できるプラグインです。
 * Author: Yota-K
 * Author URI: https://karukichi-blog.netlify.app/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
