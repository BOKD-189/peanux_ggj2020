
import { values } from './rpc'
import Slugger from 'github-slugger'
import queryCollection from './queryCollection'
import { normalizeSlug } from '../blog-helpers'

export default async function loadTable(collectionBlock: any, isPosts = false) {
  const slugger = new Slugger()

  const { value } = collectionBlock
  let table: any = {}
  const col = await queryCollection({
    collectionId: value.collection_id,
    collectionViewId: value.view_ids[0],
  })
  const entries = values(col.recordMap.block).filter((block: any) => {
    return block.value && block.value.parent_id === value.collection_id
  })

  const colId = Object.keys(col.recordMap.collection)[0]
  const schema = col.recordMap.collection[colId].value.schema
  const schemaKeys = Object.keys(schema)

  for (const entry of entries) {
    const props = entry.value && entry.value.properties
    const row: any = {}

    if (!props) continue
    if (entry.value.content) {
      row.id = entry.value.id
    }

    schemaKeys.forEach(key => {
      // might be undefined
      let val = props[key] && props[key][0][0]
