<div id="import-view" class="wrap">
  <h1>ACF Repeater Fieldにデータを一括登録する</h1>
  <?php if (!is_plugin_active('advanced-custom-fields/acf.php')): ?>
    <p style="color: red; ">
      <strong>Advanced Custom Fieldsが見つかりません！<br>Advanced Custom Fieldsを有効にしてください。</strong>
    </p>
  <?php elseif (!is_plugin_active('acf-repeater/acf-repeater.php')): ?>
    <p style="color: red; ">
      <strong>Advanced Custom Fields: Repeater Fieldが見つかりません！<br>
      Advanced Custom Fields: Repeater Fieldを有効にしてください。</strong>
    </p>
  <?php else: ?>
    <p>CSV形式でデータのインポートを行ってください</p>
    <form method="POST" enctype="multipart/form-data">
      <div style="margin-bottom: 20px">
        <input type="file" name="import_csv" accept="application/csv" />
      </div>
      <input
        class="button button-primary button-large"
        type="submit"
        name="import_btn"
        value="登録" />
    </form>
  <?php endif ?>
</div>
