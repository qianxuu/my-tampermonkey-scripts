// ==UserScript==
// @name        自动重定向
// @description 通用自动重定向
// @author      qianxu
// @version     2.0.3
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
// @match       https://c.pc.qq.com/*
// @match       https://erogamescape.dyndns.org/*
// @icon        https://south-plus.net/favicon.ico
// @namespace   auto-redirect
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
				if (url.pathname.includes("simple")) {
					const match = url.search.match(/t(\d+)/);
					if (match) {
						return `https://south-plus.net/read.php?tid=${match[1]}`;
					}
				}
				return null;
			},
		},

		// Bangumi 番组计划
		{
			domains: ["bangumi.tv"],
			targetDomain: "bgm.tv",
		},

		// ErogameScape -エロゲー批評空間-
		{
			domains: ["erogamescape.dyndns.org"],
			targetDomain: "erogamescape.org",
		},

		// 腾讯恶意网址拦截
		{
			domains: ["c.pc.qq.com"],
			handler: (url) => {
				const urlParams = new URLSearchParams(url.search);
				const urlParam = urlParams.get("url");
				const pfurlParam = urlParams.get("pfurl");

				if (urlParam) {
					// url 参数：解码并去掉末尾的 /
					return decodeURIComponent(urlParam).replace(/\/$/, "");
				}
				if (pfurlParam) {
					// pfurl 参数：解码但保留末尾的 /
					return decodeURIComponent(pfurlParam);
				}
				return null;
			},
		},
	];

	// 执行重定向
	const performRedirect = () => {
		const { hostname } = location;

		for (const rule of redirectRules) {
			const matchedDomain = rule.domains.find((domain) => {
				return hostname === domain || hostname.endsWith(`.${domain}`);
			});

			if (matchedDomain) {
				if (rule.handler) {
					const targetUrl = rule.handler(location);
					if (targetUrl) {
						location.href = targetUrl;
						return;
					}
				}

				if (
					hostname === rule.targetDomain ||
					hostname.endsWith(`.${rule.targetDomain}`)
				) {
					return;
				}

				if (rule.targetDomain) {
					location.hostname = rule.targetDomain;
				}
				return;
			}
		}
	};

	performRedirect();
})();
