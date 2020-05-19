import { resolve } from 'path'
import { writeFile } from './fs-helpers'
import { renderToStaticMarkup } from 'react-dom/server'

import { textBlock } from './notion/renderers'
import getBlogIndex from './notion/getBlogIndex'
import getNotionUsers from './notion/getNotionUsers'
import { postIsPublished, getBlogLink } from './blog-helpers'
import { loadEnvConfig } from '@next/env'
import s