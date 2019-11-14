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
    "revision": "156df190f53c38add8c13b209dd8a0c1"
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
    "url": "assets/js/10.6324aebf.js",
    "revision": "21c11b42bfb06460c6da260555bb14c3"
  },
  {
    "url": "assets/js/11.ebc20429.js",
    "revision": "9a820c29675a415272169e7f297e9db9"
  },
  {
    "url": "assets/js/12.2ce8daee.js",
    "revision": "9e8a40f1c860534c6f7c12964bdd2da1"
  },
  {
    "url": "assets/js/13.68cbc6ea.js",
    "revision": "d2511c3b44ea10948246f99178434c45"
  },
  {
    "url": "assets/js/14.cdaa2b9c.js",
    "revision": "60fb6dcf77a5d05c687219041737e9ca"
  },
  {
    "url": "assets/js/15.35bf557c.js",
    "revision": "11be93ddc7b356e100e12d32fc7336e7"
  },
  {
    "url": "assets/js/16.25ba6eab.js",
    "revision": "55f59fbf010b748defab902b664548f1"
  },
  {
    "url": "assets/js/17.a7ae341d.js",
    "revision": "3e0954fc0232f01f552965834177592c"
  },
  {
    "url": "assets/js/18.d6d2c89a.js",
    "revision": "b3237187b1930f36269b8b8a38a41321"
  },
  {
    "url": "assets/js/19.6021f287.js",
    "revision": "668ed490df5a5fd9f38be11008e767b0"
  },
  {
    "url": "assets/js/20.c57eef2c.js",
    "revision": "fbea46938a5c222e3cd4b34f67c9a4ed"
  },
  {
    "url": "assets/js/21.33626eb5.js",
    "revision": "27c0c025b8623531caf7ca13f8ed405e"
  },
  {
    "url": "assets/js/22.8bb2cc07.js",
    "revision": "cd2c5dbaf85845bad0958873ed4ea51d"
  },
  {
    "url": "assets/js/23.7cfbe352.js",
    "revision": "a30ea8452fb6967de7302a63208df59c"
  },
  {
    "url": "assets/js/24.a1d50d48.js",
    "revision": "55dce94cfb5a584536131f15445adfcd"
  },
  {
    "url": "assets/js/25.a64ab9a0.js",
    "revision": "06552d9d069d3df7b86721d904a7da77"
  },
  {
    "url": "assets/js/26.bb625b19.js",
    "revision": "955fcd2edeb18dde193171e49f108b95"
  },
  {
    "url": "assets/js/27.39687e6f.js",
    "revision": "22976256b721b4f91d72cf8c77bd254d"
  },
  {
    "url": "assets/js/28.ab3f575c.js",
    "revision": "d5f9377d5bd3f40aeb672c4b0e436b98"
  },
  {
    "url": "assets/js/29.e51def0c.js",
    "revision": "186a290c5bf040daf5c460a5dc744ed9"
  },
  {
    "url": "assets/js/3.81926f54.js",
    "revision": "e3cb3977e2389e292eac9e3032d47ca4"
  },
  {
    "url": "assets/js/30.4ccb29ec.js",
    "revision": "61cb7e2a0e85437941c1a8cfeb5d18f6"
  },
  {
    "url": "assets/js/31.5e10f5d5.js",
    "revision": "b4ebda37664e96fbd16971faf7caba84"
  },
  {
    "url": "assets/js/32.cfce6b13.js",
    "revision": "438c749d41600440ca76ad1f94c89e25"
  },
  {
    "url": "assets/js/33.cc31eee2.js",
    "revision": "f9a3149dc529d2cd598a6e11e5738527"
  },
  {
    "url": "assets/js/34.e5c64dc6.js",
    "revision": "ce8a4fce5bc6ebd0b9580e08494d3d99"
  },
  {
    "url": "assets/js/35.39ccc483.js",
    "revision": "c6c79bdef2c60d3abd6a5b3bf54eadf5"
  },
  {
    "url": "assets/js/36.af09a0f5.js",
    "revision": "61f788b5fa5b15ec65d8fb0d39906f8f"
  },
  {
    "url": "assets/js/37.de55a1b0.js",
    "revision": "52f5f11e9a4f49a2b8fa888939ab727b"
  },
  {
    "url": "assets/js/38.2a888a05.js",
    "revision": "bb539dacb3ce0a5905a7cdec56c77bc2"
  },
  {
    "url": "assets/js/39.fd95c009.js",
    "revision": "6795f7fd94b99600a8e6c628e412f33c"
  },
  {
    "url": "assets/js/4.48f2d6be.js",
    "revision": "2d75a0f374dbc5a087f7bbf3f6c589fd"
  },
  {
    "url": "assets/js/40.1a518a66.js",
    "revision": "09996c4f6f4175437220272ef01364d5"
  },
  {
    "url": "assets/js/41.9583fd77.js",
    "revision": "97bc8835720176500e6362b9c7ebfdeb"
  },
  {
    "url": "assets/js/42.eacf44bb.js",
    "revision": "d689e55eeb1be7a86332511e94b651e7"
  },
  {
    "url": "assets/js/43.7465bc52.js",
    "revision": "5dc02839e22ceaff27cdba17463c420b"
  },
  {
    "url": "assets/js/44.062f559b.js",
    "revision": "4598b8916b3e7661ede29c654f8d9deb"
  },
  {
    "url": "assets/js/45.950b1dd4.js",
    "revision": "dcfb4d327c962ab0f2d8557ea0dfca82"
  },
  {
    "url": "assets/js/5.23444941.js",
    "revision": "1a53e7eced0ca8ebc875a77f4a51eb10"
  },
  {
    "url": "assets/js/6.c113f87b.js",
    "revision": "57aeb5ae20e0e212dc531fba3eb5c2b0"
  },
  {
    "url": "assets/js/7.95aea3da.js",
    "revision": "5e948bafec5b1dbfd42d949ea9b91bf8"
  },
  {
    "url": "assets/js/8.d523f767.js",
    "revision": "b4e147771640df5cec1b65cc6dd43501"
  },
  {
    "url": "assets/js/9.95e42b7e.js",
    "revision": "04ab349a18cea15e01bfd04472e182b9"
  },
  {
    "url": "assets/js/app.ed7740c8.js",
    "revision": "912359cd252d752a24ce0cf04f441d7c"
  },
  {
    "url": "assets/js/vendors~notification.49c74f6a.js",
    "revision": "34ba7518e0ae74e8e052217d47a6a4e7"
  },
  {
    "url": "en/guide/assets.html",
    "revision": "3f0caaf629f36f7d4c3658c75fc7de53"
  },
  {
    "url": "en/guide/basic-config.html",
    "revision": "7f82e60a6c2345c6499c4beb5da25e0d"
  },
  {
    "url": "en/guide/deploy.html",
    "revision": "29bc3b0a778a52ef11d1961e4de5a81e"
  },
  {
    "url": "en/guide/directory-structure.html",
    "revision": "50ee1f4280aaa8903afe7ce64b90d0a5"
  },
  {
    "url": "en/guide/frontmatter.html",
    "revision": "2075205180b1fe88f84d225c5448f983"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "28ff281cbc16fb73fe1701f1b200a853"
  },
  {
    "url": "en/guide/global-computed.html",
    "revision": "40c90d25a6f6730a5dd30f1578580a9e"
  },
  {
    "url": "en/guide/i18n.html",
    "revision": "f8111f8bbc9a40d5c5ea62def76ac683"
  },
  {
    "url": "en/guide/index.html",
    "revision": "efd71f8d1c80a8a4ddcae052f3bc5169"
  },
  {
    "url": "en/guide/markdown-slot.html",
    "revision": "d3908b96206c09843ce7533d90793578"
  },
  {
    "url": "en/guide/markdown.html",
    "revision": "efa26052785ebe495e04cdb1ea74ac7d"
  },
  {
    "url": "en/guide/permalinks.html",
    "revision": "228636e3d7293a91eaacf76086f9b3f7"
  },
  {
    "url": "en/guide/using-vue.html",
    "revision": "8fd5e78f9374215e47b919cc6d9331c6"
  },
  {
    "url": "en/index.html",
    "revision": "7fc0f119c18a42133620f74680ca0d04"
  },
  {
    "url": "guide/assets.html",
    "revision": "b52df9713020795e9d91f31b35890c1c"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "719157d66fbc4b33370bff513f194142"
  },
  {
    "url": "guide/deploy.html",
    "revision": "e13f07bc53078b28e2ff8a22f4520eba"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "5dd4fcc4aa4f4d67940342cce0b730d4"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "85a47b8819f9f517e5b0add5916a9403"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "fb64bac0aafdc5c01f72a524390881f0"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "389b76e1d1c53ff908228a4a9d4e6398"
  },
  {
    "url": "guide/i18n.html",
    "revision": "6d23d6773880fd79494afaad3d0b1529"
  },
  {
    "url": "guide/index.html",
    "revision": "8e2962084f5990efa868ff251587c8f0"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "9bc147cda5f3f6ce58826016622c7139"
  },
  {
    "url": "guide/markdown.html",
    "revision": "92cb7118d7215b5b847782869c109384"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "fc11685eddc8936bcc26fa04154bf922"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "0d7dbc8b8596a5a1ef3195708277ee3f"
  },
  {
    "url": "hackintosh/index.html",
    "revision": "fabb8185122ec0a2e0ad03bccf4a1620"
  },
  {
    "url": "hackintosh/kexts.html",
    "revision": "ca69f6783b8ef18506975cd7b4fd4b68"
  },
  {
    "url": "hackintosh/source.html",
    "revision": "a3ff17105fb3cf1f721c4a26025c0c4d"
  },
  {
    "url": "icon.png",
    "revision": "c0f7e23b2b2cff3afdb4d3db9faef90a"
  },
  {
    "url": "index.html",
    "revision": "c5dedc459489e45c8d9d992b49ee1187"
  },
  {
    "url": "lee.jpg",
    "revision": "d872919169799de1dfa238e48788771b"
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
