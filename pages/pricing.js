import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'
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

const Pricing = ({ pricing }) => {
  const pricing_slices = pricing.data.slices.filter((_, index) => index < 4)
  const remain_slices = pricing.data.slices.filter((_, index) => index > 3)
  return (
    <>
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
    </>
  )
}

export default Pricing

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const pricing = await client.getSingle('pricing')

  return {
    props: {
      pricing,
    },
  }
}
