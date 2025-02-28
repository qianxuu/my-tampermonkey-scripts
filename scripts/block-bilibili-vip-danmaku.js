// ==UserScript==
// @name        去他妈的大会员彩色弹幕
// @description 将大会员彩色弹幕改回默认颜色或彻底屏蔽
// @author      qianxu
// @version     3.1.2
// @match       https://*.bilibili.com/video/*
// @match       https://*.bilibili.com/list/*
// @match       https://*.bilibili.com/bangumi/play/*
// @match       https://*.bilibili.com/festival/*
// @icon        https://www.bilibili.com/favicon.ico
// @namespace   https://greasyfork.org/scripts/467808
// @license     MIT
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_registerMenuCommand
// ==/UserScript==

// 读取配置
const blockVipDm = GM_getValue('blockVipDm') // 是否彻底屏蔽大会员彩色弹幕
const playerProfile = localStorage.getItem('bpx_player_profile') // 播放器配置

// 注册菜单
GM_registerMenuCommand(`${blockVipDm ? '✔️' : '❌'} 彻底屏蔽大会员彩色弹幕`, () => {
  if (blockVipDm) {
    GM_deleteValue('blockVipDm')
  } else {
    GM_setValue('blockVipDm', true)
  }
  location.reload()
})

// 尝试读取用户设置的描边类型，无则默认为重墨
const strokeType = JSON.parse(playerProfile)?.dmSetting?.fontborder || 0

// 根据描边类型设置文本阴影
const textShadow = (() => {
  if (strokeType === 1) return '0 0 1px #000,0 0 1px #000,0 0 1px #000' // 描边
  if (strokeType === 2) return '1px 1px 2px #000,0 0 1px #000' // 45° 投影
  return '1px 0 1px #000,0 1px 1px #000,0 -1px 1px #000,-1px 0 1px #000' // 重墨
})()

// 插入样式
const styleElement = document.createElement('style')
if (blockVipDm) {
  styleElement.innerHTML = '.bili-dm-vip,.bili-danmaku-x-dm-vip{display:none}'
} else {
  styleElement.innerHTML = `.bili-dm,.bili-danmaku-x-dm{--textShadow:${textShadow}}.bili-dm-vip,.bili-danmaku-x-dm-vip{background-image:none !important;text-shadow:inherit !important}`
}
document.body.appendChild(styleElement)
