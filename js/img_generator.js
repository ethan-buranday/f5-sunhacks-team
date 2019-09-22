const libraries = {
    bb: [
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.hellogiggles.com%2Fuploads%2F2016%2F12%2F14003932%2FScreen-Shot-2016-12-14-at-11.38.50-AM.png&w=400&c=sc&poi=face&q=85",
        "https://img.buzzfeed.com/buzzfeed-static/static/2016-12/14/14/asset/buzzfeed-prod-fastlane01/sub-buzz-1243-1481745040-1.jpg?output-quality=auto&output-format=auto&downsize=360:*" ,
        "https://www.meme-arsenal.com/memes/9ea4db8533bdad944f6aca80e24792ab.jpg",
        "https://i.gifer.com/fetch/w300-preview/b2/b2e49779f421ecc8a5a93626c3aca301.gif",
        "https://fsmedia.imgix.net/ca/65/e2/71/bc40/43ca/96f7/85ea96cfc7a3/evil-kermit-meme-thjpg.jpeg?auto=compress&h=1200&w=1200&crop=edges&fit=crop",
        "https://thumbs.gfycat.com/ScaredFluidHarborporpoise-size_restricted.gif",
        "https://media0.giphy.com/media/FcTdv3xQKhCIE/giphy.gif",
        "https://media2.giphy.com/media/oyFyFiXz0hrnG/giphy.gif",
        "https://pm1.narvii.com/6711/de168d649c89764881a3ff8147ac05dcd10dd970_hq.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuO_z_lJOKYpCtYfeZGwEZ4qY0ORB01cVYCVPF7LmXU3HBMBZPZw",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNBcAqDGGWOL0lI9bvigejxX8OJUeRx-AsfaQKBt5Y4ce93GP",
        "https://media0.giphy.com/media/mMctlNZo7Kmoo/giphy.gif",
        "https://www.dailydot.com/wp-content/uploads/2018/10/kermit-floating-in-tub-meme.gif",
        "https://data.whicdn.com/images/268772526/large.jpg",
        "https://i.guim.co.uk/img/media/327e46c3ab049358fad80575146be9e0e65686e7/0_0_1023_742/master/1023.jpg?width=300&quality=85&auto=format&fit=max&s=02632218051da209be64b27e96722c43",
        "https://i.redd.it/gnrkkpp5qgb31.jpg",
        "https://preview.redd.it/khfjjwyvgwn21.jpg?width=640&crop=smart&auto=webp&s=0fba4293aabf1197e97f9246f6f4ebcd41cb5d15",
        "https://cdn.vox-cdn.com/thumbor/m8QXqDRdHkc6MJHpuUU0BaoOGao=/0x0:1205x798/1200x800/filters:focal(513x122:743x352)/cdn.vox-cdn.com/uploads/chorus_image/image/55474495/Screen_Shot_2017_06_27_at_1.05.21_PM.0.png",
        "https://i.pinimg.com/originals/f3/13/00/f31300a81666a8b37f4ba59e3c0cca85.jpg",
        "https://steemitimages.com/DQmeiaXavqiyZPv7AHzUApSbJwrUYDRsd5PCMggbz4XN3zh/image.png",
        "https://i.imgur.com/uf9YNVm.png",
        "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwji3M7nx-LkAhVRrp4KHb5OBZ0QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F315885361360619411%2F&psig=AOvVaw2kift5u0X46YgUbbErmyA_&ust=1569177482134305",
        "https://pbs.twimg.com/media/DsVJ-3EU8AASNtg.jpg",
        "https://data.whicdn.com/images/310787955/large.jpg",
        "https://i.imgur.com/Ln3bk3h.jpg",
        "https://i.pinimg.com/736x/8f/ea/2a/8fea2ac477f1de2229db8c40dd13cae6.jpg",
        "https://pbs.twimg.com/profile_images/928080785105547265/RfX2iQYL_400x400.jpg",
        "https://66.media.tumblr.com/24734d4116f6fdd024c5697347993477/tumblr_nzc3w1SRuK1s2sujmo8_250.jpg",
        "https://66.media.tumblr.com/47545a0db5f2ce101705b3a226ac9f57/tumblr_mjzkb3qRfA1r2g7mto1_500.jpg",
        "https://i.redd.it/2rppbrtu6ye01.jpg",
        "https://i.pinimg.com/236x/8e/d0/d0/8ed0d0300d8ffc7bd5a5ea631684cb59.jpg",
        "https://i.imgur.com/JKaIU1K.gif",
        "https://pbs.twimg.com/media/CkxZK-9UYAIClPK.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKPFYL7ycgvNQeQ1LkcFGQDzbSC6w1R94shqDcn330UCSA6PDeTQ",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4B_udQzMKXH01A8DeuaZ0JqmHUx1mT7hE2OTFtwqiEyeV7ph",
        "https://scontent-atl3-1.cdninstagram.com/vp/3811f094605ce77b90bb9e34be0664a4/5E06910F/t51.2885-15/e35/c26.0.389.389a/38072536_904088093134672_946028781020119040_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com",
        "https://pbs.twimg.com/media/DsVJ-3EU4AEbyZh.jpg",
        "https://i.kym-cdn.com/photos/images/original/000/726/195/266.jpg",
        "https://media1.giphy.com/media/10hfegXGKVRVNm/giphy.gif",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_Ic3IcM8Pkg8QNnxLk-jXJ57sN1EsYYrDyvTo5hpO0JibP5N",
        "https://thumbs.gfycat.com/DirectFrenchBarnowl-size_restricted.gif",
        "https://i.pinimg.com/474x/37/c4/b6/37c4b64b3382b50e44cee404063d235a.jpg",
        "https://media.tenor.com/images/2ed4441f5c18cef65f98dbd1f1b1aa76/tenor.gif",
        "https://media.tenor.com/images/e53476474d84a4234d8d4d4e96b758bd/tenor.gif",
        "https://en.meming.world/images/en/thumb/b/b8/You_Are_Not_a_Clown._You_Are_The_Entire_Circus.jpg/300px-You_Are_Not_a_Clown._You_Are_The_Entire_Circus.jpg",
        "https://bubblesofthoughtsweb.files.wordpress.com/2017/11/capture4.png?w=454&h=342",
        "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/14/9/enhanced/webdr10/enhanced-26603-1429018100-14.jpg?downsize=700:*&output-format=auto&output-quality=auto",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/041/975/4b7.jpg",
        "https://i.imgur.com/hWsLxXW.jpg",
        "https://forums.ultra-combo.com/uploads/default/original/2X/2/2aa2d2552a305aadbb750d79348eeb6c558e39a0.jpg",
        "http://40.media.tumblr.com/0cacf1e34fc56489864d0dca4100d4c4/tumblr_ngje6yT1dl1u5firdo1_1280.jpg",
        "https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2016/09/19/111527_1316733.jpg.1500x750_q95_crop-smart_upscale.jpg",
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAFvf2p.img?h=357&w=624&m=6&q=60&o=f&l=f",
        "https://pbs.twimg.com/media/EEsOjZzXUAEoo0N.jpg:large",
        "https://i.redd.it/4wel1xmq3wq21.jpg",
        "https://pbs.twimg.com/media/EEIDbLcUEAMCZtr.jpg:large",
        "https://pbs.twimg.com/media/DIIiv3XXkAIc8VQ.jpg",
        "https://s3.amazonaws.com/mlg-gamebattles-production/assets/arenas/teams/16/27/664/logo721241657391467471403.jpeg",
        "https://data.whicdn.com/images/315028077/superthumb.jpg?t=1530574683",
        "https://i.kym-cdn.com/entries/icons/facebook/000/010/867/Untitled.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvMB99f3lbl36rwi9t8u3raQNEoHnlvMTxW62VKDfLQKUvQbEMA",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUO0IZLZkaVFHBLVs5xDU9PsvTIw2O9_uAT-ggiD2K-B6-JkmX",
        "https://images2.memedroid.com/images/UPLOADED25/51d295db486c7.jpeg",
        "https://pm1.narvii.com/6813/02de04bed3de6a0424a6e0e59f67eb5067a8c3c4v2_hq.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRSGq6AaJ4hQsCmD2F-ou3Ejs4AlbRKRDkhECDjg1M7m20KYPR",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/090/170/192.png",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/465/425/3fd.jpg",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/383/644/6db.png",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/367/507/212.jpg",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/285/460/8b6.jpg",
        "https://i.kym-cdn.com/entries/icons/mobile/000/018/433/wojak.jpg",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/077/564/d5b.jpg",
        "https://i.kym-cdn.com/entries/icons/square/000/017/306/icrievrytiem.png",
        "https://i.kym-cdn.com/photos/images/newsfeed/000/847/015/01a.jpg",
        "https://i.kym-cdn.com/entries/icons/square/000/019/649/OK_thumb.png",
        "https://i.kym-cdn.com/photos/images/newsfeed/000/289/977/ab2.gif",
        "https://i.kym-cdn.com/entries/icons/square/000/017/564/40b.jpg",
    ],
    bg: [
        "../img/bg/img78.jpeg",
        "../img/bg/img79.jpeg",
        "../img/bg/img80.jpeg",
        "../img/bg/img81.jpeg",
        "../img/bg/img82.jpeg",
        "../img/bg/img83.jpeg",
        "../img/bg/img84.jpeg",
        "../img/bg/img85.jpeg",
        "../img/bg/img86.jpeg",
        "../img/bg/img87.jpeg",
        "../img/bg/img88.jpeg",
        "../img/bg/img89.jpeg",
        "../img/bg/img90.jpeg",
        "../img/bg/img91.jpeg",
        "../img/bg/img91.jpeg",
        "../img/bg/img92.jpeg",
        "../img/bg/img93.jpeg",
        "../img/bg/img94.jpeg",
        "../img/bg/img95.jpeg",
        "../img/bg/img96.jpeg",
        "../img/bg/img97.jpeg",
        "../img/bg/img98.jpeg",
        "../img/bg/img99.jpeg",
        "../img/bg/img100.jpeg",
        "../img/bg/img101.jpeg",
        "../img/bg/img102.jpeg",
        "../img/bg/img103.jpeg",
        "../img/bg/img104.jpeg",
        "../img/bg/img105.jpeg",
        "../img/bg/img106.jpeg",
        "../img/bg/img107.jpeg",
        "../img/bg/img108.jpeg",
        "../img/bg/img109.jpeg",
        "../img/bg/img110.jpeg",
        "../img/bg/img111.jpeg",
        "../img/bg/img112.jpeg",
        "../img/bg/img113.jpeg",
        "../img/bg/img114.jpeg",
        "../img/bg/img115.jpeg",
        "../img/bg/img116.jpeg",
        "../img/bg/img117.jpeg",
        "../img/bg/img118.jpeg",
        "../img/bg/img119.jpeg",
        "../img/bg/img120.jpeg",
        "../img/bg/img121.jpeg",
        "../img/bg/img122.jpeg",
        "../img/bg/img123.jpeg",
        "../img/bg/img124.jpeg",
        "../img/bg/img125.jpeg",
        "../img/bg/img126.jpeg",
        "../img/bg/img127.jpeg",
        "../img/bg/img128.jpeg",
        "../img/bg/img129.jpeg",
        "../img/bg/img130.jpeg",
        "../img/bg/img131.jpeg",
        "../img/bg/img132.jpeg",
    ],
    gb: [
        "../img/gb/img133.jpeg",
        "../img/gb/img134.jpeg",
        "../img/gb/img135.jpeg",
        "../img/gb/img136.jpeg",
        "../img/gb/img137.jpeg",
        "../img/gb/img138.jpeg",
        "../img/gb/img139.jpeg",
        "../img/gb/img140.jpeg",
        "../img/gb/img141.jpeg",
        "../img/gb/img142.jpeg",
        "../img/gb/img143.jpeg",
        "../img/gb/img144.jpeg",
        "../img/gb/img145.jpeg",
        "../img/gb/img146.jpeg",
        "../img/gb/img147.jpeg",
        "../img/gb/img148.jpeg",
        "../img/gb/img149.jpeg",
        "../img/gb/img150.jpeg",
        "../img/gb/img151.jpeg",
        "../img/gb/img152.jpeg",
        "../img/gb/img153.jpeg",
        "../img/gb/img154.jpeg",
        "../img/gb/img155.jpeg",
    ],
    gg: [
        "../img/gg/img156.jpeg",
        "../img/gg/img157.jpeg",
        "../img/gg/img158.jpeg",
        "../img/gg/img159.jpeg",
        "../img/gg/img160.jpeg",
        "../img/gg/img161.jpeg",
        "../img/gg/img162.jpeg",
        "../img/gg/img163.jpeg",
        "../img/gg/img164.jpeg",
        "../img/gg/img165.jpeg",
        "../img/gg/img166.jpeg",
        "../img/gg/img167.jpeg",
        "../img/gg/img168.jpeg",
        "../img/gg/img169.jpeg",
        "../img/gg/img170.jpeg",
        "../img/gg/img171.jpeg",
        "../img/gg/img172.jpeg",
        "../img/gg/img173.jpeg",
        "../img/gg/img174.jpeg",
        "../img/gg/img175.jpeg",
        "../img/gg/img176.jpeg",
        "../img/gg/img177.jpeg",
        "../img/gg/img178.jpeg",
        "../img/gg/img179.jpeg",
        "../img/gg/img180.jpeg",
        "../img/gg/img181.jpeg",
        "../img/gg/img182.jpeg",
        "../img/gg/img183.jpeg",
        "../img/gg/img184.jpeg",
        "../img/gg/img185.jpeg",
        "../img/gg/img186.jpeg",
        "../img/gg/img187.jpeg",
        "../img/gg/img188.jpeg",
        "../img/gg/img189.jpeg",
        "../img/gg/img190.jpeg",
        "../img/gg/img191.jpeg",
    ]
}

