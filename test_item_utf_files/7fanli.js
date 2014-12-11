function fixTMLogin() {

	if (document.getElementById("tc_left") && document.getElementById("tc_left").getElementsByTagName("span").length == 0) {

		// var url = "http://www.alimama.com/member/login.htm?forward="+encodeURIComponent("http://media.alimama.com/account/overview.htm");

		var url = "https://login.taobao.com/member/login.jhtml?style=common&from=alimama&redirectURL=http%3A%2F%2Flogin.taobao.com%2Fmember%2Ftaobaoke%2Flogin.htm%3Fis_login%3d1&full_redirect=true&disableQuickLogin=true&qq-pf-to=pcqq.discussion";
		var styleover = "color:#ff7200;background:url(http://img.7fanli.com/allbg.png)8px -62px no-repeat;padding-left:30px;padding-bottom:2px";
		var styleout = "color:#60a800;background:url(http://img.7fanli.com/allbg.png)8px -41px no-repeat;padding-left:30px;padding-bottom:2px";

		var flushover = "color:#ff7200;background:url(http://img.7fanli.com/allbg.png)30px -142px no-repeat;padding-right:47px;padding-bottom:2px";
		var flushout = "color:#60a800;background:url(http://img.7fanli.com/allbg.png)30px -124px no-repeat;padding-right:47px;padding-bottom:2px";
		var text = "&nbsp;&nbsp;<a href='" + url + "' target='_blank' title='（请用淘宝账号登陆，初次使用需完善信息）' style='" + styleout + "' onmouseover='this.style.cssText=\"" + styleover + "\"' onmouseout='this.style.cssText=\"" + styleout + "\"'>登陆</a>&nbsp;，|&nbsp;登陆后，点此<a href='javascript:location.reload()'  style='" + flushout + "' onmouseover='this.style.cssText=\"" + flushover + "\"' onmouseout='this.style.cssText=\"" + flushout + "\"'>刷新</a><br/>";

		var link_dom = document.createElement("span");
		link_dom.innerHTML = text;

		var trends_dom = document.getElementById("tc_left");
		trends_dom.appendChild(link_dom);

	}
}

setTimeout(fixTMLogin, 5000);

function comjson(items) {

	var itemsHtml = '';
	var comHtml = '';
	for (var i = 0; i < items.length; i++) {

		itemsHtml += '<div id="item_' + i + '_box" style="border:1px solid #e9e9e7;float:left;margin-left:10px;margin-top:6px;height:56px;width:56px;overflow:hidden"><div id="item_' + i + '_img" style="display:none;position:absolute;margin-top:37px;text-align:center;color:#fff;background-color:#666;filter:alpha(opacity=50);width:56px;height:20px;line-height:19px;cursor:pointer;" itemid="' + items[i].id + '">删除</div><a href="' + items[i].fa + '" target="_selft"><img src="' + items[i].m + '" height=56 width=56 ></a></div>';
		comHtml += '<div style="float:left;margin-left:10px;margin-top:6px;height:58px;width:58px">' + items[i].j + '<br>' + items[i].p + '<br>' + items[i].f + '</div>';
	}

if(items.length > 1){
	
	var start_com = document.getElementById("start_com");
        start_com.style.backgroundColor = '#60a701';
	
}else{

	var start_com = document.getElementById("start_com");
        start_com.style.backgroundColor = '#e8e8e8';
}

/*
	if (items.length > 1) {
		//加载动作
		//开始比价点击之后效果
		var start_com = document.getElementById("start_com");
		start_com.style.backgroundColor = '#60a701';
		start_com.addEventListener('click', function() {
			if (items.length > 1) {

				var com_box = document.getElementById("com_box");
				if (com_box.style.display == "block" || com_box.style.display == "") {
					document.getElementById("taoke_dialog").style.height = '70px';
					document.getElementById("com_box").style.display = 'none';
					this.style.paddingTop = "13px";
					this.innerHTML = '&nbsp;&nbsp;开<br>&nbsp;&nbsp;始<br>&nbsp;&nbsp;比';
				} else {
					document.getElementById("taoke_dialog").style.height = '140px';
					document.getElementById("com_box").style.display = 'block';
					this.style.paddingTop = "4px";
					this.innerHTML = '&nbsp;&nbsp;收<br>&nbsp;&nbsp;起<br>&nbsp;&nbsp;比<br>&nbsp;&nbsp;价';

				}
			}

		}, false);

	}*/
	document.getElementById("tc_items").innerHTML = itemsHtml;
	document.getElementById("com_main").innerHTML = comHtml;

	for (var i = 0; i < items.length; i++) {

		(function() {
			var j = i;
			var item_img = document.getElementById("item_" + j + "_img");
                        var itemid = item_img.getAttribute("itemid");
			item_img.addEventListener('click', function() {
				var script = document.createElement("script");
				script.type = "text/javascript";
				script.src = "http://7fl.ztcadx.com/plugin/item_comparision_attributes/del?id=" + itemid+"&callback=comjson";
				document.getElementsByTagName("body")[0].appendChild(script);
				script.onload = function() {
					document.getElementsByTagName("body")[0].removeChild(this);
				}
				
			}, false);

			var item_box = document.getElementById("item_" + j + "_box");
			item_box.addEventListener('mouseover', function() {

				document.getElementById("item_" + j + "_img").style.display = "block";
			}, false);

			item_box.addEventListener('mouseout', function() {

				document.getElementById("item_" + j + "_img").style.display = "none";
			}, false);

		})();

	}

}


