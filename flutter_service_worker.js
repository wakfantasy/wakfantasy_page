'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2cb0922fc5d2e1c458e592cde211f718",
"main.dart.js": "859ae104a24143599533cb3e2b417660",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter_bootstrap.js": "52fd9f77c495655cc4019a07822e6ae2",
"flutter.js": "f393d3c16b631f36852323de8e583132",
".git/config": "4e7b18bb153c8353cae979aef7b2ddcc",
".git/objects/2b/2a0c4dd6b33880498786cdd70d3314778f4a6f": "c7ceb63a3544f2e3cea054b8ec5bfd00",
".git/objects/7f/2d1a638001d2779721e21c4d1c4ab0a6a7cd11": "97f5da1892e85410aaf694d9f4b1c32b",
".git/objects/7f/9fe107b3baf453ff1b5ee45a54718a812a74d9": "bd51d0b6a20880452ad8b3273ca12a83",
".git/objects/bf/166ee9c0dc27dc69acc0dbe9cfedeaaacd7834": "18bada0c4d486562a12ddf17536cded7",
".git/objects/c8/caaaf53f49a23260f9df66f6788770d0fb97c5": "c72d4159d29ff4d775aea594025d75f7",
".git/objects/da/5fe19fa4088b778633755d0ffdbb2ccc8fd847": "6150e2fc845aa445b6d3439b5192834e",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/6c/8bcb650b88fc7306288db36ad524f73cd1e5cf": "11b19b7ada6e5c82496e6d660ae2b903",
".git/objects/0b/4f0ead9acd58abfd6288ff0e73eae43f78ff4c": "20c8b8ccbace28aceefd2e78cd362139",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/34/fdf0707332cb13da64f9969e380f6e9c2e1894": "0af928db60aec68f64fdc9cdc7917502",
".git/objects/51/c0ffbed1274863149ca7c428327e041114214f": "ad07e2c71f9d00cd517e7ed49e07e3ed",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/dc/112e79d530790f08d4fc32f201b3eee74cb4bf": "7e1945af24fa21c5be0d08962fefa7c5",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/be/d912a50616c3b5c4e08e61f570c25619ed395c": "cff001d701901fa9cd35cbf9c60c9ec4",
".git/objects/be/235285b228c7d16217cc6602743628003e60db": "f77514c9a0e1a85737f67fd24ca316a9",
".git/objects/c2/5ff1343ee7b9143ff33d193d92cfd834bd43cb": "bbf7dfbd6f3155fb9c07722622471d7b",
".git/objects/69/875cece0b0055f422678997ad0a3f796033c62": "c9ead966d6c4f04f73480c49a36b7b0f",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/29/9c0c7edfb936d2aeb99963a7ef864bb679d3a9": "7dc492fef71414ae0471c5fcdf165e64",
".git/objects/30/1b0867f9738079079ac0e7d380624bfb0bf1ac": "79eb7f75429f964aba0536debb6ad67a",
".git/objects/80/649545e52d44d3c448d0b8d1a97ae7d5cfaac8": "3e57829f6e95b3201490e2129b3a5812",
".git/objects/45/b6ccfd48f08739e0698f10c05166e657fa7a1c": "293714b0e16df1cacf98feaa0d35b192",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/2c/ac2a223e3c583a563916f4c0879430894fc0fe": "bb2d2b9bed3b1ac773e1b42bdc9f6c20",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e07ebdbe11ff379fbad9c14cff716845413921": "51d93d340fca8833ddf4b060a6f74c8c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/1a/625c3f66b8c9df25fb556a68faca316cf28195": "783c572fd79e7e7dca39f5a05696c36a",
".git/objects/54/0118cf9d0eb5653cbc7b7a826c6d0b3adddcfd": "eba3a9536232ccf50a7950514600c90b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/40/961228c6a430e2fe533475c29896501aebfe16": "1cf0888f561c1cda33764ed376db1cd0",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/53/3e4b663c36e551aaa2adfb2f08c8f8b96d564f": "af83aeb0bd96c228540b892419e484a9",
".git/objects/52/4539250e189af16bcaec6c0028a42640f4399e": "8ac9f70fb124955c0cf5f6be368f4efc",
".git/objects/17/dedfd26f30224df35d3e0511939f9b8da1a595": "f0cc3ab79ea017df997d06a0efab49e5",
".git/objects/ac/089936771c98a51ff6cb04b40f4111ee43f89d": "979b62cf07d38c31d77ea5ed7d0c9824",
".git/objects/cd/affb6ad7e9fcbb0997018c122a4ca38ff41493": "428d7309c20a631da7ac4b6592f84592",
".git/objects/d9/5f060a4c579774942cb811cf4b4fe9685550ff": "272fe95dce7b66a796a60d99b545739f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/86/8e85fc72e91f0dc2fe38fdae1630d99ce0383c": "ab71a1930755b8f006cf9308c5129196",
".git/objects/8e/839b3cb1505dd685ef6272739f444d814e6b20": "410925026a169055113e70fdbe5fc6f9",
".git/objects/1c/657e067eeea02695701fc40317de7445ce56b2": "613cdfbc684300d53aa2aa41dbfbb9e2",
".git/objects/22/035feb0af2617448f93d2585e4fd219ffb1d28": "380a9c3319f39dd8d95729329946748f",
".git/objects/af/33b088b124c85037155d48a578494ec9f71283": "96197900c8ed94e35dc3356c4df6cdd3",
".git/objects/af/f9563ae043fbe4d0cfbce34fcd75a8d08e5571": "24d6d39698def364fe48ccefd9d9d1a0",
".git/objects/81/6cd5876da11c189ae7647446612186fc89b7df": "f082f1d7515af18fe4923fcdf2473c8e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/f3/60c9ef4b8aa7ccfdbd875a2d133696db583185": "556240dc088382fec9fa67cafc52ff38",
".git/objects/56/cb63300b87b541561d0290ed2bf7021e7f2393": "d9f5dd217614a49faf989d8abb307022",
".git/objects/6d/dc3009731aae9d9e07e38c10157e1b6e7f851e": "9539abdf0c556f7e231e99d5e60b9528",
".git/objects/e3/691ef529c352e1b9a83112d5f38237111d3029": "8debc5585a30b39abaca986474e9af91",
".git/objects/5f/b759afe0c90c59615e85aa55048f24e277ed0c": "ec8b8b24ce38fad8556da56a87d1e7fb",
".git/objects/bb/fddc2d37190b845a07ed981499fc81f660038c": "a1b1d8104d24831bf1a368e1795b7941",
".git/objects/bb/ab99a3ae96d37bf5dc4f30fb7dc1e7e35e0797": "50b30fa199ecdacb9f3a8593372331ab",
".git/objects/87/6dd40a4696adc7f390494ec78059fee922521c": "7b5d9ea4d8e7c9518ec422ab3f40f5b1",
".git/objects/bd/014b299b03b3856828797df997a5793660198f": "0e08d001cc85fdbe47a4320a1ee2e78f",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/67/7b646a216caed3263e8fd37a78d716784882a8": "ecfd1067127e51af98a2729957ca7c69",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/de/d6103b698ae3687b42987d95f3db37754f5b84": "c4cc3558b409aa996ab5c2c2e4e89e29",
".git/objects/ca/ef29367a14e3e9b3070b0bf4296b8d07030b4e": "f8c8a37536d793adeafbc81953bf09f7",
".git/objects/b2/fbe95a5e6a1466cd04dea9e0388f35e71214c5": "36245548964a025441f79dab5afc9aa4",
".git/objects/3f/20f6d6221b853f785c9beeae09b3448a8e57c4": "4949c787bc8863b397c2f491ecb3fe8d",
".git/objects/e9/eefd1576a528f173daa954b0e0f1a0639754ce": "ad022f405eb5dcb99ea0e84024129159",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/13/22b2d1728a928dfdf48662133739d679be7025": "59c5b3227cfab732bebbacd948d6460c",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/677d317cc5d547f1686aea1dbb0d8a0f158e20": "0013a36a9447ea01a9e9991486ce1bf0",
".git/objects/4f/068f289a6af84aec392867493684e641f0dffe": "0f8868c5a21688f33ce3ad73d683dc3d",
".git/objects/47/9e479fd8d4b46a7cfa5fee452f317365ffa626": "4f6a4fd975f5fe542650b7be55cb8405",
".git/objects/47/c756e0e326b373dda014c62268c82b00c6eaeb": "1c1ecdb60d17075bc60ba20b3313d986",
".git/objects/47/e04bc56c6ea2664327d6a44cd508977aef5775": "7985b865a23e03d5aa7d118c8b82ce0e",
".git/objects/fa/4dcf0733bc5ad6c4ad4e2a14d34680031025fc": "6d44657054a0e287f56101935f23424a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/46/5e410bfdb526100c70473a6fb04179e7242b9c": "b334b68742e4dd6d9a7387316f3356f4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/f9/9a027cdc737834b0a33e2427fafac0c6116f5b": "ec90e3020e4a786c9730c9f3b7e39038",
".git/objects/37/28f281f0221820d8fbfdc5f86bf88ebc15e555": "783c65545dd59c5700d36a6635ae19bd",
".git/objects/57/0e7912e14a7758eef22dae605c0bd5df51a772": "77fb102cd6e47d504ad1089efcbe6080",
".git/objects/f7/ab38dda468d61709d1138915142ce210c590f7": "5a326a7f0928e11579880fae76897371",
".git/objects/f6/f2a1c907425be358699bc42eeba47fb8c34990": "e4af0f711883323da777e26ae59dfa44",
".git/objects/7d/848549f8fcd64349760581fe081563781420a1": "ecaf42230f3cb46261f78fd176b8c324",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/index": "91e7113fd6840107dbe0615371411e4f",
".git/ORIG_HEAD": "5d63048f15b4fc1af7da2f16eea9e29f",
".git/refs/heads/main": "5d63048f15b4fc1af7da2f16eea9e29f",
".git/refs/remotes/origin/main": "5d63048f15b4fc1af7da2f16eea9e29f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/FETCH_HEAD": "8c2b2bb0f062d5bee1e58b7890f2106a",
".git/COMMIT_EDITMSG": "cff0e21f3418c589e2bffb3d497294af",
".git/logs/refs/heads/main": "bbb4fe3a64d02925111f201097133d7b",
".git/logs/refs/remotes/origin/main": "85e7d7a35cc85edc6cbc00855487ccae",
".git/logs/HEAD": "6a0207d53ec81d090e60a5729e5384ac",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"manifest.json": "ace73b8052dbe108feb3740e00a5fdc6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "9384f0439133ecb1ff0d3e6bee2a8e0c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/assets/gadget.json": "2eca5a7a15d1309515ae9c66aa5776c0",
"assets/assets/story.json": "f969fbfa84519a2de6c8f815a9a55aaf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "30da65e9483553c107b495a7b9984756",
"index.html": "6ed3fe1ffd50fe4ae0a736837d0ca0e9",
"/": "6ed3fe1ffd50fe4ae0a736837d0ca0e9"};
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
