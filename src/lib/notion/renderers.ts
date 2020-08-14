import React from 'react'
import components from '../../components/dynamic'

function applyTags(tags = [], children, noPTag = false, key) {
  let child = children

  for (const tag of tags) {
    const props: { [key: string]: any } = { key }
    let tagName = tag[0]

    if (noPTag && tagNa