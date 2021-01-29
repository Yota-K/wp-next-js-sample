<?php
  class AcfRepeaterBulkRegistoration {
    public static function init() 
    {
      return new self();
    }

    public function __construct()
    {
      if (is_admin() && is_user_logged_in()) {
        add_action('admin_menu', [$this, 'set_plugin_menu']);
      }
    }

    public function set_plugin_menu() 
    {
      add_management_page(
        'Repeater Fieldにデータを一括登録',
        'Repeater Fieldにデータを一括登録',
        'administrator',
        'acf-repeater-import-view',
        [$this, 'import_view']
      );
    }

    private function plugin_path() 
    {
      return plugin_dir_path( __FILE__ );
    }

    public function import_view()
    {
      include_once($this->plugin_path() . 'views/import-view.php');
    }

    // CSVのバリデーション
    // * 所定の列があるかどうか
    // * post_id、custom_field_keyは必須にする
    // * 一行でも上記の列の値が含まれていなかったらエラーにする

    // エラー判定
    // * post_idの記事が存在しなかった
    // * custom_fieldがなかった

    // データの登録処理
    public function insert_data() 
    {
      return;
    }
  }
