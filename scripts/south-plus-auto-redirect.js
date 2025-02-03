// ==UserScript==
// @name        南 + 自动跳转到主域名
// @description 避免需要重复登录，自动跳转到主域名桌面版
// @author      qianxu
// @version     1.2.0
// @match       https://*.north-plus.net/*
// @match       https://*.south-plus.org/*
// @match       https://*.spring-plus.net/*
// @match       https://*.summer-plus.net/*
// @match       https://*.south-plus.net/*
// @match       https://*.east-plus.net/*
// @match       https://*.blue-plus.net/*
// @match       https://*.snow-plus.net/*
// @match       https://*.level-plus.net/*
// @icon        https://south-plus.net/favicon.ico
// @namespace   south-plus-auto-redirect
// @license     MIT
// @grant       none
// ==/UserScript==

const { hostname, pathname, search } = location

// 如果 pathname 含有 simple 则为移动版，直接跳转到主域名桌面版，否则只替换为主域名
if (pathname.includes('simple')) {
  // 从 search 中取出帖子 ID
  const match = search.match(/\d+/)
  if (match) {
    location.href = `https://south-plus.net/read.php?tid=${match[0]}`
  }
} else if (hostname !== 'south-plus.net') {
  location.hostname = 'south-plus.net'
}
