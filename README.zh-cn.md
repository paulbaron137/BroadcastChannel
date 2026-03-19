# 广播频道

**将你的 Telegram Channel 转为微博客。**

---

[English](./README.md) | 简体中文

## ✨ 特性

- **将 Telegram Channel 转为微博客**
- **SEO 友好** `/sitemap.xml`
- **浏览器端 0 JS**
- **提供 RSS 和 RSS JSON** `/rss.xml` `/rss.json`
- **通过 Bot API 将帖子保存到 Telegram 频道**

## 🪧 演示

### 真实用户

- [面条实验室](https://memo.miantiao.me/)
- [Find Blog👁发现博客](https://broadcastchannel.pages.dev/)
- [Memos 广场 🎪](https://now.memobbs.app/)
- [APPDO 数字生活指南](https://mini.appdo.xyz/)
- [85.60×53.98卡粉订阅/提醒](https://tg.docofcard.com/)
- [新闻在花频道](https://tg.istore.app/)
- [ALL About RSS](https://blog.rss.tips/)
- [Charles Chin's Whisper](https://memo.eallion.com/)
- [PlayStation 新闻转发](https://playstationnews.pages.dev)
- [Yu's Life](https://daily.pseudoyu.com/)
- [Leslie 和朋友们](https://tg.imlg.co/)
- [OKHK 分享](https://tg.okhk.net/)
- [gledos 的微型博客](https://microblogging.gledos.science)
- [Steve Studio](https://tgc.surgeee.me/)
- [LiFePO4:沙雕吐槽](https://lifepo4.top)
- [Hotspot Hourly](https://hourly.top/)
- [大河马中文财经新闻分享](https://a.xiaomi318.com/)
- [\_My. Tricks 🎩 Collection](https://channel.mykeyvans.com)
- [小报童专栏精选](https://xiaobaotong.genaiprism.site/)
- [Fake news](https://fake-news.csgo.ovh/)
- [miyi23's Geekhub资源分享](https://gh.miyi23.top/)
- [Magazine｜期刊杂志｜财新周刊](https://themagazine.top)
- [Remote Jobs & Cooperation](https://share-remote-jobs.vercel.app/)
- [甬哥侃侃侃--频道发布](https://ygkkktg.pages.dev)
- [Fugoou.log](https://fugoou.xyz)
- [Bboysoul的博客](https://tg.bboy.app/)
- [MakerHunter](https://share.makerhunter.com/)

### 平台

1. [Cloudflare](https://broadcast-channel.pages.dev/)
2. [Netlify](https://broadcast-channel.netlify.app/)
3. [Vercel](https://broadcast-channel.vercel.app/)

广播频道支持部署在 Cloudflare、Netlify、Vercel 等支持 Node.js SSR 的无服务器平台或者 VPS。
具体教程见[部署你的 Astro 站点](https://docs.astro.build/zh-cn/guides/deploy/)。

## 🧱 技术栈

- 框架：[Astro](https://astro.build/)
- 内容管理系统：[Telegram Channels](https://telegram.org/tour/channels)
- 模板: [Sepia](https://github.com/Planetable/SiteTemplateSepia)

## 🏗️ 部署

1. [Fork](https://github.com/ccbikai/BroadcastChannel/fork) 此项目到你 GitHub
2. 在 Cloudflare/Netlify/Vercel 创建项目
3. 选择 `BroadcastChannel` 项目和 `Astro` 框架
4. 配置环境变量 `CHANNEL` 为你的频道名称。此为最小化配置，更多配置见下面的配置项
5. 保存并部署
6. 绑定域名（可选）。
7. 更新代码，参考 GitHub 官方文档 [从 Web UI 同步分叉分支](https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork#syncing-a-fork-branch-from-the-web-ui)。

## ⚒️ 配置

```env
## Telegram 频道用户名，必须配置。 t.me/ 后面那串字符
CHANNEL=miantiao_me

## 语言和时区设置，语言选项见[dayjs](https://github.com/iamkun/dayjs/tree/dev/src/locale)
LOCALE=zh-cn
TIMEZONE=Asia/Shanghai

## Telegram Bot 配置（用于收藏功能）
BOT_TOKEN=your_bot_token_here
SAVE_CHANNEL_ID=-1001234567890

## 社交媒体用户名
TELEGRAM=ccbikai
TWITTER=ccbikai
GITHUB=ccbikai

## 下面两个社交媒体需要为 URL
DISCORD=https://DISCORD.com
PODCASRT=https://PODCASRT.com

## 头部尾部代码注入，支持 HTML
FOOTER_INJECT=FOOTER_INJECT
HEADER_INJECT=HEADER_INJECT

## SEO 配置项，可不让搜索引擎索引内容
NO_FOLLOW=false
NO_INDEX=false

## Sentry 配置项，收集服务端报错
SENTRY_AUTH_TOKEN=SENTRY_AUTH_TOKEN
SENTRY_DSN=SENTRY_DSN
SENTRY_PROJECT=SENTRY_PROJECT

## Telegram 主机名称和静态资源代理，不建议修改
HOST=telegram.dog
STATIC_PROXY=
```

## 🙋🏻 常问问题

1. 为什么部署后内容为空？
   - 检查频道是否是公开的，必须是公开的
   - 频道用户名是字符串，不是数字
   - 关闭频道 Restricting Saving Content 设置项
   - 修改完环境变量后需要重新部署
   - Telegram 会屏蔽一些敏感频道的公开展示， 可以通过访问 `https://t.me/s/频道用户名` 确认

2. 如何使用收藏功能？
   - 配置 `BOT_TOKEN` 为你的 Telegram Bot Token（从 [@BotFather](https://t.me/botfather) 获取）
   - 配置 `SAVE_CHANNEL_ID` 为目标频道 ID（帖子将转发到此频道）
   - Bot 必须是目标频道的管理员
   - 配置完成后，每条帖子下方会出现收藏按钮

## 📖 收藏功能详细配置指南

本指南将一步步帮助你完成收藏功能的设置。

### 步骤 1：创建 Telegram Bot

1. 打开 Telegram 上的 [BotFather](https://t.me/botfather)
2. 发送 `/newbot` 命令
3. 按照提示给你的机器人命名并创建用户名
4. BotFather 会提供给你一个 **Bot Token**（格式：`1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`）
5. **保存这个 Token** - 你会在配置中使用它

### 步骤 2：创建或选择目标频道

选择你想要保存帖子的位置：

**选项 A：创建新频道**
1. 在 Telegram 中，点击**菜单**图标（三条横线）
2. 选择**新建频道**
3. 设置频道名称和描述（例如："我的收藏"）
4. 选择**公开频道**并设置用户名
5. 完成频道创建

**选项 B：使用现有频道**
- 选择你拥有的任何想要保存帖子的频道
- 确保频道允许转发

### 步骤 3：获取频道 ID

你需要目标频道的数字 ID：

**方法 1：使用机器人（推荐）**
1. 将 [@GetMyIdBot](https://t.me/GetMyIdBot) 添加到你的联系人
2. 从目标频道转发一条消息给这个机器人
3. 机器人会回复频道 ID（格式：`-1001234567890`）

**方法 2：使用浏览器开发者工具**
1. 在浏览器中打开你的频道（https://web.telegram.org/k/#channel_name）
2. 打开浏览器开发者工具（F12）
3. 进入**网络**（Network）标签页
4. 在频道中点击一条消息
5. 查找响应中包含 `channel_id` 或 `chat_id` 的 API 请求

**方法 3：使用 Telegram API 工具**
- 使用 [Telegram API ID Finder](https://t.me/tgscanbot) 等工具获取你的频道 ID

**注意：** 超级群组和频道的 ID 总是以 `-100` 开头。

### 步骤 4：将 Bot 添加为管理员

1. 在 Telegram 上打开你的目标频道
2. 点击频道名称打开频道信息
3. 点击**管理员**（或**管理** → **管理员**）
4. 点击**添加管理员**
5. 通过用户名搜索你的机器人
6. 选择你的机器人并授予以下权限：
   - ✅ **编辑消息**（可选，但推荐）
   - ✅ **删除消息**（可选）
   - ✅ **通过链接邀请用户**（可选）
   - ✅ **管理语音聊天**（可选）
7. 点击**完成**确认

**重要提示：** 机器人必须拥有管理员权限才能向频道转发消息。

### 步骤 5：配置环境变量

使用获取到的值更新你的环境变量：

```env
## 从 BotFather 获取的 Telegram Bot Token
BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz

## 目标频道 ID（以 -100 开头）
SAVE_CHANNEL_ID=-1001234567890
```

#### 针对不同部署平台：

**Cloudflare Pages：**
1. 进入你的项目设置
2. 导航到 **Settings** → **Functions** → **Environment variables**
3. 添加上述两个变量
4. 保存并重新部署

**Netlify：**
1. 进入 **Site settings** → **Environment variables**
2. 添加变量
3. 保存并重新部署

**Vercel：**
1. 进入 **Settings** → **Environment Variables**
2. 添加变量
3. 保存并重新部署

**VPS/Docker：**
1. 编辑你的 `.env` 文件
2. 添加变量
3. 重启应用程序

### 步骤 6：验证设置

部署完成后：

1. 访问你部署的网站
2. 你应该看到每条帖子下方都有一个书签图标（🔖）
3. 点击任意帖子的保存按钮
4. 按钮会显示加载动画，成功后显示对勾（✓）
5. 检查 Telegram 上的目标频道 - 帖子应该出现在那里

### 故障排除

**按钮没有显示：**
- 验证 `BOT_TOKEN` 和 `SAVE_CHANNEL_ID` 已正确设置
- 确保修改环境变量后已重新部署
- 检查浏览器控制台是否有错误（F12 → Console）

**保存按钮显示错误：**
- 验证 bot token 有效且未过期
- 确保 bot 是目标频道的管理员
- 检查频道 ID 格式（必须以 `-100` 开头）
- 验证 bot 有权限向频道发送消息

**帖子没有出现在目标频道：**
- 检查 bot 在频道中的权限
- 确保目标频道不是私人群组
- 尝试通过 Telegram 手动转发以验证频道正常工作
- 检查服务器日志查看详细错误信息

**速率限制：**
- Telegram 对 Bot API 有速率限制
- 如果你快速保存很多帖子，可能会遇到延迟
- 如果有很多用户，考虑实现速率限制

### 安全最佳实践

1. **永远不要提交 `.env` 文件**到版本控制
2. **使用环境变量**而不是硬编码 token
3. **定期轮换你的 bot token**如果泄露
4. **限制 bot 权限**只保留必要的权限
5. **监控使用情况**并检查异常活动
6. **使用不同的频道**用于不同的目的（如果需要）

### 高级配置

**多个目标频道：**
你可以修改代码以支持多个目标频道：
1. 添加频道选择器 UI
2. 使用环境变量如 `SAVE_CHANNEL_ID_1`、`SAVE_CHANNEL_ID_2`
3. 在数据库中存储用户偏好设置

**自定义消息：**
通过添加以下功能增强保存功能：
1. 自定义标签或分类
2. 附加个人备注到保存的帖子
3. 按类别/文件夹组织

**通知：**
设置通知来提醒你帖子已保存：
1. Webhook 集成
2. 邮件通知
3. 来自 bot 的 Telegram 直接消息

## ☕ 赞助

1. [在 Telegram 关注我](https://t.me/miantiao_me)
2. [在 𝕏 上关注我](https://x.com/ccbikai)
3. [在 GitHub 赞助我](https://github.com/sponsors/ccbikai)


