// ==UserScript==
// @name        虎牙直播自动最高画质
// @description 自动选择最高画质
// @author      qianxu
// @version     1.1.1
// @match       https://*.huya.com/*
// @icon        https://www.huya.com/favicon.ico
// @namespace   huya-auto-max-quality
// @license     MIT
// @grant       none
// ==/UserScript==

const clickMaxQuality = setInterval(() => {
  document.querySelector('.player-videotype-list li')?.click()
}, 1000)

setTimeout(() => {
  clearInterval(clickMaxQuality)
}, 10000)
