// ==UserScript==
// @name        南 + 自动跳转到主域名
// @description 防止需要重复登录
// @author      qianxu
// @version     1.1.0
// @match       https://*.north-plus.net/*
// @match       https://*.south-plus.org/*
// @match       https://*.spring-plus.net/*
// @match       https://*.summer-plus.net/*
// @match       https://*.south-plus.net/*
// @match       https://*.east-plus.net/*
// @match       https://*.blue-plus.net/*
// @icon        https://south-plus.net/favicon.ico
// @namespace   south-plus-auto-redirect
// @grant       none
// @license     MIT
// ==/UserScript==

const { hostname, pathname, search } = location
if (hostname !== 'south-plus.net') {
  location.hostname = 'south-plus.net'
}

// 如果 pathname 含有 simple 则为移动版，跳转到桌面版
if (pathname.includes('simple')) {
  // 从 search 取出帖子 ID
  const id = search.match(/\d+/)[0]
  location.href = `https://south-plus.net/read.php?tid=${id}`
}
