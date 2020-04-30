(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{527:function(t,s,n){"use strict";function e(t,s,n,e,a,r,i,l){var p,o="function"==typeof t?t.options:t;if(s&&(o.render=s,o.staticRenderFns=n,o._compiled=!0),e&&(o.functional=!0),r&&(o._scopeId="data-v-"+r),i?(p=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},o._ssrRegister=p):a&&(p=l?function(){a.call(this,this.$root.$options.shadowRoot)}:a),p)if(o.functional){o._injectStyles=p;var _=o.render;o.render=function(t,s){return p.call(s),_(t,s)}}else{var v=o.beforeCreate;o.beforeCreate=v?[].concat(v,p):[p]}return{exports:t,options:o}}n.d(s,"a",(function(){return e}))},552:function(t,s,n){"use strict";n.r(s);var e=n(527),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[t._v("前几天写上线代码同步测试环境脚本时，需要上传文件到ftp,之前都是走js(vinyl-ftp),这次既然用sh脚本了，于是发现了这个好用的库，顺带做个记录")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('#!/bin/sh\ndir=$1\nftp_dir=$2\nip=xx.xx.31.219\nport=21\nuser=[用户名]\npwd=[密码]\n\n# 连接\nlftp -u $user,$pwd -p $port $ip <<EOF    \n# 把$dir(本地目录)的东西都上传到$ftp_dir(远程目录)\nmirror -R "$dir" "$ftp_dir"\n\n# 结束连接\nbye\nEOF\necho "ftp done"\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br")])]),n("h2",{attrs:{id:"windows-使用-lftp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows-使用-lftp"}},[t._v("#")]),t._v(" windows 使用 lftp")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://pan.baidu.com/s/1uQlCzVbOcL1uQlOMjaKF1Q",target:"_blank",rel:"noopener noreferrer"}},[t._v("网盘下载地址"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://caibaoz.com/blog/2013/04/10/lftp-for-windows/",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文地址"),n("OutboundLink")],1)]),t._v(" "),n("blockquote",[n("p",[t._v("安装完成后 环境变量里边添加 xxxx\\xxxx\\lftp-4.4.8\\bin,重启终端窗口 便可以运行lftp命令了")])]),t._v(" "),n("p",[n("img",{attrs:{src:"http://ww1.sinaimg.cn/large/006I5hBxly1gaelcfbweaj30qb0h5jrt.jpg",alt:"sp20191230_113215_638.png"}})]),t._v(" "),n("h2",{attrs:{id:"lftp使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lftp使用"}},[t._v("#")]),t._v(" lftp使用")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/fjb2080/article/details/7758486",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文地址"),n("OutboundLink")],1)]),t._v(" "),n("blockquote",[n("p",[t._v("大多数图形界面的 ftp客户端，都有两栏窗口，一栏为本地目录，一栏为远程目录。lftp 也采用这种方式工作，只不过没有使用图形界面直观的显示")])]),t._v(" "),n("p",[n("img",{attrs:{src:"http://ww1.sinaimg.cn/large/006I5hBxly1gaepjearuvj30o3061mx2.jpg",alt:"sp20191230_121524_422.png"}})]),t._v(" "),n("ul",[n("li",[t._v("其中， ! 表示执行本地命令，lftp中没有与 ls 对应的本地命令 lls， 所以要使用 !ls 显示本地目录文件")])]),t._v(" "),n("blockquote",[n("p",[t._v("使用以上命令确认当前工作目录的情况。以下命令用于从本地目录上传，或者从远程目录下载：")])]),t._v(" "),n("p",[n("img",{attrs:{src:"http://ww1.sinaimg.cn/large/006I5hBxly1gaepjyogt0j30oc067q2u.jpg",alt:"sp20191230_135754_749.png"}})]),t._v(" "),n("blockquote",[n("p",[t._v("在远程目录中，可以使用以下命令操作文件")])]),t._v(" "),n("p",[n("img",{attrs:{src:"http://ww1.sinaimg.cn/large/006I5hBxly1gaepkshjqvj30o005l0sn.jpg",alt:"sp20191230_135838_645.png"}})]),t._v(" "),n("blockquote",[n("p",[t._v("使用 exit 命令退出 lftp")])]),t._v(" "),n("h2",{attrs:{id:"注意"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),n("h3",{attrs:{id:"window路径"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#window路径"}},[t._v("#")]),t._v(" window路径")]),t._v(" "),n("p",[t._v("window本地路径 前面要增加/cygdrive")]),t._v(" "),n("h3",{attrs:{id:"sftp-和-ftp-默认端口号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sftp-和-ftp-默认端口号"}},[t._v("#")]),t._v(" sftp 和 ftp 默认端口号")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("sftp")]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("ftp")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("22")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("21")])])])]),t._v(" "),n("blockquote",[n("p",[t._v("默认的可不写，但是不能写错，同时呢,如果其他的sftp服务器的端口号修改之后,可以通过-P来指定要通过哪个端口号连接.")])]),t._v(" "),n("h3",{attrs:{id:"window上传文件异常"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#window上传文件异常"}},[t._v("#")]),t._v(" window上传文件异常")]),t._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",[t._v("【暂未解决】window上传的文件夹 无法删除 响应：550 Remove directory operation failed")])])])}),[],!1,null,null,null);s.default=a.exports}}]);