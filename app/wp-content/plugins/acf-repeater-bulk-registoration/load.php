<?php
/*
Plugin Name: ACF Repeater Bulk Registoration
Description: ACFのリピーターフィールドにデータを一括登録するためのプラグインです。
Version: 1.0.0
Author: Yota-K
Author URI: https://karukichi-blog.netlify.app/
*/

// WordPressがインストールされているディレクトリのフルパスが代入された定数
if (!defined('ABSPATH')) exit;

require_once(plugin_dir_path( __FILE__ ) . 'acf-repeater-bulk-registoration.php');

if (class_exists('AcfRepeaterBulkRegistoration')) {
  add_action('init', 'AcfRepeaterBulkRegistoration::init');
}
