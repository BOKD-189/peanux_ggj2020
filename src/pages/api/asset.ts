import { NextApiRequest, NextApiResponse } from 'next'
import getNotionAssetUrls from '../../lib/notion/getNotionAssetUrls'
import { setHeaders, handleData, handleError } from '../../lib/notion/utils'

export default async function notionApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (setHeaders(req, res)) return
  try {
    const { assetUrl, blockId } = req.query as { [k: string]: string }

    if (!assetUrl || !blockId) {
      handleData(res, {
        status: 'error',
        message: 'asset url or blockId missing',
      })
    } else {
      // we need to re-