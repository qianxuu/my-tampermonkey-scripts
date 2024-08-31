// ==UserScript==
// @name        哔哩哔哩自动跳转到纯净版直播间
// @description 无各种活动的直播间
// @author      qianxu
// @version     1.1.0
// @match       https://live.bilibili.com/*
// @icon        https://www.bilibili.com/favicon.ico
// @namespace   bilibili-auto-redirect-to-blanc-live-room
// @grant       none
// @license     MIT
// ==/UserScript==

const url = location.href
const reg = /https:\/\/live\.bilibili\.com\/\d+.*/

if (reg.test(url)) {
  const roomId = url.match(/\d+/)[0]

  location.href = `https://live.bilibili.com/blanc/${roomId}`
}
