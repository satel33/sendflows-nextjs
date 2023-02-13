import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'

const Page = ({ page }) => {
  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  )
}

export default Page

export async function getStaticProps({ params,  previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page', params.uid)

  return {
    props: {
      page,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('page')

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
      }
    }),
    fallback: false,
  }
}
