
var JDJRPlayer = {
	createWrap: function(option) {
		var doc = document;
		var div = doc.createElement('div');
		div.setAttribute('id', 'h5videowrap_' + option.id);
		div.setAttribute(
			'style',
			option.wrapStyle || 'width: 92%;height: 12rem;border-radius: 8px;position: relative;margin: 2rem auto 0;'
		);
		return div;
	},
	createImg: function(option) {
		var doc = document;
		var img = doc.createElement('img');
		img.setAttribute('src', option.poster);
		img.setAttribute(
			'style',
			option.imgStyle ||
				'width: 100%; position: absolute;top: 0;left: 0; z-index:1;overflow: hidden;border-radius: 8px;'
		);
		return img;
	},
	createVideo: function(option) {
		var doc = document;
		var video = doc.createElement('video');
		video.setAttribute(
			'style',
			option.videoStyle || 'width: 100%;position: absolute;top: 0;left: 0;overflow: hidden;border-radius: 8px;'
		);
		video.setAttribute('id', 'h5video_' + option.id);
		if (option.controls) {
			video.setAttribute('controls', option.controls);
		}
		if (option.loop) {
			video.setAttribute('loop', option.loop);
		}
		if (option.poster) {
			video.setAttribute('poster', option.poster);
		}
		video.setAttribute('webkit-playsinline', true);
		video.setAttribute('playsinline', true);
		video.setAttribute('x5-playsinline', true);
		video.setAttribute('x-webkit-airplay', 'allow');
		return video;
	},
	createSource: function(option) {
		var doc = document;
		var source = doc.createElement('source');
		source.setAttribute('src', option.url);
		source.setAttribute('type', option.type);
		return source;
	},
	create: function(option,cb) {
		try {
		var source = option.source;
		var mp4 = /\w*(\.mp4)$/i;
		var ogv = /\w*(\.ogv)$/i;
		var webm = /\w*(\.webm)$/i;
		var videowrap = document.getElementById(option.id);
		if (videowrap) {
			var wrap = JDJRPlayer.createWrap(option);
			var video = JDJRPlayer.createVideo(option);
			for (var i = 0; i < source.length; i++) {
				var mp4source = null,
					ogvsource = null,
					webmsource = null;
				if (mp4.test(source[i])) {
					mp4source = JDJRPlayer.createSource({ url: source[i], type: 'video/mp4' });
					video.appendChild(mp4source);
				}
				if (ogv.test(source[i])) {
					ogvsource = JDJRPlayer.createSource({ url: source[i], type: 'video/ogv' });
					video.appendChild(ogvsource);
				}
				if (webm.test(source[i])) {
					webmsource = JDJRPlayer.createSource({ url: source[i], type: 'video/webm' });
					video.appendChild(webmsource);
				}
			}
			wrap.appendChild(video);
			videowrap.appendChild(wrap);
			
			cb&&cb({videoId:'h5video_' + option.id});
		
				// var deviceUA = window.navigator.userAgent;
				// var versionList = ['6.0.40','6.0.50','6.0.51','6.0.52'];

				// var isIphone=new RegExp(/\(i[^;]+;( U;)? CPU.+Mac OS X/g);
				// var isJDJR=new RegExp(/jdjr/g);	
				// var clientVersion = new RegExp(/(^|&)clientVersion=([^&]*)(&|$)/);
        document.addEventListener("visibilitychange", function(e) {
						video.pause();
          });
				// if(isIphone.test(deviceUA)&&(isJDJR).test(deviceUA.toLowerCase())&&deviceUA.match(clientVersion)&&versionList.indexOf(deviceUA.match(clientVersion)[2])!=-1){
				// 	document.addEventListener("visibilitychange", function(e) {
				// 		video.pause();
				// 	});
				// }
			}
		} catch (error) {
				console.log('--')
		}
	}
};

window.JDJRPlayer = JDJRPlayer;

console.log(JDJRPlayer)
// module.exports = JDJRPlayer;