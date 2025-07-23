import { parse } from 'querystring';

export const config = {
  api: {
    bodyParser: false, // Disable Vercel's default body parsing
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  let body = '';

  // Collect the raw data
  await new Promise((resolve, reject) => {
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', resolve);
    req.on('error', reject);
  });

  const parsedBody = parse(body);
  const from = parsedBody.From || 'Unknown';

  console.log(`📞 Incoming Call from ${from}`);

  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(`<Response><Say>Welcome to Essex Estuary Radio!</Say></Response>`);
}