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
    "revision": "a175424c0a0ec3d792351fce8baa5621"
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
    "url": "assets/js/10.016da534.js",
    "revision": "e0c4fff1bfc04eeafd682a52e40e7aea"
  },
  {
    "url": "assets/js/11.5d93880e.js",
    "revision": "daa574a90fd890a300d5e28686d046cb"
  },
  {
    "url": "assets/js/12.74c0106c.js",
    "revision": "a8f5a349d03369959fbe05c2ea1a270f"
  },
  {
    "url": "assets/js/13.95ca6cd8.js",
    "revision": "d2511c3b44ea10948246f99178434c45"
  },
  {
    "url": "assets/js/14.d5450a9c.js",
    "revision": "5fd527fecb65271dd650aca4e7a91ae9"
  },
  {
    "url": "assets/js/15.1482061a.js",
    "revision": "11be93ddc7b356e100e12d32fc7336e7"
  },
  {
    "url": "assets/js/16.8d3bad09.js",
    "revision": "5bda2f889b028abdf7109576550698f1"
  },
  {
    "url": "assets/js/17.4de4f85c.js",
    "revision": "3e0954fc0232f01f552965834177592c"
  },
  {
    "url": "assets/js/18.2b794fe3.js",
    "revision": "1b2ff12ef576ccdf0104c92b46e3da86"
  },
  {
    "url": "assets/js/19.c7f490a2.js",
    "revision": "64649a0f51a12bdce6c1eaaff38f4a65"
  },
  {
    "url": "assets/js/20.2f9c4561.js",
    "revision": "e10fbf8fc99e941d578b7376010d290b"
  },
  {
    "url": "assets/js/21.41cc6524.js",
    "revision": "d8f1ae83bd5e431a7a516887031b06f9"
  },
  {
    "url": "assets/js/22.d257043d.js",
    "revision": "0a3ccbb1644fa8db737acc401ee2b353"
  },
  {
    "url": "assets/js/23.01fe9a38.js",
    "revision": "2d3315de3fa26b98d1446778aed381ad"
  },
  {
    "url": "assets/js/24.4576ab02.js",
    "revision": "101486bd9287fd3b21a8075e039ba5ed"
  },
  {
    "url": "assets/js/25.b0c0ae11.js",
    "revision": "8c502bca898d55b27e42c11503901ecf"
  },
  {
    "url": "assets/js/26.6440edb3.js",
    "revision": "6c8d4ecb5caf52dc6858315ae4008773"
  },
  {
    "url": "assets/js/27.1d54df91.js",
    "revision": "ebca56c756a72dc6fe299031c37fdfda"
  },
  {
    "url": "assets/js/28.82b10267.js",
    "revision": "a40b9f4d99fc1fa37eee25345a0d7a96"
  },
  {
    "url": "assets/js/29.43284a86.js",
    "revision": "dad6e29218d0339eaa4892656b89c9cf"
  },
  {
    "url": "assets/js/3.4ce8902b.js",
    "revision": "e3cb3977e2389e292eac9e3032d47ca4"
  },
  {
    "url": "assets/js/30.6d73b947.js",
    "revision": "f89ebb675f2ccc9a952fa399c9fae50a"
  },
  {
    "url": "assets/js/31.2bd2dde9.js",
    "revision": "be06fa05c0d2ccca0a4d927d732d4461"
  },
  {
    "url": "assets/js/32.f247988c.js",
    "revision": "50734348769f641f87094ed50d624fe5"
  },
  {
    "url": "assets/js/33.f179e6e2.js",
    "revision": "cbe1cd189920456d7355a70946a49ff9"
  },
  {
    "url": "assets/js/34.bd8b764b.js",
    "revision": "b88b325429038122bf415062e7a3f383"
  },
  {
    "url": "assets/js/35.ad57fa0a.js",
    "revision": "fd80f8bb1ba1643dd3bc81d69b992899"
  },
  {
    "url": "assets/js/36.5f907e67.js",
    "revision": "1e4638c3056deeaf5dcd668247159854"
  },
  {
    "url": "assets/js/37.279a58fb.js",
    "revision": "80de1111c0627af20063bdda5e5b26ed"
  },
  {
    "url": "assets/js/38.1055118d.js",
    "revision": "aa5458e737d53611200904d9d10b684e"
  },
  {
    "url": "assets/js/39.d7eed0a2.js",
    "revision": "842f1a1f8fe3e3d816786a1fd29b67af"
  },
  {
    "url": "assets/js/4.1dae6fb8.js",
    "revision": "2d75a0f374dbc5a087f7bbf3f6c589fd"
  },
  {
    "url": "assets/js/40.d5d6b9e5.js",
    "revision": "535deef8e8fe68ab70c58d3661fe8c80"
  },
  {
    "url": "assets/js/41.5c99c837.js",
    "revision": "104c7caa18cc2f49f2ef728864a25838"
  },
  {
    "url": "assets/js/42.f0328f37.js",
    "revision": "31f019b99ab2197658047cbfced2bb6f"
  },
  {
    "url": "assets/js/43.c44c52f5.js",
    "revision": "b1d91a9bac143bbab84814bcf538bbab"
  },
  {
    "url": "assets/js/44.67accece.js",
    "revision": "159094790c1eb25de47cad14caafdb9f"
  },
  {
    "url": "assets/js/45.1f65625d.js",
    "revision": "4bea5d43da96c966cd6de51ae98c4da1"
  },
  {
    "url": "assets/js/46.2bd7285e.js",
    "revision": "f7bd73ffcdc73125a0d11aca7cd3627f"
  },
  {
    "url": "assets/js/47.c729dea9.js",
    "revision": "5d5d8a3d51d02482dde847aca5bc2d88"
  },
  {
    "url": "assets/js/48.8874ce2a.js",
    "revision": "aa821e8c3d4efdc29771267e197dab05"
  },
  {
    "url": "assets/js/49.95ee1e8e.js",
    "revision": "917d84adb7f4502fba6764c7609450de"
  },
  {
    "url": "assets/js/5.23444941.js",
    "revision": "1a53e7eced0ca8ebc875a77f4a51eb10"
  },
  {
    "url": "assets/js/50.aed02e2c.js",
    "revision": "8ab2fb9c11b150ab9634db9bbad9660a"
  },
  {
    "url": "assets/js/51.b7de93c5.js",
    "revision": "223c9194c6bda31485452507a8ab1b03"
  },
  {
    "url": "assets/js/52.c41360a5.js",
    "revision": "77965a25448f3e2ff6738fb2d400c6a6"
  },
  {
    "url": "assets/js/53.1a8f98bb.js",
    "revision": "e03cae329928b09fd35e5b300fde8e92"
  },
  {
    "url": "assets/js/54.e714b48c.js",
    "revision": "68f1b6ebf4fbb768767baca1f4d556a9"
  },
  {
    "url": "assets/js/55.56ff83c2.js",
    "revision": "604326b96914d59e44561ad755ea3954"
  },
  {
    "url": "assets/js/56.f68a5652.js",
    "revision": "12b3f7eec931367054d4781d10e68f45"
  },
  {
    "url": "assets/js/57.027555df.js",
    "revision": "d9db8ca1d3e1c74dc7cb933236831a13"
  },
  {
    "url": "assets/js/58.b9ee3625.js",
    "revision": "42e5e3852e0071200c48e57a49a1147f"
  },
  {
    "url": "assets/js/59.71acce50.js",
    "revision": "feffdf2173330072ae608b76e80a76dd"
  },
  {
    "url": "assets/js/6.b4a16582.js",
    "revision": "41223fc96a2ae50ba88eef25d496b88d"
  },
  {
    "url": "assets/js/60.1734e514.js",
    "revision": "ffe47de0d2ac8183cffa4668f1ae27e3"
  },
  {
    "url": "assets/js/61.84d4186d.js",
    "revision": "f06116bce475e0f13cc91ef6d460b901"
  },
  {
    "url": "assets/js/62.5524d682.js",
    "revision": "0459289aafd483d38d07186dd8eb1fb7"
  },
  {
    "url": "assets/js/63.ffa87ade.js",
    "revision": "b8f719ac0897906045fa3c3032478dd0"
  },
  {
    "url": "assets/js/64.a195aa74.js",
    "revision": "2d95109d9a87c9ccb5e4c05206cc3909"
  },
  {
    "url": "assets/js/65.f9ed9694.js",
    "revision": "48cf551b086e8afb79a22c4f1857e05b"
  },
  {
    "url": "assets/js/66.f3fb89aa.js",
    "revision": "c30ea4a1dfe617c81e23cd910cd608a4"
  },
  {
    "url": "assets/js/67.b4735cd6.js",
    "revision": "bdad60587251a1a85daeb5b67a42afcd"
  },
  {
    "url": "assets/js/68.eeaeb433.js",
    "revision": "10c78aa0c2500750dd39955b56662514"
  },
  {
    "url": "assets/js/69.9e5da7d1.js",
    "revision": "15bf580aeeee651f3b2d9f9f6bb91c71"
  },
  {
    "url": "assets/js/7.ff1329c1.js",
    "revision": "5e948bafec5b1dbfd42d949ea9b91bf8"
  },
  {
    "url": "assets/js/70.b5d50719.js",
    "revision": "78efb9dd378c66b8e169e969304c8c1e"
  },
  {
    "url": "assets/js/71.276579a8.js",
    "revision": "62a2efbf8197aaf31780093c15cc428f"
  },
  {
    "url": "assets/js/72.348bc548.js",
    "revision": "0048a396546aa2d37606ba5734899fdb"
  },
  {
    "url": "assets/js/8.d214f2b1.js",
    "revision": "c34f10d5a46e6cf8562227a672dc9347"
  },
  {
    "url": "assets/js/9.2aa382ed.js",
    "revision": "098e2d6c7530ba903c0ad2bc292e687e"
  },
  {
    "url": "assets/js/app.ae45d6a6.js",
    "revision": "d95618b964aa569c39be9d59bb9d1c4c"
  },
  {
    "url": "assets/js/vendors~notification.49c74f6a.js",
    "revision": "34ba7518e0ae74e8e052217d47a6a4e7"
  },
  {
    "url": "en/guide/assets.html",
    "revision": "f7700ffbb1127c7307e2f78d6eae8ca7"
  },
  {
    "url": "en/guide/basic-config.html",
    "revision": "3090567f36aee9e60d0832e9aa578b54"
  },
  {
    "url": "en/guide/deploy.html",
    "revision": "223a83fb5278ec489e6feab59348e9cf"
  },
  {
    "url": "en/guide/directory-structure.html",
    "revision": "e45804f4a5f6c35757755307307308ae"
  },
  {
    "url": "en/guide/frontmatter.html",
    "revision": "c24ac2a5dceef1b3e6df5679de623f51"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "f162a5fa4c2f39c5c5d3d65923315e80"
  },
  {
    "url": "en/guide/global-computed.html",
    "revision": "8dc15c2c0357b005fc6476069f90b307"
  },
  {
    "url": "en/guide/i18n.html",
    "revision": "53bd64723a59ef33a00a561736c18521"
  },
  {
    "url": "en/guide/index.html",
    "revision": "2fa5eed5b1bbc874f2d1617e6a2071cf"
  },
  {
    "url": "en/guide/markdown-slot.html",
    "revision": "5dc893b5727e122587f24afd84d37dc8"
  },
  {
    "url": "en/guide/markdown.html",
    "revision": "074ae1106fd8de9e078ab4c2722077bf"
  },
  {
    "url": "en/guide/permalinks.html",
    "revision": "4d30c0fa7b336e5a87ce5b27745f22a9"
  },
  {
    "url": "en/guide/using-vue.html",
    "revision": "c438ed36fdebe3d9f89d705b8a5e7858"
  },
  {
    "url": "en/index.html",
    "revision": "0a434a64d5e54cfe49966e40fb7b46f0"
  },
  {
    "url": "en/plugin/context-api.html",
    "revision": "ca96ebdf5161cfaba8d18c996cc69550"
  },
  {
    "url": "en/plugin/index.html",
    "revision": "0c8a278fa0081e2de6acf0a008cd67ea"
  },
  {
    "url": "en/plugin/life-cycle.html",
    "revision": "902baaf015a42eb22b47cb8bcaa0ffb3"
  },
  {
    "url": "en/plugin/official/plugin-active-header-links.html",
    "revision": "c7d484126d94e139b0799ac00de8296d"
  },
  {
    "url": "en/plugin/official/plugin-back-to-top.html",
    "revision": "5c336b8cd5fc4b5c1933afea28a588c1"
  },
  {
    "url": "en/plugin/official/plugin-google-analytics.html",
    "revision": "4532b2875b5c38b89eac3bb4edf05022"
  },
  {
    "url": "en/plugin/official/plugin-last-updated.html",
    "revision": "321291511dc3766def133f17e42c1787"
  },
  {
    "url": "en/plugin/official/plugin-medium-zoom.html",
    "revision": "2b890c680ca7b8839ca624433807ea17"
  },
  {
    "url": "en/plugin/official/plugin-nprogress.html",
    "revision": "88f3a4008287ddb5bb050e60d82b8511"
  },
  {
    "url": "en/plugin/official/plugin-pwa.html",
    "revision": "c4dcef4a4f95e9c9826daad1a0a3140d"
  },
  {
    "url": "en/plugin/official/plugin-register-components.html",
    "revision": "888b300a70dd822d9d9340570d5ab849"
  },
  {
    "url": "en/plugin/official/plugin-search.html",
    "revision": "dbde78ac4c8e5d49a53c7ee1c57c946a"
  },
  {
    "url": "en/plugin/option-api.html",
    "revision": "eae908fc993cf74a9ef7a6b471f05bec"
  },
  {
    "url": "en/plugin/using-a-plugin.html",
    "revision": "be8e76136d9ce22b01961fd53dca7096"
  },
  {
    "url": "en/plugin/writing-a-plugin.html",
    "revision": "4c67f5e2c56d5ae1e48d904c8aa8a54f"
  },
  {
    "url": "guide/assets.html",
    "revision": "88e69bd19979d9b2a1fdce8368415ad6"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "5a0dc4fd8c15b6e0a5ea90aed416834f"
  },
  {
    "url": "guide/deploy.html",
    "revision": "e655f2cff1f480b47e172ccf46969eae"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "8028932ae20a10911b58ddfda67c29d1"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "72316c5f75850edf25670bcdb1aec866"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "119d36cb21cf7902d952279f4dddd131"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "47592640ee7fe2d97cd0135d3e175b38"
  },
  {
    "url": "guide/i18n.html",
    "revision": "ec3ba4ca6c074e5a4351d58c74fb5af1"
  },
  {
    "url": "guide/index.html",
    "revision": "874f6682b907b0c0d6c8be0701122d96"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "d43909e5fe8138ff073bf0e291ef2ee1"
  },
  {
    "url": "guide/markdown.html",
    "revision": "6814fd9e7d55641cc6a90150953a8a16"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "e4adb7539cb60d45bd5233b196393653"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "c226b2614c664ad797533df369e4e7ab"
  },
  {
    "url": "icon.png",
    "revision": "ca1ef68de99bb1c21b54a2de9c2f5603"
  },
  {
    "url": "index.html",
    "revision": "481c018c8a1f8155f2f48f543bbf89a2"
  },
  {
    "url": "logo.jpg",
    "revision": "c9239716ed775c3418f2226d8d37cdfe"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "63073a8d9b14d43afd524cb9a93a20c7"
  },
  {
    "url": "plugin/index.html",
    "revision": "93026b8884d7225fa67d28a56e09fc14"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "8e31a964fa5fd6eb6b69b8e38282764f"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "c25b32918e5ebfeaab1c5f6b7d4d5135"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "6013d4e7914d05ce347b7416741ea874"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "beea583197800556c6ce069240081c0d"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "ae4f421e507d3d885af42d2024a3225c"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "b1604df3024e8b7a57d8491525bb0f9c"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "3e1030a3f9a2eaa60340ab4d8fcab025"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "532b9b35f64ef6deb29c240200948c3d"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "c59bf6e02c562247d9ce44a7d3e5410d"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "8e2068a2dbdc84dc1cc1c3b80c8d2de2"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "db9e139a1a7878f7b1b6b41347e30f60"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "d2665f96a2b4bc56863e0a1db201b6b7"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "4f419abfe11eb4c319913c09ad6d03ac"
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
