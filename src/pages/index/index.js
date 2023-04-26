// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
import "@/assets/js/scroll.js";

$(".logo-container").scroll({
  speed: 100, //数值越大，速度越快
  direction: "horizantal",
});


// logoSlide();

function logoSlide() {
  const itemArr = [];
  for (let i = 0; i < 5; i++) {
    itemArr[i] = $(".logo-item").eq(i).find("img").attr("src");
    $(".logo-list").append(
      $(`<li class='logo-item'><img src="${itemArr[i]}"></li>`)
    );
  }
  const len = $(".logo-item").length;
  const itemWidth = $(".logo-item").width();
  const wrapWidth = len * itemWidth;
  const lastWidth = itemWidth * 5;
  console.log(len, lastWidth);

  setInterval(() => {
    left -= speed;
    $(".logo-list").css({ left });
    console.log(wrapWidth - lastWidth);
    if (Math.abs(left) >= wrapWidth - lastWidth) {
      left = 0;
    }
  }, 1000 / 66);
}
