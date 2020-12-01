addEventListener('keydown', function(e) {
	if (e.altKey) {
		if (e.key == 'x' || e.key == 'X') {
			if (location.href.match('https://www.amazon.co.uk/')) {
				location.href = location.href.replace('https://www.amazon.co.uk/', 'https://www.amazon.de/')

			}
			if (location.href.match('https://www.amazon.de/')) {
				location.href = location.href.replace('https://www.amazon.de/', 'https://www.amazon.co.uk/')

			}
		}
		if (e.key == 'w' || e.key == 'W') {
			if (/https:\/\/w+\.amazon\..+\/(?:.+\/)*dp\/[^\s\/&]{10}[\/\?]*.*/i.test(location.href)) {
				let matchR = document.querySelector('#bylineInfo').innerText.match(/(?:Brand|Marke): (.+)/i) //  /(?:Brand: (.+))|(?:Marke: (.+))|(?:Visit the (.+) Store)|(?:Besuchen Sie den (.+)-Store)/i
				let regS1 = RegExp.$1
				if (matchR) {
					// console.log(regS1)
					window.open('https://www.tmdn.org/tmview/welcome#/tmview/results?page=1&pageSize=30&criteria=I&basicSearch=' +
						regS1)
				}
			}
		}
		if (e.key == 'q' || e.key == 'Q') { //https://www.amazon.de/-/en/gp/offer-listing/B07VHMRRK1
			if (/https:\/\/w+\.amazon\..+\/(?:.+\/)*dp\/[^\s\/&]{10}[\/\?]*.*/i.test(location.href)) {
				let haveNew
				for (let a of document.querySelectorAll('a')) {
					if (a.innerText.match(/New(?: & Used)* \(\d+\) from|Neu(?: und gebraucht)* \(\d+\) ab/i)) {
						haveNew = true
						var xhttp = new XMLHttpRequest();
						xhttp.onreadystatechange = function() {
							if (this.readyState == 4 && this.status == 200) {
								foundsellers = ('我们的店铺： ' + this.responseText.match(sellers)).replace('null', '无')
								// if(this.responseText.match(sellers))
								alert(foundsellers)
							}
						};
						xhttp.open("GET", a.href, true);
						xhttp.send();
						break
					}
				}
				if (!haveNew) {
					alert('无跟卖')
				}
			}
			if (/https:\/\/w+\.amazon\..+\/(?:.+\/)*offer-listing\/[^\s\/&]{10}[\/\?]*.*/i.test(location.href)) {
				alert(('我们的店铺： ' + document.documentElement.innerText.match(sellers)).replace('null', '无'))
				// let haveOurSeller = document.documentElement.innerText.match(sellers)
				// if (haveOurSeller) {
				// 	alert(haveOurSeller)
				// }
			}
		}

	}
})
// 向页面注入JS
function injectCustomJs(jsPath) {
	jsPath = jsPath || 'js/inject.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	// 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
	temp.src = chrome.extension.getURL(jsPath);
	temp.onload = function() {
		// 放在页面不好看，执行完后移除掉
		this.parentNode.removeChild(this);
	};
	document.body.appendChild(temp);
}
// let DOMContentLoaded_haveOurSeller
let foundsellers = '正在搜索我们的店铺： '
let sellers =
	/KAIKSO-IN|Blue Vessel|ShenTan|Holo Cute|Sunsline|Loveless Land|mei yun|Anglerfish|huyipin|徐嫚：|CHIC\*MALL|Cool Ring|Landslide|黄坤： |Pink Rose Dream|Romancy|PayneRoosevelt|（自建）  |张焦组 孔丽：|C-Pioneer|quandi|CloudWhisper|Flying Light|HERME|Fashion ER|张泽涛：|GracefulVar|Kifdiifgoso|nanshoudeyi|Golden Lank|tangyuandain|gaibian|产苗霞自建账号：|Relang|ZEROYOYO|管燕：|Angelo Morris|JERALD GATES|Nancy99|yanruoshangmao|朱杰：|Snowman smile|Everley Hutt|Rosali rait|汪熙组：|AZ080US |DogReMi|AZ084US |Fuhui Inc|AZ090US |Anhui Furunde Maoyi Store|AZ225UK |Tammy Yerkes|AZ253UK |Clara Tracy|AZ262UK |Adela Hodge|邱益华：|Philip Stuart|TOMMY LAMBERT|CHRISTY HARRELL|LINKLANK| 邱益华做跟卖的店铺 欧洲站|李彩虹组跟卖账号：|zhuyu| 欧洲， |ZHIXX MALL| 欧洲，|Star Eleven|jiutinggood| 欧洲 |Freeflystyle On Line Store| 北美 |Zero Thorndike| 北美 |LIANAN IRWIN/gi
