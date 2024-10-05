'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"manifest.json": "ace73b8052dbe108feb3740e00a5fdc6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "987dae27b8203abb57f9abcefe2129bf",
"index.html": "6ed3fe1ffd50fe4ae0a736837d0ca0e9",
"/": "6ed3fe1ffd50fe4ae0a736837d0ca0e9",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"version.json": "2cb0922fc5d2e1c458e592cde211f718",
".git/objects/c2/5ff1343ee7b9143ff33d193d92cfd834bd43cb": "bbf7dfbd6f3155fb9c07722622471d7b",
".git/objects/69/875cece0b0055f422678997ad0a3f796033c62": "c9ead966d6c4f04f73480c49a36b7b0f",
".git/objects/3f/20f6d6221b853f785c9beeae09b3448a8e57c4": "4949c787bc8863b397c2f491ecb3fe8d",
".git/objects/8e/839b3cb1505dd685ef6272739f444d814e6b20": "410925026a169055113e70fdbe5fc6f9",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/01/cbfc72c50d18dcb7a8fd28c77d1186ac3432cf": "deab9ecd1006f035bc46bf485b4d798b",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/30/10dd93b4b2f3c8356c2347ca9a615a0615d0da": "f2703076ad9842c2d4e9facae83445f5",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/de/d6103b698ae3687b42987d95f3db37754f5b84": "c4cc3558b409aa996ab5c2c2e4e89e29",
".git/objects/2c/ac2a223e3c583a563916f4c0879430894fc0fe": "bb2d2b9bed3b1ac773e1b42bdc9f6c20",
".git/objects/4f/068f289a6af84aec392867493684e641f0dffe": "0f8868c5a21688f33ce3ad73d683dc3d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/5e410bfdb526100c70473a6fb04179e7242b9c": "b334b68742e4dd6d9a7387316f3356f4",
".git/objects/bf/166ee9c0dc27dc69acc0dbe9cfedeaaacd7834": "18bada0c4d486562a12ddf17536cded7",
".git/objects/9d/48f33d53bbadf05bce15c867e2e0455eac46b4": "7195f8d8d488e90b1f1dc4cd46de66f2",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/56/cb63300b87b541561d0290ed2bf7021e7f2393": "d9f5dd217614a49faf989d8abb307022",
".git/objects/76/0c281ca0720f3746bf4350838c08a3692f8ef3": "d8ec90c693ec55fa415a14172fe4f51d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/80/649545e52d44d3c448d0b8d1a97ae7d5cfaac8": "3e57829f6e95b3201490e2129b3a5812",
".git/objects/dc/112e79d530790f08d4fc32f201b3eee74cb4bf": "7e1945af24fa21c5be0d08962fefa7c5",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/5c/6723265b675ea0b85e62f5b91088cfac62a9c2": "f4009685fc689d2d29b0476c57b040e1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/fa/4dcf0733bc5ad6c4ad4e2a14d34680031025fc": "6d44657054a0e287f56101935f23424a",
".git/objects/03/57d3f258e5c2fe1b3f54d415add4f6106fcd19": "726b3aa3ca3d94cc63c33ec331281d4f",
".git/objects/ac/089936771c98a51ff6cb04b40f4111ee43f89d": "979b62cf07d38c31d77ea5ed7d0c9824",
".git/objects/54/0118cf9d0eb5653cbc7b7a826c6d0b3adddcfd": "eba3a9536232ccf50a7950514600c90b",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/86/8e85fc72e91f0dc2fe38fdae1630d99ce0383c": "ab71a1930755b8f006cf9308c5129196",
".git/objects/7d/f12e27d1903471bd84c6013795192c56f4bae0": "aec855b5852ce452335259c34a6740cc",
".git/objects/7d/848549f8fcd64349760581fe081563781420a1": "ecaf42230f3cb46261f78fd176b8c324",
".git/objects/c1/cfd599e936a03f29d2cd4fecf9f6373988fe13": "fcb99f2a5b240bbbbdfc30da7097377f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/52/4539250e189af16bcaec6c0028a42640f4399e": "8ac9f70fb124955c0cf5f6be368f4efc",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/bb/fddc2d37190b845a07ed981499fc81f660038c": "a1b1d8104d24831bf1a368e1795b7941",
".git/objects/13/2b3e468d66e245d8c07bc52974d6ac97bf8de1": "2d24dfefecfbae2d736e1907a50cdb55",
".git/objects/13/22b2d1728a928dfdf48662133739d679be7025": "59c5b3227cfab732bebbacd948d6460c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/6c/8bcb650b88fc7306288db36ad524f73cd1e5cf": "11b19b7ada6e5c82496e6d660ae2b903",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/af/f9563ae043fbe4d0cfbce34fcd75a8d08e5571": "24d6d39698def364fe48ccefd9d9d1a0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e07ebdbe11ff379fbad9c14cff716845413921": "51d93d340fca8833ddf4b060a6f74c8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f7/ab38dda468d61709d1138915142ce210c590f7": "5a326a7f0928e11579880fae76897371",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/ef29367a14e3e9b3070b0bf4296b8d07030b4e": "f8c8a37536d793adeafbc81953bf09f7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/87/6dd40a4696adc7f390494ec78059fee922521c": "7b5d9ea4d8e7c9518ec422ab3f40f5b1",
".git/objects/1a/625c3f66b8c9df25fb556a68faca316cf28195": "783c572fd79e7e7dca39f5a05696c36a",
".git/objects/1a/d5805dcfe06df3b64274c5b2e4cc38b0320a6a": "bf8db077e895f4125f11ed32408ad78c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/4ec77998c1e08d4554577abbe5374cbaa25d24": "867e939611f5ec806e5ff580851b7076",
".git/objects/2b/4c6d15565219115b46ecf7174f866261def9a4": "caa5da36aef3ca34eb084ba72c29df67",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/47/e04bc56c6ea2664327d6a44cd508977aef5775": "7985b865a23e03d5aa7d118c8b82ce0e",
".git/objects/2d/4cb2dda59dd5345ac6f3b276d5e2a033c2ce2e": "46280d0c2b66a609b3cb4933ba75a9a6",
".git/objects/b2/fbe95a5e6a1466cd04dea9e0388f35e71214c5": "36245548964a025441f79dab5afc9aa4",
".git/objects/34/fdf0707332cb13da64f9969e380f6e9c2e1894": "0af928db60aec68f64fdc9cdc7917502",
".git/objects/34/38c838352058a89ae046ee462bea5dcc0027c9": "b2b4099ae887146ee91bb113d4eaf5f4",
".git/objects/7f/2d1a638001d2779721e21c4d1c4ab0a6a7cd11": "97f5da1892e85410aaf694d9f4b1c32b",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/e9/eefd1576a528f173daa954b0e0f1a0639754ce": "ad022f405eb5dcb99ea0e84024129159",
".git/objects/37/17f32cad701a1a9773fcd6d9be251ec6a94c85": "8134e281b330b722c036bd862c44a074",
".git/objects/37/28f281f0221820d8fbfdc5f86bf88ebc15e555": "783c65545dd59c5700d36a6635ae19bd",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/aa/1d3b8dc03e92ad139ac137a21bea0af80e3a34": "ba8924578be4ec75222255fff517af50",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/0b/4f0ead9acd58abfd6288ff0e73eae43f78ff4c": "20c8b8ccbace28aceefd2e78cd362139",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/67/7b646a216caed3263e8fd37a78d716784882a8": "ecfd1067127e51af98a2729957ca7c69",
".git/objects/59/77dda9508e71e86cc9460931aa908928b2f90e": "70fdd3c4d17348aa847b2f15e742ef60",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/57/0e7912e14a7758eef22dae605c0bd5df51a772": "77fb102cd6e47d504ad1089efcbe6080",
".git/refs/heads/main": "5d5529470699adcceae0c4f2a4ed286d",
".git/refs/remotes/origin/main": "5d5529470699adcceae0c4f2a4ed286d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/ORIG_HEAD": "a4ce59b8f9c239bcbccee86a076261d9",
".git/config": "4e7b18bb153c8353cae979aef7b2ddcc",
".git/index": "35992698366c8f6e6ceabe4ead1d07af",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e139be6b6b362ab64d632de4036f8877",
".git/logs/refs/heads/main": "900e143d3c6af7461d7bfbe67ae1da3a",
".git/logs/refs/remotes/origin/main": "c4299103d7ba158060256bbdbf965ad1",
".git/logs/HEAD": "900e143d3c6af7461d7bfbe67ae1da3a",
".git/COMMIT_EDITMSG": "5bec7013a92da6bec2ca99053336c6d9",
"main.dart.js": "480d3d8a21aae70c9b84dfb2b4b497fa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "0738b432e05635d7c35ce107f3cf03ee",
"assets/AssetManifest.bin": "1ccdc3ee58e025d2c78a1be6a0aa7a32",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "d9f8eda01e593e87f83ee1433548b792",
"assets/assets/story.json": "f969fbfa84519a2de6c8f815a9a55aaf",
"assets/assets/gadget.json": "2eca5a7a15d1309515ae9c66aa5776c0",
"assets/fonts/MaterialIcons-Regular.otf": "bdd028cd8fab9813506bfe8c73b9f189",
"assets/NOTICES": "9384f0439133ecb1ff0d3e6bee2a8e0c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
