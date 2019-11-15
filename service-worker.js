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
    "url": "404.html",
    "revision": "858bfa40fa3c43039ba23f3997a479cc"
  },
  {
    "url": "assets/css/0.styles.a9125b9c.css",
    "revision": "d2e070b52207b6a58d8eba631ec69982"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.33ff78a5.js",
    "revision": "673f3c23e9eb91421f70284fc7d6ec71"
  },
  {
    "url": "assets/js/11.d82ac839.js",
    "revision": "2f1517272e0ba15ef3835661b9a22b25"
  },
  {
    "url": "assets/js/12.ddaeea89.js",
    "revision": "58ef2709fb63d773881487f4139bc769"
  },
  {
    "url": "assets/js/13.731dbb22.js",
    "revision": "6904bc250a34918a715b4eb30bb15337"
  },
  {
    "url": "assets/js/14.a5f5ce34.js",
    "revision": "8c4baed07b8cedfead32caf26b6b8de6"
  },
  {
    "url": "assets/js/15.ac337998.js",
    "revision": "ae0641e277b775328797949a00a3ffa6"
  },
  {
    "url": "assets/js/16.2a631573.js",
    "revision": "fb210f7acde84f594e723519cdc5c68e"
  },
  {
    "url": "assets/js/17.5dabacee.js",
    "revision": "1bde647655076d815cdbe5b8f1afed2f"
  },
  {
    "url": "assets/js/18.9988a22e.js",
    "revision": "9ab742802469aed782438312c4aaae43"
  },
  {
    "url": "assets/js/19.f8464cd8.js",
    "revision": "835bdd14be8a202bc271e73292a050c2"
  },
  {
    "url": "assets/js/20.e3c5b316.js",
    "revision": "245a761ed8c4a906fe6ea8991de928b5"
  },
  {
    "url": "assets/js/21.e4b660e3.js",
    "revision": "cc85cf3bc6bd4ef3fb766eaeac9c76d6"
  },
  {
    "url": "assets/js/22.f9e65c30.js",
    "revision": "b80f0c51a3e42e674a73a7323c89147f"
  },
  {
    "url": "assets/js/23.e4cf1d72.js",
    "revision": "8f937f734aa02da985f4da641ca660c7"
  },
  {
    "url": "assets/js/24.40c22826.js",
    "revision": "3e91ea656ca0d6630293269ca48cacd5"
  },
  {
    "url": "assets/js/25.76adfaa1.js",
    "revision": "f1fcb87c4c067771614a831042c25122"
  },
  {
    "url": "assets/js/26.2c5a7363.js",
    "revision": "42e01077ea43721f866924ded3e5739d"
  },
  {
    "url": "assets/js/27.4787986f.js",
    "revision": "6445a5b02eccf7606004bee3a80d2865"
  },
  {
    "url": "assets/js/28.1f617f6e.js",
    "revision": "8d9bc76d9ac2b6389543c5e6bc5e6625"
  },
  {
    "url": "assets/js/29.f1fcc796.js",
    "revision": "0bf7acfe24a66f9ac831cdf8ee4dd68d"
  },
  {
    "url": "assets/js/3.81926f54.js",
    "revision": "e3cb3977e2389e292eac9e3032d47ca4"
  },
  {
    "url": "assets/js/30.34d6cdca.js",
    "revision": "79338d793ff627d3de1f7807a49f8c01"
  },
  {
    "url": "assets/js/31.fd6ed399.js",
    "revision": "818927f709dfeb65a2ad2f5eb26ffec1"
  },
  {
    "url": "assets/js/32.9692eabc.js",
    "revision": "88b130885787fad044690d4f5ee91de8"
  },
  {
    "url": "assets/js/33.65396895.js",
    "revision": "721ed6f15e52ba992566dad61ba2dd26"
  },
  {
    "url": "assets/js/34.2ea09099.js",
    "revision": "91f93c14ad02cb7cb8edcff4778aea54"
  },
  {
    "url": "assets/js/35.069596b1.js",
    "revision": "a81cf283fc24a37d33cfd62922af093c"
  },
  {
    "url": "assets/js/36.b90019a5.js",
    "revision": "5e76b438afd14c8e0ccb4492fee80d74"
  },
  {
    "url": "assets/js/37.1dfead7b.js",
    "revision": "aa20db68407650ed14b052cbed3c5b6b"
  },
  {
    "url": "assets/js/38.4783aa34.js",
    "revision": "1cda020e2605d389df8556c7eaa4daed"
  },
  {
    "url": "assets/js/39.6c786cd1.js",
    "revision": "b2392e3c8e43b99a61ee09c86071aa03"
  },
  {
    "url": "assets/js/4.ae20dbc1.js",
    "revision": "30da4cf4e962c66d6b123a12521bd6d4"
  },
  {
    "url": "assets/js/40.2d363ba8.js",
    "revision": "fa2b5fdc0d3fc10dbf1ef20738231979"
  },
  {
    "url": "assets/js/41.78dde3cf.js",
    "revision": "e6f59ed3551dc1ce4d6e2c761f41556c"
  },
  {
    "url": "assets/js/42.f7290cd0.js",
    "revision": "066fb7be4d903c43ad33a20ec1162c15"
  },
  {
    "url": "assets/js/43.bc7096e3.js",
    "revision": "520b8fa61f1578ea7d095f62e408784f"
  },
  {
    "url": "assets/js/44.1699a36c.js",
    "revision": "8061a9e934d6c1438c1c753e0d79833b"
  },
  {
    "url": "assets/js/45.7115254d.js",
    "revision": "9eb67995927df74022d55de3c3e9eabe"
  },
  {
    "url": "assets/js/46.6f5ce2fd.js",
    "revision": "da5944a9394878b2f65ea4e023b0e226"
  },
  {
    "url": "assets/js/47.57601c83.js",
    "revision": "f81703c7ad7fa2ca5cd31e366fbf8992"
  },
  {
    "url": "assets/js/48.78788903.js",
    "revision": "c3b244d22fa14018d68c1c963e416ce6"
  },
  {
    "url": "assets/js/49.dba8f1db.js",
    "revision": "3abd23a10606f791717185ebe9257f1e"
  },
  {
    "url": "assets/js/5.e3c4cc45.js",
    "revision": "2dd0a46ed2cbb342f21590ddd889ceee"
  },
  {
    "url": "assets/js/6.cb286943.js",
    "revision": "1bc15f7bf9fbf89264ac077f67213d0e"
  },
  {
    "url": "assets/js/7.95aea3da.js",
    "revision": "5e948bafec5b1dbfd42d949ea9b91bf8"
  },
  {
    "url": "assets/js/8.362f312f.js",
    "revision": "2765937c78aa61cd3ae63d88b0ac3ebf"
  },
  {
    "url": "assets/js/9.96764b7d.js",
    "revision": "edb75a06d0639a256dae9d6bb4a160ad"
  },
  {
    "url": "assets/js/app.1ba985e3.js",
    "revision": "b218d21cafb7a4292188e82e3fe6db0e"
  },
  {
    "url": "assets/js/vendors~notification.49c74f6a.js",
    "revision": "34ba7518e0ae74e8e052217d47a6a4e7"
  },
  {
    "url": "en/guide/assets.html",
    "revision": "93b65f255ae8f610e96992f798360626"
  },
  {
    "url": "en/guide/basic-config.html",
    "revision": "52742c6569fa45fa179c71ea02894b46"
  },
  {
    "url": "en/guide/deploy.html",
    "revision": "5d5bc9cf7c2434b1e63f93d9ec4d0c05"
  },
  {
    "url": "en/guide/directory-structure.html",
    "revision": "883708e3b9bce12590026423e8015dab"
  },
  {
    "url": "en/guide/frontmatter.html",
    "revision": "49a61548382262620605b5052ca4497d"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "c0d03204164bb26382d96c6624bdd8ab"
  },
  {
    "url": "en/guide/global-computed.html",
    "revision": "5b9adc0d18a32fa4e9a630b9793ef851"
  },
  {
    "url": "en/guide/i18n.html",
    "revision": "74ca292b17c7a111bc3f3f87e93e7f34"
  },
  {
    "url": "en/guide/index.html",
    "revision": "110b586312d4df18492a7366457d79ef"
  },
  {
    "url": "en/guide/markdown-slot.html",
    "revision": "c8ae3feee756fd8be044e632aca14b9f"
  },
  {
    "url": "en/guide/markdown.html",
    "revision": "2d193e0c655a36f8a3afef90536476f7"
  },
  {
    "url": "en/guide/permalinks.html",
    "revision": "3ff060aab46e496c16abbc2534396c2f"
  },
  {
    "url": "en/guide/using-vue.html",
    "revision": "09c716a1bb5c0ed56273055be2978489"
  },
  {
    "url": "en/index.html",
    "revision": "584aadd3ef4654dd3b6d9e043748e7d8"
  },
  {
    "url": "guide/assets.html",
    "revision": "78fba1aedb1f3c2256a8c29d93664028"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "cebd323c109f24a986f0e8c58f348922"
  },
  {
    "url": "guide/deploy.html",
    "revision": "ecfe1bbd455ee239d5fda90ee9e40317"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "979c83864a496caa047af4f338b79791"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "62e48c4600d364149d9b3f8b7a5272ce"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b8ce45e73fba8eeec7192a425a6f36c8"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "3935d963fd7e32474700d914aedb72f9"
  },
  {
    "url": "guide/i18n.html",
    "revision": "6f7954e78b0af93d156c5e543f718656"
  },
  {
    "url": "guide/index.html",
    "revision": "a8948718d84b5f8624ccdb8a7aa724c6"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "384e06b969439e9f1734d61547140dba"
  },
  {
    "url": "guide/markdown.html",
    "revision": "f7125263e8bee65886c20063fd8aa9f8"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "e2aef1156a39ca2944ddc98817c8c6f9"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "8ff5ffc193b488ab45d3390aaf2eed3f"
  },
  {
    "url": "hackintosh/index.html",
    "revision": "29af4a11da8c9309a3724489d7104f09"
  },
  {
    "url": "hackintosh/kexts.html",
    "revision": "f80692da4ba0dcefdc0667e748aed07a"
  },
  {
    "url": "hackintosh/source.html",
    "revision": "deef50e900c9bca6b6129cd757a3cfd0"
  },
  {
    "url": "icon.png",
    "revision": "c0f7e23b2b2cff3afdb4d3db9faef90a"
  },
  {
    "url": "index.html",
    "revision": "73dce49da1148120c13e5310aac3bf39"
  },
  {
    "url": "lee.jpg",
    "revision": "d872919169799de1dfa238e48788771b"
  },
  {
    "url": "web/hexo.html",
    "revision": "58319d919c8c4153371ec14634213d29"
  },
  {
    "url": "web/hugo.html",
    "revision": "0e50f4fae5b56851d1268bcd53ecb58c"
  },
  {
    "url": "web/index.html",
    "revision": "e0e97287178ca7f1b81e15edc6d69067"
  },
  {
    "url": "web/source.html",
    "revision": "fdb13e36b813dedd1f2c3d23a5148b03"
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
