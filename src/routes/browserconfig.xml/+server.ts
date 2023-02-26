import { promises as fs } from 'fs';
import { resolve } from 'path';

import app from '$configs/app';

const pkg = JSON.parse(await fs.readFile(resolve(process.cwd(), 'package.json'), 'utf8'));
const { version } = pkg;

export const prerender = true;

export async function GET() {
  return new Response(
    `
<?xml version="1.0" encoding="UTF-8" ?>
<browserconfig>
  <msapplication>
    <tile>
      <square70x70logo src="/favicon/mstile/70.png?v=${version}" />
      <square150x150logo src="/favicon/mstile/150.png?v=${version}" />
      <square310x310logo src="/favicon/mstile/310.png?v=${version}" />
      <wide310x150logo src="/favicon/mstile/310x150.png?v=${version}" />
      <TileImage src="/favicon/mstile/150.png?v=${version}" />
      <TileColor>${app.tileColor}</TileColor>
    </tile>
  </msapplication>
</browserconfig>
    `
      .trim()
      .replace(/\n/g, '')
      .replace(/\s{2,}/g, ' ')
      .replace(/> </g, '><'),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}
