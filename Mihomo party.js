proxy-groups:
  - name: 节点选择
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png
    type: select
    proxies:
      - 自动选择
      - 香港节点
      - 台湾节点
      - 狮城节点
      - 日本节点
      - 美国节点
      - 韩国节点
      - 手动切换
      - DIRECT
  - name: 手动切换
    icon: https://fastly.jsdelivr.net/gh/shindgewongxj/WHATSINStash@master/icon/select.png
    include-all: true
    type: select
  - name: 自动选择
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Auto.png
    type: url-test
    include-all: true
    interval: 300
    tolerance: 50
  - name: 电报消息
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram.png
    type: select
    proxies:
      - 节点选择
      - 自动选择
      - 狮城节点
      - 香港节点
      - 台湾节点
      - 日本节点
      - 美国节点
      - 韩国节点
      - 手动切换
      - DIRECT
  - name: OpenAi
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Bot.png
    type: select
    proxies:
      - 节点选择
      - 自动选择
      - 狮城节点
      - 香港节点
      - 台湾节点
      - 日本节点
      - 美国节点
      - 韩国节点
      - 手动切换
      - DIRECT
  - name: 油管视频
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png
    type: select
    proxies:
      - 节点选择
      - 自动选择
      - 狮城节点
      - 香港节点
      - 台湾节点
      - 日本节点
      - 美国节点
      - 韩国节点
      - 手动切换
      - DIRECT
  - name: 奈飞视频
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netflix.png
    type: select
    proxies:
      - 节点选择
      - 自动选择
      - 奈飞节点
      - 狮城节点
      - 香港节点
      - 台湾节点
      - 日本节点
      - 美国节点
      - 韩国节点
      - 手动切换
      - DIRECT
  - name: 巴哈姆特
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Bahamut.png
    type: select
    proxies:
      - 台湾节点
      - 节点选择
      - 手动切换
      - DIRECT
  - name: 哔哩哔哩
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/bilibili.png
    type: select
    proxies:
      - 全球直连
      - 台湾节点
      - 香港节点
  - name: 国外媒体
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ForeignMedia.png
    type: select
    proxies:
      - 节点选择
      - 自动选择
      - 香港节点
      - 台湾节点
      - 狮城节点
      - 日本节点
      - 美国节点
      - 韩国节点
      - 手动切换
      - DIRECT
  - name: 国内媒体
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/DomesticMedia.png
    type: select
    proxies:
      - DIRECT
      - 香港节点
      - 台湾节点
      - 狮城节点
      - 日本节点
      - 手动切换
  - name: 谷歌FCM
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google_Search.png
    type: select
    proxies:
      - DIRECT
      - 节点选择
      - 美国节点
      - 香港节点
      - 台湾节点
      - 狮城节点
      - 日本节点
      - 韩国节点
      - 手动切换
  - name: 微软Bing
    icon: https://fastly.jsdelivr.net/gh/shindgewongxj/WHATSINStash@master/icon/bing.png
    type: select
    proxies:
      - DIRECT
      - 节点选择
      - 美国节点
      - 香港节点
      - 台湾节点
      - 狮城节点
      - 日本节点
      - 韩国节点
      - 手动切换
  - name: 微软云盘
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/OneDrive.png
    type: select
    proxies:
      - DIRECT
      - 节点选择
      - 美国节点
      - 香港节点
      - 台湾节点
      - 狮城节点
      - 日本节点
      - 韩国节点
      - 手动切换
  - name: 微软服务
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png
    type: select
    proxies:
      - 节点选择
      - DIRECT
      - 美国节点
      - 香港节点
      - 台湾节点
      - 狮城节点
      - 日本节点
      - 韩国节点
      - 手动切换
  - name: 苹果服务
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple.png
    type: select
    proxies:
      - DIRECT
      - 节点选择
      - 美国节点
      - 香港节点
      - 台湾节点
      - 狮城节点
      - 日本节点
      - 韩国节点
      - 手动切换
  - name: 游戏平台
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Game.png
    type: select
    proxies:
      - DIRECT
      - 节点选择
      - 美国节点
      - 香港节点
      - 台湾节点
      - 狮城节点
      - 日本节点
      - 韩国节点
      - 手动切换
  - name: 网易音乐
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netease_Music.png
    type: select
    include-all: true
    filter: (?i)网易|音乐|NetEase|Music
    proxies:
      - DIRECT
      - 节点选择
      - 自动选择
  - name: 全球直连
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Direct.png
    type: select
    proxies:
      - DIRECT
      - 节点选择
      - 自动选择
  - name: 广告拦截
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/AdBlack.png
    type: select
    proxies:
      - REJECT
      - DIRECT
  - name: 应用净化
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hijacking.png
    type: select
    proxies:
      - REJECT
      - DIRECT
  - name: 漏网之鱼
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png
    type: select
    proxies:
      - 节点选择
      - 自动选择
      - DIRECT
      - 香港节点
      - 台湾节点
      - 狮城节点
      - 日本节点
      - 美国节点
      - 韩国节点
      - 手动切换
  - name: 香港节点
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png
    include-all: true
    filter: (?i)港|HK|hk|Hong Kong|HongKong|hongkong
    type: url-test
    interval: 300
    tolerance: 50
  - name: 日本节点
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png
    include-all: true
    filter: (?i)日本|川日|东京|大阪|泉日|埼玉|沪日|深日|JP|Japan
    type: url-test
    interval: 300
    tolerance: 50
  - name: 美国节点
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png
    include-all: true
    filter: (?i)美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|US|United States
    type: url-test
    interval: 300
    tolerance: 50
  - name: 台湾节点
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png
    include-all: true
    filter: (?i)台|新北|彰化|TW|Taiwan
    type: url-test
    interval: 300
    tolerance: 50
  - name: 狮城节点
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png
    include-all: true
    filter: (?i)新加坡|坡|狮城|SG|Singapore
    type: url-test
    interval: 300
    tolerance: 50
  - name: 韩国节点
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Korea.png
    include-all: true
    filter: (?i)KR|Korea|KOR|首尔|韩|韓
    type: url-test
    interval: 300
    tolerance: 50
  - name: 奈飞节点
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netflix.png
    include-all: true
    filter: (?i)NF|奈飞|解锁|Netflix|NETFLIX|Media
    type: select
  - name: GLOBAL
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Global.png
    include-all: true
    type: select
    proxies:
      - 节点选择
      - 手动切换
      - 自动选择
      - 电报消息
      - OpenAi
      - 油管视频
      - 奈飞视频
      - 巴哈姆特
      - 哔哩哔哩
      - 国外媒体
      - 国内媒体
      - 谷歌FCM
      - 微软Bing
      - 微软云盘
      - 微软服务
      - 苹果服务
      - 游戏平台
      - 网易音乐
      - 全球直连
      - 广告拦截
      - 应用净化
      - 漏网之鱼
      - 香港节点
      - 日本节点
      - 美国节点
      - 台湾节点
      - 狮城节点
      - 韩国节点
      - 奈飞节点

