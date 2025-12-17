// ==UserScript==
// @name        同网站多域名自动重定向
// @description 同一个网站如果有多个域名，自动重定向到统一域名
// @author      qianxu
// @version     2.0.1
// @match       https://*.north-plus.net/*
// @match       https://*.south-plus.org/*
// @match       https://*.spring-plus.net/*
// @match       https://*.summer-plus.net/*
// @match       https://*.south-plus.net/*
// @match       https://*.east-plus.net/*
// @match       https://*.blue-plus.net/*
// @match       https://*.snow-plus.net/*
// @match       https://*.level-plus.net/*
// @match       https://*.bangumi.tv/*
// @icon        https://south-plus.net/favicon.ico
// @namespace   multi-domain-auto-redirect
// @run-at      document-start
// @license     MIT
// @grant       none
// ==/UserScript==

(() => {
	// 重定向规则
	const redirectRules = [
		// 南 + 论坛
		{
			domains: [
				"north-plus.net",
				"south-plus.org",
				"spring-plus.net",
				"summer-plus.net",
				"south-plus.net",
				"east-plus.net",
				"blue-plus.net",
				"snow-plus.net",
				"level-plus.net",
			],
			targetDomain: "south-plus.net",
			handler: (url) => {
				// 如果 pathname 含有 simple 则为移动版，直接跳转到主域名桌面版
				if (url.pathname.includes("simple")) {
					// 从 search 中取出帖子 ID
					const match = url.search.match(/\d+/);
					if (match) {
						return `https://south-plus.net/read.php?tid=${match[0]}`;
					}
				}
				return null; // 使用默认的域名替换
			},
		},

		// Bangumi
		{
			domains: ["bangumi.tv"],
			targetDomain: "bgm.tv",
		},
	];

	// 执行重定向
	const performRedirect = () => {
		const { hostname } = location;

		for (const rule of redirectRules) {
			// 检查当前域名是否匹配规则
			const matchedDomain = rule.domains.find((domain) => {
				// 精确匹配或匹配子域名
				return hostname === domain || hostname.endsWith(`.${domain}`);
			});

			if (matchedDomain) {
				// 如果有自定义处理函数，先尝试使用（优先级最高）
				if (rule.handler) {
					const customUrl = rule.handler(location);
					if (customUrl) {
						location.href = customUrl;
						return;
					}
				}

				// 如果当前已经是目标域名，跳过
				if (
					hostname === rule.targetDomain ||
					hostname.endsWith(`.${rule.targetDomain}`)
				) {
					return;
				}

				// 默认行为：替换域名
				location.hostname = rule.targetDomain;
				return;
			}
		}
	};

	performRedirect();
})();
