
import Link from 'next/link'
import fetch from 'node-fetch'
import { useRouter } from 'next/router'
import Header from '../../components/header'
import Heading from '../../components/heading'
import components from '../../components/dynamic'
import ReactJSXParser from '@zeit/react-jsx-parser'
import blogStyles from '../../styles/blog.module.css'
import { textBlock } from '../../lib/notion/renderers'
import getPageData from '../../lib/notion/getPageData'
import React, { CSSProperties, useEffect } from 'react'
import getBlogIndex from '../../lib/notion/getBlogIndex'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import { getBlogLink, getDateStr } from '../../lib/blog-helpers'

// Get the data for each blog post
export async function getStaticProps({ params: { slug }, preview }) {
  // load the postsTable so that we can get the page's ID
  const postsTable = await getBlogIndex()
  const post = postsTable[slug]

  // if we can't find the post or if it is unpublished and
  // viewed without preview mode then we just redirect to /blog
  if (!post || (post.Published !== 'Yes' && !preview)) {
    console.log(`Failed to find post for slug: ${slug}`)
    return {
      props: {
        redirect: '/blog',
        preview: false,
      },
      unstable_revalidate: 5,
    }
  }
  const postData = await getPageData(post.id)
  post.content = postData.blocks

  for (let i = 0; i < postData.blocks.length; i++) {
    const { value } = postData.blocks[i]
    const { type, properties } = value