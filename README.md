# webstorm-profile

WebStorm 用到的配置文件。


## webstorm-webpack-alias

由于 Vue CLI 3 不再使用传统的 webpack 配置文件，故 WebStorm 无法识别别名。

本文件对项目无任何作用，仅作为 WebStorm 识别别名使用。


### 使用方式

1. 拷贝本项目中的 webstorm.webpack.alias.js 到项目根目录下；

2. 进入 Preferences | Languages & Frameworks | JavaScript | Webpack，选择该文件后保存设置即可。

文件来源参考：[Webpack中识别Vue-Cli3配置的别名@](https://mp.weixin.qq.com/s/Vip6Ffflzwv1k6P1BpvjeA)


## code style - typescript

typescript 的 code style 配置文件。


### 使用方式

1. 进入 Preferences | Editor | Code Style | TypeScript，导入该文件后保存设置即可。
