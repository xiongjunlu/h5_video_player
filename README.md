h5_video_player
====
h5_video_player


```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="jddh5video_container"></div>
  <script src="https://storage.360buyimg.com/jssource/video-player.js"></script>
  <script>
    const option = {
            sourceList: [
                'https://storage.360buyimg.com/video-hall/unloss_bankcard_introduce.mp4',
                'https://storage.360buyimg.com/video-hall/unloss_bankcard_introduce.ogv',
                'https://storage.360buyimg.com/video-hall/unloss_bankcard_introduce.webm'
            ],
            poster: "https://m.360buyimg.com/ucpg/jfs/t1/60942/29/9298/44298/5d70cd04Ec3d3d182/047cb399d7269465.png",
            control: true,
            collapse: true,
            banner: {
                title:'测试测试',
                icon:true ,
                bgColor:'yellow',
                btnBgColor:'green',
            },
            qidian: {
                playStart: {
                    clstag: '198R|24792',
                    ext: {
                        productid:'106000',
                        staid:'test'
                    }
                },
                collapseClose: {
                    clstag: '198R|27063',
                    ext: {
                        productid:'106000',
                        staid:'test'
                    }
                },
                collapsePlay: {
                    clstag: '198R|27062',
                    ext: {
                        productid:'106000',
                        staid:'test'
                    }
                }
            },
            callback: function(video) {
                console.log('video========>', video)
            },
            playEndCallBack: function(video) {
                console.log('video========>', video)
            }
        }
        JDDH5VideoPlayer.InitH5Video(option)
  </script>
   
</body>
</html>
```

```
// id为固定值
<div id="jddh5video_container"></div>
```

```
// 配置参数说明：
  sourceList:[],  // 视频资源列表（视频链接）
  poster:'',  // 視頻poster（图片链接）
  control:true,  // 自定义组件/原生控件(true自定义,false原生，默认自定义)
  collapse:true,  // 是否滚动折叠(true滚动折叠,false滚动不折叠，默认不折叠)
  callback:function(video){
    console.log('video=====>>>>',video)
  }
  playEndCallBack:fnction(video){ // 播放完成回调
    console.log('video=====>>>>',video)
  }
  qidian: {}  // 埋点上报相关配置，可参考上边示例
  banner:{
    title:'',  // 标题文案（文本）
    icon:true,  // 是否显示 视频说明书banner，（true 显示，false不显示，默认不显示）
    bgColor:'#ff0000',  // banner背景色（#ff0000，有默认色）
    btnBgColor:'#ff0000'  // 播放按钮背景色（#ff0000，有默认色）
  }
```