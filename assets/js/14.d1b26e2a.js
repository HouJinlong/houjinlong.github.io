(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{527:function(a,t,s){"use strict";function e(a,t,s,e,n,r,v,_){var i,l="function"==typeof a?a.options:a;if(t&&(l.render=t,l.staticRenderFns=s,l._compiled=!0),e&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),v?(i=function(a){(a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),n&&n.call(this,a),a&&a._registeredComponents&&a._registeredComponents.add(v)},l._ssrRegister=i):n&&(i=_?function(){n.call(this,this.$root.$options.shadowRoot)}:n),i)if(l.functional){l._injectStyles=i;var o=l.render;l.render=function(a,t){return i.call(t),o(a,t)}}else{var c=l.beforeCreate;l.beforeCreate=c?[].concat(c,i):[i]}return{exports:a,options:l}}s.d(t,"a",(function(){return e}))},555:function(a,t,s){"use strict";s.r(t);var e=s(527),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("作为一个开发人员，我深刻认是到应该扎实一下"),s("code",[a._v("Linux 基础命令")]),a._v(",毕竟图形用户界面 (GUI)是给普通用户用的，高手都是命令行！一开始作为小白决定 命令行一点没有GUI方便，但是现在 emmmmmmmmmmmm 真香！ 只总结了部分，过于基础的忽略了")]),a._v(" "),s("h2",{attrs:{id:"yum-仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yum-仓库"}},[a._v("#")]),a._v(" yum:仓库")]),a._v(" "),s("p",[a._v("从一个前端开发人员来讲yum和npm很像,yum提供了查找、安装、删除某一个、一组甚至全部软件包的命令，而且命令简洁而又好记("),s("a",{attrs:{href:"https://www.runoob.com/linux/linux-yum.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("yum菜鸟教程地址"),s("OutboundLink")],1),a._v(")")]),a._v(" "),s("h3",{attrs:{id:"_1-查询远程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-查询远程"}},[a._v("#")]),a._v(" 1. 查询远程")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("命令")]),a._v(" "),s("th",[a._v("作用")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("yum search git")]),a._v(" "),s("td",[a._v("搜索某个软件名称或者描述的重要关键字")])]),a._v(" "),s("tr",[s("td",[a._v("yum info git")]),a._v(" "),s("td",[a._v("列出软件功能")])]),a._v(" "),s("tr",[s("td",[a._v("yum list")]),a._v(" "),s("td",[a._v("列出yum服务器上面所有的软件名称")])]),a._v(" "),s("tr",[s("td",[a._v("yum list updates")]),a._v(" "),s("td",[a._v("列出yum服务器上可提供本机进行升级的软件")])])])]),a._v(" "),s("h3",{attrs:{id:"_2-安装-升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-升级"}},[a._v("#")]),a._v(" 2. 安装/升级")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum install/update 软件名称 -y  // -y 安装过程中免输入y确认\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_3-删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-删除"}},[a._v("#")]),a._v(" 3. 删除")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum remove 软件名称\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"grep：查找文件中的关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grep：查找文件中的关键字"}},[a._v("#")]),a._v(" grep：查找文件中的关键字")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"string"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("使用grep命令查找文件中的所有React关键字:")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://ww1.sinaimg.cn/large/006I5hBxly1gaibyoj3fcj30oq09a3yw.jpg",alt:"undefined"}})]),a._v(" "),s("p",[a._v("[选项]用法：")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://ww1.sinaimg.cn/large/006I5hBxly1gaibzgod9oj30zk0m9wgd.jpg",alt:"undefined"}})]),a._v(" "),s("h2",{attrs:{id:"cat：查看文件的内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cat：查看文件的内容"}},[a._v("#")]),a._v(" cat：查看文件的内容")]),a._v(" "),s("p",[a._v("cat 可以 创建有内容的文件，查看整个文件，合并文件，拷贝文件")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("命令")]),a._v(" "),s("th",[a._v("作用")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("cat filename")]),a._v(" "),s("td",[a._v("一次显示整个文件")])]),a._v(" "),s("tr",[s("td",[a._v("cat > filename")]),a._v(" "),s("td",[a._v("创建一个文件，并将前面命令的输出内容填充进去")])]),a._v(" "),s("tr",[s("td",[a._v("cat file1 file2 > file")]),a._v(" "),s("td",[a._v("file1 和 file2 合并为 file")])]),a._v(" "),s("tr",[s("td",[a._v("cat file1 > file")]),a._v(" "),s("td",[a._v("拷贝file1 为file")])])])]),a._v(" "),s("h2",{attrs:{id:"tail：查看文档的内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tail：查看文档的内容"}},[a._v("#")]),a._v(" tail：查看文档的内容")]),a._v(" "),s("p",[s("code",[a._v("tail")]),a._v("命令在查看崩溃报告或以前的历史记录日志时很有用,默认显示文档的最后 10 行")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" somefile\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("选项:")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("-f")]),a._v(" 循环读取。"),s("code",[a._v("tail -f notes.log")])])]),a._v(" "),s("p",[a._v("复制代码此命令显示 notes.log 文件的最后 10 行。当将某些行添加至 notes.log 文件时，tail 命令会继续显示这些行。 显示一直继续，直到您按下（Ctrl-C）组合键停止显示。")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("-n")]),a._v(" 最后xx行。"),s("code",[a._v("tail -n 10 notes.log")]),a._v("\n复制代码显示文件 notes.log 的内容，文件末尾10行。")])]),a._v(" "),s("h2",{attrs:{id:"find-搜索文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find-搜索文件"}},[a._v("#")]),a._v(" find: 搜索文件")]),a._v(" "),s("p",[a._v("find命令可以快速查找文件或目录。当你正在处理具有数百个文件和多个目录的大型项目时，此功能很有用")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" path -name filename\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("例子：")]),a._v(" "),s("ol",[s("li",[a._v("查找当前目录下所有index.js "),s("code",[a._v("find . -name index.js")])]),a._v(" "),s("li",[a._v("查找当前目录下所有js文件 "),s("code",[a._v('find . -name "*.js"')])]),a._v(" "),s("li",[a._v("查找当前目录下文件夹中有-log的文件夹 "),s("code",[a._v('find . -name "*-log"')])])]),a._v(" "),s("h2",{attrs:{id:"tree：以树状图列出目录的内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tree：以树状图列出目录的内容"}},[a._v("#")]),a._v(" tree：以树状图列出目录的内容")]),a._v(" "),s("p",[a._v("常在写文档时需要列一下文件目录结构，这个时候"),s("code",[a._v("tree")]),a._v("命令就能帮个忙了。如果没有"),s("code",[a._v("tree")]),a._v("命令便可用"),s("code",[a._v("yum")]),a._v("安装")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" tree -y\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"xargs-给命令传递参数的过滤器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xargs-给命令传递参数的过滤器"}},[a._v("#")]),a._v(" xargs: 给命令传递参数的过滤器")]),a._v(" "),s("p",[a._v("xargs 一般是和管道一起使用,"),s("a",{attrs:{href:"https://www.runoob.com/linux/linux-comm-xargs.html",target:"_blank",rel:"noopener noreferrer"}},[a._v(" xargs 命令-菜鸟教程"),s("OutboundLink")],1)]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("somecommand "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" -item  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"：管道命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#：管道命令"}},[a._v("#")]),a._v(" | ：管道命令")]),a._v(" "),s("p",[a._v("通常情况下，我们在终端只能执行一条命令，然后按下回车执行，那么如何执行多条命令呢？")]),a._v(" "),s("p",[a._v("顺序执行多条命令："),s("code",[a._v("command1;command2;command3;")]),a._v(" 简单的顺序指令可以通过"),s("code",[a._v(";")]),a._v("来实现。")]),a._v(" "),s("p",[a._v("有条件的执行多条命令："),s("code",[a._v("which command1 && command2 || command3")])]),a._v(" "),s("p",[s("code",[a._v("&&")]),a._v(" : 如果前一条命令执行成功则执行下一条命令，和JavaScript中用法一致")]),a._v(" "),s("p",[s("code",[a._v("||")]),a._v(" :与&&命令相反，执行不成功时执行下一个。")]),a._v(" "),s("p",[s("code",[a._v("$?")]),a._v(": 存储上一次命令的返回结果")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" git"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/dev/null "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" --help  // 如果存在git命令，执行git --help命令\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$?")]),a._v(" \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("而管道命令则可以衔接各种命令的输出输入，使得连锁操作变得简单。")]),a._v(" "),s("blockquote",[s("p",[a._v("管道是一种通信机制，通常用于进程间的通信（也可通过socket进行网络通信），它表现出来的形式将前面每一个进程的输出（stdout）直接作为下一个进程的输入（stdin）")])]),a._v(" "),s("p",[s("img",{attrs:{src:"http://ww1.sinaimg.cn/large/006I5hBxly1gaie5ldlphj30je05njra.jpg",alt:"undefined"}})]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("指令1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" 指令2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" …\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("管道命令的注意事项：")]),a._v(" "),s("ul",[s("li",[a._v("只能处理前一条指令的正确输出，不能处理错误输出；")]),a._v(" "),s("li",[a._v("后一条指令，必须能够接收标准输入流命令才能执行。")])]),a._v(" "),s("p",[a._v("例子：")]),a._v(" "),s("ol",[s("li",[a._v("分页显示 /etc 目录 中内容的详细信息")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -l /etc "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("more")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("将一个字符串输入到一个文件中")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" hello.txt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"chmod-修改文件权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chmod-修改文件权限"}},[a._v("#")]),a._v(" chmod: 修改文件权限")]),a._v(" "),s("p",[a._v("故事的开始，都会先留一个悬念。")]),a._v(" "),s("p",[a._v("只有程序员能懂的冷笑话系列中，有个比较经典的段子：")]),a._v(" "),s("p",[a._v("请用最简洁的语言描述我国FL。")]),a._v(" "),s("p",[a._v("754。")]),a._v(" "),s("p",[a._v("所以，754是什么意思呢？754是什么意思呢？754是什么意思呢？")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("chmod [option]  文件或目录\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"http://ww1.sinaimg.cn/large/006I5hBxly1gaie11bc1hj31ao2as7ss.jpg",alt:"undefined"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);