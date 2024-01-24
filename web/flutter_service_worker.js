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
"index.html": "e5e90cca411ad464c7909cf0443c4412",
"/": "e5e90cca411ad464c7909cf0443c4412",
"icons/Icon-192.png": "1a856b6342c20ef75e3e5d7facfe8a15",
"icons/Icon-512.png": "1a856b6342c20ef75e3e5d7facfe8a15",
"icons/app_launcher_icon.png": "1a856b6342c20ef75e3e5d7facfe8a15",
"favicon.png": "1a856b6342c20ef75e3e5d7facfe8a15",
"splash.png": "2c4e52b223ef9ee61b57484ed0514a4b",
"favicon1.png": "2b68cecae91ae136df7c38324a92b93f",
"version.json": "df554f9a9ff3ecf344f641eda6a1d816",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"vercel.json": "6cf56d06d037f9824754f567e311a116",
"assets/fonts/MaterialIcons-Regular.otf": "a789821ba45d6a8a8abcf767a86a6ed0",
"assets/NOTICES": "83e8b02b1e329bdbb1c8ef0b1c7f2cad",
"assets/AssetManifest.bin.json": "f3b684b26b9615edb862de82a5cc313d",
"assets/FontManifest.json": "42e8fda0da2fcc5022da9431e339b506",
"assets/AssetManifest.bin": "5e61d1b8267e14b88b3e866747c08821",
"assets/AssetManifest.json": "09162b866b9365bc9f350cce0a99f077",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/assets/fonts/CustomIcons.ttf": "6044b2678959d0e47aef44c7f3cde75d",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/Mellis.jpg": "61418cc6c0970ebe4def5103086b47d7",
"assets/assets/images/Flores2.png": "60b18941c47006441d1f2a32387870fe",
"assets/assets/images/bow_tie.png": "f1fe1d36d315c9c1ea273c268897e4ee",
"assets/assets/images/Noah.png": "591fd80a5fcbb42e5b16a3429451bdad",
"assets/assets/images/Flores4.png": "1cb37ffc55c0ac0a729673284ce32f0e",
"assets/assets/images/Nerea.jpg": "9e16744c605be7e11c7feb199bcba7a4",
"assets/assets/images/Noe.png": "6a3f40ef9abfaff97936db2c02cc8a58",
"assets/assets/images/rings.png": "1c952ab61df9fbe640cd59d2ef748116",
"assets/assets/images/Bety.jpg": "dc2d383e20777921c3d2ca443d0246d1",
"assets/assets/images/Sala_Javi.png": "bba23e21ef7816d0b20fd882ba186435",
"assets/assets/images/Flores1.png": "5e4b17593e187590fe8dd97dfaafe183",
"assets/assets/images/JuanCarlos_Graciela.png": "178b5b957b4cab144454e9e947f7db92",
"assets/assets/images/Familia_bonanno.jpg": "0e00d18099d97c471071f4631d62d81e",
"assets/assets/images/Flores3.png": "b147980b3575aa549fb10ff158caae31",
"assets/assets/images/pin.png": "7d71d1b9b96f115553cfd5d4663b99ec",
"assets/assets/images/San_Martin.jpg": "af6dfcc2733866c03b3280bb5b2f5362",
"assets/assets/images/Abi.jpg": "8ce4a114e3865f2a3a38286c08169509",
"assets/assets/images/Familia_vita.png": "2f4cd0272b7d7669e6d45e35f0ae98b6",
"assets/assets/images/underline2.png": "9298ef8914bada17e41607902f151023",
"assets/assets/images/Caro_Belen.jpg": "1a060fa6feb51c10ae96a15b0d851c4a",
"assets/assets/images/May_Yani.jpg": "a7820f219043f8953a16f172b7eff8ba",
"assets/assets/images/envelop.png": "615b4c76c56f20f7cc7f1772c0667a0b",
"assets/assets/images/gift.png": "a120e1d607394a3cfdf1fc528b6c3fc4",
"assets/assets/images/bell.png": "15fdb68109286ed05d04ea56a717f913",
"assets/assets/images/JuanCarlos_Graciela_Maria.png": "a2a552b8af00542a3e38c3705d363e0f",
"assets/assets/images/Abi_Mellis.jpg": "9565fd4d742063e38cc21a768cedc801",
"assets/assets/images/calendar.png": "7c2b8016fee2d65b52b281a6136d38b8",
"assets/assets/images/Noe_Aldana.jpg": "1265a7eeb186cf46f0c2d6fdcfe0d79e",
"assets/assets/images/cabros_wones.jpg": "d937b6848b994d49a9b36caae243fc6c",
"assets/assets/images/pearls.png": "0f61d4a55b9f991f362844e6100e6d0c",
"assets/assets/images/error.png": "34a3c86257800bf5e90595c112370b19",
"assets/assets/images/cheers.png": "20acee4fbcd20bdc1d465bc894fc935c",
"assets/assets/images/foto1-grupo1.png": "896b3913d96d6541af6d12d1b8e5a2fe",
"assets/assets/images/Daniel_Alicia.jpg": "2e0b1cddcd4b884b5ba1b88b3d767ad8",
"assets/assets/images/Aldi_Abi_Mellis.png": "0f881c68be1086de43fea830cfc2ed94",
"assets/assets/images/foto1-grupo2.png": "da6efbd323be401b5fe96adae1f83820",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"main.dart.js": "ab836a761b11eb134c0cb5aa1bca9b75"};
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
