import fetch, { Response } from 'node-fetch'
import { API_ENDPOINT, NOTION_TOKEN } from './server-constants'

export default async function rpc(fnName: string, body: any) {
  if (!NOTION_TOKEN) {
    throw new Error('NOTION_TOKEN is not set in env')
  }
  const res = await fetch(`${API_ENDPOINT}/${fnName}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      cookie: `token_v2=${NOTION_TOKEN}`,
    },
    body: JSON.stringify(body),
  })

  if (res.ok) {
    r