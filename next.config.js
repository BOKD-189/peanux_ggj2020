const fs = require('fs')
const path = require('path')
const {
  NOTION_TOKEN,
  BLOG_INDEX_ID,
} = require('./src/lib/notion/server-constants')

try {
  fs.unlinkSync(path.resolve('.blog_index_data'))
} catch (_) {
  /* non fatal */
}
try {
  fs.unlinkSync(path.resolve('.