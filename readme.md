# Notion Blog

This is an example Next.js project that shows Next.js' upcoming SSG (static-site generation) support using Notion's **private** API for a backend.

**Note**: This example uses the experimental SSG hooks only available in the Next.js canary branch! The APIs used within this example will change over time. Since it is using a private API and experimental features, use at your own risk as these things could change at any moment.

**Live Example hosted on Vercel**: https://notion-blog.vercel.app/

## Getting Started

To view the steps to setup Notion to work with this example view the post at https://notion-blog.vercel.app/blog/my-first-post or follow the steps below.

## Deploy Your Own

Deploy your own Notion blog with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/ijjk/notion-blog/tree/main&project-name=notion-blog&repository-name=notion-blog)

or

1. Clone this repo `git clone https://github.com/ijjk/notion-blog.git`
2. Configure project with [`vc`](https://vercel.com/download)
3. Add your `NOTION_TOKEN` and `BLOG_INDEX_ID` as environment variables in [your project](https://vercel.com/docs/integrations?query=envir#project-level-apis/project-based-environment-variables). See [here](#getting-blog-index-and-token) for how to find these values
4. Do final deployment with `vc`

Note: if redeploying with `vc` locally and you haven't made any changes to the application's source and only edited in Notion you will need use `vc -f` to bypass build de-duping

## Creating Your Pages Table

**Note**: this is auto run if a table isn't detected the first time visiting `/blog`

### Using the Pre-Configured Script

1. Create a blank page in Notion
2. Clone this repo `git clone https://github.com/ijjk/notion-blog.git`
3. Install dependencies `cd notion-blog && yarn`
4. Run script to create table `NOTION_TOKEN='token' BLOG_INDEX_ID='new-page-id' node scripts/create-table.js` See [here](#getting-blog-index-and-token) for finding the id for the new page

### Manually Creating the Table

1. Create a blank page in Notion
2. Create a **inline** table on that page, don't use a full page table as it requires querying differently
3. Add the below fields to the table

The table should have the following properties:

- `Page`: this the blog post's page
- `Slug`: this is the blog post's slug relative to `/blog`, it should be a text property
- `Published`: this filters blog posts in **production**, it should be a checkbox property
- `Date`: this is when the blog post appears as posted, it