var good1 = document.getElementsByClassName("good1")[0];
var good2 = document.getElementsByClassName("good2")[0];
var bad1 = document.getElementsByClassName("bad1")[0];
var bad2 = document.getElementsByClassName("bad2")[0];
var submit = document.getElementsByClassName("submit")[0];

console.log("good one", good1);

var q1;
var q2;

var clicked1;
var clicked2;

var randNum;

var img;


good1.onclick = function() {
    q1 = true
    clicked1 = true;
}

bad1.onclick = function() {
    q1 = false;
    clicked1 = true;
}

good2.onclick = function() {
    q2 = true
    clicked2 = true;
}

bad2.onclick = function() {
    a1 = false;
    clicked2 = true;
}

submit.onclick = function() {
    //Checks if both questions are answered by user
    if (clicked1 && clicked2) {
        
        //Good physicality, good emotions
        if (q1 && q2) {
            var imgnum = ("img" + randNum + ".jpeg");
            document.getElementById("imageid").src= libraries.gg[Math.floor(Math.random() * libraries.gg.length) + 1];  
        }

        //Good physicality, bad emotions
        if (!q1 && q2) {
            var imgnum = ("img" + randNum + ".jpeg");
            document.getElementById("imageid").src= libraries.bg[Math.floor(Math.random() * libraries.bg.length) + 1];    
        }

        //Bad physicality, good emotions
        if (q1 && !q2) {
            var imgnum = ("img" + randNum + ".jpeg");
            document.getElementById("imageid").src= libraries.gb[Math.floor(Math.random() * libraries.gb.length) + 1];    
        }

        //Bad physicality, bad emotions
        if (!q1 && !q2) {
            var imgnum = ("img" + randNum + ".jpeg");
            document.getElementById("imageid").src= libraries.bb[Math.floor(Math.random() * libraries.bb.length) + 1];       
        }
    }
}
