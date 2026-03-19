import { forwardPostToChannel } from '../src/lib/telegram/index.js'

export async function POST(Astro) {
  try {
    const body = await Astro.request.json()
    const { postId, channel } = body

    if (!postId || !channel) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields: postId and channel are required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    const botToken = Astro.locals?.env?.BOT_TOKEN || import.meta.env.BOT_TOKEN
    const saveChannelId = Astro.locals?.env?.SAVE_CHANNEL_ID || import.meta.env.SAVE_CHANNEL_ID

    if (!botToken) {
      return new Response(
        JSON.stringify({ success: false, error: 'BOT_TOKEN is not configured' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    if (!saveChannelId) {
      return new Response(
        JSON.stringify({ success: false, error: 'SAVE_CHANNEL_ID is not configured' }),
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
      JSON.stringify({ success: false, error: error.message || 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}

