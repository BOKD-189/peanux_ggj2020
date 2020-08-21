import { NextApiRequest, NextApiResponse } from 'next'
import getPageData from '../../lib/notion/getPageData'
import getBlogIndex from '../../lib/notion/getBlogIndex'
import { getBlogLink } from '../../lib/blog-helpers'

export default async (req: NextApi