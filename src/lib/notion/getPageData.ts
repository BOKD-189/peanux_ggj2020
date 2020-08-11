import rpc, { values } from './rpc'

export default async function getPageData(pageId: string) {
  // a reasonable size limit for th