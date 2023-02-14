import { SliceZone } from '@prismicio/react'
import Layout from '@/components/Layout'

import { createClient } from '../prismicio'
import { components } from '../slices'

const Index = ({ page, header, footer }) => (
  <Layout
    alternateLanguages={page.alternate_languages}
    header={header}
    footer={footer}
  >
    <SliceZone slices={page.data.slices} components={components} />
  </Layout>
)

export default Index

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page', 'home', { lang: locale })
  const header = await client.getSingle('header', { lang: locale })
  const footer = await client.getSingle('footer', { lang: locale })

  return {
    props: {
      page,
      header,
      footer,
    },
  }
}
