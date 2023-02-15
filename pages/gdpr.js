import { PrismicRichText } from '@prismicio/react'
import { createClient } from '../prismicio'
import Layout from '@/components/Layout'

const GDPR = ({ gdpr, header, footer }) => (
  <Layout
    alternateLanguages={gdpr.alternate_languages}
    header={header}
    footer={footer}
  >
    <section className="space-5 pb-5">
      <div className="container">
        <div className="text-center w-lg-75 mx-auto mb-5">
          <h1 className="font-weight-bold display-4">{gdpr.data.title}</h1>
        </div>
        <PrismicRichText field={gdpr.data.description} />
      </div>
    </section>
  </Layout>
)

export default GDPR

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData })

  const gdpr = await client.getSingle('gdpr', { lang: locale })
  const header = await client.getSingle('header', { lang: locale })
  const footer = await client.getSingle('footer', { lang: locale })

  return {
    props: {
      gdpr,
      header,
      footer,
    },
  }
}
