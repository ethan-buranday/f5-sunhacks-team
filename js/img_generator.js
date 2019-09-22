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
    bg: ["https://memeshappen.com/media/char/2019/04/sad%20kermit.jpg",
        "https://i.kym-cdn.com/entries/icons/original/000/022/017/thumb.png",
        "http://thinkingmeme.com/wp-content/uploads/2017/09/26-kermit-meme18.jpg",
        "https://data.whicdn.com/images/306953847/superthumb.jpg?t=1518189575",
        "https://media.tenor.com/images/b81f33e3f0637ac5a5d3964e10389e59/tenor.gif",
        "https://media2.giphy.com/media/XIqCQx02E1U9W/source.gif",
        "https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png",
        "https://img.buzzfeed.com/buzzfeed-static/static/2014-12/2/14/enhanced/webdr11/enhanced-6746-1417549717-8.png?downsize=700:*&output-format=auto&output-quality=auto",
        "https://data.whicdn.com/images/321231653/large.jpg",
        "https://i.imgur.com/BxWfwbY.jpg",
        "https://i.redd.it/k0mkl820ny621.jpg",
        "https://www.dailydot.com/wp-content/uploads/2018/04/confusedmrkrabs-1.png",
        "https://i.pinimg.com/474x/96/80/c1/9680c17170d7306377487e3e4210795c.jpg",
        "https://2static1.fjcdn.com/thumbnails/comments/With+all+these+spongebob+reaction+pics+i+can+make+another+_b8e304df9018720026576236993c0061.jpg",
        "https://img.buzzfeed.com/buzzfeed-static/static/2014-12/2/14/enhanced/webdr11/longform-original-15728-1417549721-3.jpg?downsize=700:*&output-format=auto&output-quality=auto",
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/67696097_463532407824445_7509471806845057664_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=101&se=7&oh=9bf16f22d95c9a20d6b7686ec896fcfc&oe=5E1263A0&ig_cache_key=MjEyNjYzMjcxMzU5NDU4ODU5NA%3D%3D.2",
        "https://data.whicdn.com/images/274293277/superthumb.jpg?t=1484428059",
        "http://i.imgur.com/uBtQE5y.png",
        "https://tse2.mm.bing.net/th?id=OIP.7NITlkOP2ivIPq70l-WSxwHaFj&pid=15.1",
        "https://pbs.twimg.com/media/EFAvWpXXsAEFou-.jpg:large",
        "https://data.whicdn.com/images/247035532/large.jpg",
        "https://media.giphy.com/media/l4FGwORVSXRs2Vflm/giphy.gif",
        "https://vignette.wikia.nocookie.net/spongebob/images/a/a0/Evil-patrick.jpg",
        "https://i.pinimg.com/originals/49/5a/88/495a88d30e4ec1b011feaedaa2e1f411.jpg",
        "https://media1.tenor.com/images/4e364add4d3af8ef9efa3d69043a80ba/tenor.gif?itemid=9697765",
        "https://media.giphy.com/media/TlBiXnmn3jb0s/giphy.gif",
        "https://i.pinimg.com/originals/eb/22/ed/eb22ed62176ab5f7a26a91c9bc291bdc.gif",
        "http://24.media.tumblr.com/tumblr_maimbrye2K1r5gr02o1_500.gif",
        "https://i.kym-cdn.com/entries/icons/original/000/020/143/squidward.jpg",
        "https://bubblesofthoughtsweb.files.wordpress.com/2017/11/capture4.png?w=454&h=342",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/550/568/f23.jpg",
        "https://i.kym-cdn.com/entries/icons/mobile/000/018/259/55181940.jpg",
        "https://i.imgur.com/CoWZ05t.gif",
        "https://images-cdn.9gag.com/photo/aq71DV7_700b.jpg",
        "https://c-sf.smule.com/sf/s78/arr/e2/98/89c335d6-47b1-4981-8efe-d6af70787a3b.jpg",
        "https://66.media.tumblr.com/736642e05f37a2bcb6f3806f2dcc56b2/tumblr_pgp91sWx0N1vmskmwo1_500.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUv8bLo67d0wSQ7JUBlja605zSXC9ZC07pLzI4K4H3KS0xlOO",
        "https://i.pinimg.com/474x/08/6d/f5/086df53921752d10d7fd920eaf47d073.jpg",
        "https://pbs.twimg.com/profile_images/536527339513856000/9K056IwV.jpeg",
        "https://static.tvtropes.org/pmwiki/pub/images/dinkleberg_meme.jpg",
        "https://i.imgur.com/g9PnSNC.jpg",
        "https://static-us-east-2-fastly-a.www.philo.com/gracenote/assets/p2490125_e_h10_ac.jpg",
        "https://i.kym-cdn.com/entries/icons/original/000/024/062/jerry.jpg*",
        "https://i.redd.it/l0vx7t2vkk5z.jpg*",
        "https://www.dailydot.com/wp-content/uploads/2019/09/naruto-area-51.jpg",
        "https://i.kym-cdn.com/entries/icons/mobile/000/030/157/womanyellingcat.jpg",
        "https://media2.giphy.com/media/yx400dIdkwWdsCgWYp/giphy.gif",
        "https://pics.me.me/duolingo-memes-are-dead-now-made-with-memati-mods-truth-47343524.png",
        "https://i.kym-cdn.com/entries/icons/mobile/000/023/397/C-658VsXoAo3ovC.jpg*",
        "https://i.kym-cdn.com/entries/icons/mobile/000/023/687/Screen_Shot_2017-08-16_at_2.40.43_PM.jpg",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/365/818/183.jpg*",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/337/421/a78.png",
        "https://i.kym-cdn.com/entries/icons/square/000/022/255/tumblr_inline_o58r6dmSfe1suaed2_500.gif",
        "https://i.kym-cdn.com/entries/icons/square/000/017/507/1-13-Skeletor-Orgasm.png",
        "https://i.kym-cdn.com/entries/icons/mobile/000/017/830/reee.jpg",
        "https://i.kym-cdn.com/entries/icons/square/000/013/306/2dd.jpg",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/010/333/732.jpg"
    ],

    gb: ["https://i.kym-cdn.com/entries/icons/original/000/019/698/d96.jpg",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/577/232/fa2.png",
        "https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/571/082/1bc.jpg",
        "https://steamuserimages-a.akamaihd.net/ugc/391049715156199070/8BCB72026E031E6FA258ACCB1456AC9FBD848838/",
        "https://i.pinimg.com/236x/ff/c4/d6/ffc4d618b547c73fe6009c14ac001c9e.jpg",
        "https://media1.tenor.com/images/4ab1629f755332070627a89f9393dfb2/tenor.gif?itemid=10015736",
        "https://i.pinimg.com/originals/a0/de/05/a0de053072c99e2dc469543c64fd82a0.jpg",
        "https://i.kym-cdn.com/entries/icons/original/000/009/803/spongebob-squarepants-patrick-spongebob-patrick-star-background-225039.jpg",
        "https://media0.giphy.com/media/gWmgIv3ClcBsQ/giphy.gif",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_-dVCGgKOrh2hnW2MsALTU2Dfmug7s-7gz_nvPtSZ7Y2u6eiApg",
        "https://pbs.twimg.com/media/ECbDYqCWkAE_uBK.jpg:large",
        "https://i.ytimg.com/vi/p_nMSoaN7DY/hqdefault.jpg",
        "https://thumbs.gfycat.com/SpryBrownAustraliankestrel-size_restricted.gif",
        "https://lovemeowroar-img.rbl.ms/simage/https%3A%2F%2Fassets.rbl.ms%2F4148440%2F980x.jpg/2000%2C2000/eW4PYjYx3%2FDnoWgT/img.jpg",
        "https://i.ytimg.com/vi/cEITn7-Gafc/maxresdefault.jpg",
        "https://static3.srcdn.com/wordpress/wp-content/uploads/2019/05/Snorlax-Asleep-Pokemon.jpg?q=50&fit=crop&w=738&h=369",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/504/734/dd1.jpg",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/394/314/c62.jpg",
        "https://i.kym-cdn.com/photos/images/newsfeed/000/591/928/94f.png"
        ],

    gg: [
        "https://66.media.tumblr.com/ad5816bb01a8405257e0eb89dbcfc575/tumblr_p9kkr8ceNF1sga0tjo8_250.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyG2wRY-XfgTOyggxLbDmNn0rSUP8clyiGiR19j-ZTlhSHM3Nl",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScLFGN-fK_ajLtEudjpRjN-ivo5TfRxv8n3a96HFb0hIbEHcQN",
        "https://media3.giphy.com/media/13EOgFTzFfiUM/giphy.gif",
        "https://vignette.wikia.nocookie.net/smegpedia/images/a/a2/Nico.gif/revision/latest?cb=20181024060631",
        "https://media2.giphy.com/media/DYH297XiCS2Ck/giphy.gif",
        "https://media1.giphy.com/media/Y8lkU8vdDWbW8/source.gif",
        "https://www.dailydot.com/wp-content/uploads/2019/09/naruto-area-51.jpg",
        "https://i.kym-cdn.com/entries/icons/mobile/000/021/971/Salt-Bae-001.jpg",
        "https://steamuserimages-a.akamaihd.net/ugc/845968017197203063/6BEA340AE8F11BB1580DC0A1B86A5EF9E4AFA22B/",
        "https://media2.giphy.com/media/vAGmzKscQlF5e/giphy.gif",
        "https://i.ytimg.com/vi/G8HWeQAe6lM/maxresdefault.jpg",
        "https://media.tenor.com/images/4c22f6e140a8985084d91b1de596b84b/tenor.gif",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvmljGibRdQFPq5f6GQoJWjRNiNPTNALPWj9iPFmC723YMKON",
        "https://i.pinimg.com/736x/62/b5/a2/62b5a2c97af2f2926dae60ed5673ea82.jpg",
        "https://i.pinimg.com/originals/ae/8f/3e/ae8f3e0f85b12eb4e4e419b99d3cd88e.gif",
        "https://media2.giphy.com/media/37I7iDL0qslfa/source.gif",
        "https://66.media.tumblr.com/a2cf8520d5a7478e132b480ce29a7f08/tumblr_pmly2zLunp1y4q8u2o1_250.gif",
        "https://mondrian.mashable.com/uploads%252Fstory%252Fthumbnail%252F90405%252F4df35f72-315a-4c36-acc7-94e920498129.png%252F1200x627.png?signature=UiMAvl84SbAVDEaYF2TP_pukeo8=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com",
        "https://i.kym-cdn.com/photos/images/original/001/106/014/50c.jpg",
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Clown_emoji_large.png?v=1542446805",
        "https://i.ytimg.com/vi/UD3PSWkdT0E/maxresdefault.jpg",
        "https://media.comicbook.com/2019/08/jojos-bizarre-adventure-meme-1185222-1280x0.jpeg",
        "https://img.buzzfeed.com/buzzfeed-static/static/2014-12/2/15/enhanced/webdr05/enhanced-4544-1417553032-7.jpg?downsize=700:*&output-format=auto&output-quality=auto",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/221/798/7e2.gif",
        "https://data.whicdn.com/images/295741147/large.jpg",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/542/035/958.png",
        "https://i.kym-cdn.com/photos/images/newsfeed/000/222/264/1324690363001.png",
        "https://66.media.tumblr.com/tumblr_lz7pln66Eo1r2g7mto1_500.png",
        "http://vignette4.wikia.nocookie.net/tuffpuppy/images/6/6a/Spongebob.jpg",
        "https://thumbs.gfycat.com/PoliticalUnfinishedJuliabutterfly-size_restricted.gif",
        "https://media1.giphy.com/media/255oxTb9htx96/giphy.gif",
        "http://giphygifs.s3.amazonaws.com/media/sIIhZliB2McAo/200.gif",
        "https://media.tenor.com/images/45f6886f1aefaad678684759f1c570c9/tenor.gif",
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
    q2 = false;
    clicked2 = true;
}

submit.onclick = function() {
    //Checks if both questions are answered by user
    if (clicked1 && clicked2) {
        
        //Good physicality, good emotions
        if (q1 && q2) {
            var imgnum = ("img" + randNum + ".jpeg");
            document.getElementById("imageid").src= libraries.gg[Math.floor(Math.random() * libraries.gg.length)];  
        }

        //Good physicality, bad emotions

        if (!q1 && q2) {
            var imgnum = ("img" + randNum + ".jpeg");
            document.getElementById("imageid").src= libraries.bg[Math.floor(Math.random() * libraries.bg.length)];    
        }

        //Bad physicality, good emotions
        if (q1 && !q2) {
            var imgnum = ("img" + randNum + ".jpeg");
            document.getElementById("imageid").src= libraries.gb[Math.floor(Math.random() * libraries.gb.length)];    
        }

        //Bad physicality, bad emotions
        if (!q1 && !q2) {
            var imgnum = ("img" + randNum + ".jpeg");      
            document.getElementById("imageid").src= libraries.bb[Math.floor(Math.random() * libraries.bb.length)];       

        }
    
    }

}
