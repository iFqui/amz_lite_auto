// chrome.commands.onCommand.addListener(function(command) {
// 	if (command == 'findOurSeller') {
// 		chrome.tabs.query({
// 			currentWindow: true,
// 			active: true
// 		}, function(tabs) {
// 			chrome.tabs.sendMessage(tabs[0].id, {
// 				_command: 'findOurSeller'
// 			});
// 		})
// 	}
// });
//自动离开店铺查找asin
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		let _domain
		if (/(https:\/\/w+\.amazon\..+\/)/i.test(details.url)) {
			_domain = RegExp.$1
			// let toredirect=/https:\/\/w+\.amazon\..+\/(?:.+\/)*(?:dp|(gp\/product))\/[^\s\/&]{10}[\/\?].*/i.test(details.url)||/https:\/\/w+\.amazon\..+\/(?:.+\/)*(?:dp|(gp\/product))\/[^\s\/&]{10}[\/\?].*/i.test(details.url)
			let toredirect=/https:\/\/w+\.amazon\..+\/(?:.+\/)*(?:dp|gp\/product)\/[^\s\/&]{10}[\/\?].*/i.test(details.url)||/https:\/\/w+\.amazon\..+\/(?:.+\/)*gp\/product\/[^\s\/&]{10}$/i.test(details.url)
			// let gp_product=RegExp.$1
			if(toredirect){
			// if (/https:\/\/w+\.amazon\..+\/(?:.+\/)*(?:dp|gp\/product)\/[^\s\/&]{10}[\/\?].*/i.test(details.url)) { // /https:\/\/w+\.amazon\..+\/.*\/dp\/[^\s\/&]{10}\/ref\=.*/i  //https://www.amazon.co.uk/Prochive-Catcher-Shaving-Bathroom-Grooming/dp/B077M3LQXF/ref=sr_1_10?dchild=1&m=A2JN4NGAEIC9GM&marketplaceID=A1F83G8C2ARO7P&qid=1604455326&s=merchant-items&sr=1-10
				let al = details.url.replace(/gp\/product\//i, 'dp/').replace(/(?<=\/dp\/[^\s\/&]{10})[\/\?].*/i, '')// /(?<=\/dp\/[^\s\/&]{10})\/ref\=.*/i
				return {
					redirectUrl: al
				};
			}
			//
			if (/https:\/\/w+\.amazon\..+\/.*sp\?.*seller\=[^\s\/&]+/i.test(details.url)) { //https://www.amazon.co.uk/s?me=AN8BYY6GMRLPD&marketplaceID=A1F83G8C2ARO7P
				// let al = details.url.replace(/https:\/\/www\.amazon\..+\/*sp\?.*seller\=(?=.+)/i,
				// 'https://www.amazon.co.uk/s?me=')
				let seller = details.url.match(/(?<=seller\=)[^\s\/&]+/)[0]
				return {
					redirectUrl: _domain+'s?me='+seller
				};
			}
		}

	}, {
		urls: ["<all_urls>"],
		types: ["main_frame"]
	},
	["blocking"]
);

chrome.runtime.onInstalled.addListener(function(){
	chrome.tabs.create({url:chrome.runtime.getURL('guide.html')})
	// chrome.tabs.create({url:chrome.runtime.getURL('listing页面说明.jpg')})
	// chrome.tabs.create({url:chrome.runtime.getURL('店铺页面跳转说明.jpg')})
})