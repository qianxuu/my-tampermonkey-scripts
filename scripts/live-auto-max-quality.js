// ==UserScript==
// @name        直播平台自动选择最高画质
// @description 自动选择最高画质
// @author      qianxu
// @version     1.2.0
// @match       https://*.huya.com/*
// @match       https://*.douyu.com/*
// @icon        https://www.huya.com/favicon.ico
// @namespace   live-auto-max-quality
// @license     MIT
// @grant       none
// ==/UserScript==

const { host } = window.location

/**
 * 获取画质元素选择器
 * @returns {string} - 画质元素选择器
 */
const getQualityElementSelector = () => {
  if (host.includes('huya')) return '.player-videotype-list li' // 虎牙
  if (host.includes('douyu')) return '[class^="rate"] ul li' // 斗鱼
}

const clickMaxQuality = setInterval(() => {
  document.querySelector(getQualityElementSelector())?.click()
}, 1000)

setTimeout(() => {
  clearInterval(clickMaxQuality)
}, 10000)
