import { forwardPostToChannel } from '../src/lib/telegram/index.js'

export async function POST(Astro) {
  try {
    console.log('[API] Save request received')

    const body = await Astro.request.json()
    const { postId, channel } = body

    console.log('[API] Request body:', { postId, channel })

    if (!postId || !channel) {
      console.error('[API] Missing required fields')
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

    console.log('[API] Environment check:', {
      hasBotToken: !!botToken,
      hasSaveChannelId: !!saveChannelId,
      botTokenPrefix: botToken ? botToken.substring(0, 10) + '...' : 'none',
      saveChannelId,
    })

    if (!botToken) {
      console.error('[API] BOT_TOKEN not configured')
      return new Response(
        JSON.stringify({ success: false, error: 'BOT_TOKEN is not configured' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    if (!saveChannelId) {
      console.error('[API] SAVE_CHANNEL_ID not configured')
      return new Response(
        JSON.stringify({ success: false, error: 'SAVE_CHANNEL_ID is not configured' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    console.log('[API] Calling forwardPostToChannel')
    const result = await forwardPostToChannel(channel, postId, saveChannelId, botToken)
    console.log('[API] forwardPostToChannel result:', result)

    if (result.success) {
      console.log('[API] Save successful')
      return new Response(
        JSON.stringify({ success: true, data: result.data }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }
    else {
      console.error('[API] Save failed:', result.error)
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
    console.error('[API] API error:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}


