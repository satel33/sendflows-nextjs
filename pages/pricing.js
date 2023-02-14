import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import Layout from '@/components/Layout'
// const Pricing = () => {
//   return (
//     <>
//       <PricingHeader />
//       <PricingContent />
//       <CustomPlan />
//       <Functions />
//       <PricingFaq />
//     </>
//   )
// }

const Pricing = ({ pricing, header, footer }) => {
  const pricing_slices = pricing.data.slices.filter((_, index) => index < 4)
  const remain_slices = pricing.data.slices.filter((_, index) => index > 3)
  return (
    <Layout
      alternateLanguages={pricing.alternate_languages}
      header={header}
      footer={footer}
    >
      <section className="space-5 pb-0">
        <div className="container text-center">
          <h1 className="font-weight-bold display-4">{pricing.data.title}</h1>
          <p className="lead w-lg-75 mx-auto">{pricing.data.description}</p>
        </div>
      </section>

      <section className="space-1">
        <div className="container">
          <div className="row mb-4">
            <SliceZone slices={pricing_slices} components={components} />
          </div>
        </div>
      </section>
      <SliceZone slices={remain_slices} components={components} />
    </Layout>
  )
}

export default Pricing

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData })

  const pricing = await client.getSingle('pricing', 'pricing', { lang: locale })
  const header = await client.getSingle('header', { lang: locale })
  const footer = await client.getSingle('footer', { lang: locale })

  return {
    props: {
      pricing,
      header,
      footer,
    },
  }
}
