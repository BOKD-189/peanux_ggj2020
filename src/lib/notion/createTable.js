// commonjs so it can be run without transpiling
const { v4: uuid } = require('uuid')
const fetch = require('node-fetch')
const {
  BLOG_INDEX_ID: pageId,
  NOTION_TOKEN,
  API_ENDPOINT,
} = require('./server-constants')

async function main() {
  const userId = await getUserId()
  const transactionId = () => uuid()
  const collectionId = uuid()
  const collectionViewId = uuid()
  const viewId = uuid()
  const now = Date.now()
  const pageId1 = uuid()
  const pageId2 = uuid()
  const pageId3 = uuid()
  let existingBlockId = await getExistingexistingBlockId()

  const requestBody = {
    requestId: uuid(),
    transactions: [
      {
        id: transactionId(),
        operations: [
          {
            id: collectionId,
            table: 'block',
            path: [],
            command: 'update',
            args: {
              id: collectionId,
              type: 'collection_view',
              collection_id: collectionViewId,
              view_ids: [viewId],
              properties: {},
              created_time: now,
              last_edited_time: now,
           