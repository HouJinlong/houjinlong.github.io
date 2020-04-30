(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{527:function(s,a,e){"use strict";function t(s,a,e,t,r,n,v,_){var c,l="function"==typeof s?s.options:s;if(a&&(l.render=a,l.staticRenderFns=e,l._compiled=!0),t&&(l.functional=!0),n&&(l._scopeId="data-v-"+n),v?(c=function(s){(s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(s=__VUE_SSR_CONTEXT__),r&&r.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(v)},l._ssrRegister=c):r&&(c=_?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var i=l.render;l.render=function(s,a){return c.call(a),i(s,a)}}else{var o=l.beforeCreate;l.beforeCreate=o?[].concat(o,c):[c]}return{exports:s,options:l}}e.d(a,"a",(function(){return t}))},569:function(s,a,e){"use strict";e.r(a);var t=e(527),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("从这篇开始正式折腾我的云服务器了，首先开始docker,这是我在之前腾讯云时折腾过的应用容器引擎，虽然很菜但是我感觉它挺好，好在哪呢，下面是我从 "),e("a",{attrs:{href:"https://www.runoob.com/docker/docker-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("菜鸟教程"),e("OutboundLink")],1),s._v("中 粘贴的一句话")]),s._v(" "),e("blockquote",[e("p",[s._v("Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。")])]),s._v(" "),e("ul",[e("li",[s._v("可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中(小白可以直接下别人的应用包)")]),s._v(" "),e("li",[s._v("容器是完全使用沙箱机制，相互之间不会有任何接口(不会互相影响，对我这种小白友好)")])]),s._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("h3",{attrs:{id:"docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" docker")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.runoob.com/docker/centos-docker-install.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("菜鸟教程-CentOS Docker 安装"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 yum 源为阿里的")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 Docker。")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start docker \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试命令")]),s._v("\n    docker -v\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"docker-compose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[s._v("#")]),s._v(" Docker-Compose")]),s._v(" "),e("p",[s._v("传统的"),e("code",[s._v("Docker")]),s._v("，一个容器需要一个"),e("code",[s._v("Dockerfile")]),s._v("来描述，如果说一个项目比较大，用到了较多的技术，就会有很多个容器，如果需要挨个执行 "),e("code",[s._v("Dockerfile")]),s._v("，甚至启动的时候也是挨个去启动，开发会累死，运维也会累死。"),e("code",[s._v("Docker-Compose")]),s._v("解决了这个问题，为每个项目提供一个描述文件，并且批处理项目中的所有容器。")]),s._v(" "),e("ol",[e("li",[s._v("安装docker-compose")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L https://get.daocloud.io/docker/compose/releases/download/1.22.0/docker-compose-"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -s"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -m"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /usr/local/bin/docker-compose\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("2.验证")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("  docker-compose -v\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("到此docker的安装已完成")])]),s._v(" "),e("h2",{attrs:{id:"docker基础命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker基础命令"}},[s._v("#")]),s._v(" docker基础命令")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("命令")]),s._v(" "),e("th",[s._v("作用")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("docker version")]),s._v(" "),e("td",[s._v("查看版本")])]),s._v(" "),e("tr",[e("td",[s._v("docker --help")]),s._v(" "),e("td",[s._v("帮助")])]),s._v(" "),e("tr",[e("td",[s._v("docker info")]),s._v(" "),e("td",[s._v("显示Docker信息")])])])]),s._v(" "),e("h2",{attrs:{id:"镜像命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#镜像命令"}},[s._v("#")]),s._v(" 镜像命令")]),s._v(" "),e("h3",{attrs:{id:"列出本地主机上的镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列出本地主机上的镜像"}},[s._v("#")]),s._v(" 列出本地主机上的镜像")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker images\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("同一仓库源可以有多个 TAG，代表这个仓库源的不同个版")]),s._v(" "),e("p",[s._v("参数：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("docker images -a")]),s._v(" 列出本地所有的镜像（包括中间映像层）")]),s._v(" "),e("li",[e("code",[s._v("docker images -q")]),s._v(" 只显示镜像ID")]),s._v(" "),e("li",[e("code",[s._v("docker images --digests")]),s._v(" 显示镜像的摘要信息")]),s._v(" "),e("li",[e("code",[s._v("docker images --no-trunc")]),s._v(" 显示完整的镜像信息")])]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("REPOSITORY")]),s._v(" "),e("th",[s._v("TAG")]),s._v(" "),e("th",[s._v("IMAGE ID")]),s._v(" "),e("th",[s._v("CREATED")]),s._v(" "),e("th",[s._v("VIRTUAL SIZE")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("表示镜像的仓库源")]),s._v(" "),e("td",[s._v("镜像的标签")]),s._v(" "),e("td",[s._v("镜像ID")]),s._v(" "),e("td",[s._v("镜像创建时间")]),s._v(" "),e("td",[s._v("镜像大小")])])])]),s._v(" "),e("h3",{attrs:{id:"从docker-hub查找镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从docker-hub查找镜像"}},[s._v("#")]),s._v(" 从Docker Hub查找镜像")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker search 镜像名\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("参数：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("docker search --automated 镜像名")]),s._v(" 只列出 automated build类型的镜像")]),s._v(" "),e("li",[e("code",[s._v("docker search --no-trunc 镜像名")]),s._v("  显示完整的镜像描述")]),s._v(" "),e("li",[e("code",[s._v("docker search -s 20 镜像名")]),s._v("  列出收藏数不小于指定值的镜像")])]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("NAME")]),s._v(" "),e("th",[s._v("DESCRIPTION")]),s._v(" "),e("th",[s._v("STARS")]),s._v(" "),e("th",[s._v("OFFICIAL")]),s._v(" "),e("th",[s._v("AUTOMATED")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("镜像仓库源的名称")]),s._v(" "),e("td",[s._v("镜像的描述")]),s._v(" "),e("td",[s._v("收藏数")]),s._v(" "),e("td",[s._v("否docker官方发布")]),s._v(" "),e("td",[s._v("是否automated build类型的镜像")])])])]),s._v(" "),e("h3",{attrs:{id:"下载镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像"}},[s._v("#")]),s._v(" 下载镜像")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker pull 镜像名 \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等价于")]),s._v("\ndocker pull 镜像名:latest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"删除镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除镜像"}},[s._v("#")]),s._v(" 删除镜像")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker rmi 镜像名\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制删除")]),s._v("\ndocker rmi -f 镜像名\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除多个")]),s._v("\ndocker rmi -f 镜像名1:TAG 镜像名2:TAG\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除全部")]),s._v("\ndocker rmi -f "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker images -qa"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h2",{attrs:{id:"容器命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器命令"}},[s._v("#")]),s._v(" 容器命令")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.runoob.com/docker/docker-container-usage.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("菜鸟教程"),e("OutboundLink")],1)]),s._v(" "),e("h3",{attrs:{id:"新建并启动容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建并启动容器"}},[s._v("#")]),s._v(" 新建并启动容器")]),s._v(" "),e("p",[e("code",[s._v("docker run")]),s._v(" 当本地不存在 "),e("code",[s._v("IMAGE")]),s._v(" 镜像时会 先下载 后运行")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker run "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" IMAGE "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("COMMAND"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ARG"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("options说明:")]),s._v(" "),e("ul",[e("li",[e("code",[s._v('--name="容器新名字"')]),s._v("：为容器指定一个名称")]),s._v(" "),e("li",[e("code",[s._v("-d")]),s._v("：后台运行容器，并返回容器ID，即启动守护式容器")]),s._v(" "),e("li",[e("code",[s._v("-i")]),s._v("：以交互模式运行容器,允许你对容器内的标准输入 (STDIN) 进行交互。配合-t使用")]),s._v(" "),e("li",[e("code",[s._v("-t")]),s._v("：为容器重新分配一个伪输入终端 配合-i使用")]),s._v(" "),e("li",[e("code",[s._v("-P")]),s._v("：指定端口映射")])]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("实例:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以下命令使用 ubuntu 镜像启动一个容器，参数为以命令行模式进入该容器")]),s._v("\ndocker run -it ubuntu /bin/bash\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 要退出终端，直接输入 exit")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("参数说明：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("-i")]),s._v(": 交互式操作。")]),s._v(" "),e("li",[e("code",[s._v("-t")]),s._v(": 终端。")]),s._v(" "),e("li",[e("code",[s._v("ubuntu")]),s._v(": ubuntu 镜像。")]),s._v(" "),e("li",[e("code",[s._v("/bin/bash")]),s._v("：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。")])]),s._v(" "),e("h3",{attrs:{id:"列出容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列出容器"}},[s._v("#")]),s._v(" 列出容器")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("options，参数说明：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("docker ps -l")]),s._v(" 显示最近创建的容器")]),s._v(" "),e("li",[e("code",[s._v("docker ps -a")]),s._v(" 显示所有容器（默认仅显示正在运行）")]),s._v(" "),e("li",[e("code",[s._v("docker ps -n 5")]),s._v(" 显示最近5个创建的容器")]),s._v(" "),e("li",[e("code",[s._v("docker ps -q")]),s._v(" 只显示容器编号")]),s._v(" "),e("li",[e("code",[s._v("docker ps --no-trunc")]),s._v(" 不截断输出")])]),s._v(" "),e("h3",{attrs:{id:"退出容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#退出容器"}},[s._v("#")]),s._v(" 退出容器")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器停止退出")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器不停止退出")]),s._v("\nctrl+P+Q\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"启动容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[s._v("#")]),s._v(" 启动容器")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker start 容器名/容器id\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"重启容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重启容器"}},[s._v("#")]),s._v(" 重启容器")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker restart 容器名/容器id\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"停止容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#停止容器"}},[s._v("#")]),s._v(" 停止容器")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker stop 容器名/容器id\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"强制停止容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强制停止容器"}},[s._v("#")]),s._v(" 强制停止容器")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" 容器名/容器id\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"删除已停止的容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除已停止的容器"}},[s._v("#")]),s._v(" 删除已停止的容器")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" 容器id\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一次性删除多个容器")]),s._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a -q"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a -q "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"查看容器日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看容器日志"}},[s._v("#")]),s._v(" 查看容器日志")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker logs -f -t --tail 容器id\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("参数说明:")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("-t")]),s._v("：加入时间戳")]),s._v(" "),e("li",[e("code",[s._v("-f")]),s._v("：跟随最新的日志打印")]),s._v(" "),e("li",[e("code",[s._v("--tail")]),s._v(": 数字：显示最后多少条")])]),s._v(" "),e("h3",{attrs:{id:"查看容器内运行的进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看容器内运行的进程"}},[s._v("#")]),s._v(" 查看容器内运行的进程")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" 容器id\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"查看容器内部细节"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看容器内部细节"}},[s._v("#")]),s._v(" 查看容器内部细节")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker inspect 容器id\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"进入正在运行的容器并以命令行交互"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入正在运行的容器并以命令行交互"}},[s._v("#")]),s._v(" 进入正在运行的容器并以命令行交互")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# exec 在容器中打开新的终端，并且可以启动新的进程")]),s._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 容器id "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("  \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# attach 直接进入容器启动命令的终端，不会启动新的进程")]),s._v("\ndocker attach 容器id\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h3",{attrs:{id:"从容器和主机直接互相-拷贝文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从容器和主机直接互相-拷贝文件"}},[s._v("#")]),s._v(" 从容器和主机直接互相 拷贝文件")]),s._v(" "),e("p",[s._v("容器路径加前缀 "),e("code",[s._v("容器id:")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拷贝容器文件到 主机")]),s._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 容器id:容器内路径 目的主机路径\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拷贝主机文件到 容器")]),s._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 目的主机路径 容器id:容器内路径 \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"从容器创建一个新的镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从容器创建一个新的镜像"}},[s._v("#")]),s._v(" 从容器创建一个新的镜像")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker commit "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 容器id 目标镜像名:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("标签名"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("常用选项:")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("-a")]),s._v(" :提交的镜像作者；")]),s._v(" "),e("li",[e("code",[s._v("-c")]),s._v(" :使用Dockerfile指令来创建镜像；")]),s._v(" "),e("li",[e("code",[s._v("-m")]),s._v(" :提交时的说明文字；")]),s._v(" "),e("li",[e("code",[s._v("-p")]),s._v(" :在commit时，将容器暂停。")])]),s._v(" "),e("h2",{attrs:{id:"docker-问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-问题"}},[s._v("#")]),s._v(" docker 问题")]),s._v(" "),e("h3",{attrs:{id:"docker-启动失败"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-启动失败"}},[s._v("#")]),s._v(" docker 启动失败")]),s._v(" "),e("p",[s._v("今天在公司打算实践一下docker部署ftp,写完 "),e("code",[s._v("docker-compose.yml")]),s._v(" 运行，错误提示docker未运行，但是运行 "),e("code",[s._v("sudo systemctl start docker")]),s._v(" 报错")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HouJinlong/pic@master/2020-04-10/start_docker_log.png",alt:"start_docker_log"}})]),s._v(" "),e("p",[s._v("最后网上看了一大堆解决办法，各种方法尝试 都没有用，最后才发现 是我之前 改了一下 "),e("code",[s._v("/etc/docker/daemon.json")]),s._v(" 用vim编辑的，写错了，所以....")])])}),[],!1,null,null,null);a.default=r.exports}}]);