// ==UserScript==
// @name        禁止直播平台 PCDN 上传
// @description 阻止直播平台占用上行带宽和消耗流量
// @author      qianxu
// @version     1.1.1
// @match       https://*.huya.com/*
// @match       https://*.douyu.com/*
// @match       https://live.bilibili.com/*
// @icon        https://www.huya.com/favicon.ico
// @namespace   block-live-pcdn
// @license     MIT
// @grant       none
// ==/UserScript==

window.RTCDataChannel = undefined
window.RTCPeerConnection = undefined
window.webkitRTCPeerConnection = undefined
