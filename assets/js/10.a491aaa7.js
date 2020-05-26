(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{186:function(e,a,n){"use strict";n.r(a);var s=n(6),t=Object(s.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"webpack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[e._v("#")]),e._v(" webpack")]),e._v(" "),n("ul",[n("li",[e._v("全局安装webpack\n"),n("ul",[n("li",[e._v("切进当前项目目录下")]),e._v(" "),n("li",[e._v("npm install -g webpack //全局")]),e._v(" "),n("li",[e._v("npm install --save-dev webpack //安装到当前项目下（--save-dev 是 -D 的简写，是项目中安装的意思）")])])]),e._v(" "),n("li",[e._v("新建package.json\n"),n("ul",[n("li",[e._v("npm init//可以自动创建这个package.json")])])])]),e._v(" "),n("h2",{attrs:{id:"_2-根目录下创建入口文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-根目录下创建入口文件"}},[e._v("#")]),e._v(" 2.根目录下创建入口文件")]),e._v(" "),n("ul",[n("li",[e._v("项目结构\n"),n("ul",[n("li",[n("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC80LzE0LzE3MTc2NTliNzY3NzlkZjU?x-oss-process=image/format,png",alt:""}})])])]),e._v(" "),n("li",[e._v("index.html // 引入打包完成后的js文件，SPA应用的入口页面")]),e._v(" "),n("li",[e._v("main.js // 入口js文件，会引入全部的业务场景的js")]),e._v(" "),n("li",[e._v("src文件夹 // 存放页面内需要展示的业务代码")])]),e._v(" "),n("h2",{attrs:{id:"_3-正式使用webpack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-正式使用webpack"}},[e._v("#")]),e._v(" 3.正式使用webpack")]),e._v(" "),n("p",[n("strong",[e._v("webpack核心概念：")])]),e._v(" "),n("ul",[n("li",[e._v("入口(entry)")]),e._v(" "),n("li",[e._v("输出(output)")]),e._v(" "),n("li",[e._v("装饰器(loader)")]),e._v(" "),n("li",[e._v("插件(plugins)")])]),e._v(" "),n("h3",{attrs:{id:"_3-1-直接在终端启用webpack进行打包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-直接在终端启用webpack进行打包"}},[e._v("#")]),e._v(" 3.1 直接在终端启用webpack进行打包")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("webpack ${入口js文件main.js的相对路径} -o ${打包好的js文件bundle.js的相对路径}\nwebpack main.js -o dist/bundle.js\n")])])]),n("h3",{attrs:{id:"_3-2-利用webpack-config-js配置文件进行打包（常用）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-利用webpack-config-js配置文件进行打包（常用）"}},[e._v("#")]),e._v(" 3.2 利用webpack.config.js配置文件进行打包（"),n("strong",[e._v("常用")]),e._v("）")]),e._v(" "),n("h4",{attrs:{id:"_3-2-1新建webpack-config-js文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1新建webpack-config-js文件"}},[e._v("#")]),e._v(" 3.2.1新建webpack.config.js文件")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('module.exports = {\n    entry: __dirname + "入口文件main.js相对路径",//入口\n    output:{\n        path: __dirname + "/dist", // 打包后输出文件的路径，该文件夹在当前目录下是不存在的\n        fileName: "bundle.js" // 打包后输出的js文件，该文件在当前目录下是不存在的\n    }\n}\n')])])]),n("p",[n("strong",[e._v("注意：")]),e._v("__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录")]),e._v(" "),n("h4",{attrs:{id:"_3-2-2-在package-json中定义启动webpack的打包命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-在package-json中定义启动webpack的打包命令"}},[e._v("#")]),e._v(" 3.2.2 在package.json中定义启动webpack的打包命令")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('{\n    "name": "webpack-demo",\n    "version": "1.0.0",\n    "description": "",\n    "main": "index.js",\n    "scripts": { //在这定义启动webpack的命令\n        "start": "webpack",//只有start命令可以用 npm start\n        "test": "echo \\"Error: no test specified\\" && exit 1",//其他都要用 npm run test\n        "dev": "webpack-dev-server --port 9999" //其他都要用 npm run dev\n    },\n    "author": "ly",\n    "license": "ISC",\n    "devDependencies": {\n        "webpack": "^4.41.6",\n        "webpack-cli": "^3.3.11",\n        "webpack-dev-server": "^3.10.3"\n    }\n}\n')])])]),n("p",[n("strong",[e._v("注意")]),e._v("：package.json中的script会按一定顺序寻找命令对应位置，本地的node_modules/.bin路径就在这个寻找清单中，所以无论是全局还是局部安装的Webpack，你都不需要写前面那指明详细的路径了")]),e._v(" "),n("h4",{attrs:{id:"_3-2-3-source-map"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-source-map"}},[e._v("#")]),e._v(" 3.2.3 source-map")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("正常webpack的工作流程为：代码打包压缩 -> 去空格 ->babel（后面会介绍babel的用途）编译转换")])]),e._v(" "),n("li",[n("p",[e._v("打包压缩编译后的项目代码和源代码之间有很大的差异，为了方便调试，定位编译后的代码的具体报错信息，我们通常用Source Maps来定位到开发中的源代码。")])]),e._v(" "),n("li",[n("p",[e._v("devtool:\ndevtool是为了在webpack中配置Source Maps，方便在控制台中找到报错信息具体出现在代码的第几行中")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('  module.exports = {\n      devtool: \'eval-source-map\', // source-map有很多种，自行百度各种区别\n      //__dirname 指的是当前文件所在路径\n      //entry后指定入口文件\n      entry: __dirname + "/main.js",\n      output: {\n          //打包后输出文件地址\n          path: __dirname + "/dist",\n          filename: "bundle.js"\n      }\n  } \n')])])])])]),e._v(" "),n("h4",{attrs:{id:"_3-2-4-使用webpack构建本地服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-使用webpack构建本地服务器"}},[e._v("#")]),e._v(" 3.2.4 使用webpack构建本地服务器")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("webpack提供一个可选的本地开发服务器 webpack-dev-server")])]),e._v(" "),n("li",[n("p",[e._v("在webpack中进行配置之前需要单独安装它作为项目依赖\nnpm install --save-dev webpack-dev-server")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('  module.exports = {\n      devtool: \'eval-source-map\',\n      //__dirname 指的是当前文件所在路径\n      //entry后指定入口文件\n      entry: __dirname + "/main.js",\n      output: {\n          //打包后输出文件地址\n          path: __dirname + "/dist",\n          filename: "bundle.js"\n      },\n      devServer: {\n          // devServer 还有很多配置项，自行百度\n          contentBase: __dirname, //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到根目录）\n          historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html\n          inline: true //设置为true，当源文件改变时会自动刷新页面\n      }\n  }\n')])])])]),e._v(" "),n("li",[n("p",[e._v("webpack.config.js中配置好后可在package.json 的script中去定义启动的命令，我这里设置了端口为9999\n"),n("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC80LzE0LzE3MTc2YWQ5OWYwYmUxYmU?x-oss-process=image/format,png",alt:""}})])])]),e._v(" "),n("h4",{attrs:{id:"_3-2-5-loaders（很重要，面试常问掌握哪些loaders）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-5-loaders（很重要，面试常问掌握哪些loaders）"}},[e._v("#")]),e._v(" 3.2.5 Loaders（很重要，面试常问掌握哪些loaders）")]),e._v(" "),n("p",[e._v("package.json结构如下")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n    "name": "webpack-demo",\n    "version": "1.0.0",\n    "description": "",\n    "main": "index.js",\n    "scripts": {\n        "test": "echo \\"Error: no test specified\\" && exit 1",\n        "start": "cross-env NODE_ENV=production webpack --config webpack.config.js",\n        "dev": "cross-env NODE_ENV=development webpack-dev-server --hot --inline --progress --color --port 9999 --config webpack.config.js"\n    },\n    "author": "ly",\n    "license": "ISC",\n    "devDependencies": {\n        "babel-core": "^6.26.3", //babel核心包\n        "babel-loader": "^7.1.5",//处理ES6语法\n        "babel-preset-env": "^1.7.0", //根据你支持的环境自动决定适合你的Babel插件\n        "babel-preset-es2015": "^6.24.1", //安装了上个这个其实可以不安装，再上一个里直接配置\n        "cross-env": "^7.0.2", //跨平台包，可以获取当前环境\n        "css-loader": "^3.5.2",//解析css代码，按模块打包进bundle.js中\n        "html-webpack-plugin": "^4.2.0",//见后文\n        "node-sass": "^4.13.1",// sass-loader依赖于node-sass\n        "sass-loader": "^8.0.2",//解析sass文件，<style lang="scss"> 这样才能正常渲染\n        "style-loader": "^1.1.4",//配合css-loader将解析的代码以style标签插入代码中\n        "vue": "^2.6.11", // 没啥说的(⊙o⊙)\n        "vue-loader": "^15.9.1",//解析和转换 .vue 文件\n        "vue-template-compiler": "^2.6.11",//vue-loader依赖vue-template-compiler\n        "webpack": "^4.41.6",// 没啥说的(⊙o⊙)\n        "webpack-cli": "^3.3.11",// 没啥说的(⊙o⊙)\n        "webpack-dev-server": "^3.10.3"// 本地打包调试，不会生成真正的打包文件，因为支持热部署，所以把文件都放进内存中快速更新\n    }\n}\n')])])]),n("ul",[n("li",[e._v("1.Loader 用来帮助webpack解析除js类型外的其他文件")]),e._v(" "),n("li",[e._v("2.Loader 可以理解为是模块和资源的转换器，它本身是一个函数，接受源文件作为参数，返回转换的结果。这样，我们就可以通过 require 来加载任何类型的模块或文件，比如 CoffeeScript、 JSX、 LESS 或图片。")]),e._v(" "),n("li",[e._v("3.Loaders需要单独安装并且需要在webpack.config.js中的modules关键字下进行配置\n"),n("ul",[n("li",[e._v("test：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）")]),e._v(" "),n("li",[e._v("loader：loader的名称（必须）")]),e._v(" "),n("li",[e._v("include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；")]),e._v(" "),n("li",[e._v("query：为loaders提供额外的设置选项（可选）")])])]),e._v(" "),n("li",[e._v("4.介绍几个常用loader\n"),n("ul",[n("li",[e._v("Babel\n"),n("ul",[n("li",[e._v("Babel的作用：\n"),n("ul",[n("li",[e._v("主要用来编译js/jsx代码，支持ES6,ES7最新语法格式，不需要考虑浏览器是否支持")]),e._v(" "),n("li",[e._v("Babel默认只转换新的javascript语法，而不转换新的API，比如 Iterator, Generator, Set, Maps, Proxy, Reflect,Symbol,Promise 等全局对象。以及一些在全局对象上的方法(比如 Object.assign)都不会转码")])])]),e._v(" "),n("li",[e._v("Babel的安装与配置：e\n"),n("ul",[n("li",[e._v("Babel其实是几个模块化的包，其核心功能位于称为babel-core的npm包中")]),e._v(" "),n("li",[e._v("可以直接在webpack -> loaders 里进行配置")]),e._v(" "),n("li",[e._v("也可以在项目的根目录下新建一个.babelrc文件（babel转码文件），专门配置babel的各种属性，不需要特别引用，webpack通过babel进行编译时会自动从根目录下进行搜索\n"),n("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC80LzE2LzE3MTgyMGFmODE5MTJiZTg?x-oss-process=image/format,png",alt:""}})])])]),e._v(" "),n("li",[e._v("参考链接：\n"),n("ul",[n("li",[n("a",{attrs:{href:""}},[e._v("https://www.cnblogs.com/tugenhua0707/p/9452471.html")])])])])])]),e._v(" "),n("li",[e._v("babel-polyfill\n"),n("ul",[n("li",[e._v("原理：\n"),n("ul",[n("li",[e._v("向全局对象和内置对象的prototype上添加方法来实现的。比如运行环境中不支持Array.prototype.find 方法，引入polyfill, 我们就可以使用es6方法来编写了，但是缺点就是会造成全局空间污染")])])])])])])])]),e._v(" "),n("h4",{attrs:{id:"_3-2-6-plugins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-6-plugins"}},[e._v("#")]),e._v(" 3.2.6 plugins")]),e._v(" "),n("p",[e._v("webapck.config.js结构如下")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const rimraf = require('rimraf');\nconst VueLoaderPlugin = require('vue-loader/lib/plugin');\nconst webpack = require('webpack');\nvar htmlWebpackPlugin = require('html-webpack-plugin');//下面有介绍\n\n// 删除 dist 目录\nrimraf.sync('dist');\n\nmodule.exports = {\n    mode: process.env.NODE_ENV,\n    devtool: 'eval-source-map',\n    //__dirname 指的是当前文件所在路径\n    //entry后指定入口文件\n    entry: __dirname + \"/main.js\",\n    output: {\n        //打包后输出文件地址\n        path: __dirname + \"/dist\",\n        filename: \"bundle.js\"\n    },\n    devServer: {\n        // contentBase: __dirname,\n        historyApiFallback: true,\n        inline: true,\n        hot: true\n    },\n    module: {\n        rules: [{\n            test: /\\.(sa|sc|c)ss$/,\n            use: ['style-loader', 'css-loader', 'sass-loader']\n        }, {\n            test: /\\.js$/,\n            loader: 'babel-loader',\n            options: {\n                presets: ['env']\n            },\n            // 不去编译依赖中的js文件，优化加快速度\n            exclude: /node_modules/\n        }, {\n            test: /\\.vue$/,\n            loader: 'vue-loader',\n            options: {\n                loaders: {\n                    scss: ['sass-loaders'],\n                }\n            }\n        }, ]\n    },\n    plugins: [\n        new VueLoaderPlugin(),\n        new webpack.HotModuleReplacementPlugin(),\n        new htmlWebpackPlugin({\n            template: __dirname + '/index.html', //模板路径\n            filename: 'index.html' //自动生成的HTML文件的名称\n        })\n    ]\n}\n")])])]),n("ul",[n("li",[e._v("plugin 用来扩展webpack的功能")]),e._v(" "),n("li",[e._v("介绍几个常用plugin:\n"),n("ul",[n("li",[e._v("html-webpack-plugin\n"),n("ul",[n("li",[e._v("html-webpack-plugin作用：\n"),n("ul",[n("li",[e._v("1.为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题")]),e._v(" "),n("li",[e._v("2.可以在打包后的文件中创建html入口文件，不配置的话打包出来只会有output处配置的js，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口")]),e._v(" "),n("li",[e._v("3."),n("strong",[e._v("这个loader如果不引用，webpack-dev-server在本地调试时，vue文件不渲染，只会渲染inde.html文件内的内容，但直接使用webpack打出的文件是可以正常渲染的，具体原因还不清楚😂")])])])])])]),e._v(" "),n("li",[e._v("mini-css-extract-plugin\n"),n("ul",[n("li",[e._v("mini-css-extract-plugin作用：\n"),n("ul",[n("li",[e._v("1.从bundle.js中提取css")]),e._v(" "),n("li",[e._v("2.增加hash性能优化\n"),n("ul",[n("li",[e._v("啥是hash？"),n("a",{attrs:{href:"https://www.cnblogs.com/winyh/p/9309761.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("关于hash性能优化参考这篇博文"),n("OutboundLink")],1),e._v(" "),n("ul",[n("li",[e._v("版本迭代更新的过程中，修改某个文件，更新时不要覆盖那个文件，而是产生一个新文件\n"),n("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAyMC80LzE2LzE3MTgyMmNiMDczNDMwNDM?x-oss-process=image/format,png",alt:""}})]),e._v(" "),n("li",[e._v("”_82244e91”这串字符是根据a.js的文件内容进行hash运算得到的，只有文件内容发生变化了才会有更改")])])])])])])])])])])])])])}),[],!1,null,null,null);a.default=t.exports}}]);