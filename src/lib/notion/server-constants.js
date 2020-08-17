// use commonjs so it can be required without transpiling
const path = require('path')

const normalizeId = (id) => {
  if (!id) return id
  if (id.length === 36) return id
  if (id.length !== 32) {
    throw new Error(
      `Invalid blog-index-id: ${id} should be 32 characters long. Info here https://github.com/ijjk/notion-blog#getting-blog-index-and-token`
    )
  }
  return `${id.subst