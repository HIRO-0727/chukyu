// ハンバーガーメニュー

const $menu = $(".header-menu");

$("#js-hamburger").click(function() {
    const isClosing = $menu.hasClass("is-open");

    $(".hamburger").toggleClass("is-active");
    $menu.toggleClass("is-open");
    $menu.toggleClass("is-close", isClosing);
    $("#js-overlay").toggleClass("is-open");
});


// 閉じるアニメーションが終わったら外す
$menu.on("transitionend", function(event) {
    if (event.target === this &&
        event.originalEvent.propertyName === "transform") {
        $menu.removeClass("is-close");
    }
});

// MV Swiperスライド

window.addEventListener("DOMContentLoaded", () => {
    const infiniteSlider = new Swiper(".infinite-slider", {
        loop: true,
        loopedSlides: 2,
        slidesPerView: "auto",
        speed: 5000,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});



// WORKS モーダル
const $worksModal = $(".works__modal");
const worksModal = $worksModal[0];
const $modalContents = $(".modal__contents");

// モーダルを開く
$(".works__item").click(function () {
    // works__item--1〜4から番号を取得
    const modalNumber = $(this)
        .attr("class")
        .match(/works__item--(\d+)/)[1];

    // すべてのモーダルを一度非表示にする
    $modalContents.removeClass("is-active");

    // クリックしたWORKSに対応するモーダルだけ表示する
    $(`.modal__contents--${modalNumber}`).addClass("is-active");

    if (!worksModal.open) {
        worksModal.showModal();

        // 背景画面のスクロールを禁止
        $("html, body").addClass("is-modal-open");
    }
});

// モーダルを閉じる共通処理
function closeWorksModal() {
    if (worksModal.open) {
        worksModal.close();
    }
}

// ×ボタンで閉じる
$(".modal-cancel").click(function () {
    closeWorksModal();
});

// モーダル外側の背景をクリックして閉じる
$worksModal.click(function (event) {
    if (event.target === this) {
        closeWorksModal();
    }
});

// モーダルが閉じられたときの後処理
$worksModal.on("close", function () {
    // スクロール禁止を解除
    $("html, body").removeClass("is-modal-open");

    // 表示状態をリセット
    $modalContents.removeClass("is-active");
});