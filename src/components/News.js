import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Mariella Moon",
      "title": "Apple plans to appeal Brazil's decision to ban the sale of iPhones without chargers",
      "description": "Brazil's Ministry of Justice has issued an order banning Apple from selling iPhones that don't come with chargers in the country. It has also slapped the tech giant with a fine of 12.275 million Brazilian reals ($2.38 million) and has ordered the cancelation …",
      "url": "https://www.engadget.com/apple-appeal-brazil-ban-iphone-sales-no-charger-052020204.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/615f8390-2e59-11ed-bebb-832962a4c562",
      "publishedAt": "2022-09-07T05:20:20Z",
      "content": "Brazil's Ministry of Justice has issued an order banning Apple from selling iPhones that don't come with chargers in the country. It has also slapped the tech giant with a fine of 12.275 million Braz… [+2019 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Entrepreneur"
      },
      "author": "Entrepreneur Store",
      "title": "Charge All Your Apple Devices Wirelessly in One Place",
      "description": "This wireless charger is also a calendar and alarm clock.",
      "url": "https://www.entrepreneur.com/science-technology/charge-all-your-apple-devices-wirelessly-in-one-place/434585",
      "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1662069814-Ent-6-in-1WirelessChargerStand.jpeg",
      "publishedAt": "2022-09-07T01:00:00Z",
      "content": "Surviving in a competitive marketplace isn't easy. There are many ways to make your life easier and give yourself an advantage as an entrepreneur. But one of the most basic is something you probably … [+1571 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Daringfireball.net"
      },
      "author": "John Gruber",
      "title": "★ A Quick Run-Through of Rumors and Speculation Ahead of This Wednesday’s ‘Far Out’ Event for the iPhones 14, New Apple Watch Models, and Who Knows What Else",
      "description": "Oh, how about “Apple Watch Max”?",
      "url": "https://daringfireball.net/2022/09/far_out_rumor_roundup",
      "urlToImage": "https://daringfireball.net/graphics/df-square-1024.png",
      "publishedAt": "2022-09-07T02:45:27Z",
      "content": "Name Games\n\nThe long-rumored lineup of iPhone 14 models is that the Mini is out of the lineup, and replacing it is a big-screened non-Pro model. So: two 6.1-inch new iPhones (regular and Pro), and tw… [+3375 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Github.com"
      },
      "author": "MyOwnClone",
      "title": "Quake 1 ported to the Apple Watch",
      "description": "Quake 1 game port to Apple Watch. Contribute to MyOwnClone/quake_watch development by creating an account on GitHub.",
      "url": "https://github.com/MyOwnClone/quake_watch",
      "urlToImage": "https://opengraph.githubassets.com/28ac73ae417dd08760fad12973348ec3962d2d9efdff74555b9a28d0021658c5/MyOwnClone/quake_watch",
      "publishedAt": "2022-09-07T06:21:17Z",
      "content": "Launching Visual Studio Code\r\nYour codespace will open once ready.\r\nThere was a problem preparing your codespace, please try again."
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Frank Schräer",
      "title": "Mittwoch: Neue Google-Hardware im Oktober, Protest gegen vernetzte Thermostate",
      "description": "Google-Einladung für 6.10. + Kritik an Thermostat-Fernsteuerung + Gesichtserkennung gegen iranische Frauen + Datenschutz bei Überwachung + Ex-Googlerin gegen KI",
      "url": "https://www.heise.de/news/Mittwoch-Neue-Google-Hardware-im-Oktober-Protest-gegen-vernetzte-Thermostate-7255454.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/0/4/2/9/3/mittw-16afcbd563e17cf4.webp",
      "publishedAt": "2022-09-07T04:30:00Z",
      "content": "Nur kurz vor dem heute stattfindenden September-Event von Apple hat Google auf seine eigene Veranstaltung im Oktober eingeladen. Ein Video deutet die Einführung von Pixel-Smartphones, -Earbuds und -S… [+3999 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Frank Schräer",
      "title": "Neue Google-Hardware auf Veranstaltung am 6. Oktober: Made by Google",
      "description": "Google hält Hof am 6. Oktober. Die Einladung zum Event verspricht Pixel-Smartphone, -Smartwatch und -Earbuds. Zuvor bekommt Android 13 sein erstes Update.",
      "url": "https://www.heise.de/news/Neue-Google-Hardware-auf-Veranstaltung-am-6-Oktober-Made-by-Google-7255450.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/0/4/2/9/1/googleevent-0970bcf2dff2a7da.webp",
      "publishedAt": "2022-09-07T01:40:00Z",
      "content": "Google lädt ein zu einer Live-Veranstaltung am 6. Oktober in New York, die auch online verfolgt werden kann. Unter dem Motto \"Made by Google\" verspricht das Einladungsvideo Smartphones, Earbuds und e… [+2353 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Chance Miller",
      "title": "Apple Watch Pro: Everything we know ahead of tomorrow’s unveil",
      "description": "The Apple Watch lineup is getting a big expansion this fall with the addition of a new so-called Apple Watch Pro. This new Apple Watch Pro is said to feature a new design, longer battery life, and improved durability and will be announced tomorrow. \nHead belo…",
      "url": "https://9to5mac.com/2022/09/06/apple-watch-pro-2/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/watch-pro-yellow.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2022-09-07T00:40:00Z",
      "content": "The Apple Watch lineup is getting a big expansion this fall with the addition of a new so-called Apple Watch Pro. This new Apple Watch Pro is said to feature a new design, longer battery life, and im… [+6426 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Chance Miller",
      "title": "Apple launches new GymKit certification app to spur adoption and improve stability",
      "description": "Apple’s GymKit platform for pairing your Apple Watch to gym equipment has slowly expanded since it first launched in 2017. It’s been a gradual process and one that has happened without much fanfare. Now, in hopes of luring more equipment makers to add GymKit …",
      "url": "https://9to5mac.com/2022/09/06/apple-gymkit-app/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/gymkit.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2022-09-07T00:32:52Z",
      "content": "Apple’s GymKit platform for pairing your Apple Watch to gym equipment has slowly expanded since it first launched in 2017. It’s been a gradual process and one that has happened without much fanfare. … [+2663 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Chance Miller",
      "title": "The iPhone 14 is coming tomorrow; here’s every new feature",
      "description": "The iPhone 14 is coming in just a few days. We’ve been rounding up the latest rumors and expectations over the last year, and it’s almost time for an official announcement. The iPhone 14 lineup will include four models across two screen sizes, design changes,…",
      "url": "https://9to5mac.com/2022/09/06/iphone-14-features-roundup/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/01/iphone-14-in-hand.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2022-09-07T00:30:00Z",
      "content": "The iPhone 14 is coming in just a few days. We’ve been rounding up the latest rumors and expectations over the last year, and it’s almost time for an official announcement. The iPhone 14 lineup will … [+13364 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Filipe Espósito",
      "title": "Three features iPhone 14 Pro Max will have that the iPhone 14 Plus won’t",
      "description": "Apple is about to hold its next “Far out” special event tomorrow, and the company is expected to introduce a variety of new products. Among them, there’s the entire iPhone 14 lineup, which is supposed to have four different models: iPhone 14, iPhone 14 Plus, …",
      "url": "https://9to5mac.com/2022/09/06/features-iphone-14-pro-max-vs-iphone-14-plus/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/07/iphone-14-camera.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2022-09-07T02:01:43Z",
      "content": "Apple is about to hold its next “Far out” special event tomorrow, and the company is expected to introduce a variety of new products. Among them, there’s the entire iPhone 14 lineup, which is suppose… [+3978 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.jp"
      },
      "author": "はらいさん",
      "title": "Apple Watch Proのレンダリング画像が公開。想像以上にゴツいぞ！",
      "description": "まもなく開催されるApple（アップル）イベントにて発表が予想されているハイエンドモデルのApple Watch Proですが、本体ケースのレンダリング画像が公開されました。",
      "url": "https://www.gizmodo.jp/2022/09/apple-watch-pro-rendering.html",
      "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2022/09/07/20220907_applewatchpro-w960.jpg",
      "publishedAt": "2022-09-07T02:45:00Z",
      "content": "Copyright © mediagene Inc. All Rights Reserved."
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.jp"
      },
      "author": "はらいさん",
      "title": "Apple Watchをどうしても今すぐ買い替えたいなら､Series 3じゃなくてSEにしよう！",
      "description": "Photo:AlexCranz/Gizmodoちょっと待って！日本時間9月8日午前2時に開催されるApple（アップル）イベントでは、iPhone14シリーズだけでなく、複数の新型AppleWatchも同時に発表されることが予想されています。一方、発売からまもなく5年が経過するAppleWatchSeries3（以下Series3）については、最新のwatchOS9非対応なので、買うのはおすすめし",
      "url": "https://www.gizmodo.jp/2022/09/apple-watch-se-89.html",
      "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2022/08/30/image-w960.png",
      "publishedAt": "2022-09-07T06:00:00Z",
      "content": "982AppleiPhone 14Apple Watch\r\n5Apple Watch Series 3Series 3watchOS 9\r\nApple Watch SE\r\nApple WatchSeries 3Apple Watch SESeries 3watchOS9\r\nSeries 3GizmodoSeries 35\r\nApple Watch SE\r\nApple Watch\r\nAppleGa… [+67 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.jp"
      },
      "author": "satomi",
      "title": "秋のAppleイベントは「Far Out（はるか彼方）」。もしやあれが来る…のか？",
      "description": "宇宙のはるかかなたでAppleが回ってます…。\n\nこれは9月7日（現地時間）のiPhone 14発表イベントのロゴ。Appleマーケティング部門上級VPのGreg Joswiakさんがイベントに先駆けて公開しました！\n\n音源はゲリラトスの「Wild Fantasy」って曲です。\n\nそれにしても気になるのはこの「Far Out」ってやつですよね。どういう意味なん⁉⁉",
      "url": "https://www.gizmodo.jp/2022/09/apple-event-far-out.html",
      "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2022/08/26/20220825FarOut-w960.png",
      "publishedAt": "2022-09-07T02:15:00Z",
      "content": "Apple\r\n97iPhone 14AppleVPGreg Joswiak\r\nWild Fantasy\r\nFar Out\r\nFar out. September 7. #AppleEvent ? pic.twitter.com/bw5Lxf3eQ9\r\n Greg Joswiak (@gregjoz) August 24, 2022\r\n60 \r\niPhone 14\r\nGlobalstarIoT17… [+82 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.jp"
      },
      "author": "amito",
      "title": "生徒に1人1台のiPadがある学校。制限なしでYouTubeにもゲームにも使っていい理由",
      "description": "近畿大学付属高等学校・中学校は、大阪府東大阪市の近畿大学キャンパスのすぐそばにある中高一貫校。\n\n2013年の高校の新入生から1人1台のiPadを導入し、いまでは高校生約3000人、中学生約850人、教職員約200人と約4000台のiPadが稼働しているiPadマンモス校でもあります。",
      "url": "https://www.gizmodo.jp/2022/09/kindai-fuzoku-high-school-ipad-apple.html",
      "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2022/09/06/shutterstock_1486304255-w960.jpg",
      "publishedAt": "2022-09-07T02:30:00Z",
      "content": "201311iPad30008502004000iPadiPad\r\niPadiPadMDMWebYouTube\r\n / \r\niPad\r\nICTICT\r\niPad11\r\niPad\r\nSNSOKiPad\r\niPad24App Store \r\nApp StoreApple\r\nApple\r\nSNS\r\nSNSSNSiPadSNSSNS\r\niPad\r\niPadiPad"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.jp"
      },
      "author": "編集部",
      "title": "今日の深夜に迫るアップルイベント。今年も記事、動画、ツイッターでイベント情報のライブ発信していきますよ〜",
      "description": "Image:Appleみなさん、準備できていますか？今年も始まりますね、秋のアップルイベント。日本時間では、9月8日午前2時から開催が予定されています。アップルイベント・開催時間：日本時間9月8日午前2時から・視聴URLhttps://www.apple.com/jp/apple-events/iPhone14、AppleWatchSeries8、AirPodsPro（第2世代）を筆頭に、たくさん",
      "url": "https://www.gizmodo.jp/2022/09/258939.html",
      "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2022/09/06/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%882022-09-0616.53.532-w960.jpg",
      "publishedAt": "2022-09-07T03:30:00Z",
      "content": "iPhone 14iPhone 14 PlusiPhone 14 ProiPhone 14 Pro MaxApple Watch Series 8 \r\nApple Watch ProAirPods Pro\r\n iPad10Apple Watch SE2"
    },
    {
      "source": {
        "id": null,
        "name": "CNET"
      },
      "author": "David Lumb",
      "title": "Google CEO Sundar Pichai Spotted Wearing Possible Pixel Watch - CNET",
      "description": "Pichai may have revealed more than he intended about the upcoming smartwatch.",
      "url": "https://www.cnet.com/tech/mobile/google-ceo-sundar-pichai-spotted-wearing-possible-pixel-watch/",
      "urlToImage": "https://www.cnet.com/a/img/resize/01b299905132afeca41c2f5aa4436ec6ec3dfd55/2022/09/07/1e99c5c9-8768-4d3f-8f4f-b1931aefdcb6/sundar-pichai-pixel-watch.jpg?auto=webp&fit=crop&height=630&width=1200",
      "publishedAt": "2022-09-07T05:04:00Z",
      "content": "Google CEO Sundar Pichai headlined the opening day of the Code 2022 conference on Tuesday and revealed very little under questioning from host Kara Swisher, but he may have shown more than he knew: i… [+939 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "Jesús Quesada",
      "title": "Estos auriculares Bluetooth apenas cuestan 40 euros con oferta en PcComponentes y se pueden localizar con el iPhone si los pierdes",
      "description": "Los auriculares Bluetooth totalmente inalámbricos son muy cómodos porque se obtiene una sensación de libertad que es imposible con los que tienen cable, pero está el inconveniente de que se pueden perder más fácilmente. Excepto los Belkin SoundForm Freedom, q…",
      "url": "https://www.applesfera.com/seleccion/estos-auriculares-bluetooth-apenas-cuestan-40-euros-oferta-pccomponentes-se-pueden-localizar-iphone-pierdes",
      "urlToImage": "https://i.blogs.es/1cef6c/auriculares-belkin/840_560.jpg",
      "publishedAt": "2022-09-07T06:00:29Z",
      "content": "Los auriculares Bluetooth totalmente inalámbricos son muy cómodos porque se obtiene una sensación de libertad que es imposible con los que tienen cable, pero está el inconveniente de que se pueden pe… [+1752 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Phandroid - News for Android"
      },
      "author": "Tyler Lee",
      "title": "Huawei just beat Apple to the punch with satellite texting",
      "description": "Huawei just showed up Apple and Android phones by introducing support for satellite texting in its new Mate 50 series.\nThe post Huawei just beat Apple to the punch with satellite texting first appeared on Phandroid.",
      "url": "https://phandroid.com/2022/09/07/huawei-just-beat-apple-to-the-punch-with-satellite-texting/",
      "urlToImage": "https://phandroid.com/wp-content/uploads/2022/03/huawei-super-device-3-640x427.jpg",
      "publishedAt": "2022-09-07T06:18:02Z",
      "content": "For years, we’ve seen smartphone makers compete with each other on the camera front and on the display front, but now it looks like we have a new area of competition – satellite communications, and i… [+1388 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The A.V. Club"
      },
      "author": "Drew Gillis",
      "title": "Central Park is back with better songs (and Kristen Bell)",
      "description": "Musical TV shows can be tricky. Good first seasons can quickly give way to stale second and third ones, stretching a gimmick past the point of being entertaining. The team behind Central Park, thankfully, seems to be doing just the opposite. Read more...",
      "url": "https://www.avclub.com/central-park-season-3-review-apple-tv-plus-1849486460",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a198c3b3965974d888ee726d35c984fb.jpg",
      "publishedAt": "2022-09-07T07:00:00Z",
      "content": "Musical TV shows can be tricky. Good first seasons can quickly give way to stale second and third ones, stretching a gimmick past the point of being entertaining. The team behind Central Park, thankf… [+3661 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Espinof.com"
      },
      "author": "Albertini",
      "title": "Estrenos (7 de septiembre): 84 series, películas y documentales en Netflix, HBO Max, Disney+, Amazon, Movistar Plus+, Filmin, Flixolé, Atresplayer, Starzplay y Apple TV+",
      "description": "La vuelta al cole va comenzando y al curso escolar le sigue el televisivo, que va también tomando forma (como veremos la semana que viene con los Emmy). Pero vayamos a lo que nos interesa: los estrenos en streaming.\n<!-- BREAK 1 -->\nY es que en una semana mar…",
      "url": "https://www.espinof.com/estrenos/estrenos-7-septiembre-series-peliculas-documentales-netflix-hbo-max-disney-plus-amazon-movistar-plus-filmin-flixole-atresplayer-starzplay-apple-tv",
      "urlToImage": "https://i.blogs.es/3bd44d/004_0290_01_v1033_g_r709f_220718.087679/840_560.jpeg",
      "publishedAt": "2022-09-07T07:00:29Z",
      "content": "La vuelta al cole va comenzando y al curso escolar le sigue el televisivo, que va también tomando forma (como veremos la semana que viene con los Emmy). Pero vayamos a lo que nos interesa: los estren… [+5150 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Faz.net"
      },
      "author": "Sebastian Reuter",
      "title": "F.A.Z. Frühdenker: Wie äußert sich Putin zum Krieg in der Ukraine?",
      "description": "Der Bundestag kommt zur Generaldebatte zusammen. Putin hält eine Rede über seine Sicht auf die Weltpolitik. Und der Apple-Konzern präsentiert seine neuesten Produkte.",
      "url": "https://www.faz.net/aktuell/newsletter-fruehdenker/faz-fruehdenker-wie-aeussert-sich-putin-zum-krieg-in-der-ukraine-18297448.html",
      "urlToImage": "https://media1.faz.net/ppmedia/aktuell/wirtschaft/1772508988/1.8297487/facebook_teaser_fplus/der-russische-praesident.jpg",
      "publishedAt": "2022-09-07T04:26:59Z",
      "content": "1. Olaf Scholz: Deutschland ist ein starkes Land2. So groß ist die Kritik an Habecks Atomplänen3. Das Masken-Hickhack der Ampel-Koalition4. Putin hält Rede zur Lage der Weltpolitik5. Apple präsentier… [+366 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "iMore"
      },
      "author": "heyimjoew@icloud.com (Joe Wituschek)",
      "title": "Apple TV+ is gaining while everyone else is losing",
      "description": "While most streaming services are losing subscribers, Apple TV+ is slowly but surely adding them according to a new report by JustWatch.",
      "url": "https://www.imore.com/music-movies-tv/apple-tv/apple-tv-is-gaining-while-everyone-else-is-losing",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/3N5xBuGYefGYGHLwYg3Tr8-1200-80.jpg",
      "publishedAt": "2022-09-07T01:52:46Z",
      "content": "Watching the growth of Apple TV+ is like watching the tortoise and the hare and Apple TV+, if you haven't guessed it, is the tortoise.\r\nJustWatch, a streaming service aggregator, put out a new report… [+1732 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Caschys Blog"
      },
      "author": "Felix Frank",
      "title": "Far out: So verfolgt ihr das heutige Apple-Event",
      "description": "Es geht Schlag auf Schlag. Nach der IFA 2022 folgt heute ein weiteres Technik-Event – Apples Vorstellung der neuen iPhones. Während Caschy das Event direkt aus Cupertino verfolgen wird, kann man sich hierzulande um 19 Uhr Ortszeit ebenfalls der Veranstaltung.…",
      "url": "https://stadt-bremerhaven.de/far-out-so-verfolgt-ihr-das-heutige-apple-event/",
      "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2021/12/Apple-Logo-Shop.jpg",
      "publishedAt": "2022-09-07T05:00:47Z",
      "content": "Es geht Schlag auf Schlag. Nach der IFA 2022 folgt heute ein weiteres Technik-Event – Apples Vorstellung der neuen iPhones. Während Caschy das Event direkt aus Cupertino verfolgen wird, kann man sich… [+2234 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Frandroid"
      },
      "author": "Vincent Sergère",
      "title": "Récap des rumeurs Apple, la voiture autonome du concurrent de Tesla et les batteries de 1 000 km d’autonomie – Tech’spresso",
      "description": "Vous n’avez pas eu le temps de suivre l’actualité hier ? Voici ce qui a marqué le mardi 6 septembre : Netflix précise son offre avec pub, Android auto évolue et un nouveau scooter haut de gamme fait son entrée. Pour ne manquer aucune actualité, pensez à vous …",
      "url": "https://www.frandroid.com/actualites-generales/1460250_recap-des-rumeurs-apple-la-voiture-autonome-du-concurrent-de-tesla-et-les-batteries-de-1-000-km-dautonomie-techspresso",
      "urlToImage": "https://images.frandroid.com/wp-content/uploads/2022/09/apple-watch-pro.jpeg",
      "publishedAt": "2022-09-07T04:51:26Z",
      "content": "Vous navez pas eu le temps de suivre lactualité hier? Voici ce qui a marqué le mardi 6 septembre : Netflix précise son offre avec pub, Android auto évolue et un nouveau scooter haut de gamme fait son… [+962 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Srad.jp"
      },
      "author": "nagazou",
      "title": "Android 14、衛星通信に対応へ。Google幹部が言及",
      "description": "GoogleのHiroshi Lockheimer氏は、Android OSの次のバージョンに当たる「Android 14」で、衛星通信への接続機能を提供する予定であることを明らかにした。衛星通信は電波の届かない山奥や洋上などでも通信が行えるようにするもので、スマートフォンの衛星接続は、主に緊急事態と圏外の解消を目的としているそうだ（Hiroshi Lockheimer氏のツイート、すまほん!!、GetNavi web、PHILE WEB、ケータイ Watch）。 \n\nAppleのiPhone 14シリーズでは、…",
      "url": "https://mobile.srad.jp/story/22/09/06/1430256/",
      "urlToImage": "https://srad.jp/static/topics/android_64.png",
      "publishedAt": "2022-09-07T04:06:00Z",
      "content": "GoogleHiroshi LockheimerAndroid OSAndroid 14Hiroshi Lockheimer!!GetNavi webPHILE WEB WatchAppleiPhone 14GoogleAndroid 1420233"
    },
    {
      "source": {
        "id": null,
        "name": "Cnbeta.com"
      },
      "author": "study875",
      "title": "Apple Watch Pro高清渲染：全新设计 更坚固耐用",
      "description": "在明天凌晨的秋季发布会召开之前，Apple Watch Pro 的高清渲染图再次曝光。通过这些渲染图，你可以更加直观的了解这款智能手表，采用全新的设计，更大的平面屏幕以及全新的物理按钮。 阅读全文",
      "url": "https://www.cnbeta.com/articles/tech/1313253.htm",
      "urlToImage": "https://static.cnbetacdn.com/article/2022/0907/16f26d9b101c5bf.webp",
      "publishedAt": "2022-09-07T00:01:55Z",
      "content": "·Ian Zelbo·Parker Ortolani Apple Watch Pro CAD Apple Watch Pro \r\nApple Watch Pro Apple Watch Series 4 Apple Watch Pro Series 7 Series 8 \r\nApple Watch Pro \r\nApple Watch Pro watchOS \r\n Apple Watch Seri… [+283 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ifanr.com"
      },
      "author": "何, 嘉昕",
      "title": "早报｜华为 Mate 50 没电也能打电话/巴西禁售不带充电器 iPhone/香港现首例猴痘输入病例",
      "description": "· AI 画作拿一等奖，惹怒人类艺术家\n· 顺丰寄丢万元手机仅赔千元#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
      "url": "https://www.ifanr.com/1510723",
      "urlToImage": "https://s3.ifanr.com/wp-content/uploads/2022/09/000.001.jpeg",
      "publishedAt": "2022-09-07T00:27:50Z",
      "content": "<ul><li></li><li></li><li>AI </li><li></li><li> Mate 50 </li><li> iPhone</li><li>iPhone 14 Pro </li><li>Apple Watch Pro </li><li> 2 </li><li></li><li></li><li></li><li></li><li> 10 </li><li> 4</li><l… [+1375 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cnbeta.com"
      },
      "author": "study875",
      "title": "如何观看“超前瞻”苹果秋季新品发布会",
      "description": "主题为“超前瞻”的 2022 年秋季新品发布会将于北京时间 9 月 8 日凌晨 1 点召开，届时苹果将会推出 iPhone 14 系列、Apple Watch Series 8 系列在内的诸多新品。那么如何观看这场会议呢？除了苹果官网和苹果油管频道之外，cnBeta 也将提供详细的图文直播。 阅读全文",
      "url": "https://www.cnbeta.com/articles/tech/1313321.htm",
      "urlToImage": "https://static.cnbetacdn.com/article/2022/0907/3422aa44aa2d83f.webp",
      "publishedAt": "2022-09-07T01:29:40Z",
      "content": "Apple Event \r\n Apple Events MaciPhoneiPadPC Apple Events SafariChromeFirefox \r\n www.apple.com/apple-events/ \r\nYouTube\r\nApple YouTube YouTube YouTube \r\nApple TV \r\nApple Apple TV Apple Events WWDC 2020… [+68 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cnbeta.com"
      },
      "author": "study875",
      "title": "Corel将于10月6日上调Parallels Desktop 18售价",
      "description": "Corel 宣布上调适用于 Mac 的 Parallels Desktop 18 售价，不过仅仅只是价格的上调，并未引入任何新功能。根据国外科技媒体 AppleInsider 获得的一封电子邮件，Parallels 所有版本的售价都将于今年 10 月 6 日上调。 阅读全文",
      "url": "https://www.cnbeta.com/articles/tech/1313287.htm",
      "urlToImage": "https://static.cnbetacdn.com/article/2022/0907/0a21051be283421.webp",
      "publishedAt": "2022-09-07T00:32:03Z",
      "content": "Parallels Home 1 79.99 iOS/Android Mac 99.99 Parallels Standard 99.99 129.99 \r\nParallels Pro Edition 119.99 Business 149.99 \r\n Apple Silicon macOS Corel Parallels Desktop Mac 200,000 Windows Parallel… [+20 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GSMArena.com"
      },
      "author": "Enrique",
      "title": "Brazilian Ministry of Justice fines Apple over $2 million and orders ban of iPhones sold without a charger",
      "description": "Apple is facing a hefty fine by Brazil’s Ministry of Justice for the company’s decision to stop including a power adapter with the purchase of new iPhones. In addition to a fine of R$ 12.275 million (~$2.34 million), the Ministry of Justice ordered Apple to s…",
      "url": "https://www.gsmarena.com/brazilian_ministry_of_justice_fines_apple_over_2_million_and_orders_ban_of_iphones_sold_without_a_ch-news-55676.php",
      "urlToImage": "https://fdn.gsmarena.com/imgroot/news/22/09/apple-fined-in-brazil-for-not-including-chargers/-952x498w6/gsmarena_000.jpg",
      "publishedAt": "2022-09-07T04:00:01Z",
      "content": "Apple is facing a hefty fine by Brazils Ministry of Justice for the companys decision to stop including a power adapter with the purchase of new iPhones. In addition to a fine of R$ 12.275 million (~… [+1081 chars]"
    },
    {
      "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
      },
      "author": "Mark Gurman, Alex Barinka",
      "title": "Pichai Says Google 'Pro-Competitive,' Sees Vibrant Tech Market",
      "description": "Sundar Pichai, chief executive officer of Google parent Alphabet Inc., defended the internet-search giant against claims that it is anticompetitive, citing established rivals in the digital advertising market and upstart mobile app TikTok as examples of robus…",
      "url": "https://www.bloomberg.com/news/articles/2022-09-07/pichai-says-google-pro-competitive-sees-vibrant-tech-market",
      "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iob9LCd_1LvE/v0/1200x800.jpg",
      "publishedAt": "2022-09-07T05:01:46Z",
      "content": "Sundar Pichai, chief executive officer of Google parent \r\nAlphabet Inc., defended the internet-search giant against claims that it is anticompetitive, citing established rivals in the digital adverti… [+436 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Wired.jp"
      },
      "author": "Boone Ashworth",
      "title": "直前予測：“iPhone 14”のデザインやApple Watchの性能はどう変わる？ アップルが発表する新製品の中身",
      "description": "アップルが2022年9月7日（米国時間）に、恒例の製品発表イベントを実施する。“iPhone 14”や新しいApple Watchが発表される可能性が高いが、いったいどんな変更が施されるのか。ARやVRのヘッドセットは発表されるのだろうか──。現時点の噂をまとめた。",
      "url": "https://wired.jp/article/apple-event-september-2022-iphone-14-how-to-watch-what-to-expect/",
      "urlToImage": "https://media.wired.jp/photos/6317b15f229bf08363f35663/16:9/w_1280,c_limit/How-to-Watch-Apple-Event-2022-Gear-GettyImages-1173711317.jpg",
      "publishedAt": "2022-09-07T04:00:00Z",
      "content": "9iPhoneiPhone 14Apple Watch\r\n971082YouTube\r\nApple TVApple TV+\r\nContent\r\nThis content can also be viewed on the site it originates from.\r\n2012iPhone 5910\r\niPhone\r\niPhone 14iPhone4\r\nProMax\r\niPhonemini6… [+129 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Next INpact"
      },
      "author": null,
      "title": "#LeBrief : Apple « Far Out » ce soir, la NASA sélectionne SiFive, Maps « eco-friendly » en France",
      "description": "Retrouvez l'actualité en bref de l'informatique et du numérique.",
      "url": "https://www.nextinpact.com/lebrief/1082",
      "urlToImage": "https://cdn2.nextinpact.com/images/bd/wide-linked-media/2360.jpg",
      "publishedAt": "2022-09-07T05:14:40Z",
      "content": "Début septembre oblige, Apple tiendra sa conférence de rentrée ce soir à 19h, dédiée à liPhone. Le modèle 14 est décrit depuis plusieurs mois par de très nombreuses rumeurs, dont lune des principales… [+783 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Next INpact"
      },
      "author": "Sébastien Gavois",
      "title": "Voici l’USB4 version 2.0 jusqu’à 80 Gb/s… et plus si affinité ?",
      "description": "L’USB4 passe la seconde et double son débit théorique, qui atteint désormais 80 Gb/s. Il ne s’agit que d’un effet d’annonce pour le moment, sans détail technique. L’USB4 pourrait aussi fonctionner dans un mode asymétrique, permett...",
      "url": "https://www.nextinpact.com/article/69886/voici-lusb4-version-2-0-jusqua-80-gbs-et-plus-si-affinite",
      "urlToImage": "https://cdnx.nextinpact.com/data-next/images/bd/wide-linked-media/7146.jpg",
      "publishedAt": "2022-09-07T06:33:33Z",
      "content": "LUSB4 passe la seconde et double son débit théorique, qui atteint désormais 80 Gb/s. Il ne sagit que dun effet dannonce pour le moment, sans détail technique. LUSB4 pourrait aussi fonctionner dans un… [+824 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New Atlas"
      },
      "author": "Mike Hanlon",
      "title": "Pictorial: Remarkable sights of the 2022 Salon Privé Concours d’Elégance",
      "description": "Salon Privé is best known for its Concours d’Elégance, which is regarded as one of the most important such events on the planet, but over the 15 years since it began, it has grown into a week of automotive celebration that encompasses important car and luxury…",
      "url": "https://newatlas.com/automotive/pictorial-remarkable-sights-2022-salon-prive-concours-delegance/",
      "urlToImage": "https://assets.newatlas.com/dims4/default/3d073a1/2147483647/strip/true/crop/1574x826+0+111/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F94%2F4f%2Ff9f73c644482b5f8b7006df9f0fe%2F2022-salon-prive.jpg&na.image_optimisation=0",
      "publishedAt": "2022-09-07T05:28:20Z",
      "content": "Salon Privé is best known for its Concours dElégance, which is regarded as one of the most important such events on the planet, but over the 15 years since it began, it has grown into a week of autom… [+16610 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Creative Bloq"
      },
      "author": "Daniel Piper",
      "title": "Wait, is Apple about to launch 3 new Apple Watch models?",
      "description": "Watch this space.",
      "url": "https://www.creativebloq.com/news/apple-watch-se-2",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/7cTyEt3k5GpzMLt9hZ8jDo-1200-80.jpg",
      "publishedAt": "2022-09-07T05:51:08Z",
      "content": "With Apple's next event less than 24 hours away, we're very likely to know exactly what's in store for the next generation of iPhone this time tomorrow. Almost as inevitable is the launch of the next… [+2079 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Impress.co.jp"
      },
      "author": null,
      "title": "アップル発表会は今夜2時スタート、何が発表される？",
      "description": "米アップル（Apple）は、9月8日2時（日本時間）に発表会を開催する。",
      "url": "https://k-tai.watch.impress.co.jp/docs/news/1438026.html",
      "urlToImage": "https://k-tai.watch.impress.co.jp/img/ktw/list/1438/026/01.jpg",
      "publishedAt": "2022-09-07T04:46:09Z",
      "content": "Apple982 \r\n 9iPhone82iPhone 14iPhoneiOS 16iPhone 14mini \r\n iPhone 14 \r\n Apple Watch \r\n Apple Park"
    },
    {
      "source": {
        "id": null,
        "name": "Nextpit.de"
      },
      "author": "Carsten Drees",
      "title": "iPhone 14 und mehr: So verfolgt Ihr heute das Apple-Event",
      "description": "Heute ist es soweit: Apple lüftet den Vorhang und präsentiert das iPhone 14 und weitere Produkte. Hier erfahrt Ihr, wie Ihr per Livestream dabei seid.(Dies ist ein Teaser - klick hier, um den kompletten Beitrag zu lesen)",
      "url": "https://www.nextpit.de/iphone-14-und-mehr-so-verfolgt-ihr-heute-das-apple-event",
      "urlToImage": "https://fscl01.fonpit.de/userfiles/7695213/image/Apple-Event-August-2022-Teaser-NextPit.jpg",
      "publishedAt": "2022-09-07T06:00:01Z",
      "content": "<ul><li>Das \"Far out\"-Apple-Event findet heute, am 7. September ab 19 Uhr mitteleuropäischer Zeit im im Steve Jobs Theatre statt.</li><li>Wir erwarten die Präsentation vier neuer iPhones, außerdem ne… [+1982 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Nextpit.de"
      },
      "author": "Stefan Möllenhoff",
      "title": "Ihr habt gewählt: Die besten Selfies macht ein Smartphone-Underdog",
      "description": "8577 Stimmen habt Ihr bei unserem Kamera-Blindtest abgegeben und das beste Selfie-Smartphone gekürt – einen Underdog.(Dies ist ein Teaser - klick hier, um den kompletten Beitrag zu lesen)",
      "url": "https://www.nextpit.de/selfie-blind-test-h2-2022-ergebnisse",
      "urlToImage": "https://fscl01.fonpit.de/userfiles/7446224/image/camera-blind-test-results-hero.jpg",
      "publishedAt": "2022-09-07T04:30:00Z",
      "content": "Für die Ungeduldigen da draußen, hier das Ergebnis in Kürze:\r\nUm die Punkte zu ermitteln, haben wir jeweils die Ergebnisse der einzelnen Bilder ausgewertet. Der Erstplatzierte bekam sechs Punkte, der… [+4610 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Appbank.net"
      },
      "author": "岩佐",
      "title": "新型Apple Watch〝Pro〟は通常モデルと何がちがうのか？",
      "description": "Appleは、9月7日に開催されるAppleイベント「Far Out」で、iPhone 14シリーズと共に新型Apple Watchを発表する予定です。 今年のApple Watchのラインナップは、Series8と新し […]",
      "url": "https://www.appbank.net/2022/09/07/technology/2291950.php",
      "urlToImage": "https://www.appbank.net/wp-content/uploads/2022/09/2022-0907-Apple-Watch-thumb-1.jpeg",
      "publishedAt": "2022-09-07T02:48:24Z",
      "content": "Apple97AppleFar OutiPhone 14Apple Watch Apple WatchSeries8SEPro\r\n*Category\r\n Technology*Source9tp5Mac ,@ianzelbo\r\n3DCADCG\r\nApple Watch Pro – Extremely new. Guarded for you. #AppleEventIn collaboratio… [+131 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Appbank.net"
      },
      "author": "岩佐",
      "title": "Appleが今夜発表する4つの重要製品",
      "description": "Appleは9月7日に、新製品発表イベント「Far Out」の開催を予定しています。今回は、このイベントで発表されそうな製品と、そのリーク・噂をまとめました。 *Category：テクノロジー Technology｜*S […]",
      "url": "https://www.appbank.net/2022/09/07/technology/2289909.php",
      "urlToImage": "https://www.appbank.net/wp-content/uploads/2022/09/2022-0902-AppleEvent-thumb-1.jpeg",
      "publishedAt": "2022-09-07T00:40:04Z",
      "content": "Apple97Far Out\r\n*Category\r\n Technology*SourceMacRumors ,9to5Mac ,rendersbyshailesh\r\n9iPhone 14Apple WatchiPadAirPods Pro\r\n1iPhone 14/Max/Pro/Pro Max\r\n9iPhone 14mini6.7iPhone 14 Max4\r\nMacRumorsiPhone … [+411 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Nandagopal Rajan",
      "title": "Why you might have to pay more for the iPhone 14 series",
      "description": "If you're waiting for the Apple iPhone 14 Pro this year, expect the price for this 'premium phone' to be on the higher side in India. And there's a good reason why.",
      "url": "https://indianexpress.com/article/technology/mobile-tabs/apple-iphone-14-pro-max-india-prices-analysis-expectation-8135502/",
      "urlToImage": "https://images.indianexpress.com/2022/09/iPhone13Pro_LEAD_NEW1.jpg",
      "publishedAt": "2022-09-07T03:09:10Z",
      "content": "When Apple launches its new iPhone 14 series in India in the coming weeks, it is likely that the pricing will be at an unprecedented high at least for the top-end models. If the prices of the iPhones… [+2912 chars]"
    },
    {
      "source": {
        "id": "spiegel-online",
        "name": "Spiegel Online"
      },
      "author": "DER SPIEGEL",
      "title": "Apple: iPhones ohne Ladekabel verkauft – Millionenstrafe in Brasilien",
      "description": "Heute soll das neue iPhone vorgestellt werden, da kann Apple negative Schlagzeilen kaum gebrauchen. Doch in Brasilien hat der Konzern nun juristischen Ärger: Es geht um den Lieferumfang bei Smartphones.",
      "url": "https://www.spiegel.de/netzwelt/apple-iphones-ohne-ladekabel-verkauft-millionenstrafe-in-brasilien-a-8e8d89ba-e934-4700-9ff5-26fc6f723af5",
      "urlToImage": "https://cdn.prod.www.spiegel.de/images/3e609bba-dffc-47bd-bd97-5b62c75eaeac_w1280_r1.77_fpx58.64_fpy49.99.jpg",
      "publishedAt": "2022-09-07T01:34:00Z",
      "content": "Das Ministerium für Justiz und öffentliche Sicherheit verurteilte das kalifornische Unternehmen zur Zahlung einer Geldstrafe in Höhe von 12,28 Millionen Real (fast 2,4 Millionen Euro). Der Verkauf sä… [+441 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "DIE WELT"
      },
      "author": "Olaf Gersemann",
      "title": "„Die große Inzidenz-Kompression“ – Die aktuellen Corona-Zahlen für Sie erklärt",
      "description": "Läuft die dritte Omikron-Welle wirklich aus? Olaf Gersemann erklärt und bewertet kurz und kompakt die aktuellen Zahlen. Alles, was Sie am 7. September wissen müssen.",
      "url": "https://www.welt.de/wirtschaft/article238812729/Die-aktuellen-Corona-Zahlen-im-Ueberblick-Die-grosse-Inzidenz-Kompression.html",
      "urlToImage": "https://img.welt.de/img/wirtschaft/mobile238857427/4581352087-ci16x9-w1200/DWO-Teaser-30sek-Corona-Olaf-aw-jpg.jpg",
      "publishedAt": "2022-09-07T04:35:34Z",
      "content": "46.495 Corona-Fälle sind dem RKI gestern gemeldet worden.\r\nDas sind sechs Prozent weniger als vor einer Woche.\r\nZum 35. Mal in Folge ergibt sich an einem Werktag beim Vorwochenvergleich ein Rückgang.… [+2008 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "DIE WELT"
      },
      "author": "Jacques Schuster",
      "title": "Grundeinkommen? Das gibt‘s nicht mal in Berlin",
      "description": "Eine große Mehrheit der Berliner hält einen Volksentscheid zum bedingungslosen Grundeinkommen für das, was er ist – für gaga. Die Steuern müssten kräftig erhöht werden, um ein solches Projekt zu finanzieren. Stattdessen böte sich ein ganz anderes Volksbegehre…",
      "url": "https://www.welt.de/debatte/kommentare/article240903491/Volksentscheid-gescheitert-Grundeinkommen-Das-gibt-s-nicht-mal-in-Berlin.html",
      "urlToImage": "https://img.welt.de/img/debatte/kommentare/mobile240907911/0431350477-ci16x9-w1200/Autorenfoto-NEU-DIE-WELT-Fotoshooting-2.jpg",
      "publishedAt": "2022-09-07T07:17:00Z",
      "content": "Manchmal gibt es sogar für Berlin noch Hoffnung. Lässt sich sonst in der Regel Blaise Pascals boshafte Frage umformulieren: Weißt du, wie du Gott zum Lachen bringen kannst? Erzähle ihm von Berlin und… [+2515 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Techbang.com"
      },
      "author": "cnBeta",
      "title": "如何觀看2022蘋果 iPhone 14 新品發佈會",
      "description": "2022 年蘋果秋季新品發佈會將於國內時間 9 月 8 日凌晨 1 點召開，那麼如何觀看這場會議呢？\n2022 年蘋果秋季新品發佈會將於國內時間 9 月 8 日凌晨 1 點召開，屆時蘋果將會推出 iPhone 14 系列、Apple Watch Series 8 系列在內的諸多新品。那麼如何觀看這場會議呢？\n\nApple Event 網站\n透過 Apple Events 網站，可以在 Mac、iPhone、‌iPad‌、PC 或任何其他帶有網路瀏覽器的裝置上即時觀看活動。 Apple Events 網站適用於 S…",
      "url": "https://www.techbang.com/posts/99714-how-to-watch-the-ahead-looking-apple-autumn-new-product-launch",
      "urlToImage": "https://cdn1.techbang.com/system/excerpt_images/99714/original/543de5ba43ffc7d4cf337922ddf8f915.jpg?1662519155",
      "publishedAt": "2022-09-07T02:53:00Z",
      "content": "2022 9 8 1 iPhone 14 Apple Watch Series 8 \r\nApple Event \r\n Apple Events MaciPhoneiPadPC Apple Events SafariChromeFirefox \r\nwww.apple.com/apple-events/\r\nYouTube\r\nApple YouTube YouTube YouTube \r\nApple … [+125 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Techbang.com"
      },
      "author": "cnBeta",
      "title": "Apple Watch測出英國男子48小時內心臟停跳138次，結果竟然不是手錶故障",
      "description": "當 54 歲的他開始佩戴上這款智慧手錶時，他懷疑妻子可能買到壞掉的手錶。因為手錶記錄下了近 3000 次的 30 bpm 心跳異常。\n跟據英國《獨立報》報導，居住在諾福克郡的 David Last，收到了妻子的贈送的一塊 Apple Watch ，結果這隻手錶可能救了他一命。\n作為一個生日禮物，當 54 歲的他開始佩戴上這款智慧手錶時，他懷疑妻子可能買到壞掉的手錶。因為 Apple Watch 開始向他發出異常低心率警告。與健康者的資料相比，手錶記錄下了近 3000 次的 30 bpm 心跳異常。\n \n\n雖然 D…",
      "url": "https://www.techbang.com/posts/99639-138-heart-arrests-in-48-hours-the-apple-watch-helped-a-54-year",
      "urlToImage": "https://cdn2.techbang.com/system/excerpt_images/99639/original/ce3c6b1e0d421b8710565ef31d8079b4.jpg?1662372333",
      "publishedAt": "2022-09-07T02:30:00Z",
      "content": "David Last Apple Watch \r\n 54 Apple Watch 3000 30 bpm \r\nDavid Last Apple Watch 5 MRI() 7 Daivd Last 48 \r\n 48 David Last 10 138 \r\n(atrioventricular blockAVB)\r\nFirst degree AVB Second degree AVBSecond d… [+65 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Basicthinking.de"
      },
      "author": "Beatrice Bode",
      "title": "Mit Wucht und Geheimtinte: Das sind die versteckten Effekte bei iMessage",
      "description": "Apples hauseigener Messaging-Dienst iMessage verfügt über einige versteckte Effekte, mit denen sich Nachrichten aufpimpen lassen. Dazu gehören unter anderem die Funktionen „Geheimtinte“ und „Wucht“.  Viele iPhone-User nutzen Apples hauseigenen Messaging-Diens…",
      "url": "https://www.basicthinking.de/blog/2022/09/07/imessage-effekte-geheimtinte/",
      "urlToImage": "https://www.basicthinking.de/blog/wp-content/uploads/2022/08/img_7648.jpg",
      "publishedAt": "2022-09-07T04:06:05Z",
      "content": "Apples hauseigener Messaging-Dienst iMessage verfügt über einige versteckte Effekte, mit denen sich Nachrichten aufpimpen lassen. Dazu gehören unter anderem die Funktionen „Geheimtinte“ und „Wucht“. … [+4584 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ghacks Technology News"
      },
      "author": "Ashwin",
      "title": "EU wants OEMs to support phones with 3 years of OS updates and 5 years of security updates",
      "description": "The European Union is working on new laws that could enforce OEMs to offer long-term software support for phones. A draft of the proposed requirements can be found on the EU's website. […]\nThank you for being a Ghacks reader. The post EU wants OEMs to support…",
      "url": "https://www.ghacks.net/2022/09/07/eu-wants-oems-to-support-phones-with-3-years-of-os-updates-and-5-years-of-security-updates/",
      "urlToImage": "https://www.ghacks.net/wp-content/uploads/2022/09/EU-wants-OEMs-to-support-phones-with-3-years-of-OS-updates-and-5-years-of-security-updates.jpg",
      "publishedAt": "2022-09-07T04:26:50Z",
      "content": "The European Union is working on new laws that could enforce OEMs to offer long-term software support for phones. A draft of the proposed requirements can be found on the EU's website.\r\nEU wants OEMs… [+5145 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ascii.jp"
      },
      "author": "ASCII",
      "title": "iPhone 14 Plusが登場!? 価格は？ iPhone 14直前勝手予想＆注目ポイントまとめ",
      "description": "今日7日深夜、8日未明（日本時間8日2時）に開催される「Apple Event」。当然に新型iPhone、つまりiPhone 14が発表されることが予想される。そこであらためて、iPhone 14について勝手に予想（妄想）をすするとともに、注目ポイントやiPhone以外の要素についてもまとめた。",
      "url": "https://weekly.ascii.jp/elem/000/004/104/4104521/",
      "urlToImage": "https://ascii.jp/img/2022/09/06/3415012/l/7b28bfd12c5202e6.jpg",
      "publishedAt": "2022-09-07T00:00:00Z",
      "content": "7882Apple EventiPhoneiPhone 14\r\niPhone 14iPhone\r\nApple Event 1iPhone 14miniPlus\r\n13iPhone 14\r\niPhone 13 mini……\r\nminiiPhone 13 miniPro iPhone 8 PlusPlus\r\niPhone 146.1iPhone 14 Plus6.7iPhone 14 Pro6.1i… [+739 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Businessinsider.de"
      },
      "author": "Barbara Barkhausen",
      "title": "Meta kündigt VR-Konferenz an und könnte damit Apple ein Schnippchen schlagen",
      "description": "Das Mixed-Reality-Headset der Firma wird mit Spannung erwartet. Außerdem: Auch Google und Apple planen Produktvorstellungen und Twitter-Anwälte liefern sich Schlagabtausch mit Elon Musk.",
      "url": "https://www.businessinsider.de/gruenderszene/business/meta-vr-konferenz/",
      "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2022/09/GettyImages-612997084.jpg?ver=1662514445",
      "publishedAt": "2022-09-07T03:55:00Z",
      "content": "Das Mixed-Reality-Headset der Firma wird mit Spannung erwartet. Außerdem: Auch Google und Apple planen Produktvorstellungen und Twitter-Anwälte liefern sich Schlagabtausch mit Elon Musk.\r\nGuten Morge… [+5215 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5google.com"
      },
      "author": "Abner Li",
      "title": "On the wrist: Here’s Sundar Pichai wearing the Pixel Watch [Gallery]",
      "description": "Sundar Pichai talked with Kara Swisher at the 2022 Code Conference this evening in a wide-ranging interview that spanned productivity, competition, and M&A, while the Alphabet and Google CEO was seen wearing the Pixel Watch.\n more…\nThe post On the wrist: Here…",
      "url": "https://9to5google.com/2022/09/06/pixel-watch-sundar-pichai/",
      "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/09/pixel-watch-sundar-pichai-cover.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2022-09-07T04:01:00Z",
      "content": "Sundar Pichai talked with Kara Swisher at the 2022 Code Conference this evening in a wide-ranging interview that spanned productivity, competition, and M&amp;A, while the Alphabet and Google CEO was … [+2450 chars]"
    },
    {
      "source": {
        "id": "techradar",
        "name": "TechRadar"
      },
      "author": "gareth.beavis@futurenet.com (Gareth Beavis)",
      "title": "Apple Far Out Event live — gearing up for the (likely) iPhone 14 and Watch 8 launch",
      "description": "Ready for the expected iPhone 14 launch? Join us now for all the build up.",
      "url": "https://www.techradar.com/news/live/apple-event-live-gearing-up-for-the-likely-iphone-14-and-watch-8-launch",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/yCyckcChmaMujeJPMHytKP-1200-80.jpg",
      "publishedAt": "2022-09-07T00:06:49Z",
      "content": "(Image credit: Future / Apple)\r\nIt barely feels like we've come off WWDC when straight away, it's time for the (highly likely) iPhone 14 launch at the Apple 'Far Out' Event happening at 10AM PT / 1PM… [+1258 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Mark Brown North of England correspondent",
      "title": "Commemorative tea towel? Not for Roman souvenir hunters",
      "description": "Exhibition shines light on items brought back by those posted to Hadrian’s Wall 2,000 years agoIt might these days be a mug, tea towel, bottle of gin or that jar of toffee apple curd still in the back of the cupboard.But nearly 2,000 years ago, if you had the…",
      "url": "https://amp.theguardian.com/culture/2022/sep/07/exhibition-souvenirs-hadrians-wall-romans-english-heritage",
      "urlToImage": "https://i.guim.co.uk/img/media/9f2f6b61bbe083e2bfe60941eef4f35cf5790ec4/0_230_5477_3287/master/5477.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8e2fcd63df969e8196d06a2256786370",
      "publishedAt": "2022-09-07T05:00:40Z",
      "content": "It might these days be a mug, tea towel, bottle of gin or that jar of toffee apple curd still in the back of the cupboard.\r\nBut nearly 2,000 years ago, if you had the money, it was beautifully enamel… [+3522 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Numerama"
      },
      "author": "Maxime Claudel",
      "title": "iPhone 14 : où regarder la présentation des nouveaux téléphones d’Apple ce mercredi en ligne",
      "description": "C'est ce mercredi 7 septembre qu'Apple dévoile sa nouvelle gamme de téléphones. L'iPhone 14 prendra logiquement la suite de l'iPhone 13. D'autres produits sont attendus. C'est le grand jour pour les fans d'Apple. Comme à chaque rentrée, la firme de Cupertino …",
      "url": "https://www.numerama.com/tech/1103110-iphone-14-ou-regarder-la-presentation-des-nouveaux-telephones-dapple-ce-mercredi-en-ligne.html",
      "urlToImage": "https://www.numerama.com/wp-content/uploads/2022/09/capture-decran-2022-09-07-a-08-59-59.jpg",
      "publishedAt": "2022-09-07T07:12:38Z",
      "content": "C’est ce mercredi 7 septembre qu’Apple dévoile sa nouvelle gamme de téléphones. L’iPhone 14 prendra logiquement la suite de l’iPhone 13. D’autres produits sont attendus. \r\nC’est le grand jour pour le… [+3524 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Josh Wilson, Contributor, \n Josh Wilson, Contributor\n https://www.forbes.com/sites/joshwilson/",
      "title": "The Investor Celebrity Model: Here's Why Hollywood's Biggest Names Are Building Ownership In Fintech Businesses Of The Future",
      "description": "As entertainers grow their following and command higher fees, they start looking for ways to creatively channel their money in a way that affords them more opportunities for maintaining and growing their wealth. Fintech is becoming an area of substantial deve…",
      "url": "https://www.forbes.com/sites/joshwilson/2022/09/07/the-investor-celebrity-model-heres-why-hollywoods-biggest-names-are-building-ownership-in-fintech-businesses-of-the-future/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63183d395d4d1b56bd213eba/0x0.jpg?format=jpg&width=1200",
      "publishedAt": "2022-09-07T07:18:15Z",
      "content": "LOS ANGELES, CA - JANUARY 09: Ashton Kutcher speaks onstage during WeWork Presents Second Annual ... [+] Creator Global Finals at Microsoft Theater on January 9, 2019 in Los Angeles, California. (Pho… [+8362 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Kris Holt, Contributor, \n Kris Holt, Contributor\n https://www.forbes.com/sites/krisholt/",
      "title": "Today’s ‘Quordle’ Words, Answers And Clues For Wednesday, September 7",
      "description": "Some hints and the solution for today's 'Quordle' are just ahead.",
      "url": "https://www.forbes.com/sites/krisholt/2022/09/07/todays-quordle-words-answers-and-clues-for-wednesday-september-7/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6292f4750f2ac97366d631af/0x0.jpg?format=jpg&width=1200",
      "publishedAt": "2022-09-07T05:33:07Z",
      "content": "Quordle\r\nNurPhoto via Getty Images\r\nHappy Wednesday, gang! Take a few minutes away from wondering about the new iPhones Apple will reveal today to play the latest round of Quordle. In case you need s… [+1474 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Jason R. Rich, Forbes Staff, \n Jason R. Rich, Forbes Staff\n https://www.forbes.com/sites/forbes-personal-shopper/people/jasonrich/",
      "title": "Home Theater Projectors That Turn Any Wall Into A Cinema",
      "description": "Big screen TVs might be more affordable than ever, but even the uber rich can't get high-resolution screens over 100-inches. For that, you need one of these 8 best home theater projectors.",
      "url": "https://www.forbes.com/sites/forbes-personal-shopper/article/best-projectors/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/625edcbaab0b59e454edc980/0x0.jpg?format=jpg&crop=1299,974,x0,y5,safe&width=1200",
      "publishedAt": "2022-09-07T00:39:33Z",
      "content": "Want a bigger picture than its practical to get from a flat-screen TV? Or perhaps you want your home theater experience to be more portable? Even with the presence of truly enormous TVs, home theater… [+18021 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Jamie Carter, Senior Contributor, \n Jamie Carter, Senior Contributor\n https://www.forbes.com/sites/jamiecartereurope/",
      "title": "Why This Is The Best New iPhone 14 Accessory In The Universe",
      "description": "A new and impressive way of glimpsing the cosmos even from a light-polluted city is launched this week. All you need add is a smartphone.",
      "url": "https://www.forbes.com/sites/jamiecartereurope/2022/09/06/why-this-is-the-best-new-iphone-14-accessory-in-the-universe/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6315fed7749d04ea3b213eba/0x0.jpg?format=jpg&crop=617,348,x0,y169,safe&width=1200",
      "publishedAt": "2022-09-07T00:00:00Z",
      "content": "The best iPhone 14 accessory? The new Vanois Vespera smart telescopelaunched this weekis a strong ... [+] contender. \r\nVanois\r\nWhen will the iPhone 14 be announced? Will it have an always-on display?… [+4292 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "SlashGear"
      },
      "author": "staff@slashgear.com (Peter Cao)",
      "title": "How To Retrieve Deleted Photos On iPhone",
      "description": "When you delete a photo on an iPhone, it&#039;s not gone forever... at least, not for the next 30 days. If you move quickly, it&#039;s easy to recover deleted images.",
      "url": "https://www.slashgear.com/996273/how-to-retrieve-deleted-photos-on-iphone/",
      "urlToImage": "https://www.slashgear.com/img/gallery/how-to-retrieve-deleted-photos-on-iphone/l-intro-1662514849.jpg",
      "publishedAt": "2022-09-07T01:49:08Z",
      "content": "Accidentally deleting a photo on your iPhone can be a frustrating experience, especially if you've selected multiple photos you were intending to share, and instead, you've now deleted dozens of them… [+782 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Antyweb.pl"
      },
      "author": "Kamil Pieczonka",
      "title": "Google Pixel 7, Pixel 7 Pro i Pixel Watch zadebiutują 6 października",
      "description": "Dzień przed konferencją Apple, na której zapewne zostanie pokazany najnowszy iPhone 14 i iPhone 14 Pro, Google zapowiada swoją prezentację. Podczas MadeByGoogle zadebiutują smartfony Pixel 7, Pixel 7 Pro i zegarek Pixel Watch. Tak przynajmniej wynika z zapowi…",
      "url": "https://antyweb.pl/premiera-google-pixel-7-pixel-watch-6-pazdziernika",
      "urlToImage": "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2022/05/kwvj3bx1nq/Pixel-7-and-Pixel-7-Pro-Family.jpg",
      "publishedAt": "2022-09-07T07:08:04Z",
      "content": "Gdy podczas Google I/O na scenie pojawiy si zapowiedzi smartfonów Pixel 7 i Pixel 7 Pro bylimy nieco skonsternowani. Nic nie zapowiadao tego aby Google miao pokaza jaki sprzt podczas wydarzenia dla p… [+1393 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Elladodelmal.com"
      },
      "author": "noreply@blogger.com (Chema Alonso)",
      "title": "Cierra tu iPhone a los \"pranksters\" de AirDrop y tu MacBook a los binarios maliciosos",
      "description": "Los dispositivos de Apple (iPhone, iPad, MacBook) vienen con un protocolo muy utilizado por los usuarios para la transferencia de ficheros. En el mundo iPhone se usa principalmente para compartir fotos y vídeos de alta calidad, aunque entre dos MacBooks sirve…",
      "url": "https://www.elladodelmal.com/2022/09/cierra-tu-iphone-los-pranksters-de.html",
      "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhcGIZ4iDozTCFaBMGz1qaHKOohJ7nU5N6RrKyTv5FFW3aTfeQq3cy09okwh9prb-Gk5ObILo6VeJQ3tMYvgjguAkoQvAFxzk9vzQzRLRnN0DYPcA7CYiXwbs5lSsjW3g5T6uB3rj8g5KkzSi8ErRTqGtyLEskAb3Ki8z_dXnUjRaoiELNAg/w1200-h630-p-k-no-nu/Airdrop0.jpg",
      "publishedAt": "2022-09-07T01:38:00Z",
      "content": "Los dispositivos de Apple (iPhone, iPad, MacBook) vienen con un protocolo muy utilizado por los usuarios para la transferencia de ficheros. En el mundo iPhone se usa principalmente para compartir fot… [+2588 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Itmedia.co.jp"
      },
      "author": "吉川大貴，ITmedia",
      "title": "注目集まる「iPhone 14」をAIに予想してもらった　トンデモiPhone爆誕",
      "description": "「Stable Diffusion」や「AIのべりすと」などのAIサービスを活用して「iPhone 14」の見た目や価格を予想してみた。結果、出来上がったのは……。",
      "url": "https://www.itmedia.co.jp/news/articles/2209/07/news064.html",
      "urlToImage": "https://image.itmedia.co.jp/news/articles/2209/07/cover_news064.jpg",
      "publishedAt": "2022-09-07T05:00:00Z",
      "content": "Apple98iPhoneiPhone 14\r\nAIAIiPhone 14AIiPhone 14\r\nStable Diffusion\r\nAIAIStable DiffusioniPhone 14iPhone 14,Apple\r\n2\r\nAIiPhoneiPhone 8iPhone XAIiPhone 14\r\niPhone 14,Apple,back\r\n2iPhone 111213 Pro\r\nCop… [+58 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Olhardigital.com.br"
      },
      "author": "Rodrigo Mozelli",
      "title": "Nissan revela novo X-Trail; SUV deve chegar ao Brasil em 2024",
      "description": "A Nissan revelou, oficialmente, o novo Nissan X-Trail europeu. Disponível em verões de cinco e sete lugares, o SUV parte de € 32.030 (cerca de R$ 197 mil na cotação atual). Em julhos, as primeiras imagens do hibrido já haviam sido divulgadas. O veículo deve d…",
      "url": "https://olhardigital.com.br/2022/09/07/carros-e-tecnologia/nissan-revela-x-trail-suv-deve-chegar-ao-brasil-em-2024/",
      "urlToImage": "https://img.olhardigital.com.br/wp-content/uploads/2022/09/nuova-nissan-x-trail-2022.jpg",
      "publishedAt": "2022-09-07T06:49:46Z",
      "content": "A Nissan revelou, oficialmente, o novo Nissan X-Trail europeu. DisponÃ­vel em verÃµes de cinco e sete lugares, o SUV parte de â¬ 32.030 (cerca de R$ 197 mil na cotaÃ§Ã£o atual). Em julhos, as primei… [+4264 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Raywenderlich.com"
      },
      "author": null,
      "title": "Push Notifications by Tutorials [SUBSCRIBER]",
      "description": "<h2>Get Started with Push Notifications on iOS!</h2>\n<p>Push notifications may seem simple and straightforward at first since almost everyone is familiar with them; however, knowing how and when to use them in practice can prove challenging.</p>\n<p>With advan…",
      "url": "https://www.raywenderlich.com/books/push-notifications-by-tutorials/v4.0",
      "urlToImage": "https://assets.alexandria.raywenderlich.com/books/254bb97b57f12e1608fefc4517de768427b2fd6d2cffbbfcbc09f3c818198d5f/images/8667e47a4188404f496cf8432b9aecfb/original.png",
      "publishedAt": "2022-09-07T00:00:00Z",
      "content": "Get Started with Push Notifications on iOS!\r\nPush notifications may seem simple and straightforward at first since almost everyone is familiar with them; however, knowing how and when to use them in … [+4138 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Tinhte.vn"
      },
      "author": "vn_ninja@yahoo.com (vn_ninja), vn_ninja",
      "title": "Apple có thể sắp giới thiệu một chiếc Apple Watch giá rẻ hơn cả Watch SE, dành cho trẻ em?",
      "description": "Trong khi hầu hết mọi người đều đang mong chờ chiếc Apple Watch Pro được đồn đại lâu nay thì một báo cáo mới từ New York Times lại tiết lộ thêm một thông tin thú vị khác. Đó là Apple cũng sẽ ra mắt một chiếc Apple Watch mới ở thái cực ngược lại với…",
      "url": "https://tinhte.vn/thread/apple-co-the-sap-gioi-thieu-mot-chiec-apple-watch-gia-re-hon-ca-watch-se-danh-cho-tre-em.3561991/",
      "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2022/09/6115212_cover_Apple_Watch_Gia_Re_tinhte.jpg",
      "publishedAt": "2022-09-07T00:35:43Z",
      "content": "Trong khi hu ht mi ngi u ang mong ch chic Apple Watch Pro c n i lâu nay thì mt báo cáo mi t New York Times li tit l thêm mt thông tin thú v khác. ó là Apple cng s ra mt mt chic Apple Watch mi thái cc… [+473 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Tinhte.vn"
      },
      "author": "vuphanhoanglinh@gmail.com (_vphlinh_), _vphlinh_",
      "title": "Đây là ảnh concept của Apple Watch Series 8 Pro",
      "description": "Trước thềm diễn ra sự kiện “Far Out” của Apple, nhà thiết kế 3D Ian Zelbo và Parker Ortolani đã tung ra loạt ảnh concept của Apple Watch Series 8 Pro với mặt đồng hồ phẳng cùng thiết kế các nút vật lý mới.",
      "url": "https://tinhte.vn/thread/day-la-anh-concept-cua-apple-watch-series-8-pro.3562198/",
      "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2022/09/6115857_cover_applewatchseries8pro.jpg",
      "publishedAt": "2022-09-07T06:03:49Z",
      "content": ""
    },
    {
      "source": {
        "id": null,
        "name": "Tinhte.vn"
      },
      "author": "trangiakhang102@gmail.com (Nhà Của Cáo), Nhà Của Cáo",
      "title": "Lộ diện hình ảnh được cho là GoPro 'Mini', có phải là Session lột xác?",
      "description": "Rất có thể năm nay sẽ có đến 2 dòng GoPro bên cạnh GoPro Hero 11 Black thì cách đây ít phút các ảnh được cho là của GoPro Hero 11 Black Mini đã xuất hiện.\n \n\nDựa theo kế hoạch mở rộng các dòng camera của GoPro trong năm nay thì thiết bị này rất có…",
      "url": "https://tinhte.vn/thread/lo-dien-hinh-anh-duoc-cho-la-gopro-mini-co-phai-la-session-lot-xac.3561980/",
      "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2022/09/6115221_cover_gopro_hero_11_black_mini_5.jpg",
      "publishedAt": "2022-09-07T00:01:58Z",
      "content": "Nhiu kh nng Hero 11 Black Mini s có cu hình, cht lng camera tng t Hero 11 Black nhng pin thì mình oán s tt hn. C th phân gii nh s có th là 27MP, kích thc cm bin d oán là 1\", video 5,3K60, 4K120. Mi c… [+319 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Netafull.net"
      },
      "author": "コグレマサト",
      "title": "Apple公式サイト、楽天リーベイツ経由の購入で3.0%ポイント還元されるキャンペーンを実施中",
      "description": "ポイント還元サイト「楽天リーベイツ」が、Apple公式サイトの購入で3.0%還元キャンペーンを実施しています。高額商品の3.0%ポイント還元は大きいです！ つい最近4%還元をやっていたのですが今度は3%還元です（通常は1...\n投稿 Apple公式サイト、楽天リーベイツ経由の購入で3.0%ポイント還元されるキャンペーンを実施中 は ネタフル に最初に表示されました。",
      "url": "https://netafull.net/neta2022/0119380.html",
      "urlToImage": "https://netafull.net/wp-content/uploads/2022/09/rebates-3-apple.jpg",
      "publishedAt": "2022-09-07T00:15:00Z",
      "content": "Apple3.0%3.0%\r\n4%3%1%\r\nApple\r\n3.0%\r\nAppleApple3.0%\r\nMacBook ProMac Studio3.0%\r\niPhone1.0%MacBook Air (M2)Studio DisplayApple Pro Display XDR\r\n3.0%\r\nApple Gift Card\r\n13,000500\r\nIDAppleApple\r\nAppleiPho… [+27 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "3dnews.ru"
      },
      "author": null,
      "title": "Apple обжалует бразильский запрет на продажу iPhone без зарядных устройств",
      "description": "Компания Apple не готова смириться с распоряжением бразильских властей, которые запретили продажу iPhone без зарядных устройств — компания будет подавать апелляцию. Власти Бразилии посчитали, что компания просто продаёт покупателям некомплектные товары. Источ…",
      "url": "https://3dnews.ru/1073648/apple-obgaluet-brazilskiy-zapret-na-prodagu-iphone-bez-zaryadnih-ustroystv",
      "urlToImage": "https://3dnews.ru/assets/external/illustrations/2022/09/07/1073648/MD819AV1.jpg",
      "publishedAt": "2022-09-07T06:49:00Z",
      "content": "Apple , iPhone — . , .\r\n: Apple\r\n, Apple , $2,38 iPhone 12 , iPhone, . , , , iPhone , , «».\r\n Apple, , , . , , , .\r\nApple , Senacon, , « », , . , , . , iPhone — .\r\n , iPhone . , iPhone , , , — , ."
    },
    {
      "source": {
        "id": null,
        "name": "3dnews.ru"
      },
      "author": null,
      "title": "Google представит 6 октября флагманские смартфоны Pixel 7 и часы Pixel Watch",
      "description": "Входящая в холдинг Alphabet компания Google намерена представить 6 октября новое поколение своих флагманских смартфонов — Pixel 7, а также первые смарт-часы Pixel Watch. Таким образом Google только через месяца покажет конкурентов для новинок Apple, которые б…",
      "url": "https://3dnews.ru/1073645/google-predstavit-flagmanskiy-smartfon-pixel-7-i-pervie-chasi-pixel-watch-6-oktyabrya",
      "urlToImage": "https://3dnews.ru/assets/external/illustrations/2022/09/07/1073645/sm.DJ10.750.jpg",
      "publishedAt": "2022-09-07T06:14:00Z",
      "content": "Alphabet Google 6 — Pixel 7, - Pixel Watch. Google Apple, .\r\n: Google\r\nGoogle, Pixel 7 Pixel Watch Made by Google Pixel 7 Pro, Nest.\r\n Pixel 7 Android 13 Tensor, Google. Pixel 7 Pro, Google .\r\n(-), ,… [+44 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Tinhte.vn"
      },
      "author": "cuhiep+3@gmail.com (cuhiep), cuhiep",
      "title": "Trải nghiệm công nghệ AR xem trụ sở Apple",
      "description": "Apple dùng công nghệ thực tế ảo tăng cường để khách của họ đến Trung Tâm Khách Hàng (Apple Visitor Center) có thể tham quan và hiểu hơn về trụ cở Apple Park của họ. Có hai lý do để Apple làm điều này: một là Apple Park là văn phòng làm việc và họ…",
      "url": "https://tinhte.vn/thread/trai-nghiem-cong-nghe-ar-xem-tru-so-apple.3562205/",
      "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2022/09/6115899_Apple_Park_AR_Tinhte_cuhiep9.jpg",
      "publishedAt": "2022-09-07T06:15:39Z",
      "content": "Ri không ch bên trên mt t mà còn các công trình di lòng át, các tính nng không nhìn bng mt c nh ng i ca in, hng gió lùaRi trong các hình nh anh em thy trên iPad thì bên trong các xe c vn chy và ngi c… [+424 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Tinhte.vn"
      },
      "author": "cuhiep+3@gmail.com (cuhiep), cuhiep",
      "title": "23 giờ 45 phút ngày 7 tháng 9: mời anh em coi livestream Apple ra mắt iPhone 14",
      "description": "Trên Fanpage Tinhte mình sẽ livestream không khí sự kiện ở nơi diễn ra sự kiện là nhà hát Steve Jobs ở gần trụ sở Apple. Sau đó thì mod Đan Anh và mod Nam Air ở nhà sẽ tường thuật lại như mọi năm trên Tinhte.vn.",
      "url": "https://tinhte.vn/thread/23-gio-45-phut-ngay-7-thang-9-moi-anh-em-coi-livestream-apple-ra-mat-iphone-14.3561827/",
      "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2022/09/6115312_cover_live_cuhiep.jpg",
      "publishedAt": "2022-09-07T03:37:01Z",
      "content": "Trên Fanpage Tinhte mình s livestream không khí s kin ni din ra s kin là nhà hát Steve Jobs gn tr s Apple. Sau ó thì mod an Anh và mod Nam Air nhà s tng thut li nh mi nm trên Tinhte.vn. Mình có mt ch… [+108 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cult of Mac"
      },
      "author": "Rajesh Pandey",
      "title": "Brazil orders Apple to stop selling iPhones without a charger in the box",
      "description": "Brazil’s Justice Ministry has ordered Apple to stop selling iPhones without a power adapter in the box in the country. Additionally, it fined the company R$ 12.275 million (US$2.35 million). The sales ban extends to all iPhones available in the country, inclu…",
      "url": "https://www.cultofmac.com/790238/brazil-orders-apple-stop-selling-iphones-without-charger-box/",
      "urlToImage": "https://www.cultofmac.com/wp-content/uploads/2021/09/IMG_6398.jpg",
      "publishedAt": "2022-09-07T06:40:43Z",
      "content": "Brazils Justice Ministry has ordered Apple to stop selling iPhones without a power adapter in the box in the country. Additionally, it fined the company R$ 12.275 million (US$2.35 million).\r\nThe sale… [+1723 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Macitynet.it"
      },
      "author": "Settimio Perlini",
      "title": "Evento Apple Far Out del 7 Settembre, la diretta e le immagini da Cupertino e su Macitynet",
      "description": "Come seguire la diretta da Cupertino e scoprire subito i nuovi prodotti Apple visti da vicino su macitynet.it\n- su macitynet.it Evento Apple Far Out del 7 Settembre, la diretta e le immagini da Cupertino e su Macitynet",
      "url": "https://www.macitynet.it/evento-apple-far-out-del-7-settembre-la-diretta-su-macitynet/",
      "urlToImage": "https://www.macitynet.it/wp-content/uploads/2022/09/diretta-macitynet-far-out.jpg",
      "publishedAt": "2022-09-07T06:29:09Z",
      "content": "Ci siamo: tra poche ore nel keynote di fine Estate del 7 Settembre dal titolo “Far Out” Apple presenterà i nuovi iPhone 14 e i nuovi Apple Watch 8 e annuncerà le date di rilascio ufficiale delle nuov… [+2685 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Macitynet.it"
      },
      "author": "Mauro Notarianni",
      "title": "YouTube TV ora supporta l’audio Surround 5.1 su Apple TV",
      "description": "Il servizio YouTube TV per Apple TV è stato aggiornato integrando il supporto dell'audio 5.1. L'audio in questione funziona con le trasmissioni live, con la funzionalità DVR e vari contenuti video on-demand.\n- su macitynet.it YouTube TV ora supporta l’audio S…",
      "url": "https://www.macitynet.it/youtube-tv-ora-supporta-laudio-surround-5-1-su-apple-tv/",
      "urlToImage": "https://www.macitynet.it/wp-content/uploads/2019/12/appletv4k.jpg",
      "publishedAt": "2022-09-07T05:29:39Z",
      "content": "Il servizio YouTube TV per Apple TV è stato aggiornato integrando il supporto dell’audio 5.1. L’annuncio è arrivato da YouTube e l’audio in questione funziona con le trasmissioni live, con la DVR (la… [+1678 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Macitynet.it"
      },
      "author": "Mauro Notarianni",
      "title": "Il Brasile intima a Apple di vendere gli iPhone con il caricabatterie",
      "description": "Il Ministero della Giustizia del Brasile ha intimato a Apple lo stop alla vendita degli iPhone senza caricabatterie nella confezione. La Mela ha deciso di appellarsi contro la decisione.\n- su macitynet.it Il Brasile intima a Apple di vendere gli iPhone con il…",
      "url": "https://www.macitynet.it/in-brasile-intimata-a-apple-la-vendita-degli-iphone-con-il-caricabatterie/",
      "urlToImage": "https://www.macitynet.it/wp-content/uploads/2021/09/Brasile1200-2.jpg",
      "publishedAt": "2022-09-07T05:59:36Z",
      "content": "Il Ministero della Giustizia del Brasile ha intimato a Apple lo stop alla vendita degli iPhone senza caricabatterie nella confezione.\r\nLo riferisce Reutersspiegando che Apple ha deciso di appellarsi … [+2479 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Macitynet.it"
      },
      "author": "Settimio Perlini",
      "title": "Offerte Amazon del 7 Settembre fino al 58% su Apple, Netgear, Benfei, Acer, Lenovo, Invicta, Bosch",
      "description": "Tra le offerte di oggi: accessori di rete, cavi di conversione, portatili Windows, zaini per lavoro e scuola, attrezzature per il fai da te.\n- su macitynet.it Offerte Amazon del 7 Settembre fino al 58% su Apple, Netgear, Benfei, Acer, Lenovo, Invicta, Bosch",
      "url": "https://www.macitynet.it/offerte-amazon-del-7-settembre-fino-al-58-su-apple-netgear-benfei-acer-lenovo-invicta-bosch/",
      "urlToImage": "https://www.macitynet.it/wp-content/uploads/2018/04/amazonlista3.jpg",
      "publishedAt": "2022-09-07T06:59:13Z",
      "content": "Quelle che trovate elencate in questa pagina sono le offerte valide nel momento in cui scriviamo su Amazon.\r\nLa lista comprende diverse categorie di prodotto: di seguito vi mostriamo una selezione di… [+8167 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hwupgrade.it"
      },
      "author": null,
      "title": "Meta Connect l'11 ottobre, lo annuncia Zuckerberg. In arrivo il visore Project Cambria?",
      "description": "Mark Zuckerberg ha annunciato l'evento Meta Connect per l'11 ottobre. In quell'occasione il patron della società dovrebbe svelare il visore di fascia alta Project Cambria, insieme a tanti altri aggiornamenti alla sua visione di lungo termine sul metaverso.",
      "url": "https://gaming.hwupgrade.it/news/videogames/meta-connect-l-11-ottobre-lo-annuncia-zuckerberg-in-arrivo-il-visore-project-cambria_109919.html",
      "urlToImage": "https://www.hwupgrade.it/i/n/projectcambria_720.jpg",
      "publishedAt": "2022-09-07T04:31:01Z",
      "content": "Si terrà l'11 ottobre la Meta Connect, l'evento annuale in cui l'azienda guidata da Mark Zuckerberg fa il punto sullo stato dei lavori legati al metaverso e ai temi della realtà aumentata e virtuale.… [+1633 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hwupgrade.it"
      },
      "author": null,
      "title": "Google presenterà i suoi nuovi Pixel 7 e il Pixel Watch il prossimo 6 ottobre! Segnatevi la data",
      "description": "Abbiamo una data ed è quella del prossimo 6 ottobre quando Google presenterà ufficialmente la nuova serie dei suoi Pixel 7 e 7 Pro con l'aggiunta anche dello smartwatch, il Pixel Watch. Tutti pronti dunque per il prossimo 6 ottobre, segnatevi la data.",
      "url": "https://www.hwupgrade.it/news/telefonia/google-presentera-i-suoi-nuovi-pixel-7-e-il-pixel-watch-il-prossimo-6-ottobre-segnatevi-la-data_109922.html",
      "urlToImage": "https://www.hwupgrade.it/i/n/Pixel7ITA_720.jpg",
      "publishedAt": "2022-09-07T06:16:41Z",
      "content": "È ufficiale: Google presenterà i suoi Pixel 7 e 7 Pro il prossimo 6 ottobre. L'azienda di Mountain View ha ufficializzato la data di presentazione della nuova serie di smartphone top di gamma che ave… [+3390 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sspai.com"
      },
      "author": "少数派编辑部",
      "title": "派早报：华为发布多款新品、索尼将为 PS5 带来新配色等",
      "description": "星纪时代将推出消费级直连低轨卫星手机，Google 将 10 月 6 日举行秋季新品发布会等。查看全文",
      "url": "https://sspai.com/post/75590",
      "urlToImage": "article/aa62ce63-b3c1-6861-1a97-e38ecba52e29.png",
      "publishedAt": "2022-09-07T01:03:47Z",
      "content": "Mate 50 \r\n9 6 \r\n Mate 50 8+ Gen1 4G 3.0 66W 50W IP68 \r\n Mate 50\r\nMate 50 6.7 2700×1224 90Hz OLED 4460mAh 5000 1300 1200 Mate 50 Pro 6.74 2616×1212 120Hz OLED 4700mAh 5000 1300 6400 1300 3D \r\n Mate 50… [+843 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Designtaxi.com"
      },
      "author": "Nicole Rodrigues",
      "title": "Apple To Launch ‘Reality Pro’ As The First Of A Trio Of Headsets",
      "description": "Photo 27718778 © Meccasky | Dreamstime.com\n\n \nApple’s headset news has been rife with rumors over the last few years, but the end may finally be in sight. Bloomberg’s Mark Gurman has brought forward new promising leaks that show that Apple could be looking at…",
      "url": "https://designtaxi.com/news/420264/Apple-To-Launch-Reality-Pro-As-The-First-Of-A-Trio-Of-Headsets/",
      "urlToImage": "https://editorial.designtaxi.com/images/apple-headset-rumors-1662521816.jpg",
      "publishedAt": "2022-09-07T05:10:23Z",
      "content": "Photo 27718778 © Meccasky | Dreamstime.com\r\nApple’s headset news has been rife with rumors over the last few years, but the end may finally be in sight. Bloomberg’s Mark Gurman has brought forward ne… [+1225 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Designtaxi.com"
      },
      "author": "Alexa Heah",
      "title": "Brazil Halts Apple From Selling Charger-Less iPhones, Rejects Eco-Friendly Claim",
      "description": "Image ID 214663126 © via Daria Sakharova | Dreamstime.com\n\n \nWhoops, it seems Apple will no longer be able to sell iPhones without an accompanying charger in Brazil, with the country’s Justice Ministry fining the technology giant 12.275 million reals (US$2.38…",
      "url": "https://designtaxi.com/news/420270/Brazil-Halts-Apple-From-Selling-Charger-Less-iPhones-Rejects-Eco-Friendly-Claim/",
      "urlToImage": "https://editorial.designtaxi.com/images/iPhone-Brazil-Ban-1-1662526947.jpeg",
      "publishedAt": "2022-09-07T06:50:36Z",
      "content": "Image ID 214663126 © via Daria Sakharova | Dreamstime.com\r\nWhoops, it seems Apple will no longer be able to sell iPhones without an accompanying charger in Brazil, with the country’s Justice Ministry… [+1313 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Designtaxi.com"
      },
      "author": "Alexa Heah",
      "title": "Meta Announces Next ‘Connect’ Event Where It’ll Unfurl More Of The Metaverse",
      "description": "Image via Meta Quest\n\n \nWhile excitement ramps up for the fast-approaching Apple ‘Far Out’ event taking place on September 7, Meta has announced its own one-day Connect Conference scheduled for October 11, 2022. \n“It’s that time of year again Quest fam. Join …",
      "url": "https://designtaxi.com/news/420262/Meta-Announces-Next-Connect-Event-Where-It-ll-Unfurl-More-Of-The-Metaverse/",
      "urlToImage": "https://editorial.designtaxi.com/images/Meta-Connect-1-1662520114.png",
      "publishedAt": "2022-09-07T04:26:29Z",
      "content": "Image via Meta Quest\r\nWhile excitement ramps up for the fast-approaching Apple ‘Far Out’ event taking place on September 7, Meta has announced its own one-day Connect Conference scheduled for October… [+1512 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Designtaxi.com"
      },
      "author": "Alexa Heah",
      "title": "Trump’s Truth Social Could Be Facing Trouble As It Fails To Secure Backing",
      "description": "Image ID 246521038 © via Vladyslav Yushynov | Dreamstime.com\n\n \nIt may have seemed that Truth Social was steadily gaining popularity, with users propelling it to the top of the Apple App Store when news of Elon Musk’s Twitter buyout first broke. \nHowever, it …",
      "url": "https://designtaxi.com/news/420269/Trump-s-Truth-Social-Could-Be-Facing-Trouble-As-It-Fails-To-Secure-Backing/",
      "urlToImage": "https://editorial.designtaxi.com/images/Truth-Social-1-1662526004.jpeg",
      "publishedAt": "2022-09-07T06:50:36Z",
      "content": "Image ID 246521038 © via Vladyslav Yushynov | Dreamstime.com\r\nIt may have seemed that Truth Social was steadily gaining popularity, with users propelling it to the top of the Apple App Store when new… [+1598 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hwupgrade.it"
      },
      "author": null,
      "title": "Brasile contro Apple: \"Stop alle vendite di iPhone se non sarà presente il caricatore in confezione\"",
      "description": "Il colosso americano Apple non potrà più vendere i suoi iPhone in Brasile. La motivazione è legata alla mancanza del caricabatterie in dotazione. Apple ha già commentato la decisione ed è pronta al ricorso.",
      "url": "https://www.hwupgrade.it/news/apple/brasile-contro-apple-stop-alle-vendite-di-iphone-se-non-sara-presente-il-caricatore-in-confezione_109924.html",
      "urlToImage": "https://www.hwupgrade.it/i/n/apple_brasile_720.jpg",
      "publishedAt": "2022-09-07T07:10:21Z",
      "content": "Sono passati due anni da quando Apple ha deciso di non includere più il caricabatterie nella dotazione dei suoi iPhone, scelta poi seguita da altri brand di telefonia. In Brasile, il ministero della … [+2729 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Blogdumoderateur.com"
      },
      "author": "Héloïse Famié-Galtier",
      "title": "Comment préparer votre iPhone à la mise à jour iOS 16",
      "description": "Voici quelques conseils qui permettront de vous préparer à l'arrivée d'iOS 16.",
      "url": "https://www.blogdumoderateur.com/comment-preparer-iphone-mise-a-jour-ios-16/",
      "urlToImage": "https://f.hellowork.com/blogdumoderateur/2022/09/preparer-mise-a-jour-ios-16-iphone-1200x628.jpg",
      "publishedAt": "2022-09-07T06:30:55Z",
      "content": "Ce soir aura lieu la keynote d’Apple. L’événement sera l’occasion pour la firme de dévoiler l’iPhone 14 mais aussi d’annoncer la date officielle du déploiement d’iOS 16. Pour vous préparer au mieux à… [+4027 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sapo.pt"
      },
      "author": "Pedro Simões",
      "title": "O WhatsApp vai deixar de funcionar em breve nestes iPhones! Veja se o seu está na lista",
      "description": "É normal que de forma periódica o WhatsApp limite os dispositivos e as versões que este serviço suporta. Esta uma forma de garantir o acesso às mais recentes funcionalidades e às capacidades destes mesmos...",
      "url": "https://pplware.sapo.pt/apple/o-whatsapp-vai-deixar-de-funcionar-em-breve-nestes-iphones-veja-se-o-seu-esta-na-lista/",
      "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2020/05/grupo_whatsapp_iphone00.jpg",
      "publishedAt": "2022-09-07T07:00:46Z",
      "content": "É normal que de forma periódica o WhatsApp limite os dispositivos e as versões que este serviço suporta. Esta uma forma de garantir o acesso às mais recentes funcionalidades e às capacidades destes m… [+2143 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Iphones.ru"
      },
      "author": "Артём Баусов",
      "title": "YouTube TV теперь поддерживает звук 5.1 на Apple TV",
      "description": "Обновление уже доступно.",
      "url": "https://www.iphones.ru/iNotes/youtube-tv-teper-podderzhivaet-zvuk-51-na-pristavkah-apple-tv-09-07-2022",
      "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2022%2F09%2FEAAF8C22-BCD9-4BCB-93AD-5CCA7D5E033A.jpeg",
      "publishedAt": "2022-09-07T04:51:44Z",
      "content": "YouTube Apple TV 5.1.\r\nYouTube , , 5.1 Dolby Digital, Dolby Pro Logic, THX DTS, ."
    },
    {
      "source": {
        "id": null,
        "name": "Iphones.ru"
      },
      "author": "Артём Баусов",
      "title": "Huawei первая в мире выпустила смартфон с поддержкой спутниковой связи (эх, а должна была Apple…)",
      "description": "Правда, работает спутниковая связь только в Китае.",
      "url": "https://www.iphones.ru/iNotes/huawei-pervaya-v-mire-vypustila-smartfon-s-podderzhkoy-sputnikovoy-svyazi-eh-a-dolzhna-byla-apple-09-07-2022",
      "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2022%2F09%2F8D972292-FAEC-4751-8B5F-48D52EAA8471.jpeg",
      "publishedAt": "2022-09-07T04:43:11Z",
      "content": "Huawei Mate 50.\r\n Mate 50 Pro Snapdragon 8+ Gen 1 8 256/512 . OLED- 6,74 26161212 120 .\r\n , . , BeiDou. .\r\n5G - Huawei. . HarmonyOS 3.0.\r\n SpaceX T-Mobile . Google , Android 14 2023 . \r\n , iPhone 14 … [+12 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Giga"
      },
      "author": "Sven Kaulfuss",
      "title": "Apple-Event im Livestream: So seht ihr die heutige Keynote zum iPhone 14",
      "description": "Apple lädt am heutigen 7. September zum nächsten Special-Event unter dem Motto „Far out.“, was so viel bedeutet wie „weit draußen“. Der Livestream zum iPhone-14-Event steht und wird heute Abend aufgeschaltet. Aber wo und wie aber könnt ihr die Keynote überhau…",
      "url": "https://www.giga.de/news/apple-event-im-livestream-so-seht-ihr-die-heutige-keynote-zum-iphone-14/",
      "urlToImage": "https://crops.giga.de/d0/78/82/50686cfb7b643c5f897874adb1_YyAxODk1eDk5MCs5KzEzAnJlIDEyMDAgNjI3A2Q4NThmYjNmNzRi.jpg",
      "publishedAt": "2022-09-07T05:51:52Z",
      "content": "Apple lädt am heutigen 7. September zum nächsten Special-Event unter dem Motto „Far out.“, was so viel bedeutet wie „weit draußen“. Der Livestream zum iPhone-14-Event steht und wird heute Abend aufge… [+2148 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Expansion.com"
      },
      "author": "expansion.com",
      "title": "La Primera de Expansión sobre Santander, ArcelorMittal y los valores para ganar con la revitalización de las nucleares",
      "description": "El podcast de este miércoles les hablará también de Santander, que este año subirá el sueldo a 100.000 empleados del banco, ubicados fuera de España. Por su parte, Ignacio Faes, re",
      "url": "https://www.expansion.com/podcasts/2022/09/07/63182b7de5fdea59728b4625.html",
      "urlToImage": "https://phantom-expansion.unidadeditorial.es/eee58c434e28965e1aaff30e7fdf8908/f/jpg/assets/multimedia/imagenes/2022/09/07/16625283591897.jpg",
      "publishedAt": "2022-09-07T05:45:17Z",
      "content": "El podcast de este miércoles les hablará también de Santander, que este año subirá el sueldo a 100.000 empleados del banco, ubicados fuera de España. Por su parte, Ignacio Faes, redactor de Economía … [+483 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Livedoor.jp"
      },
      "author": "itsoku",
      "title": "【朗報】Apple、全てのワイヤレスイヤホンを殲滅する最強ワイヤレスイヤホン「AirPods Pro 2」を今夜発表へ",
      "description": "1:風吹けば名無し  2022/09/07(水) 10:36:43.77 ID:js4bGXDYd 「AirPods Pro 2」のケースCAD画像がリーク。8日に発表との予想も    これまで次期AirPods Pro、通称「AirPods Pro 2」が開発中だと長らく噂されながらも、姿を現す気配はなかった。それが9月8日の午前2時～の「",
      "url": "http://blog.livedoor.jp/itsoku/archives/59702000.html",
      "urlToImage": "https://livedoor.blogimg.jp/itsoku/imgs/5/f/5fe56990-s.jpg",
      "publishedAt": "2022-09-07T04:10:11Z",
      "content": "1: 2022/09/07() 10:36:43.77 ID:js4bGXDYd\r\nAirPods Pro 2CAD8 \r\nAirPods ProAirPods Pro 2982Far OutiPhone 14Apple Watch Series 8 \r\nhttps://news.yahoo.co.jp/articles/29ec7e56f0e43d428ef8cd858e1b4b7f3d370… [+2415 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "WinFuture"
      },
      "author": "Witold Pryjda",
      "title": "Brasilien verbietet iPhones, die kein Ladegerät inkludiert haben",
      "description": "Apple hat den Anfang gemacht, dem Beispiel sind aber mittlerweile viele Konkurrenten gefolgt, nämlich auf das Beilegen eines Ladegeräts zu verzichten. In Brasilien ist diese Praxis aber nun unter Beschuss gekommen, denn man hat iPhones ohne eigenes Ladegerät …",
      "url": "https://winfuture.de/news,131704.html",
      "urlToImage": "https://i.wfcdn.de/teaser/1920/40247.jpg",
      "publishedAt": "2022-09-07T07:10:00Z",
      "content": "Apple hat den Anfang gemacht, dem Beispiel sind aber mittlerweile viele Konkurrenten gefolgt, nämlich auf das Beilegen eines Ladegeräts zu verzichten. In Brasilien ist diese Praxis aber nun unter Bes… [+1977 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Giga"
      },
      "author": "Peter Hryciuk",
      "title": "Mate 50 Pro vorgestellt: Huawei kommt Apple mit neuer Smartphone-Funktion zuvor",
      "description": "Huawei hat mit dem Mate 50 Pro ein neues High-End-Smartphone in China vorgestellt, das eine Funktion besitzt, die Apple mit dem iPhone 14 einführen dürfte. Es geht um die Satellitenverbindung von Smartphones, an der auch Google arbeitet.",
      "url": "https://www.giga.de/news/mate-50-pro-vorgestellt-huawei-kommt-apple-mit-neuer-smartphone-funktion-zuvor/",
      "urlToImage": "https://crops.giga.de/f1/f5/5d/6f6cc2557a9d601b79218ac531_YyAzMDAweDE1NjcrOTYrMTE0AnJlIDEyMDAgNjI3A2Y1NmM1YTZiMmEz.jpg",
      "publishedAt": "2022-09-07T07:20:00Z",
      "content": "Huawei hat mit dem Mate 50 Pro ein neues High-End-Smartphone in China vorgestellt, das eine Funktion besitzt, die Apple mit dem iPhone 14 einführen dürfte. Es geht um die Satellitenverbindung von Sma… [+2301 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Screen Rant"
      },
      "author": "George Chrysostomou",
      "title": "Community: 10 Questions Answered About The Spinoff Movie",
      "description": "6 seasons and a movie. That's the classic phrase. These are all the questions that fans have concerning that Community spinoff everyone awaits.",
      "url": "https://screenrant.com/community-spinoff-movie-questions-answered/",
      "urlToImage": "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/09/Split-image-of-characters-in-Community-feature.jpg",
      "publishedAt": "2022-09-07T01:10:13Z",
      "content": "Six seasons and a movie is the classic catchphrase of the sitcom Community. While fans received six seasons of the show, the and a movie aspect of the line, is still very much in development. A recen… [+7033 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "iphone-ticker.de › iPhone-News seit 2007"
      },
      "author": "chris",
      "title": "„Weiter voraus“: Apple stellt heute das iPhone 14 vor",
      "description": "Endlich ist es soweit. Heute ab 19 Uhr wird Apple die neuen iPhone-Modelle 2022 vorstellen. Damit verbunden könnt ihr auch eine Überarbeitung der Apple Watch erwarten, neben der Apple Watch Series 8 werden wir aller Voraussicht nach auch ein Pro-Modell der Uh…",
      "url": "https://www.iphone-ticker.de/weiter-voraus-apple-stellt-heute-das-iphone-14-uhr-197842/",
      "urlToImage": "https://images.iphone-ticker.de/wp-content/uploads/2022/09/weiter-voraus-apple-feature.jpg",
      "publishedAt": "2022-09-07T05:02:15Z",
      "content": "Endlich ist es soweit. Heute ab 19 Uhr wird Apple die neuen iPhone-Modelle 2022 vorstellen. Damit verbunden könnt ihr auch eine Überarbeitung der Apple Watch erwarten, neben der Apple Watch Series 8 … [+1678 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "iphone-ticker.de › iPhone-News seit 2007"
      },
      "author": "chris",
      "title": "Apple darf das iPhone in Brasilien nicht mehr ohne Ladegerät verkaufen",
      "description": "Apple muss den Verkauf seiner aktuellen iPhone-Modelle in Brasilien stoppen. Das Justizministerium des Landes hat eine Geldstrafe von umgerechnet knapp 2,4 Millionen Euro gegen das Unternehmen verhängt und zudem die Auflage erteilt, den Verkauf aller iPhone-M…",
      "url": "https://www.iphone-ticker.de/apple-darf-das-iphone-in-brasilien-nicht-mehr-ohne-ladegeraet-verkaufen-197851/",
      "urlToImage": "https://images.iphone-ticker.de/wp-content/uploads/2022/09/iphone-12-mini-feature.jpg",
      "publishedAt": "2022-09-07T06:59:22Z",
      "content": "Apple muss den Verkauf seiner aktuellen iPhone-Modelle in Brasilien stoppen. Das Justizministerium des Landes hat eine Geldstrafe von umgerechnet knapp 2,4 Millionen Euro gegen das Unternehmen verhän… [+2131 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Pocket-lint"
      },
      "author": "Maggie Tillman",
      "title": "How does the Shared Family Album work on iPhone, iPad, and Mac?",
      "description": "When you set up or join a family group on your Apple device, a Shared Family Album is created automatically in the Photos app on all family members’",
      "url": "https://www.pocket-lint.com/apps/news/apple/162549-how-does-apple-shared-family-album-work-on-iphone-ipad-mac",
      "urlToImage": "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/162549-apps-news-how-does-the-shared-family-album-work-on-iphone-ipad-and-mac-image1-1tcigj93l7.png",
      "publishedAt": "2022-09-07T01:35:38Z",
      "content": "(Pocket-lint) - When you set up or join a family group on your Apple device, a Shared Family Album is created automatically in the Photos app on all family members devices.\r\nEveryone in the family ca… [+4839 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "DIE WELT"
      },
      "author": "Daniel Eckert, Anja Ettel",
      "title": "VW oder Porsche fürs Depot und der Biotech-Liebling der Profis",
      "description": "In der heutigen Folge „Alles auf Aktien“ sprechen die Finanzjournalisten Anja Ettel und Daniel Eckert über das Kursglück bei Delivery Hero, Illuminas Kampf um einen Krebs-Deal und die gemeinsame Lieblingsaktie von Cathie Wood und Frank Thelen.",
      "url": "https://www.welt.de/podcasts/alles-auf-aktien/article240907517/Alles-auf-Aktien-VW-oder-Porsche-Welche-Aktie-lohnt-sich-mehr.html",
      "urlToImage": "https://img.welt.de/img/podcasts/alles-auf-aktien/mobile228293623/4371353037-ci16x9-w1200/DWO-Podcast-AllesaufAktien-Eckert-Ettel.jpg",
      "publishedAt": "2022-09-07T02:57:18Z",
      "content": "Außerdem geht es um HelloFresh, Mercedes-Benz, Uniper, Delivery Hero, Tesla, Amazon, Illumina, Volkswagen, Porsche SE, Toyota, Ferrari (WKN: A2ACKK), Ginkgo Bioworks und Bayer.\r\nAbonnieren Sie den Po… [+120 chars]"
    }
  ]

  constructor() {
    super();
    console.log("hello");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NEWSMONKEY TOP NEWS</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News