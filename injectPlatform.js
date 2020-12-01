// //默认SKU
// document.querySelector('#sku0').value = 'XKQ4389'
// $("#sku0").trigger("blur");

// var wheelTimes = 0
// document.querySelector('#sku0').addEventListener('wheel', function(ev) {
// 	wheelTimes -= ev.deltaY / 200
// 	switch (Math.abs(wheelTimes) % 2) {
// 		case 0:
// 			this.value = 'XKQ4389'
// 			break;
// 		case 1:
// 			document.querySelector('#types').value = 1
// 			this.value = 'WED1407'
// 	}
// 	$("#sku0").trigger("blur");
// });

// //这些数值变化 会自动点击计算开关
// //数量
// document.querySelector('#productnum0').addEventListener('wheel', function(ev) {
// 	// console.log(this)
// 	var v1 = parseInt(this.value) - ev.deltaY / 200
// 	this.value = v1 > 1 ? v1 : 1
// 	$("#productnum0").trigger("change");
// });
// var productnum0
// setInterval(function() {
// 	if (productnum0 != document.querySelector('#productnum0').value) {
// 		document.querySelector('#calculate').click()
// 		productnum0 = document.querySelector('#productnum0').value
// 	}
// }, 200)

// // //成本价格
// // var costprice0
// // setInterval(function() {
// // 	if (costprice0 != document.querySelector('#costprice0').value) {
// // 		document.querySelector('#calculate').click()
// // 		costprice0 = document.querySelector('#costprice0').value
// // 	}
// // }, 200)

// // //重量
// // var weight0
// // setInterval(function() {
// // 	if (weight0 != document.querySelector('#weight0').value) {
// // 		document.querySelector('#calculate').click()
// // 		weight0 = document.querySelector('#weight0').value
// // 	}
// // }, 200)

// function toDecimal2(x) {
// 	var f = parseFloat(x);
// 	if (isNaN(f)) {
// 		return "";
// 	}
// 	var f = Math.round(x * 100) / 100;
// 	var s = f.toString();
// 	var rs = s.indexOf('.');
// 	if (rs < 0) {
// 		rs = s.length;
// 		s += '.';
// 	}
// 	while (s.length <= rs + 2) {
// 		s += '0';
// 	}
// 	return s;
// }
// document.querySelector('#askrate').addEventListener('wheel', function(ev) {
// 	// console.log(this)
// 	var v1 = toDecimal2(parseFloat(this.value) - ev.deltaY / 20000)
// 	this.value = v1 > 0.01 ? v1 : 0.01
// 	$("#askrate").trigger("change");
// });
// var askrate = document.querySelector('#askrate').value
// setInterval(function() {//console.log(parseFloat(askrate));
// 	if (askrate > 0 && askrate != document.querySelector('#askrate').value) {
// 		// console.log(askrate)
// 		document.querySelector('#calculate').click()
// 		askrate = document.querySelector('#askrate').value
// 	}
// }, 200)
//选亚马逊
document.querySelector('#platform').value = 2
$("#platform").trigger("change");



// //选国家
// document.querySelector('#country').value = '英国'
// $("#country").trigger("change");
// document.querySelector('#types').addEventListener('change',function(){console.log(121221)
// 	if(document.querySelector('#country').value == '英国'){
// 		//选GBP
// 		for (var opt of document.querySelectorAll('#platformid > option')) {
// 			if (opt.innerText == 'GBP()') {
// 				document.querySelector('#platformid').value = opt.value
// 				$("#platformid").trigger("change");
// 			}
// 		}
// 	}
// 	if(document.querySelector('#country').value == '德国'){
// 		//选EUR
// 		for (var opt of document.querySelectorAll('#platformid > option')) {
// 			if (opt.innerText == 'EUR()') {
// 				document.querySelector('#platformid').value = opt.value
// 				$("#platformid").trigger("change");
// 			}
// 		}
// 	}
// 	document.querySelector('#calculate').click()
// })



// //选物流
// document.querySelector('#types').value = '专线平邮挂号类合集（平邮）'
// $("#types").trigger("change");
// // setInterval(function(){$("#types").trigger("change");},500)
// var TypeV
// setInterval(function() {
// 	if (TypeV != document.querySelector('#types').value) {
// 		document.querySelector('#calculate').click()
// 		TypeV = document.querySelector('#types').value
// 	}
// }, 200)
// document.querySelector('#types').addEventListener('wheel', function() {
// 	// console.log(this)
// 	if (this.value < 2) {
// 		this.value = 2
// 	} else if (this.value == 2 && !document.querySelector('#properties0').value.match(('抛重'))) {
// 		this.value = '专线平邮挂号类合集（平邮）'
// 	} else if (this.value == 2 && document.querySelector('#properties0').value.match(('抛重'))) {
// 		this.value = 1
// 	} else if (isNaN(this.value)) {
// 		this.value = 1
// 	}
// });
