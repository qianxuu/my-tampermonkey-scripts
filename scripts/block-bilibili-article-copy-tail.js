// ==UserScript==
// @name        阻止哔哩哔哩专栏文章复制时添加小尾巴
// @description 阻止添加作者出处的小尾巴
// @author      qianxu
// @version     1.1.0
// @match       https://*.bilibili.com/read/*
// @icon        https://www.bilibili.com/favicon.ico
// @namespace   block-bilibili-article-copy-tail
// @grant       none
// @license     MIT
// ==/UserScript==

document.addEventListener('copy', event => event.stopPropagation(), true)
