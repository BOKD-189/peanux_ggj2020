import rpc, { values } from './rpc'

export default async function getPageData(pageId: string) {
  // a reasonable size limit for the largest blog post (1MB),
  // as one chunk is about 10KB
  const maximumChunckNumer = 100

  try {
    var chunkNumber = 0
    var data = await loadPageChunk(