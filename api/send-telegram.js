export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return res.status(500).json({ error: 'Vercel Environment Variables Missing!' });
    }

    // Check if payload contains raw JSON text or FormData file stream
    const contentType = req.headers['content-type'] || '';

    if (contentType.includes('application/json')) {
      const { text } = req.body;
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'Markdown'
        })
      });
      const data = await response.json();
      return res.status(200).json(data);
    } else {
      // Forward Multipart Form Data for Scanned Images/PDFs
      const response = await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
        method: 'POST',
        headers: {
          'content-type': contentType
        },
        body: req
      });
      const data = await response.json();
      return res.status(200).json(data);
    }
  } catch (error) {
    return res.status(500).json({ error: 'Server Error', details: error.message });
  }
}
