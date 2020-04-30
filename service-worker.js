/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "20171231/banner.gif",
    "revision": "a84f07e514e3473175bdd32d37cbd5f0"
  },
  {
    "url": "20171231/first-day-of-spring-2016-northern-hemisphere.gif",
    "revision": "6f22be4e029e93d82823665a482806b0"
  },
  {
    "url": "20171231/homeScreen128.png",
    "revision": "ef8b9f80c27b24820b380d8c89991db6"
  },
  {
    "url": "20171231/homeScreen144.png",
    "revision": "ef8b9f80c27b24820b380d8c89991db6"
  },
  {
    "url": "20171231/homeScreen48.png",
    "revision": "ef8b9f80c27b24820b380d8c89991db6"
  },
  {
    "url": "20171231/homeScreen72.png",
    "revision": "ef8b9f80c27b24820b380d8c89991db6"
  },
  {
    "url": "20171231/homeScreen96.png",
    "revision": "ef8b9f80c27b24820b380d8c89991db6"
  },
  {
    "url": "20171231/logo.png",
    "revision": "ef8b9f80c27b24820b380d8c89991db6"
  },
  {
    "url": "20171231/summer-solstice-strawberry-moon.gif",
    "revision": "75d8fb9ccbd0995d026ed784a72e486f"
  },
  {
    "url": "20171231/tooth.gif",
    "revision": "1d5b4434920a088ca92202a1019e84fe"
  },
  {
    "url": "404.html",
    "revision": "36987e5a663a0727f3f8fe32a098e7c5"
  },
  {
    "url": "about.html",
    "revision": "19d8cd1e6832da2e629f209bba4b75c5"
  },
  {
    "url": "assets/css/0.styles.b10eada8.css",
    "revision": "42efc86f958bd0531fb81717a33241af"
  },
  {
    "url": "assets/img/banner.8069aec6.png",
    "revision": "8069aec697a05cbba6d6a4e5b238b7a6"
  },
  {
    "url": "assets/img/default.7d5bc7de.jpg",
    "revision": "7d5bc7de7aa5d9e320f7a771619870f5"
  },
  {
    "url": "assets/img/first-day-of-spring-2016-northern-hemisphere.6f22be4e.gif",
    "revision": "6f22be4e029e93d82823665a482806b0"
  },
  {
    "url": "assets/img/footer-title-icon-1.2d88de07.png",
    "revision": "2d88de07905a123a030e467bdceeca2f"
  },
  {
    "url": "assets/img/NotFound.b5c9b223.jpg",
    "revision": "b5c9b223d7dc40d8f56617c8979d30a2"
  },
  {
    "url": "assets/img/summer-solstice-strawberry-moon.75d8fb9c.gif",
    "revision": "75d8fb9ccbd0995d026ed784a72e486f"
  },
  {
    "url": "assets/js/10.7ebc0ee9.js",
    "revision": "bc4fb030c35d04050a47dfc102cca8d8"
  },
  {
    "url": "assets/js/11.7f2b2a98.js",
    "revision": "8e866a501e4aaf9c9da4874af942985f"
  },
  {
    "url": "assets/js/12.3e928a27.js",
    "revision": "d8e4464fa733fbfda74b3a4b020c41c4"
  },
  {
    "url": "assets/js/13.30dcdf9b.js",
    "revision": "4dc8f47598585ab4ee8576199d5b00f6"
  },
  {
    "url": "assets/js/14.d1b26e2a.js",
    "revision": "6a467d04abe01c1ef596e09491d54ddd"
  },
  {
    "url": "assets/js/15.3e73fbdd.js",
    "revision": "8934e1aafc0d9c7a716d4fe4d0c0fbc0"
  },
  {
    "url": "assets/js/16.15cbd9b7.js",
    "revision": "50f00551dc8fa2a0e8c7c28c72183435"
  },
  {
    "url": "assets/js/17.c765985b.js",
    "revision": "a9c27192e61b56342a58325508f18070"
  },
  {
    "url": "assets/js/18.b8850acb.js",
    "revision": "e478a34b743747da8b10b4e156cf35e2"
  },
  {
    "url": "assets/js/19.fe3228ab.js",
    "revision": "a3df285110f4071777156d5ba4ba1abb"
  },
  {
    "url": "assets/js/2.ab5a1ec4.js",
    "revision": "99a50c2fd4646cbf11f7bf966545798c"
  },
  {
    "url": "assets/js/20.3c19987a.js",
    "revision": "173d6287d1e68b8398450d2285303e3c"
  },
  {
    "url": "assets/js/21.83a4e346.js",
    "revision": "d5bd669f268eb886c619938deac37942"
  },
  {
    "url": "assets/js/22.4ff3ed05.js",
    "revision": "bdb1589b60f2e718d0695fdc1079c9a8"
  },
  {
    "url": "assets/js/23.ae25684a.js",
    "revision": "b859204c73984323986921ad76bdb18a"
  },
  {
    "url": "assets/js/24.9edcc862.js",
    "revision": "6e5ff752284cb1e5fde11818d1207f93"
  },
  {
    "url": "assets/js/25.1879b73c.js",
    "revision": "65e118573ad68b3c48c4e50fb06a3547"
  },
  {
    "url": "assets/js/26.9b6a954d.js",
    "revision": "a9daf66d16a1c733dd5abd41a8b58390"
  },
  {
    "url": "assets/js/27.7dd03c8b.js",
    "revision": "c14c07939b9bfcd5f54706419e83744e"
  },
  {
    "url": "assets/js/28.26bb02c1.js",
    "revision": "515ed9c4e82e0a0ca43c56c243ef7381"
  },
  {
    "url": "assets/js/29.138d2857.js",
    "revision": "6f4bb357b5fdceb053f2a35ee488bd47"
  },
  {
    "url": "assets/js/3.6c8fc6cf.js",
    "revision": "722b3cc75bc0aa900ab3d22b318057bf"
  },
  {
    "url": "assets/js/30.8a4702b6.js",
    "revision": "ce8196c2c2ee0c5e286f939733993234"
  },
  {
    "url": "assets/js/31.5d41da1a.js",
    "revision": "a642bbe485cf8ca9861e1014553bff82"
  },
  {
    "url": "assets/js/4.a5318c04.js",
    "revision": "ec747a10ccbb1853dcac988e623a69b9"
  },
  {
    "url": "assets/js/5.2e010c69.js",
    "revision": "fa0c9785e975a0918f6bf9d2f16bedfd"
  },
  {
    "url": "assets/js/6.a2a137b1.js",
    "revision": "49d03b343097ed6bab92509e408b5df3"
  },
  {
    "url": "assets/js/7.e4dc16f7.js",
    "revision": "31db7aed436bff881c16c644209194ae"
  },
  {
    "url": "assets/js/8.19beb47f.js",
    "revision": "e9d7bb2d28783be50d1ba0b881cd2b58"
  },
  {
    "url": "assets/js/9.ac3eddf5.js",
    "revision": "0034b70d856c399404786f0715139fc6"
  },
  {
    "url": "assets/js/app.39fd6404.js",
    "revision": "41e604a5da6ff54f4cb897ac4de472bb"
  },
  {
    "url": "index.html",
    "revision": "aa3e05d532a19410f414eb70f883dbb1"
  },
  {
    "url": "link.html",
    "revision": "bd51dc555293c197f40de08f4e7a20a0"
  },
  {
    "url": "other/di-yi-pian.html",
    "revision": "ab3eff74301615b8d11de689816967ef"
  },
  {
    "url": "other/github-fang-wen-su-du-man.html",
    "revision": "389cc8c31d5b263a639d9e43fa1afbe1"
  },
  {
    "url": "other/index.html",
    "revision": "41ba29479a07762cf02d3322a4210d15"
  },
  {
    "url": "other/mian-feicdn-jsdelivr-github.html",
    "revision": "0a59492939f01217c9293d03e1fa75b6"
  },
  {
    "url": "other/npm-wen-ti-hui-zong.html",
    "revision": "c118ccd5efba4fae83772b94e65563d1"
  },
  {
    "url": "posts/index.html",
    "revision": "0703619f3f14d5086729f4df67833539"
  },
  {
    "url": "program/a-li-yun-fu-wu-qi.html",
    "revision": "701857d4827470849f07933f89260587"
  },
  {
    "url": "program/docker-shi-yong.html",
    "revision": "6e68b2dae51f645f60f35bfc68bef9d7"
  },
  {
    "url": "program/docker.html",
    "revision": "8fb593c301494955d79c64b36691eb1d"
  },
  {
    "url": "program/fe-dai-ma-shang-xian-zi-dong-geng-xin-wan-neng-huan-jing-jiao-ben.html",
    "revision": "e15cbe2bff5fb995108bc86b45e40ae9"
  },
  {
    "url": "program/fe-wan-neng-ce-shi-huan-jing.html",
    "revision": "c20519d8648729d6c0590fc065dc7f8a"
  },
  {
    "url": "program/git-xiao-ji-qiao.html",
    "revision": "437f13365436bde385b79ca3fc46f797"
  },
  {
    "url": "program/index.html",
    "revision": "41b80706e6b269fbe88abd880ea338c4"
  },
  {
    "url": "program/js-performance-huo-qu-wen-jiansize.html",
    "revision": "31b864ee39d0525ee6414f4c4459afd7"
  },
  {
    "url": "program/linux-ming-ling.html",
    "revision": "7cdf124d92fe6fbb07cb952deb1eb0a6"
  },
  {
    "url": "program/linux.html",
    "revision": "49c6850a3f2b06f86547c55447a36aa0"
  },
  {
    "url": "program/svelte-zeng-jia-babel.html",
    "revision": "2fecc66abb76e507a9122916a43fe6b7"
  },
  {
    "url": "program/window-xiavscode-zhi-xingsh-wen-jian.html",
    "revision": "4d416429c1669b3eaa7e3a4b977eb4e3"
  },
  {
    "url": "tags/index.html",
    "revision": "a7e70c5806c9a0a6658d5af74032ef93"
  },
  {
    "url": "timeline.html",
    "revision": "479554c8a7a24463c4733d1ea6ea3e1a"
  },
  {
    "url": "tools/gh-pages.html",
    "revision": "c56833090df4e04cac7e18325bbbd9d2"
  },
  {
    "url": "tools/hao-yong-de-ban-gong-gong-ju.html",
    "revision": "860efef7a41978b7d1341dde56d05b79"
  },
  {
    "url": "tools/hao-yong-dejavascript-ku.html",
    "revision": "8961e30e241c258ad22bbc13dc0ac232"
  },
  {
    "url": "tools/index.html",
    "revision": "b37a3870170f49f5cb9668e5e21ec2b1"
  },
  {
    "url": "tools/lftp.html",
    "revision": "8da293652d6f6a29eff8987f96ccd405"
  },
  {
    "url": "tools/tu-chuang.html",
    "revision": "6db34c431554d4a6d7bebe776cfcf980"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
