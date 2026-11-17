# clashrules

个人 Mihomo / Clash 规则库。主目录仅保留 Test 使用的规则；其余历史文件集中在 `废弃/`。不要向规则文件添加节点密码或订阅令牌。

## Test 专用分类

以下文件统一使用 `behavior: classical`、`format: text`，文件中不写策略名称，策略由配置中的 `RULE-SET` 指定。

| 文件 | Test 策略 | 用途与顺序 |
| --- | --- | --- |
| [rules/push/FCM.list](rules/push/FCM.list) | FCM 推送 | 12 个官方推送域名，默认 DIRECT，可手动切换；置于通用规则之前 |
| [rules/push/Registration.list](rules/push/Registration.list) | 谷歌服务 | 3 个注册 API 域名，先于 AI 中宽泛的 googleapis.com 规则 |
| [rules/gaming/SteamPlatform.list](rules/gaming/SteamPlatform.list) | 游戏平台 | Steam 商店、社区、图片、视频；必须先于下载规则 |
| [rules/gaming/SteamDownload.list](rules/gaming/SteamDownload.list) | 游戏下载 | 原 Test 高优先级下载例外，保持原匹配顺序 |
| [rules/sites/AIOverrides.list](rules/sites/AIOverrides.list) | Ai | hybgzs.com 的既有策略例外 |
| [rules/sites/ProxyOverrides.list](rules/sites/ProxyOverrides.list) | 国外流量 | linux.do、jsdelivr.net 的既有策略例外 |
| [rules/tools/Speedtest.list](rules/tools/Speedtest.list) | 网络测试 | speedtest 关键词；紧邻上游 Speedtest 规则之前 |

FCM 长连接与注册 API 分开维护，不将所有 Google 域名直连，不固定 Google IP。域名依据 [Firebase 官方网络要求](https://firebase.google.com/docs/cloud-messaging/network-configuration)。直连是否可用取决于手机当前网络；不能仅凭规则命中保证推送送达。

`SteamDownload.list` 和旧 `mihomo/SteamCN.list` 的部分重叠是有意保留：前者保持 Test 原有的早期例外，后者还被其他订阅使用，不能随意前移整个集合。原有兜底、IP 和 UDP/443 规则的顺序不变。

## Test 共享基础规则

以下 4 个文件仍被 Test 使用，保留原路径和内容。

| 类别 | 文件 |
| --- | --- |
| 游戏下载 | `mihomo/SteamCN.list` |
| Discord | `Discord` |
| Emby | `Emby.yaml` |
| 直连与网盘 | `mihomo/pikpak.list` |

共享文件历史格式不同，使用时保持原有 provider 的 `behavior` 和 `format`。不要仅修改文件扩展名转换格式。

## 废弃归档

其余 27 个原有文件按原目录结构移入 [废弃/](废弃/)，内容不变，不再用于 Test。其他 Sub-Store 配置若仍引用其中的规则，地址同步指向归档目录，以免立即断开旧设备的规则更新。脱离 Sub-Store 手动保存的旧链接不在自动更新范围内。

主目录共 11 个规则文件和本说明；旧配置、旧 FCM 固定 IP 列表、重复分类和历史副本不再混在当前维护目录中。

## 维护约定

- `rules/` 存储分类后的自定义规则；配置中的 `rules:` 只保留规则集分派、无法合并的本地例外、逻辑规则及最终兜底。
- 每个新规则文件标注用途、格式、目标策略和优先级。新增域名优先加入对应文件，不堆积在配置正文。
- 按首次匹配生效，尤其不能交换 Steam 页面和下载规则顺序。
- 第三方规则集仍由上游维护，不复制整套上游规则到本仓库。
- 本次归档依据当前 Test 的实际引用；没有删除历史文件，归档内容及 Git 历史均可用于恢复。
- 手机需更新 Test 订阅及外部规则资源，再重新建立连接；`FCM 推送` 初始为 `DIRECT`，可手动选择代理策略或节点。
