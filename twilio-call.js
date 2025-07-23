export default function handler(req, res) {
  if (req.method === 'POST') {
    const { From } = req.body;
    console.log(`Call from ${From}`);

    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send('<Response><Say>Welcome to Essex Estuary Radio!</Say></Response>');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}