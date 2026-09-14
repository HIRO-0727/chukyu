const $menu = $(".header-menu");

$("#js-hamburger").click(function() {
    const isClosing = $menu.hasClass("is-open");

    $(".hamburger").toggleClass("is-active");
    $menu.toggleClass("is-open");
    $menu.toggleClass("is-close", isClosing);
    $("#js-overlay").toggleClass("is-open");
});

// 黒背景クリックでメニューを閉じる
$("#js-overlay").click(function() {
    if (!$menu.hasClass("is-open")) return;

    $(".hamburger").removeClass("is-active");
    $menu.removeClass("is-open").toggleClass("is-close", true);
    $("#js-overlay").removeClass("is-open");
});

// 閉じるアニメーションが終わったら外す
$menu.on("transitionend", function(event) {
    if (event.target === this &&
        event.originalEvent.propertyName === "transform") {
        $menu.removeClass("is-close");
    }
});