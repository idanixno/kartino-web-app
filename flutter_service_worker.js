'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7e423ad68b10c8aa307fff253e8fa076",
"assets/AssetManifest.bin.json": "068986dce419ec7ece2e0bf81f609f13",
"assets/AssetManifest.json": "9b27d15ef197add87b4e443218011e96",
"assets/assets/animations/alarm.json": "8ce5c44217874d3b824dac93a7040ece",
"assets/assets/animations/loading.json": "77724df649953fa4d8e1647697420466",
"assets/assets/icons/education.svg": "207971550bfa775d6e0a41edeef156b8",
"assets/assets/icons/melicode.svg": "dc5c6d9f913deb075b8e8e42f521c5cb",
"assets/assets/icons/user.svg": "c49ed8c3cf336ce09fa9cfcdd34f24fe",
"assets/assets/icons/username.svg": "235bb9df6ee6bd1dd2f025e24f111201",
"assets/assets/images/bag.png": "f7f1b703904fd39ed61cb652b4fed522",
"assets/assets/images/C.png": "e6c27f7877c31b3faadfb8d344e5a4b5",
"assets/assets/images/C2.png": "e6cb6060f27f7fad5b89dba2a4222911",
"assets/assets/images/card1.png": "68d5a7642d4f74936ff383c978e57f94",
"assets/assets/images/card2.png": "3466ee2049010a2b74e454a4188cc99a",
"assets/assets/images/Frame.png": "9724282fbfbc89fc4db202df25543da7",
"assets/assets/images/logo.png": "9363a6bc22626dd79c05069f16cb3a4d",
"assets/assets/images/logo2.png": "ce722c987074682049e1fe09119be2eb",
"assets/assets/images/mobile.png": "02235599e4217c10e5a430cb3d986177",
"assets/assets/images/vactor_otp.png": "1c698c0060fad4147a80a374ab29b05a",
"assets/assets/svg/204.svg": "42a786a5b75715ae0836b49b238afd8b",
"assets/assets/svg/400.svg": "b6907ec5c856f2bbeaddce512d58fc41",
"assets/assets/svg/arrow.svg": "7dea2ec821b5ebbf406f69044f132986",
"assets/assets/svg/card1.svg": "6868845b98087542b970d18adbb120ed",
"assets/assets/svg/card2.svg": "afef1c343df4a9c80b6a7530d4b082cd",
"assets/assets/svg/emoji.svg": "154041e29177a9f357fe98b19e472b3c",
"assets/assets/svg/Frame.svg": "00102f42c925770ff9db721f9f05cabc",
"assets/assets/svg/home.svg": "605bcdede2ec500b63fd515544a0547c",
"assets/assets/svg/Home_fill.svg": "9ca732fcb5d394d06a0c9d424828c833",
"assets/assets/svg/Img_box.svg": "64e70bb54a385baf3789d9642b927a63",
"assets/assets/svg/mobile.svg": "0ee3d790a2a8af8f31a28f0c14fba4ed",
"assets/assets/svg/sabad.svg": "67f514a3401a5813488dff8e13a06329",
"assets/assets/svg/Search.svg": "def1e3b92b48d9a0141dd10735ba23d2",
"assets/assets/svg/Search_fill.svg": "cd3ab5db20514e83a0821153c0dd5845",
"assets/assets/svg/Shop.svg": "fa3a9cc9deebd2998dd61f10fdf50e45",
"assets/assets/svg/Shop_fill.svg": "9f3c06ed3d4b233cca032fddb369414b",
"assets/assets/svg/User.svg": "609031528d07fac91553fd63cb985713",
"assets/assets/svg/User_fill.svg": "eba9955811cae0114963247641d16c45",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2adaa779400cb15fd273844037bc3e36",
"assets/NOTICES": "ac75afb00d9bbdda4e11215eae704b2a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "86bdadeb35641d632c7270fcda0442fc",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "e6cb6060f27f7fad5b89dba2a4222911",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "42b3132983981053202d9e8f5217fb61",
"/": "42b3132983981053202d9e8f5217fb61",
"main.dart.js": "6479a9ced278f7d97f036a750e48c9ea",
"manifest.json": "416337fa4133f9ee9ebca981835907dd",
"version.json": "26940e032476a5875d4b57e7cdb996e8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
