import { forwardPostToChannel } from '../src/lib/telegram/index.js'

export async function POST(Astro) {
  try {
    const { postId, channel } = await Astro.request.json()

    if (!postId || !channel) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    const botToken = Astro.locals?.env?.BOT_TOKEN || import.meta.env.BOT_TOKEN
    const saveChannelId = Astro.locals?.env?.SAVE_CHANNEL_ID || import.meta.env.SAVE_CHANNEL_ID

    if (!botToken || !saveChannelId) {
      return new Response(
        JSON.stringify({ success: false, error: 'Bot configuration missing' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    const result = await forwardPostToChannel(channel, postId, saveChannelId, botToken)

    if (result.success) {
      return new Response(
        JSON.stringify({ success: true, data: result.data }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }
    else {
      return new Response(
        JSON.stringify({ success: false, error: result.error }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }
  }
  catch (error) {
    console.error('API error:', error)
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
