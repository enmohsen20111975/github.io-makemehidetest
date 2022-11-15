'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5baa3711819c5a988391331a8e96688c",
"assets/assets/DB.db": "ba0099631370eae6ba7e90a2cedc98fd",
"assets/assets/HTML/Android%2520Hidden%2520Codes%2520All%2520the%2520custom%2520Dialer%2520Codes%2520and%2520What%2520they%2520do!.htm": "106f324dffc0996b636f233460478cc7",
"assets/assets/icon.jpg": "300d73b88c4b55c48d7abc29ac927004",
"assets/assets/Image/androidcodes.jpg": "115bb113948166eb62f417d916c6ab68",
"assets/assets/Image/AndroidIcons.jpg": "0368fd89da6df71001c02fa09c133897",
"assets/assets/Image/background.jpg": "59f5f6bbb4a775493c3acfa071875d0c",
"assets/assets/Image/background1.gif": "e706c2dc8b34f0c991f393ea9443728a",
"assets/assets/Image/background1.jpg": "4123c84e649fe1e202ccbd6555490157",
"assets/assets/Image/C.jpg": "509f3fe972d0bdce0c1d1ae1ae8edf93",
"assets/assets/Image/codes.jpg": "7d6695259783261d416cd621af6456af",
"assets/assets/Image/emergency.jpg": "c03bcfd17e240556aa4cf5e7169ac3f0",
"assets/assets/Image/fastservice.jpg": "44d7f2503d1c3bcb90218486b6513c1f",
"assets/assets/Image/FastServiceicon.jpg": "4068bb1f950a992d7dca69d350c8c54a",
"assets/assets/Image/gif.gif": "100f5c36482700ff65ad8d81f4042998",
"assets/assets/Image/goodby.gif": "89844fd57624d0f7e9153583c29aca05",
"assets/assets/Image/Icons/Itesalat.jpg": "03c31b4eb4982d0f395529ed4d92f949",
"assets/assets/Image/Icons/Orange.jpg": "86094d0699cc2a3e08d62f57e96d4df0",
"assets/assets/Image/Icons/Vodafone.jpg": "7363aca9baa831ecd75b69943385af9b",
"assets/assets/Image/Icons/WE.jpg": "3cbb61a8efcdd7a5224cfdd5ed1931f6",
"assets/assets/Image/info.jpg": "c07ef0de1174ef83c5cde12517d7f02b",
"assets/assets/Image/info.png": "5f023e11622400ec029b9cdf1a06b9fe",
"assets/assets/Image/lang.jpg": "965731c2f237c57c7e65983c3cac7940",
"assets/assets/Image/myapp.jpg": "4394f11e9234a77d94da35fe13fc47d8",
"assets/assets/Image/phonecodes.jpg": "cf43286955539faf99ec51134716a54d",
"assets/assets/Image/service.jpg": "1fd8ca9b32a0d62149265c301344675f",
"assets/assets/Image/unavilable.jpg": "15f049fd48bd1234a89c3504425f5743",
"assets/assets/Image/urgent.jpg": "bcd654099eb2e4231651fd56c35fa40a",
"assets/assets/me.jpg": "ead461804de7e96ba8c49fc4c8f6819b",
"assets/assets/mm.jpg": "7b5342380a17f5a18a25ade205a509c7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8a8ee2d7e4e93410e7276eddcfd905c4",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "acfbadf88964295909a22fa9f063f0b2",
"/": "acfbadf88964295909a22fa9f063f0b2",
"main.dart.js": "59a2b7fed672e5e44d3d2557925db20c",
"manifest.json": "ac93a7a3ac07339f54def81fe82726bd",
"version.json": "7dab2efc1b427d2bdecfbaf72d4b305d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
