// ==UserScript==
// @name        工作时间屏蔽南 + 用户头像
// @description 工作时间屏蔽南 + 用户头像
// @author      qianxu
// @version     1.1.0
// @match       https://south-plus.net/*
// @icon        https://south-plus.net/favicon.ico
// @namespace   block-south-plus-user-avatar-in-work-time
// @grant       none
// @license     MIT
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
