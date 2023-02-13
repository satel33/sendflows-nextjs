import { Program, Reward } from '@/components'
import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'

// import {
//   CustomerTestimonial,
//   DeveloperFAQ,
//   Findeas,
//   Functions,
//   Program,
//   Providers,
//   Reward,
// } from '@/components'

// const Developers = () => {
//   return (
//     <>
//       <Reward />
//       <Providers />
//       <Functions />
//       <Program />
//       <CustomerTestimonial />
//       <DeveloperFAQ />
//       <Findeas />
//     </>
//   )
// }

const Index = ({ page }) => {
  const first_slices = page.data.slices.filter((_, index) => index < 2)
  const last_slices = page.data.slices.filter((_, index) => index > 1)
  return (
    <>
      <Reward />
      <SliceZone slices={first_slices} components={components} />
      <Program />
      <SliceZone slices={last_slices} components={components} />
    </>
  )
}

export default Index

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page', 'developer')

  return {
    props: {
      page,
    },
  }
}