addEventListener('DOMContentLoaded', function() { //DOMContentLoaded
	//显示标题
	if (location.href.match(/https\:\/\/www\.amazon\.co\.uk\/s\?me\=[^\s\/&]+/i)) { //店铺标题
		document.title = document.querySelector('#searchDropdownBox > option:nth-child(1)').innerText
	}
	if (location.href.match(/http\:\/\/www\.instudio\.me\:6206\/Setupspu\?spu\=.*$/i)) { //刊登SPU标题
		document.querySelector('title').innerText = location.href.match(
			/(?<=http\:\/\/www\.instudio\.me\:6206\/Setupspu\?spu\=).*$/i)[0]
	}
	if (location.href.match('http://www.instudio.me:6206/eshop/manager/calculate/list4.jsp')) { //计算标题
		document.querySelector('title').innerText = '计算'
		injectCustomJs('injectPlatform.js')

	}
	if (/https:\/\/w+\.amazon\..+\/(?:.+\/)*dp\/[^\s\/&]{10}[\/\?]*.*/i.test(location.href)) {
		//显示排名
		//v2
		let needDispalyRank = true
		let li_rank = document.querySelector('#SalesRank')
		if (li_rank) {console.log(111111111111111111111)
			document.querySelector('#twotabsearchtextbox').value = li_rank.innerText.replace(/Amazon Bestsellers Rank\: /i, '')
				.replace(/\(See Top.+\)/i, '')
			needDispalyRank = false
		}
		//Product information
		if (needDispalyRank) {console.log(222222222222222222)
			let ths = document.documentElement.querySelectorAll('th')
			for (let th of ths) {
				if (th.innerText.match('Best Sellers Rank')) {
					document.querySelector('#twotabsearchtextbox').value = th.nextElementSibling.innerText.replace(/\(See Top.+\)/i,
						'`') //.replace(/Best Sellers Rank\:?/i,'')
					needDispalyRank = false
					break
				}
			}

		}
		if (needDispalyRank) {console.log(333333333333333333)
			let spans = document.documentElement.querySelectorAll('span')
			for (let span of spans) {
				if (span.innerText.match('Best Sellers Rank')) {
					document.querySelector('#twotabsearchtextbox').value = span.innerText.replace(/Best Sellers Rank\:?/i, '').replace(
						/\(See Top.+\)/i, '`')
					break
				}
			}

		}
		// let dp_container=document.querySelector('#dp-container')
		// let ppd=document.querySelector('#ppd')
		// let AnchorIdArray=[]
		// // let descriptionAnchorID
		// for(let h2 of document.querySelectorAll('h2')){
		// 	if(h2.innerText=='Product description'){
		// 		let h2parent=h2
		// 		while(h2parent.parentElement!=dp_container&&h2parent.parentElement.tagName!='BODY'){
		// 			h2parent=h2parent.parentElement
		// 		}
		// 		// console.log(h2parent)
		// 		// descriptionAnchorID=h2parent.id
		// 		AnchorIdArray.push(h2parent.id)
		// 		break
		// 	}
		// }
		// // let informationAnchorID
		// for(let h2 of document.querySelectorAll('h2')){
		// 	if(h2.innerText=='Product information'){
		// 		let h2parent=h2
		// 		while(h2parent.parentElement!=dp_container&&h2parent.parentElement.tagName!='BODY'){
		// 			h2parent=h2parent.parentElement
		// 		}
		// 		// console.log(h2parent)
		// 		// informationAnchorID=h2parent.id
		// 		AnchorIdArray.push(h2parent.id)
		// 		break
		// 	}
		// }
		// console.log(AnchorIdArray)
		// let keydownTimes=1
		// addEventListener('keydown',function(e){
		// 	if(e.altKey){
		// 		let i=parseInt(e.key)%4
		// 		location.replace(location.href.replace(/(?<=https:\/\/w+\.amazon\..+\/(?:.+\/)*dp\/[^\s\/&]{10})[\/\?]*.*/i,'#'+AnchorIdArray[]))
		// 	}
		// })
		
		//搜索框显示公司跟卖店铺
		let olp_new = document.querySelector('#olp-new') ? document.querySelector('#olp-new') : document.querySelector(
			'#olpLinkWidget_feature_div')
		let a_new
		if (olp_new) {
			a_new = olp_new.querySelector('a')
			if (a_new) {
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						foundsellers = ('我们已跟的店铺： ' + this.responseText.match(sellers)).replace('null', '无')
						if (this.responseText.match(sellers)) {
							document.querySelector('#twotabsearchtextbox').value = foundsellers + '```' + document.querySelector('#twotabsearchtextbox').value
						}
					}
				};
				xhttp.open("GET", a_new.href, true);
				xhttp.send();
			}
		}

		//提示已跟店铺
		// for (let a of document.querySelectorAll('a')) {
		// 	if (a.innerText.match(/New(?: & Used)* \(\d+\) from|Neu(?: und gebraucht)* \(\d+\) ab/i)) {
		// 		var xhttp = new XMLHttpRequest();
		// 		xhttp.onreadystatechange = function() {
		// 			if (this.readyState == 4 && this.status == 200) {
		// 				foundsellers = ('我们的店铺： ' + this.responseText.match(sellers)).replace('null', '无')
		// 				if (this.responseText.match(sellers))
		// 					alert(foundsellers)
		// 			}
		// 		};
		// 		xhttp.open("GET", a.href, true);
		// 		xhttp.send();
		// 		break
		// 	}
		// }
	}

})
addEventListener('load', function() { //DOMContentLoaded
	if (location.href.match(/http:\/\/www\.instudio\.me:\d+\/eshop\/order\.do\?method\=edit&orderid\=\d+/i)) {
		injectCustomJs('editOrder.js')

	}
})

// chrome.runtime.onMessage.addListener(function(message) {
// 	if (message._command === 'findOurSeller') {
// 	}
// })