rule-providers:
  LocalAreaNetwork:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/LocalAreaNetwork.list
    path: ./ruleset/LocalAreaNetwork.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  UnBan:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/UnBan.list
    path: ./ruleset/UnBan.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  BanAD:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/BanAD.list
    path: ./ruleset/BanAD.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  BanProgramAD:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/BanProgramAD.list
    path: ./ruleset/BanProgramAD.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  GoogleFCM:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/GoogleFCM.list
    path: ./ruleset/GoogleFCM.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  GoogleCN:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/GoogleCN.list
    path: ./ruleset/GoogleCN.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  SteamCN:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/SteamCN.list
    path: ./ruleset/SteamCN.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  Bing:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Bing.list
    path: ./ruleset/Bing.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  OneDrive:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/OneDrive.list
    path: ./ruleset/OneDrive.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  Microsoft:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Microsoft.list
    path: ./ruleset/Microsoft.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  Apple:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Apple.list
    path: ./ruleset/Apple.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  Telegram:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Telegram.list
    path: ./ruleset/Telegram.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  OpenAi:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/OpenAi.list
    path: ./ruleset/OpenAi.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  NetEaseMusic:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/NetEaseMusic.list
    path: ./ruleset/NetEaseMusic.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  Epic:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Epic.list
    path: ./ruleset/Epic.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  Origin:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Origin.list
    path: ./ruleset/Origin.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  Sony:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Sony.list
    path: ./ruleset/Sony.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  Steam:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Steam.list
    path: ./ruleset/Steam.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  Nintendo:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Nintendo.list
    path: ./ruleset/Nintendo.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  YouTube:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/YouTube.list
    path: ./ruleset/YouTube.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  Netflix:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Netflix.list
    path: ./ruleset/Netflix.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  Bahamut:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Bahamut.list
    path: ./ruleset/Bahamut.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  BilibiliHMT:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/BilibiliHMT.list
    path: ./ruleset/BilibiliHMT.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  Bilibili:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Bilibili.list
    path: ./ruleset/Bilibili.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  ChinaMedia:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaMedia.list
    path: ./ruleset/ChinaMedia.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  ProxyMedia:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyMedia.list
    path: ./ruleset/ProxyMedia.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  ProxyGFWlist:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyGFWlist.list
    path: ./ruleset/ProxyGFWlist.list
    behavior: classical
    interval: 86400
    format: text
    type: http
  ChinaDomain:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaDomain.list
    path: ./ruleset/ChinaDomain.list
    behavior: domain
    interval: 86400
    format: text
    type: http
  ChinaCompanyIp:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaCompanyIp.list
    path: ./ruleset/ChinaCompanyIp.list
    behavior: ipcidr
    interval: 86400
    format: text
    type: http
  Download:
    url: https://mirror.ghproxy.com/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Download.list
    path: ./ruleset/Download.list
    behavior: classical
    interval: 86400
    format: text
    type: http

