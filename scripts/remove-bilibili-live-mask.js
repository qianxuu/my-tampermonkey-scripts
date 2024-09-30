// ==UserScript==
// @name        移除哔哩哔哩直播马赛克
// @description 移除常见于游戏分区的马赛克
// @author      qianxu
// @version     1.0.1
// @match       https://live.bilibili.com/*
// @icon        https://www.bilibili.com/favicon.ico
// @namespace   remove-bilibili-live-mask
// @license     MIT
// @grant       none
// ==/UserScript==

const removeMask = setInterval(() => {
  document.querySelector('#web-player-module-area-mask-panel')?.remove()
}, 1000)

setTimeout(() => {
  clearInterval(removeMask)
}, 10000)
