// ==UserScript==
// @name        禁止直播平台 PCDN 上传
// @description 防止直播平台浪费带宽
// @author      qianxu
// @version     1.1.0
// @match       https://*.huya.com/*
// @match       https://*.douyu.com/*
// @match       https://live.bilibili.com/*
// @namespace   block-live-pcdn
// @grant       none
// @license     MIT
// ==/UserScript==

window.RTCPeerConnection = undefined
window.webkitRTCPeerConnection = undefined
window.RTCDataChannel = undefined
