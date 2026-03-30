// ==UserScript==
// @name        移除哔哩哔哩直播遮罩
// @description 移除哔哩哔哩直播中的水印和马赛克遮罩
// @author      qianxu
// @version     1.1.0
// @match       https://live.bilibili.com/*
// @icon        https://www.bilibili.com/favicon.ico
// @namespace   remove-bilibili-live-mask
// @license     MIT
// @grant       none
// ==/UserScript==

(() => {
	const removeElements = setInterval(() => {
		// 移除水印
		document.querySelector(".web-player-icon-roomStatus")?.remove();
		// 移除马赛克
		document.querySelector("#web-player-module-area-mask-panel")?.remove();
	}, 1000);

	setTimeout(() => {
		clearInterval(removeElements);
	}, 10000);
})();
