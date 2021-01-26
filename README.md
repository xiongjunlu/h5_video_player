h5_video_js_sdk
====
h5-video-jssdk


[使用文档](https://cf.jd.com/display/middle/H5-video-v2.0)

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