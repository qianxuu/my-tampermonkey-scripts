// ==UserScript==
// @name        禁止哔哩哔哩专栏文章复制时添加小尾巴
// @description 阻止添加作者出处的小尾巴
// @author      qianxu
// @version     1.1.1
// @match       https://*.bilibili.com/read/*
// @icon        https://www.bilibili.com/favicon.ico
// @namespace   block-bilibili-article-copy-tail
// @license     MIT
// @grant       none
// ==/UserScript==

document.addEventListener('copy', event => event.stopPropagation(), true)
