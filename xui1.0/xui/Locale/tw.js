﻿(xui.Locale.tw||(xui.Locale.tw={})).inline={
    ok:'確定',
    cancel:'取消',
    set:'設置',
    today:'今天',
    now:'現在',
    yes:'是的',
    no:'不是',
    noFlash:'No Flash PlugIn!'
};
xui.Locale.tw.date={
    WEEKS:{
        '0':'日',
        '1':'一',
        '2':'二',
        '3':'三',
        '4':'四',
        '5':'五',
        '6':'六',
        '7':'周'
    },
    VIEWS:{
        '10 ms':'10毫秒',
        '100 ms':'100毫秒',
        '1 s':'1秒',
        '10 s':'10秒',
        '1 n':'1分鐘',
        '5 n':'5分鐘',
        '10 n':'10分鐘',
        '30 n':'30分鐘',
        '1 h':'1小時',
        '2 h':'2小時',
        '6 h':'6小時',
        '1 d':'1天',
        '1 w':'1周',
        '15 d':'15天',
        '1 m':'1月',
        '1 q':'1季度',
        '1 y':'1年',
        '1 de':'10年',
        '1 c':'1世紀'
    },
    MS:'毫秒',
    S:'秒',
    N:'分',
    H:'時',
    D:'日',
    W:'周',
    M:'月',
    Q:'季',
    Y:'年',
    DE:'十年',
    C:'世紀',
    HN:function(n,a,b){return a+'點'+b+'分'},
    DHN:function(n,a,b,c){return a+'日'+b+'點'+c+'分'},
    MDHN:function(n,a,b,c,d){return a+'月'+b+'日'+c+'點'+d+'分'},
    HNS:function(n,a,b,c){return a+'點'+b+'分'+c+'秒'},
    HNSMS:function(n,a,b,c,d){return a+'點'+b+'分'+c+'秒'+d+'毫秒'},
    YM:function(n,a,b){return a+'年'+b+'月'},
    YQ:function(n,a,b){return a+'年'+b+'季'},
    YMD:function(n,a,b,c){return a+'年'+b+'月'+c+'日'},
    YMD2:function(n,a,b,c){return a+'年'+b+'月'+c+'日'},
    MD:function(n,b,c){return b+'月'+c+'日'},
    YMDH:function(n,a,b,c,d){return a+'年'+b+'月'+c+'日'+d+'點'},
    YMDHN:function(n,a,b,c,d,e){return a+'年'+b+'月'+c+'日'+d+'點'+e+'分'},
    YMDHNS:function(n,a,b,c,d,e,f){return a+'年'+b+'月'+c+'日'+d+'點'+e+'分'+f+'秒'},
    ALL:function(n,a,b,c,d,e,f,g){return a+'年'+b+'月'+c+'日'+d+'點'+e+'分'+f+'秒' + " " +g+'毫秒'},

    /*
    * replace '.' with '_' in key
    */
    TIMEZONE:{
        "Asia(East,North)":"東亞、北亞",

        "Brunei":"文萊 斯裡巴加灣市",
        "Burma":"緬甸 仰光",
        "Cambodia":"柬埔寨 金邊",
        "China":"中國 北京、重慶、上海、天津",
        "China(HK,Macau)":"中國 香港、澳門特區",
        "China(TaiWan)":"中國 台北、高雄",
        "China(Urumchi)":"中國 烏魯木齊",
        "East Timor":"東帝汶 帝力",
        "Indonesia":"印尼 雅加達",
        "Japan":"日本 東京、大阪、札幌",
        "Kazakhstan(Aqtau)":"哈薩克斯坦 阿克圖",
        "Kazakhstan(Aqtobe)":"哈薩克斯坦 阿克托別",
        "Kazakhstan(Astana)":"哈薩克斯坦 阿斯塔納、阿拉木圖",
        "Kirghizia":"吉爾吉斯 比斯凱克",
        "Korea":"韓國 漢城",
        "Laos":"寮國 萬象",
        "Malaysia":"馬來西亞 吉隆坡",
        "Mongolia":"蒙古 烏蘭巴托、庫倫",
        "Philippines":"菲律賓 馬尼拉",
        "Russia(Anadyr)":"俄羅斯 阿納德爾河",
        "Russia(Kamchatka)":"俄羅斯 堪察加半島",
        "Russia(Magadan)":"俄羅斯 馬加丹",
        "Russia(Vladivostok)":"俄羅斯 符拉迪沃斯托克(海參崴)",
        "Russia(Yakutsk)":"俄羅斯 雅庫茨克",
        "Singapore":"新加坡",
        "Thailand":"泰國 曼谷",
        "Vietnam":"越南 河內",

        "Asia(South,West)":"南亞、中亞、西亞",

        "Afghanistan":"阿富汗 喀布爾",
        "Arab Emirates":"阿拉伯聯合酋長國 阿布扎比",
        "Bahrain":"巴林 麥納麥",
        "Bangladesh":"孟加拉 達卡",
        "Bhutan":"不丹 廷布",
        "Cyprus":"塞浦路斯 尼科西亞",
        "Georgia":"喬治亞 第比利斯",
        "India":"印度 新德里、孟買、加爾各答",
        "Iran":"伊朗 德黑蘭",
        "Iraq":"伊拉克 巴格達",
        "Israel":"以色列 耶路撒冷",
        "Jordan":"約旦 安曼",
        "Kuwait":"科威特 科威特城",
        "Lebanon":"黎巴嫩 貝魯特",
        "Maldives":"馬爾代夫 馬累",
        "Nepal":"尼泊爾 加德滿都",
        "Oman":"阿曼 馬斯喀特",
        "Pakistan":"巴基斯坦 卡拉奇、伊斯蘭堡",
        "Palestine":"巴勒斯坦 耶路撒冷",
        "Qatar":"卡塔爾 多哈",
        "Saudi Arabia":"沙特阿拉伯 利雅得",
        "Sri Lanka":"斯里蘭卡 科倫坡",
        "Syria":"敘利亞 大馬士革",
        "Tajikistan":"塔吉克斯坦 杜尚別",
        "Turkey":"土耳其 伊斯坦堡",
        "Turkmenistan":"土庫曼斯坦 阿什哈巴德",
        "Uzbekistan":"烏茲別克斯坦 塔什干",
        "Yemen":"也門 薩那",

        "North Europe":"北歐",

        "Denmark":"丹麥 哥本哈根",
        "Faroe Is_(DK)":"法羅群島(丹麥) 托爾斯港",
        "Finland":"芬蘭 赫爾辛基",
        "Iceland":"冰島 雷克雅未克",
        "Jan Mayen(Norway)":"揚馬延島(挪威) 揚馬延島",
        "Norwegian":"挪威 奧斯陸",
        "Svalbard(NORWAY)":"斯瓦爾巴群島(挪威) 朗伊爾城",
        "Sweden":"瑞典 斯德哥爾摩",

        "Eastern Europe":"中歐、東歐",

        "Armenia":"亞美尼亞 埃裡溫",
        "Austria":"奧地利 維也納",
        "Azerbaijan":"阿塞拜疆 巴庫",
        "Belarus":"白俄羅斯 明斯克",
        "Czech":"捷克 布拉格",
        "Estonia":"愛沙尼亞 塔林",
        "Georgia":"喬治亞 第比利斯",
        "Germany":"德國 柏林、波恩",
        "Hungarian":"匈牙利 布達佩斯",
        "Latvia":"拉脫維亞 裡加",
        "Liechtenstein":"列支敦士登 瓦都茲",
        "Lithuania":"立陶宛 維爾紐斯",
        "Moldova":"摩爾多瓦 基希納烏",
        "Poland":"波蘭 華沙",
        "Rumania":"羅馬尼亞 布加勒斯特",
        "Russia(Moscow)":"俄羅斯 莫斯科、伏爾加格勒",
        "Slovakia":"斯洛伐克 布拉迪斯拉發",
        "Switzerland":"瑞士 蘇黎世",
        "Ukraine":"烏克蘭 基輔",
        "Ukraine(Simferopol)":"烏克蘭 辛菲羅波爾",

        "Western Europe":"西歐",

        "Andorra":"安道爾",
        "Belgium":"比利時 布魯塞爾",
        "Channel Is_(UK)":"海峽群島(英) 根西島、澤西島",
        "France":"法國 巴黎",
        "Gibraltar(UK)":"直布羅陀(英) 直布羅陀",
        "Ireland":"愛爾蘭 都柏林",
        "Isle of Man(UK)":"馬恩島(曼島、人島)(英) 道格拉斯",
        "Luxembourg":"盧森堡 盧森堡市",
        "Monaco":"摩納哥 摩納哥市",
        "Netherlands":"荷蘭 阿姆斯特丹",
        "United Kingdom":"英國 倫敦、愛丁堡",

        "South Europe":"南歐",

        "Albania":"阿爾巴尼亞 地拉那",
        "Bosnia":"波士尼亞 塞拉耶佛",
        "Bulgaria":"保加利亞 索菲亞",
        "Croatia":"克羅地亞 薩格勒布",
        "Greece":"希臘 雅典",
        "Holy See":"羅馬教廷 梵蒂岡",
        "Italy":"意大利 羅馬",
        "Macedonia":"馬其頓 斯科學普及裡",
        "Malta":"馬耳他 瓦萊塔",
        "Montenegro":"蒙特內哥羅 Podgorica",
        "Portugal":"葡萄牙 里斯本",
        "San Marino":"聖馬利諾 聖馬利諾",
        "Serbia":"塞爾維亞 貝爾格萊德",
        "Slovenia":"斯洛文尼亞 盧布爾雅那",
        "Span":"西班牙 馬德里",

        "North America":"北美洲",

        "Canada(AST)":"加拿大 冰河灣、Pangnirtung",
        "Canada(CST)":"加拿大 雷迦納、雨河鎮、激流(SwiftCurrent)市",
        "Canada(EST)":"加拿大 蒙特羅",
        "Canada(MST)":"加拿大 印奴維特港灣、埃德蒙頓、道森河",
        "Canada(NST)":"加拿大 紐芬蘭、聖約翰、古斯灣",
        "Canada(PST)":"加拿大 溫哥華",
        "Greenland(DK)":"格陵蘭(丹麥) 努克",
        "US(Central)":"美國(中部) 芝加哥",
        "US(Eastern)":"美國(東岸) 華盛頓、紐約",
        "US(Mountain)":"美國(山區) 丹佛",
        "US(Pacific)":"美國(西岸) 舊金山、洛杉磯",
        "US(Alaska)":"美國 阿拉斯加、朱諾",
        "US(Arizona)":"美國 亞歷桑那",

        "South America":"中南美洲",

        "Anguilla(UK)":"安圭拉(英) 瓦利",
        "Antigua&amp;Barbuda":"安提瓜島及巴布達島 聖約翰",
        "Antilles(NL)":"安的列斯(荷) 威廉斯塔德",
        "Argentina":"阿根廷 布宜諾斯艾利斯",
        "Aruba(NL)":"阿魯巴(荷蘭) 奧拉涅斯塔德",
        "Bahamas":"巴哈馬 拿騷",
        "Barbados":"巴巴多斯島 布裡奇頓(橋鎮)",
        "Belize":"貝里斯",
        "Bolivia":"玻利維亞 拉巴斯",
        "Brazil(AST)":"巴西 PortoAcre",
        "Brazil(EST)":"巴西 巴西利亞、里約熱內盧",
        "Brazil(FST)":"巴西 諾羅納",
        "Brazil(WST)":"巴西 庫亞巴",
        "British Virgin Is_(UK)":"維爾京群島(英) 羅德城",
        "Cayman Is_(UK)":"開曼群島(英) 喬治敦",
        "Chilean":"智利 聖地亞哥",
        "Chilean(Hanga Roa)":"智利 漢加羅亞",
        "Colombia":"哥倫比亞 波哥大",
        "Costa Rica":"哥斯達黎加 聖何塞",
        "Cuba":"古巴 哈瓦那",
        "Dominican":"多米尼加 聖多明各、羅梭",
        "Ecuador":"厄瓜多爾 基多",
        "El Salvador":"薩爾瓦多 聖薩爾瓦多",
        "Falklands":"福克蘭群島 史丹利",
        "Grenada":"格林納達 聖喬治",
        "Guadeloupe(FR)":"瓜德羅普(法) 巴斯特爾",
        "Guatemala":"危地馬拉 危地馬拉城",
        "Guiana(FR)":"圭亞那(法) 卡宴",
        "Guyana":"圭亞那 佐治敦",
        "Haiti":"海地 太子港",
        "Honduras":"洪都拉斯 特古西加爾巴",
        "Jamaica":"牙買加 金斯敦",
        "Martinique(FR)":"馬提尼克(法) 法蘭西堡",
        "Mexico(Mazatlan)":"墨西哥 馬薩特蘭",
        "Mexico(Tijuana)":"(蒂華納)墨西哥 蒂華納",
        "Mexico(Mexico)":"(首都)墨西哥 墨西哥城",
        "Montserrat(UK)":"蒙特塞拉特(英) 普利茅斯",
        "Nicaragua":"尼加拉瓜 馬那瓜",
        "Panama":"巴拿馬 巴拿馬市",
        "Paraguay":"巴拉圭 亞松森",
        "Peru":"秘魯 利馬",
        "Puerto Rico(US)":"波多黎各(美) 聖胡安",
        "So_ Georgia&amp;So_ Sandwich Is_(UK)":"南喬治和南三明治群島(英) 葛利特維根",
        "St_ Kitts&amp;Nevis":"聖克裡斯多福及尼維斯 巴士地",
        "St_ Lucia":"聖盧西亞 卡斯特裡",
        "St_ Vincent&amp;Grenadines":"聖文森特和格林納丁斯 金斯敦",
        "Suriname":"蘇裡南 帕拉馬裡博(Paramaribo)",
        "Trinidad&amp;Tobago":"特立尼達和多巴哥 西班牙港",
        "Turks&amp;Caicos Is_(UK)":"特克斯和凱科斯群島(英) 科伯恩城",
        "Uruguay":"烏拉圭 蒙得維的亞",
        "Venezuela":"委內瑞拉 加拉加斯",
        "Virgin Is_(US)":"維爾京群島(美) 夏洛特.阿馬裡",

        "Africa(North)":"北非",

        "Algeria":"阿爾及利亞 阿爾及爾",
        "Egypt":"埃及 開羅",
        "Libyan":"利比亞 的黎波里、錫爾特市(新首都)",
        "Morocco":"摩洛哥 拉巴特、卡薩布蘭卡",
        "Sudan":"蘇丹 喀土穆",
        "Tunisia":"突尼斯 突尼斯",

        "Africa(Western)":"西非",

        "Benin":"貝寧 波多諾伏、科托努、新港",
        "Burkina Faso":"布吉納法索 瓦加杜古",
        "Canary Is_(SP)":"加那利群島(西班牙) 喬治城",
        "Cape Verde":"佛得角群島 普拉亞",
        "Chad":"乍得 恩賈梅納",
        "Gambia":"岡比亞 班珠爾",
        "Ghana":"加納 阿克拉",
        "Guinea":"幾內亞 科納克裡",
        "Guinea-Bissau":"幾內亞比紹 比紹",
        "Ivory Coast":"象牙海岸 亞穆蘇克羅、阿比讓",
        "Liberia":"利比裡亞 蒙羅維亞",
        "Mali":"馬裡 巴馬科",
        "Mauritania":"毛裡塔尼亞 努瓦克肖特",
        "Niger":"尼日爾 尼亞美",
        "Nigeria":"尼日利亞 阿布賈",
        "Senegal":"塞內加爾 達喀爾",
        "Sierra Leone":"塞拉利昂 弗裡敦(自由城)",
        "Togo":"多哥 洛美",
        "Western Sahara":"西撒哈拉 阿尤恩",

        "Africa(Central)":"中非",

        "Cameroon":"喀麥隆 雅溫得",
        "Cen_African Rep_":"中非共和國 班吉",
        "Congo,Democratic":"剛果民主共和國[剛果(金)] 金沙薩",
        "Congo,Republic":"剛果共和國[剛果(布)] 布拉柴維爾",
        "Equatorial Guinea":"赤道幾內亞 馬拉博",
        "Gabon":"加蓬 利伯維爾(自由市)",
        "Sao Tome&amp;Principe":"聖多美普林西比 聖多美",

        "Africa(East)":"東非",

        "Burundi":"布隆迪 布瓊布拉",
        "Comoros":"科摩羅 莫羅尼",
        "Djibouti":"吉布提 吉布提",
        "Eritrea":"厄利垂亞 阿斯馬拉",
        "Ethiopia":"埃塞俄比亞 亞的斯亞貝巴",
        "Kenya":"肯尼亞 內羅畢",
        "Madagascar":"馬達加斯加 塔那那利佛",
        "Malawi":"馬拉維 利隆圭",
        "Mauritius":"毛里求斯 路易港",
        "Mayotte(FR)":"馬約特島(法) Mamoutzou",
        "Mozambique":"莫桑比克 馬普托",
        "Reunion(FR)":"留尼旺島(法) 聖丹尼",
        "Rwanda":"盧旺達 基加利",
        "Seychelles":"塞舌爾 維多利亞",
        "Somalia":"索馬裡 摩加迪沙",
        "Tanzania":"坦桑尼亞 達累斯薩拉姆",
        "Uganda":"烏干達 坎帕拉",

        "Africa(South)":"南非",

        "Angola":"安哥拉 羅安達",
        "Botswana":"博茨瓦納 哈博羅內",
        "Lesotho":"萊索托 馬塞盧",
        "Namibia":"納米比亞 溫得和克",
        "Saint Helena(UK)":"聖赫勒拿(英) 詹姆斯敦",
        "South Africa":"南非 開普敦、普利托裡亞",
        "Swaziland":"斯威士蘭 姆巴巴內",
        "Zambia":"贊比亞 盧薩卡",
        "Zimbabwe":"津巴布韋 哈拉雷",

        "Oceania":"大洋洲",

        "American Samoa(US)":"美屬薩摩亞(美) 帕果帕果港",
        "Australia(Adelaide)":"澳大利亞 阿德萊德",
        "Australia(Brisbane)":"澳大利亞 布裡斯班",
        "Australia(Darwin)":"澳大利亞 達爾文",
        "Australia(Hobart)":"澳大利亞 霍巴特",
        "Australia(Perth)":"澳大利亞 珀斯",
        "Australia(Sydney)":"澳大利亞 堪培拉、墨爾本、悉尼",
        "Cook Islands(NZ)":"庫克群島(新西蘭) 阿瓦魯阿",
        "Eniwetok":"埃尼威托克島 埃尼威托克島",
        "Fiji":"斐濟 蘇瓦",
        "Guam":"關島 阿加尼亞",
        "Hawaii(US)":"夏威夷(美) 檀香山",
        "Kiribati":"基裡巴斯 塔拉瓦",
        "Marshall Is_":"馬紹爾群島 馬朱羅",
        "Micronesia":"密克羅尼西亞聯邦 帕利基爾(Palikir)",
        "Midway Is_(US)":"中途島(美)",
        "Nauru Rep_":"瑙魯共和國 亞倫",
        "New Calednia(FR)":"新克裡多尼亞(法) 努美阿",
        "New Zealand":"新西蘭 奧克蘭",
        "New Zealand(CHADT)":"新西蘭 惠靈頓",
        "Niue(NZ)":"紐埃(新) 阿洛菲(Alofi)",
        "Nor_ Mariana Is_":"北馬裡亞納群島(美) 塞班島",
        "Palau":"帕勞群島(帛琉群島) 科羅爾",
        "Papua New Guinea":"巴布亞新幾內亞 莫爾斯比港",
        "Pitcairn Is_(UK)":"皮特克恩群島(英) 亞當斯敦",
        "Polynesia(FR)":"玻利尼西亞(法) 巴比蒂、塔希提",
        "Solomon Is_":"所羅門群島 霍尼亞拉",
        "Tahiti":"塔希提 帕佩特",
        "Tokelau(NZ)":"托克勞群島(新) 努庫諾努、法考福、阿塔富",
        "Tonga":"湯加 努庫阿洛法",
        "Tuvalu":"圖瓦盧 富納富提",
        "Vanuatu":"瓦努阿圖(新赫布裡底群島) 維拉港",
        "Western Samoa":"西薩摩亞 阿皮亞",
        "Data Line":"國際換日線"
    }
};
xui.Locale.tw.color={
  LIST:{
    "FFFFFF":"純白",
    "FFFFF0":"象牙",
    "FFFFE0":"淺黃色",
    "FFFF00":"純黃",
    "FFFAFA":"雪",
    "FFFAF0":"花的白色",
    "FFFACD":"檸檬薄紗",
    "FFF8DC":"玉米色",
    "FFF5EE":"海貝殼",
    "FFF0F5":"臉紅的淡紫色",
    "FFEFD5":"番木瓜",
    "FFEBCD":"漂白的杏仁",
    "FFE4E1":"薄霧玫瑰",
    "FFE4C4":"(濃湯)乳脂,番茄等",
    "FFE4B5":"鹿皮鞋",
    "FFDEAD":"Navajo白",
    "FFDAB9":"桃色",
    "FFD700":"金",
    "FFC0CB":"粉紅",
    "FFB6C1 ":"淺粉紅",
    "FFA500":"橙色",
    "FFA07A":"淺鮮肉(鮭魚)色",
    "FF8C00":"深橙色",
    "FF7F50":"珊瑚",
    "FF69B4":"熱情的粉紅",
    "FF6347":"番茄",
    "FF4500":"橙紅色",
    "FF1493":"深粉色",
    "FF00FF":"洋紅",
    "FF00FF":"燈籠海棠(紫紅色)",
    "FF0000":"純紅",
    "FDF5E6":"老飾帶",
    "FAFAD2":"淺秋麒麟黃",
    "FAF0E6":"亞麻布",
    "FAEBD7":"古代的白色",
    "FA8072":"鮮肉(鮭魚)色",
    "F8F8FF":"幽靈的白色",
    "F5FFFA":"適中的春天的綠色",
    "F5F5F5":"白煙",
    "F5DEB3":"小麥色",
    "F4A460":"沙棕色",
    "F0FFFF":"蔚藍色",
    "F0FFF0":"蜂蜜",
    "F0F8FF":"愛麗絲藍",
    "F0E68C":"卡其布",
    "F08080":"淡珊瑚色",
    "EEE8AA":"灰秋麒麟",
    "EE82EE":"紫羅蘭",
    "E9967A":"深鮮肉(鮭魚)色",
    "E6E6FA":"熏衣草花的淡紫色",
    "E1FFFF":"淡青色",
    "DEB887":"結實的樹",
    "DDA0DD":"李子",
    "DCDCDC":"Gainsboro",
    "DC143C":"猩紅",
    "DB7093":"蒼白的紫羅蘭紅色",
    "DAA520":"秋麒麟",
    "DA70D6":"蘭花的紫色",
    "D8BFD8":"薊",
    "D3D3D3":"淺灰色",
    "D2B48C":"曬黑",
    "D2691E":"巧克力",
    "CD853F":"秘魯",
    "CD5C5C":"印度紅",
    "C71585":"適中的紫羅蘭紅色",
    "C0C0C0":"銀白色",
    "BDB76B":"深卡其布",
    "BC8F8F":"玫瑰棕色",
    "BA55D3":"適中的蘭花紫",
    "B22222":"耐火磚",
    "B0E0E6":"火藥藍",
    "B0C4DE":"淡鋼藍",
    "AFEEEE":"蒼白的綠寶石",
    "ADFF2F":"綠黃色",
    "ADD8E6":"淡藍",
    "A9A9A9":"深灰色",
    "A52A2A":"棕色",
    "A0522D":"黃土赭色",
    "9932CC":"深蘭花紫",
    "98FB98":"蒼白的綠色",
    "9400D3":"深紫羅蘭色",
    "9370DB":"適中的紫色",
    "90EE90":"淡綠色",
    "8FBC8F":"深海洋綠",
    "8B4513":"馬鞍棕色",
    "8B008B":"深洋紅色",
    "8B0000":"深紅色",
    "8A2BE2":"深紫羅蘭的藍色",
    "87CEFA":"淡藍色",
    "87CEEB":"天藍色",
    "808080":"灰色",
    "808000":"橄欖",
    "800080":"紫色",
    "800000":"栗色",
    "7FFFAA":"綠玉\碧綠色",
    "7FFF00":"查特酒綠",
    "7CFC00":"草坪綠",
    "7B68EE":"適中的板岩暗藍灰色",
    "778899":"淺石板灰",
    "708090":"石板灰",
    "6B8E23":"米色(淺褐色)",
    "6A5ACD":"板岩暗藍灰色",
    "696969":"暗淡的灰色",
    "6495ED":"矢車菊的藍色",
    "5F9EA0":"軍校藍",
    "556B2F":"橄欖土褐色",
    "4B0082":"靛青",
    "48D1CC":"適中的綠寶石",
    "483D8B":"深巖暗藍灰色",
    "4682B4":"鋼藍",
    "4169E1":"皇軍藍",
    "40E0D0":"綠寶石",
    "3CB371":"春天的綠色",
    "32CD32":"酸橙綠",
    "2F4F4F":"深石板灰",
    "2E8B57":"海洋綠",
    "228B22":"森林綠",
    "20B2AA":"淺海洋綠",
    "1E90FF":"道奇藍",
    "191970":"午夜的藍色",
    "00FFFF":"青色",
    "00FFFF":"水綠色",
    "00FF7F":"薄荷奶油",
    "00FF00":"酸橙色",
    "00FA9A":"適中的碧綠色",
    "00CED1":"深綠寶石",
    "00BFFF":"深天藍",
    "008B8B":"深青色",
    "008080":"水鴨色",
    "008000":"純綠",
    "006400":"深綠色",
    "0000FF":"純藍",
    "0000CD":"適中的藍色",
    "00008B":"深藍色",
    "000080":"海軍藍",
    "000000":"純黑"
  }
};
xui.Locale.tw.editor={
    bold:'粗體',
    italic:'斜體',
    underline:'下劃線',
    strikethrough:'刪除線',
    subscript:'上標',
    superscript:'下標',
    forecolor:'字體色',
    bgcolor:'背景色',
    left:'左對齊',
    center:'居中',
    right:'右對齊',
    justify:'兩端對齊',
    indent:'減少縮進',
    outdent:'增加縮進',
    ol:'編號',
    ul:'項目符號',
    hr:'插入橫線',
    unlink:'清除鏈接',
    removeformat:'清除格式',
    html:'編輯HTML源碼',

    insertimage:'插入圖片',
    insertimage2:'圖片的URL：',
    createlink:'插入鏈接',
    createlink2:'鏈接的URL：',
    fontsize:'字號',
    fontname:'字體',
    formatblock:'樣式',
    fontsizeList:'1,1(8pt);2,2(10pt);3,3(12pt);4,4(14pt);5,5(18pt);6,6(24pt);...,...',
    fontnameList:'宋體;黑體;仿宋;楷體;Arial;Arial Black;Times New Roman;...',
    formatblockList:'p,正文;h1,標題1;h2,標題2;h3,標題3;h4,標題4;h5,標題5;h6,標題6;...,...'
}
