import rpc, { values } from './rpc'

export default async function getPageData(pageId: string) {
  // a reasonable size limit for the largest blog post (1MB),
  // as one chunk is about 10KB
  const maximumChunckNumer = 100

  try {
    var chunkNumber = 0
    var data = await loadPageChunk({ pageId, chunkNumber })
    var blocks = data.recordMap.block

    while (data.cursor.stack.length !== 0 && chunkNumber < maximumChunckNumer) {
      chunkNumber = chunkNumber + 1
      data = await loadPageChunk({ pageId, chunkNumber, cursor: data.cursor })
      blocks = Object.assign(blocks, data.recordMap.block)
    }
    const blockArray = values(blocks)
    if (blockArray[0] && blockArray[0].value.content) {
      // remove table blocks
      blockArray.splice(0, 3)
    }