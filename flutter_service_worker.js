'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "157c0e154970a1310faed3279cfeebd3",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6c236f7e382f47efa7e57e8c84797989",
".git/ORIG_HEAD": "bb91cf6ce89f2e41052a4152fceb98c9",
".git/REBASE_HEAD": "bb91cf6ce89f2e41052a4152fceb98c9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/46/5e410bfdb526100c70473a6fb04179e7242b9c": "b334b68742e4dd6d9a7387316f3356f4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/cd/affb6ad7e9fcbb0997018c122a4ca38ff41493": "428d7309c20a631da7ac4b6592f84592",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b4/082628c9881b1a7f7b4d26cb58bbe94156a0c0": "ec02b2f6a758dcf013082a46f7cbecc6",
".git/objects/18/a3f8bf6e8c46617136aab3fac4ee89d79b6e05": "aabcefbe7b31a117fb5fe9b3eee07c73",
".git/objects/81/6cd5876da11c189ae7647446612186fc89b7df": "f082f1d7515af18fe4923fcdf2473c8e",
".git/objects/81/ce0443f23d9971a13a572474d84a4054267902": "7c04b7110367b0e9c55d091f1f729676",
".git/objects/a7/b27f8e8e40af7ac3157441f88ee7eac8399434": "ab2a179675a2c77f9fbb478a7e072d04",
".git/objects/5f/22ecf150a0d1bb342a8100fdfa0673014b0c61": "a89b73c4687f4faeab0f2a5f897245e2",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/22/035feb0af2617448f93d2585e4fd219ffb1d28": "380a9c3319f39dd8d95729329946748f",
".git/objects/22/9a1f717dfc877a782c2db915d10ee0a48de4bf": "45d5856e3f4c6ed5173259a0c506ff17",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/eefd1576a528f173daa954b0e0f1a0639754ce": "ad022f405eb5dcb99ea0e84024129159",
".git/objects/2c/ac2a223e3c583a563916f4c0879430894fc0fe": "bb2d2b9bed3b1ac773e1b42bdc9f6c20",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/77/d4ff11f0638dd03ea514708be176683bf53670": "8a7dd998c05dfa134467ee234f257827",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/7d/0a2af5ade6192eea30a39c0f8ba57ac57e4c60": "0a734a829a6e17072648176a8a202938",
".git/objects/7d/848549f8fcd64349760581fe081563781420a1": "ecaf42230f3cb46261f78fd176b8c324",
".git/objects/53/805f419d7674bed5dd3c2d8f23b32cabdf1677": "1b9acb25cf3864339b2b7c469e9447cd",
".git/objects/53/3e4b663c36e551aaa2adfb2f08c8f8b96d564f": "af83aeb0bd96c228540b892419e484a9",
".git/objects/fc/7930dd6295fe2844442442959a4de38037a8e6": "154a91fd10b86bf27bab3399439df839",
".git/objects/f7/292212417c19e26e1a386fac19601620938af7": "e98056cc93fa353e392f89f01e5e6906",
".git/objects/f7/ab38dda468d61709d1138915142ce210c590f7": "5a326a7f0928e11579880fae76897371",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/ac/089936771c98a51ff6cb04b40f4111ee43f89d": "979b62cf07d38c31d77ea5ed7d0c9824",
".git/objects/87/6dd40a4696adc7f390494ec78059fee922521c": "7b5d9ea4d8e7c9518ec422ab3f40f5b1",
".git/objects/57/0e7912e14a7758eef22dae605c0bd5df51a772": "77fb102cd6e47d504ad1089efcbe6080",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/bf/cc63965726b1dc8fa9c77d48294dc6a70a4b73": "446b258cc727eae6e5e1d0b54822394f",
".git/objects/bf/166ee9c0dc27dc69acc0dbe9cfedeaaacd7834": "18bada0c4d486562a12ddf17536cded7",
".git/objects/55/fb41fa18e4524bdfb3ab419ab36db220ba173c": "48fe35395ea21711a2a858ceac8529de",
".git/objects/21/51dea2e6bf697857ec92de855278853afd04bd": "d3a5089e9bb9c2a3de039f61255d389a",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/3f/20f6d6221b853f785c9beeae09b3448a8e57c4": "4949c787bc8863b397c2f491ecb3fe8d",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/fa/4dcf0733bc5ad6c4ad4e2a14d34680031025fc": "6d44657054a0e287f56101935f23424a",
".git/objects/6d/dc3009731aae9d9e07e38c10157e1b6e7f851e": "9539abdf0c556f7e231e99d5e60b9528",
".git/objects/80/649545e52d44d3c448d0b8d1a97ae7d5cfaac8": "3e57829f6e95b3201490e2129b3a5812",
".git/objects/47/c756e0e326b373dda014c62268c82b00c6eaeb": "1c1ecdb60d17075bc60ba20b3313d986",
".git/objects/47/e04bc56c6ea2664327d6a44cd508977aef5775": "7985b865a23e03d5aa7d118c8b82ce0e",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/e07ebdbe11ff379fbad9c14cff716845413921": "51d93d340fca8833ddf4b060a6f74c8c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f8/78f82d8fcd2cebd56eddc8029c9811b64b044b": "88645a8acc8c58f4aa640b6bfe046b84",
".git/objects/fd/c01427d66c488d789b0b36b24d7c6f1fb6b290": "4852d5bf49a14afc59b8407266181a48",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/b2/fbe95a5e6a1466cd04dea9e0388f35e71214c5": "36245548964a025441f79dab5afc9aa4",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/771cf6a084cb183390331b53a1299713fe2d7e": "2c74f98b8a0f7c04ec05b852f82c3bd5",
".git/objects/76/fb1afeb2396e49cfc12a5ccc95c443f975e3c4": "672a8f4179c9d945d17840e4c59f4241",
".git/objects/4f/068f289a6af84aec392867493684e641f0dffe": "0f8868c5a21688f33ce3ad73d683dc3d",
".git/objects/4f/f7986a90758e24d1b6c8f4f1b8bc4307edb847": "233a88cb769a4fdabbb3787d949f3114",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/0e147919c9dc06b72b673a53127c20f7a32cf1": "a906b53e026bceca991e9af05ebe7d5c",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/23/07791bc9615a9872c136f8e48f261cff123d41": "38fd6843ad3ab323588480a80b2f918f",
".git/objects/af/b81eb4e7730e7b0d82ef628b789cc8fe33f7b8": "a313aef61771a9b8482ea6707b582885",
".git/objects/af/33b088b124c85037155d48a578494ec9f71283": "96197900c8ed94e35dc3356c4df6cdd3",
".git/objects/af/f9563ae043fbe4d0cfbce34fcd75a8d08e5571": "24d6d39698def364fe48ccefd9d9d1a0",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/bd9193501f6fc605fa3d4819d2a8db8ae3c149": "8cb9d0d6177ff734d865f72d879b26b2",
".git/objects/1a/625c3f66b8c9df25fb556a68faca316cf28195": "783c572fd79e7e7dca39f5a05696c36a",
".git/objects/1c/9739fdc8e1f7ba3b732d2f4c7b204ac50bc855": "691d940355ae44bd88fffcb35921bac9",
".git/objects/92/87753c276dd95347fbb31851a44b83df382dd6": "aff8ac3224383ec92a096c08d01608a0",
".git/objects/41/21a9fb1c58cc862d9ad69b51d5f242d2166a32": "d9a7d3c98ea248e5e6369421cd11be87",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/40/961228c6a430e2fe533475c29896501aebfe16": "1cf0888f561c1cda33764ed376db1cd0",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f9/fc9e3e30dbec126031469dea766bc5660911dc": "ad1edf6eb510ba91c5763763e039e66f",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/ca/85002601d142cb0fbd139a47ac393963af4cff": "e8bf8570a5ca3faee3ec8ec3f04688d0",
".git/objects/ca/ef29367a14e3e9b3070b0bf4296b8d07030b4e": "f8c8a37536d793adeafbc81953bf09f7",
".git/objects/56/cb63300b87b541561d0290ed2bf7021e7f2393": "d9f5dd217614a49faf989d8abb307022",
".git/objects/de/d6103b698ae3687b42987d95f3db37754f5b84": "c4cc3558b409aa996ab5c2c2e4e89e29",
".git/objects/67/7b646a216caed3263e8fd37a78d716784882a8": "ecfd1067127e51af98a2729957ca7c69",
".git/objects/db/d5f7f4e913acb15da5bb424516dbe65532d442": "41edac367e872245bef3b25ca3279990",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/86/8e85fc72e91f0dc2fe38fdae1630d99ce0383c": "ab71a1930755b8f006cf9308c5129196",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/5fe19fa4088b778633755d0ffdbb2ccc8fd847": "6150e2fc845aa445b6d3439b5192834e",
".git/objects/37/5d26f3655cc843877a0f2b749f590f1a078e78": "780b0a13b87a7cabab5fc8237eabbfa5",
".git/objects/37/28f281f0221820d8fbfdc5f86bf88ebc15e555": "783c65545dd59c5700d36a6635ae19bd",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/6c/8bcb650b88fc7306288db36ad524f73cd1e5cf": "11b19b7ada6e5c82496e6d660ae2b903",
".git/objects/7f/6955c917a74b982150a1aa59e80c7609814101": "75d3fbeb27772d19e6552781c24cd738",
".git/objects/7f/2d1a638001d2779721e21c4d1c4ab0a6a7cd11": "97f5da1892e85410aaf694d9f4b1c32b",
".git/objects/7e/270241d3f1ea23a4d921ccbc9e182f5234ac68": "5e00ad9e2bffc1b403c770d306ed2aa5",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/13/22b2d1728a928dfdf48662133739d679be7025": "59c5b3227cfab732bebbacd948d6460c",
".git/objects/c4/cefb3043e3d5a0f6d68e2da9025ed76c8a43a3": "cbd4b21ff6b37fb39991d7cb456977df",
".git/objects/29/9c0c7edfb936d2aeb99963a7ef864bb679d3a9": "7dc492fef71414ae0471c5fcdf165e64",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/dc/112e79d530790f08d4fc32f201b3eee74cb4bf": "7e1945af24fa21c5be0d08962fefa7c5",
".git/objects/0b/4f0ead9acd58abfd6288ff0e73eae43f78ff4c": "20c8b8ccbace28aceefd2e78cd362139",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/52/4539250e189af16bcaec6c0028a42640f4399e": "8ac9f70fb124955c0cf5f6be368f4efc",
".git/objects/bd/014b299b03b3856828797df997a5793660198f": "0e08d001cc85fdbe47a4320a1ee2e78f",
".git/objects/8e/839b3cb1505dd685ef6272739f444d814e6b20": "410925026a169055113e70fdbe5fc6f9",
".git/objects/c5/d353c317e5bb8080d8e1eacb1aa6174cb2d1f2": "27aff9730c7eafa1740f5eb2c97f9e77",
".git/objects/bc/7ec90b02c0460da3c60aa3192cc58eea4e2419": "aabda45682b6f1d0ae3ce7003b5eceef",
".git/objects/e5/971994b56ad766f29987973b809543ad2c745e": "3cebe19eb665f89eb04477ec2cca9187",
".git/objects/e3/a7ba0cdf1f23ac3765426086c4326e35b8ae4a": "8a4482dd596cfcc0274ba4ac9678bb34",
".git/objects/e3/691ef529c352e1b9a83112d5f38237111d3029": "8debc5585a30b39abaca986474e9af91",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/875cece0b0055f422678997ad0a3f796033c62": "c9ead966d6c4f04f73480c49a36b7b0f",
".git/objects/be/4a2a014091128e852f39214e93e37e2ac1671b": "774be25ba9b875427a2e61ec86fe3d62",
".git/objects/0a/888c4b9e892cd71d20e148941309b4a2496b06": "d1641aea61827933bc227ac4d3a1a428",
".git/objects/45/b6ccfd48f08739e0698f10c05166e657fa7a1c": "293714b0e16df1cacf98feaa0d35b192",
".git/objects/c2/5ff1343ee7b9143ff33d193d92cfd834bd43cb": "bbf7dfbd6f3155fb9c07722622471d7b",
".git/objects/34/fdf0707332cb13da64f9969e380f6e9c2e1894": "0af928db60aec68f64fdc9cdc7917502",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/e96893bfcab6c7ffefc625f3d7ee03ad3094af": "15899ffc0743b10b23ddcd81ae7abe7c",
".git/objects/2b/2a0c4dd6b33880498786cdd70d3314778f4a6f": "c7ceb63a3544f2e3cea054b8ec5bfd00",
".git/objects/2b/4c6d15565219115b46ecf7174f866261def9a4": "caa5da36aef3ca34eb084ba72c29df67",
".git/objects/2b/73233a50510c38f36849fe159939e9a46441b0": "972a54f0575b64b69efabb2b47ddcd3e",
".git/objects/54/0118cf9d0eb5653cbc7b7a826c6d0b3adddcfd": "eba3a9536232ccf50a7950514600c90b",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/bb/ab99a3ae96d37bf5dc4f30fb7dc1e7e35e0797": "50b30fa199ecdacb9f3a8593372331ab",
".git/objects/bb/fddc2d37190b845a07ed981499fc81f660038c": "a1b1d8104d24831bf1a368e1795b7941",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/main2": "bb91cf6ce89f2e41052a4152fceb98c9",
".git/refs/heads/main": "90d24b716896fe09d849814e91e149f5",
".git/refs/stash": "9fd56bf16694bfb286c81b22fd7b3a89",
".git/refs/remotes/origin/main": "90d24b716896fe09d849814e91e149f5",
".git/logs/HEAD": "6b0e6720499dda38a46db9eb6dd3f183",
".git/logs/refs/heads/main2": "bae415331617c9d0b1506514b6984223",
".git/logs/refs/heads/main": "8b99ce514d9014cb3decf34996e6e69a",
".git/logs/refs/stash": "1b0dc80b8094f0a17b156027b73cb2ac",
".git/logs/refs/remotes/origin/main": "fa9b09feabd5b1dc2cf6f65eb9490729",
".git/index": "d3d1c71eb5be18169b44da0ac13df80d",
".git/config": "02a517554d388056f6ea16e19dc84430",
".git/rebase-merge/author-script": "7fef99f4bbe4cada679c784c1f7375cf",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "bb91cf6ce89f2e41052a4152fceb98c9",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/git-rebase-todo.backup": "854fe2d47784ff389319d49094a31854",
".git/rebase-merge/end": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/done": "9036624293a1d5f700516b099616ea0f",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/onto": "90d24b716896fe09d849814e91e149f5",
".git/rebase-merge/message": "cb6aa37565ea53d1be16859564775fea",
".git/rebase-merge/orig-head": "bb91cf6ce89f2e41052a4152fceb98c9",
".git/rebase-merge/patch": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/head-name": "360efc618fa1294192e18ee097c9fae4",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"manifest.json": "ace73b8052dbe108feb3740e00a5fdc6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "2cb0922fc5d2e1c458e592cde211f718",
"index.html": "6ed3fe1ffd50fe4ae0a736837d0ca0e9",
"/": "6ed3fe1ffd50fe4ae0a736837d0ca0e9",
"main.dart.js": "ddf96c4f9d7209798c3f308f5fd41f4c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "9614fe8be0b988fead3444bd60946406",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/assets/story.json": "f969fbfa84519a2de6c8f815a9a55aaf",
"assets/assets/gadget.json": "2eca5a7a15d1309515ae9c66aa5776c0",
"assets/fonts/MaterialIcons-Regular.otf": "e19939d6a81c03a99cf494d58e2dc46a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"flutter_bootstrap.js": "8e119cc18a090236d089c462df0f2d47"};
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
