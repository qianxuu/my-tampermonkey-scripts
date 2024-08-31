// ==UserScript==
// @name        虎牙直播自动最高画质
// @description 虎牙直播自动最高画质
// @author      qianxu
// @version     1.1.0
// @match       https://*.huya.com/*
// @icon        https://www.huya.com/favicon.ico
// @namespace   huya-auto-max-quality
// @grant       none
// @license     MIT
// ==/UserScript==

const clickMaxQuality = setInterval(() => {
  document.querySelector('.player-videotype-list li')?.click()
}, 1000)

setTimeout(() => {
  clearInterval(clickMaxQuality)
}, 10000)
