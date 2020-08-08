import fetch from 'node-fetch'
import { getError } from './rpc'
import { NextApiResponse } from 'next'
import { NOTION_TOKEN, API_ENDPOINT } from './server-constants'

export default async function getNotionAsset(
  res: NextApiResponse,
  assetUrl: string,
  blockId: string
): Promise<{
  signedUrls: string[]
}> {
  const request