# BroadcastChannel

**Turn your Telegram Channel into a MicroBlog.**

---

English | [简体中文](./README.zh-cn.md)

## ✨ Features

- **Turn your Telegram Channel into a MicroBlog**
- **SEO friendly** `/sitemap.xml`
- **0 JS on the browser side**
- **RSS and RSS JSON** `/rss.xml` `/rss.json`
- **Save posts to Telegram channel** via Bot API

## 🪧 Demo

### Real users

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

### Platform

1. [Cloudflare](https://broadcast-channel.pages.dev/)
2. [Netlify](https://broadcast-channel.netlify.app/)
3. [Vercel](https://broadcast-channel.vercel.app/)

BroadcastChannel supports deployment on serverless platforms like Cloudflare, Netlify, Vercel that support Node.js SSR, or on a VPS.
For detailed tutorials, see [Deploy your Astro site](https://docs.astro.build/en/guides/deploy/).

## 🧱 Tech Stack

- Framework: [Astro](https://astro.build/)
- CMS: [Telegram Channels](https://telegram.org/tour/channels)
- Template: [Sepia](https://github.com/Planetable/SiteTemplateSepia)

## 🏗️ Deployment

1. [Fork](https://github.com/ccbikai/BroadcastChannel/fork) this project to your GitHub
2. Create a project on Cloudflare/Netlify/Vercel
3. Select the `BroadcastChannel` project and the `Astro` framework
4. Configure the environment variable `CHANNEL` with your channel name. This is the minimal configuration, for more configurations see the options below
5. Save and deploy
6. Bind a domain (optional).
7. Update code, refer to the official GitHub documentation [Syncing a fork branch from the web UI](https://docs.github.com/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork#syncing-a-fork-branch-from-the-web-ui).

## ⚒️ Configuration

```env
## Telegram Channel Username, must be configured. The string of characters following t.me/
CHANNEL=miantiao_me

## Language and timezone settings, language options see [dayjs](https://github.com/iamkun/dayjs/tree/dev/src/locale)
LOCALE=en
TIMEZONE=America/New_York

## Telegram Bot Configuration for Save Feature
BOT_TOKEN=your_bot_token_here
SAVE_CHANNEL_ID=-1001234567890

## Social media usernames
TELEGRAM=ccbikai
TWITTER=ccbikai
GITHUB=ccbikai
MASTODON=mastodon.social/@Mastodon
BLUESKY=bsky.app

## The following two social media need to be URLs
DISCORD=https://DISCORD.com
PODCAST=https://PODCAST.com

## Header and footer code injection, supports HTML
FOOTER_INJECT=FOOTER_INJECT
HEADER_INJECT=HEADER_INJECT

## SEO configuration options, can prevent search engines from indexing content
NO_FOLLOW=false
NO_INDEX=false

## Sentry configuration options, collect server-side errors
SENTRY_AUTH_TOKEN=SENTRY_AUTH_TOKEN
SENTRY_DSN=SENTRY_DSN
SENTRY_PROJECT=SENTRY_PROJECT

## Telegram host name and static resource proxy, not recommended to modify
HOST=telegram.dog
STATIC_PROXY=
```

## 🙋🏻 FAQs

1. Why is the content empty after deployment?
   - Check if the channel is public, it must be public
   - The channel username is a string, not a number
   - Turn off the "Restricting Saving Content" setting in the channel
   - Redeploy after modifying environment variables
   - Telegram blocks public display of some sensitive channels, you can verify by visiting `https://t.me/s/channelusername`.

2. How to use the save feature?
   - Configure `BOT_TOKEN` with your Telegram Bot Token (get from [@BotFather](https://t.me/botfather))
   - Configure `SAVE_CHANNEL_ID` with the target channel ID where posts will be forwarded
   - The bot must be an administrator in the target channel
   - After configuration, a save button will appear below each post

## 📖 Setup Guide for Save Feature

This guide will walk you through setting up the save feature step by step.

### Step 1: Create a Telegram Bot

1. Open [BotFather](https://t.me/botfather) on Telegram
2. Send `/newbot` command
3. Follow the prompts to name your bot and create a username
4. BotFather will provide you with a **Bot Token** (format: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)
5. **Save this token** - you'll need it for configuration

### Step 2: Create or Select a Target Channel

Choose where you want to save your posts:

**Option A: Create a New Channel**
1. In Telegram, tap the **Menu** icon (three horizontal lines)
2. Select **New Channel**
3. Set a name and description (e.g., "My Saved Posts")
4. Choose **Public Channel** and set a username
5. Complete channel creation

**Option B: Use an Existing Channel**
- Select any channel you own where you want to save posts
- Ensure the channel allows forwarding

### Step 3: Get the Channel ID

You need the numeric ID of your target channel:

**Method 1: Using a Bot (Recommended)**
1. Add [@GetMyIdBot](https://t.me/GetMyIdBot) to your contacts
2. Forward a message from your target channel to this bot
3. The bot will reply with the channel ID (format: `-1001234567890`)

**Method 2: Using Browser DevTools**
1. Open your channel in a web browser (https://web.telegram.org/k/#channel_name)
2. Open browser developer tools (F12)
3. Go to the **Network** tab
4. Click on a message in the channel
5. Look for API requests with `channel_id` or `chat_id` in the response

**Method 3: Using a Telegram API Tool**
- Use tools like [Telegram API ID Finder](https://t.me/tgscanbot) to get your channel ID

**Note:** Channel IDs always start with `-100` for supergroups and channels.

### Step 4: Add Bot as Administrator

1. Go to your target channel on Telegram
2. Tap the channel name to open channel info
3. Tap **Administrators** (or **Manage** → **Administrators**)
4. Tap **Add Administrator**
5. Search for your bot by username
6. Select your bot and grant it the following permissions:
   - ✅ **Edit Messages** (optional, but recommended)
   - ✅ **Delete Messages** (optional)
   - ✅ **Invite Users via Link** (optional)
   - ✅ **Manage Voice Chats** (optional)
7. Tap **Done** to confirm

**Important:** The bot must have administrator privileges to forward messages to the channel.

### Step 5: Configure Environment Variables

Update your environment variables with the obtained values:

```env
## Telegram Bot Token from BotFather
BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz

## Target Channel ID (start with -100)
SAVE_CHANNEL_ID=-1001234567890
```

#### For Deployment Platforms:

**Cloudflare Pages:**
1. Go to your project settings
2. Navigate to **Settings** → **Functions** → **Environment variables**
3. Add the two variables above
4. Save and redeploy

**Netlify:**
1. Go to **Site settings** → **Environment variables**
2. Add the variables
3. Save and redeploy

**Vercel:**
1. Go to **Settings** → **Environment Variables**
2. Add the variables
3. Save and redeploy

**VPS/Docker:**
1. Edit your `.env` file
2. Add the variables
3. Restart your application

### Step 6: Verify the Setup

After deployment:

1. Visit your deployed site
2. You should see a bookmark icon (🔖) below each post
3. Click the save button on any post
4. The button will show a loading animation, then a checkmark (✓) if successful
5. Check your target channel on Telegram - the post should appear there

### Troubleshooting

**Button doesn't appear:**
- Verify `BOT_TOKEN` and `SAVE_CHANNEL_ID` are correctly set
- Ensure you've redeployed after changing environment variables
- Check browser console for errors (F12 → Console)

**Save button shows error:**
- Verify bot token is valid and not expired
- Ensure bot is administrator in target channel
- Check channel ID format (must start with `-100`)
- Verify bot has permission to send messages to the channel

**Post doesn't appear in target channel:**
- Check bot's permissions in the channel
- Ensure target channel is not a private group
- Try forwarding manually through Telegram to verify channel works
- Check server logs for detailed error messages

**Rate limiting:**
- Telegram has rate limits on Bot API
- If you save many posts quickly, you may encounter delays
- Consider implementing rate limiting if you have many users

### Security Best Practices

1. **Never commit your `.env` file** to version control
2. **Use environment variables** instead of hardcoding tokens
3. **Rotate your bot token** periodically if compromised
4. **Limit bot permissions** to only what's necessary
5. **Monitor usage** and check for unusual activity
6. **Use separate channels** for different purposes if needed

### Advanced Configuration

**Multiple Target Channels:**
You can modify the code to support multiple target channels by:
1. Adding a channel selector UI
2. Using environment variables like `SAVE_CHANNEL_ID_1`, `SAVE_CHANNEL_ID_2`
3. Storing user preferences in a database

**Custom Messages:**
Enhance the save feature by adding:
1. Custom tags or labels
2. Personal notes attached to saved posts
3. Organization into categories/folders

**Notifications:**
Set up notifications to alert you when posts are saved:
1. Webhook integration
2. Email notifications
3. Telegram direct messages from the bot

## ☕ Sponsor

1. [Follow me on Telegram](https://t.me/miantiao_me)
2. [Follow me on 𝕏](https://x.com/0xKaiBi)
3. [Sponsor me on GitHub](https://github.com/sponsors/ccbikai)