rules:
  - "RULE-SET,LocalAreaNetwork,全球直连"
  - "RULE-SET,UnBan,全球直连"
  - "RULE-SET,BanAD,广告拦截"
  - "RULE-SET,BanProgramAD,应用净化"
  - "RULE-SET,GoogleFCM,谷歌FCM"
  - "RULE-SET,GoogleCN,全球直连"
  - "RULE-SET,SteamCN,全球直连"
  - "RULE-SET,Bing,微软Bing"
  - "RULE-SET,OneDrive,微软云盘"
  - "RULE-SET,Microsoft,微软服务"
  - "RULE-SET,Apple,苹果服务"
  - "RULE-SET,Telegram,电报消息"
  - "RULE-SET,OpenAi,OpenAi"
  - "RULE-SET,NetEaseMusic,网易音乐"
  - "RULE-SET,Epic,游戏平台"
  - "RULE-SET,Origin,游戏平台"
  - "RULE-SET,Sony,游戏平台"
  - "RULE-SET,Steam,游戏平台"
  - "RULE-SET,Nintendo,游戏平台"
  - "RULE-SET,YouTube,油管视频"
  - "RULE-SET,Netflix,奈飞视频"
  - "RULE-SET,Bahamut,巴哈姆特"
  - "RULE-SET,BilibiliHMT,哔哩哔哩"
  - "RULE-SET,Bilibili,哔哩哔哩"
  - "RULE-SET,ChinaMedia,国内媒体"
  - "RULE-SET,ProxyMedia,国外媒体"
  - "RULE-SET,ProxyGFWlist,节点选择"
  - "RULE-SET,ChinaDomain,全球直连"
  - "RULE-SET,ChinaCompanyIp,全球直连"
  - "RULE-SET,Download,全球直连"
  - "GEOIP,CN,全球直连"
  - "MATCH,漏网之鱼"
