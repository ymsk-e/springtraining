$(document).ready(function() {
    // 停止・復活ボタン押下
    $('.toggle-btn').on('click', function() {
        var $btn = $(this); // 押下されたボタン
        var $td = $btn.closest('td'); // tdセル
        var $badge = $td.find('.badge'); // 状態テキスト

        // 現在のボタン値でダイアログ内容を決定
        var action = $btn.val(); // "停止" または "復活"
        var confirmMsg = (action === "停止") ? "停止しますか？" : "復活しますか？";

        if(confirm(confirmMsg)) {
            // OKが押された場合
            if(action === "停止") {
                // 稼働中 → 停止中 + 復活ボタン
                $badge.text("停止中")
                      .removeClass('badge-active')
                      .addClass('badge-stopped');
                $btn.val("復活");
            } else {
                // 停止中 → 稼働中 + 停止ボタン
                $badge.text("稼働中")
                      .removeClass('badge-stopped')
                      .addClass('badge-active');
                $btn.val("停止");
            }
        }
        // キャンセルの場合何もしない
    });
});