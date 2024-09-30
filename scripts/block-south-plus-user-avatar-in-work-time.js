// ==UserScript==
// @name        工作时间屏蔽南 + 用户头像
// @description 防止 NSFW 头像出现导致社死
// @author      qianxu
// @version     1.1.1
// @match       https://south-plus.net/*
// @icon        https://south-plus.net/favicon.ico
// @namespace   block-south-plus-user-avatar-in-work-time
// @license     MIT
// @grant       none
// ==/UserScript==

const date = new Date()
const dayOfWeek = date.getDay()
const hour = date.getHours()

if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 18) {
  const userPics = document.querySelectorAll('[class~="user-pic"]')
  for (const userPic of userPics) {
    userPic.remove()
  }
}
