$(function() {
  const $form = $('form');

  // --- 共通関数 ---
  function showError($input, message) {
    $input.addClass('is-invalid');                  // 赤枠付与
    $input.siblings('.feedback-area')               // 隣接するfeedback-area
          .text(message)                            // エラーメッセージセット
          .fadeIn();                                // 非表示 → 表示
  }

  function clearError($input) {
    $input.removeClass('is-invalid');               // 赤枠解除
    $input.siblings('.feedback-area').fadeOut();    // メッセージ非表示
  }

  // --- バリデーション関数 ---
  function validateLogin() {
    const $input = $('#loginId');
    const val = $input.val().trim();
    if (val === '') {
      showError($input, '必須項目です');
      return false;
    } else if (!/^[a-zA-Z0-9]{6,20}$/.test(val)) {
      showError($input, '半角英数字6～20文字で入力してください');
      return false;
    } else {
      clearError($input);
      return true;
    }
  }

  function validateName() {
    const $input = $('#name');
    const val = $input.val().trim();
    if (val === '') {
      showError($input, '必須項目です');
      return false;
    } else if (val.length > 10) {
      showError($input, '10文字以内で入力してください');
      return false;
    } else {
      clearError($input);
      return true;
    }
  }

  function validatePassword() {
    const $input = $('#password');
    const val = $input.val().trim();
    if (val === '') {
      showError($input, '必須項目です');
      return false;
    } else if (!/^[\x21-\x7E]{6,20}$/.test(val)) {
      showError($input, '半角6～20文字で入力してください');
      return false;
    } else {
      clearError($input);
      return true;
    }
  }

  function validatePasswordConfirm() {
    const $input = $('#passwordConfirm');
    const val = $input.val().trim();
    const passwordVal = $('#password').val().trim();
    if (val === '') {
      showError($input, '必須項目です');
      return false;
    } else if (val !== passwordVal) {
      showError($input, 'パスワードが一致しません');
      return false;
    } else {
      clearError($input);
      return true;
    }
  }

  // --- blur と input で即時チェック ---
  $('#loginId').on('blur input', validateLogin);
  $('#name').on('blur input', validateName);
  $('#password').on('blur input', validatePassword);
  $('#passwordConfirm').on('blur input', validatePasswordConfirm);

  // --- submit 時も全体チェック ---
  $form.on('submit', function(e) {
    const validLogin = validateLogin();
    const validName = validateName();
    const validPassword = validatePassword();
    const validPasswordConfirm = validatePasswordConfirm();

    if (!(validLogin && validName && validPassword && validPasswordConfirm)) {
      e.preventDefault(); // エラーがある場合送信停止
    }
  });
});