// use commonjs so it can be required without transpiling
const path = require('path')

const normalizeId = (id) => {
  if (!id) return id
  if (id.length === 36) return id
  if (id.length !== 32) {
    thr