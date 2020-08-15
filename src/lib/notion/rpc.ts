import fetch, { Response } from 'node-fetch'
import { API_ENDPOINT, NOTION_TOKEN } from './server-constants'

export default async function rpc(fnName: string, body: any) {
  if (!NOTION_TOKEN) {
    t