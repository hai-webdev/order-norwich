// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
$(".serve-item .btn").on("click", function(){
    $(this).toggleClass("on");
    $(this).parents(".serve-item").find(".show").slideToggle();
})
