import { NextApiRequest, NextApiResponse } from 'next'
import getNotionAssetUrls from '../../lib/notion/getNotionAssetUrls'
import { setHeaders, handleData, handleError } from '../../lib/notion/utils'

export default async function notionApi(
  req: NextA