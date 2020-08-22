import { NextApiRequest, NextApiResponse } from 'next'
import getPageData from '../../lib/notion/getPageData'
import getBlogIndex from '../../lib/notion/getBlogIndex'
import { getBlogLink } from '../../lib/blog-helpers'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (typeof req.query.token !== 'string') {
    return res.status(401).json({ message: 'invalid token' })
  }
  if (req.q