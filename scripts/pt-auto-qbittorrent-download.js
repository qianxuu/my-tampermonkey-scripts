// ==UserScript==
// @name        PT 网站自动跳转 qBittorrent WebUI 下载
// @namespace   pt-auto-qbittorrent-download
// @version     1.0.1
// @description 在 PT 网站点击种子链接时，自动跳转到 qBittorrent WebUI 并弹出下载对话框
// @author      qianxu
// @match       https://kp.m-team.cc/detail/*
// @match       https://u2.dmhy.org/details.php*
// @match       https://skyeysnow.com/forum.php?mod=viewthread*
// @grant       unsafeWindow
// @run-at		document-end
// ==/UserScript==

(() => {
	const QBITTORRENT_WEBUI_BASE_URL = "http://192.168.1.70:8080";

	const MTeamHandler = () => {
		// M-Team 网站：拦截 XHR 请求获取下载链接
		const API = "/api/torrent/genDlToken";
		const originalXHROpen = unsafeWindow.XMLHttpRequest.prototype.open;
		const originalXHRSend = unsafeWindow.XMLHttpRequest.prototype.send;

		// 重写 open 方法以存储 URL
		unsafeWindow.XMLHttpRequest.prototype.open = function (
			method,
			url,
			...rest
		) {
			// 仅在 URL 匹配时才附加拦截逻辑
			if (String(url).includes(API)) {
				this._interceptURL = url; // 标记这个请求需要被拦截
			}
			return originalXHROpen.apply(this, [method, url, ...rest]);
		};

		// 重写 send 方法以读取响应
		unsafeWindow.XMLHttpRequest.prototype.send = function (body) {
			// 检查这个请求是否是我们标记要拦截的
			if (this._interceptURL) {
				this.addEventListener("load", function () {
					try {
						const data = JSON.parse(this.responseText);
						const torrentUrl = data.data;
						console.log("获取种子下载链接成功：", torrentUrl);

						// 构造 qBittorrent WebUI 下载链接
						const qbittorrentURL = `${QBITTORRENT_WEBUI_BASE_URL}/#download=${encodeURIComponent(torrentUrl)}`;
						window.open(qbittorrentURL, "_blank");
					} catch (e) {
						console.error("解析种子下载链接失败：", e);
					}
				});
			}
			return originalXHRSend.apply(this, [body]);
		};
	};

	const U2Handler = () => {
		const links = document.querySelectorAll('a[href^="download.php"]');

		links.forEach((link) => {
			const originalHref = link.href;
			if (originalHref.includes("passkey=")) {
				link.href = `${QBITTORRENT_WEBUI_BASE_URL}/#download=${encodeURIComponent(originalHref)}`;
				console.log("已替换种子下载链接：", originalHref);
			}
		});
	};

	const SkyeySnowHandler = () => {
		const links = document.querySelectorAll('a[href^="download.php"]');

		links.forEach((link) => {
			const originalHref = link.href;
			if (originalHref.includes("passkey=")) {
				link.href = `${QBITTORRENT_WEBUI_BASE_URL}/#download=${encodeURIComponent(originalHref)}`;
				console.log("已替换种子下载链接：", originalHref);
			}
		});
	};

	switch (window.location.hostname) {
		case "kp.m-team.cc":
			MTeamHandler();
			break;
		case "u2.dmhy.org":
			U2Handler();
			break;
		case "skyeysnow.com":
			SkyeySnowHandler();
			break;
		default:
			break;
	}
})();
