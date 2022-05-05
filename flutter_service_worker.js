'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "652bdb9280769547db8e13ba17e1e4f5",
"assets/FontManifest.json": "33f2005932e73006f292c2ecc11227a5",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lib/src/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/lib/src/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/lib/src/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/lib/src/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/lib/src/assets/images/icon_bottom_account.png": "6a7a6fcf2efcac337433c152d47be7bd",
"assets/lib/src/assets/images/icon_bottom_cart.png": "4c707802acd4a6ac744a99e15c8df66e",
"assets/lib/src/assets/images/icon_bottom_home.png": "655a95e845962f5623bf4b4b3a3d7de3",
"assets/lib/src/assets/images/icon_bottom_offer.png": "007f203eb94723194ce16f97012e07d4",
"assets/lib/src/assets/images/icon_bottom_search.png": "7bd37104329ee33531c400314bf8bcda",
"assets/lib/src/assets/images/icon_plus.png": "b22b48991809ca5300be94287c808fc8",
"assets/lib/src/assets/images/img_account_review.png": "ce9ad2e9327ac1f88dd3a7d593c77467",
"assets/lib/src/assets/images/img_account_signup.png": "6a7a6fcf2efcac337433c152d47be7bd",
"assets/lib/src/assets/images/img_activity.png": "d43b45f5bbc8ea0ef8c811febb0cecb0",
"assets/lib/src/assets/images/img_address.png": "1e19b73170bc070b9957866669fd0e70",
"assets/lib/src/assets/images/img_back.png": "3bd215a9105126fd7bbf9a81e32eeb87",
"assets/lib/src/assets/images/img_bag.png": "69e055f12130327300591a3c3a37d42e",
"assets/lib/src/assets/images/img_bank.png": "8313a9c4805bafc9a9ac0a97d9d53efe",
"assets/lib/src/assets/images/img_banner.png": "56a32fc3aa4b7394d503c17a8fb3b317",
"assets/lib/src/assets/images/img_banner1.png": "99f23cfd73eaa74fa26e865540dba8f5",
"assets/lib/src/assets/images/img_banner2.png": "9bb2dc0486f11564e708d67ae06895ed",
"assets/lib/src/assets/images/img_calendar.png": "879d2cd1fd42fedb2ba4efafda38d5b2",
"assets/lib/src/assets/images/img_check.png": "ce949ece7ef9621fc8b480e437487b51",
"assets/lib/src/assets/images/img_creditcard.png": "6347cc85227355b5cb7e2a86f78a64cd",
"assets/lib/src/assets/images/img_delete.png": "f3864fbe3b489825c6ebd01d0af70bd4",
"assets/lib/src/assets/images/img_dress.png": "7f5c73256c89f373213fee284590c685",
"assets/lib/src/assets/images/img_email.png": "b118ff2e948d90c1ba974ee21230965b",
"assets/lib/src/assets/images/img_feed.png": "e966a7d3fbb129c9f9daab7d11ad7d8d",
"assets/lib/src/assets/images/img_gender.png": "77b99790c69e4ff22e89832b6b0258c1",
"assets/lib/src/assets/images/img_home_love.png": "7e775797562bac675072041ad03bc603",
"assets/lib/src/assets/images/img_home_notifcation.png": "fac53f111daa0caeb5e5fc0ffa3ad11b",
"assets/lib/src/assets/images/img_item_activity.png": "21be2960042f19f7c6a001956566220c",
"assets/lib/src/assets/images/img_login_email.png": "39e376e72872f504e8edec014a2c85a7",
"assets/lib/src/assets/images/img_login_facebook.png": "066ab30ed1efa24dcd81be0a5ffd6f89",
"assets/lib/src/assets/images/img_login_google.png": "ff98606d2e97da9d08d7d86c10d2a375",
"assets/lib/src/assets/images/img_login_logo.png": "fc076a0b99578d9a99a0d5bc9ffb08cf",
"assets/lib/src/assets/images/img_login_password.png": "fcd3caa20fcc3a094607f045cf9d0521",
"assets/lib/src/assets/images/img_logo.png": "5a26e86595de7f8edccaa5427623c9da",
"assets/lib/src/assets/images/img_manshirt.png": "3a6ac75c456808e4e74d1ab018eaae54",
"assets/lib/src/assets/images/img_manwork.png": "2b87672168a1105b82aa57138989232b",
"assets/lib/src/assets/images/img_more.png": "c7262fc4f46c99dc75f4f9701dee869f",
"assets/lib/src/assets/images/img_offer.png": "7923187adc2e1c91c6d142d18d0f1238",
"assets/lib/src/assets/images/img_paypal.png": "e48faa3aa3ff33d1945f8da76cd49b4b",
"assets/lib/src/assets/images/img_phone.png": "0ff5b40f04afd64bd443cad404f9f0ac",
"assets/lib/src/assets/images/img_product1.png": "98521f823efefcfc18d31b84214d0ed6",
"assets/lib/src/assets/images/img_right.png": "6dabc5834dd0b1c37e53e326f2b706be",
"assets/lib/src/assets/images/img_uncheck.png": "a7361883237ed57521f2e0d73b19a996",
"assets/lib/src/assets/images/img_woman.png": "3abc999496ef0594eaf09b247e3f8915",
"assets/NOTICES": "63aeae58d3a1468196a8930e6c1e9229",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "3688efe0a39e59781b4f95efbd6b5b62",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e7584322388ac0412cdadddf6149e218",
"/": "e7584322388ac0412cdadddf6149e218",
"main.dart.js": "1057d459d7a67edad6e6f81c74206fa8",
"manifest.json": "c5a788babfd4a48d022af537bf30b481",
"version.json": "a5f13b4894c350fcea0a334f7a65ce3a"
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
