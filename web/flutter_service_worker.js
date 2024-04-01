'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"canvaskit/chromium/canvaskit.js": "bc979fce6b4b3cc75d54b0d162cafaa7",
"canvaskit/chromium/canvaskit.js.symbols": "8d26e71c60c1539a22231b253ee1a999",
"canvaskit/chromium/canvaskit.wasm": "ab0a0eb3c22e0ceaf46512d4ff17545e",
"canvaskit/canvaskit.js": "321aa0c874f6112cabafc27a74a784b4",
"canvaskit/skwasm.wasm": "feeb27aea29a9e626a87f2dac168933a",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js.symbols": "7bc7b816cc2ea20158b8f96a99960393",
"canvaskit/skwasm.js.symbols": "e03a50cb20ff6c262729d11295ac5454",
"canvaskit/canvaskit.wasm": "2a1addcc316c372baa0080f30b85a0e3",
"index.html": "d3faab0a35c5ba18e1d825292b4975a5",
"/": "d3faab0a35c5ba18e1d825292b4975a5",
"icons/Icon-192.png": "1a856b6342c20ef75e3e5d7facfe8a15",
"icons/Icon-512.png": "1a856b6342c20ef75e3e5d7facfe8a15",
"icons/app_launcher_icon.png": "1a856b6342c20ef75e3e5d7facfe8a15",
"favicon.png": "1a856b6342c20ef75e3e5d7facfe8a15",
"splash.png": "2c4e52b223ef9ee61b57484ed0514a4b",
"favicon1.png": "2b68cecae91ae136df7c38324a92b93f",
"version.json": "df554f9a9ff3ecf344f641eda6a1d816",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"vercel.json": "6cf56d06d037f9824754f567e311a116",
"assets/fonts/MaterialIcons-Regular.otf": "b9d7636a0ead0fb103f44c06717403ee",
"assets/NOTICES": "83e8b02b1e329bdbb1c8ef0b1c7f2cad",
"assets/AssetManifest.bin.json": "a0a305af2562835fc0f111f1e74a89a7",
"assets/FontManifest.json": "42e8fda0da2fcc5022da9431e339b506",
"assets/AssetManifest.bin": "6921b7aa5bc166278163c3ac1116e3fc",
"assets/AssetManifest.json": "dbe78c05a981e3ff5b5ddfcf08b69894",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/assets/fonts/CustomIcons.ttf": "6044b2678959d0e47aef44c7f3cde75d",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/bow_tie.png": "8a9b50570fc6141ce902d5faeba08b14",
"assets/assets/images/Noah.png": "d8c2372281f2d7b4b96b4fcec16a4a68",
"assets/assets/images/Flores4.png": "ae3e9f5bc9a9b279bd6db4164a9c6ff2",
"assets/assets/images/Nerea.jpg": "7cc1da9a5f1f99f5e70f86308190830a",
"assets/assets/images/Noe.png": "9db0776d6669cc6729c764d763ab4848",
"assets/assets/images/rings.png": "b727c1dbe1f5bf38d1d5f7eff7de54ee",
"assets/assets/images/Sala_Javi.png": "a5aa2e82b9bb186766c274bd2c57493f",
"assets/assets/images/Flores1.png": "8beccea468b6f4698fc21aee1fe739f9",
"assets/assets/images/Familia_bonanno.jpg": "378ceb20d672da4f072749e8b8656e13",
"assets/assets/images/Flores3.png": "31cc51fb88d699c62362bd2edf593281",
"assets/assets/images/pin.png": "55feec2ec31a38e489f68f06884ab641",
"assets/assets/images/San_Martin.jpg": "77f6093452df53c51d5c8b76a8fa3165",
"assets/assets/images/Familia_vita.png": "31daaf2704466bef955a2695989a1b29",
"assets/assets/images/underline2.png": "7617bd1156075d24ba4144c517d7198e",
"assets/assets/images/May_Yani.jpg": "76e9380303e4c8e4c8feff17e9959553",
"assets/assets/images/envelop.png": "8c8cbf47d1064caa3046a23d434b30a0",
"assets/assets/images/gift.png": "31df208e14362e887a660aebaa875cda",
"assets/assets/images/bell.png": "980d9b8d291e9b1ffc404a0c87f9a584",
"assets/assets/images/JuanCarlos_Graciela_Maria.png": "99eac8c75aaa6353eebd0a42191e62a8",
"assets/assets/images/calendar.png": "838de432eef0325ba2b4a80a2cb52fcd",
"assets/assets/images/cabros_wones.jpg": "9eba40420c3487418301985ddc20e437",
"assets/assets/images/pearls.png": "616eef156801b81f82833528642f1901",
"assets/assets/images/error.png": "34a3c86257800bf5e90595c112370b19",
"assets/assets/images/cheers.png": "681ec7b593b2becc265ec1b539dd7446",
"assets/assets/images/Daniel_Alicia.jpg": "e43bbb0f796c01ec8b5093e3c874a747",
"assets/assets/images/Aldi_Abi_Mellis.png": "cf26bd6645a5e8d7b41b6317cd58dc94",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"main.dart.js": "f8c6196f960f8dcc310ff9552778d1da"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
