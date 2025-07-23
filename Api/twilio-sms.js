export default function handler(req, res) {
  if (req.method === 'POST') {
    const { From, Body } = req.body;
    console.log(`SMS from ${From}: ${Body}`);

    // TODO: Push this data to your macOS app (WebSocket, etc.)

    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send('<Response></Response>');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}