import { Sendflows } from '@/components'
import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'
// import {
//   Contact,
//   Dinamically,
//   EmailMarketing,
//   Sendflows,
//   Signup,
//   SingleFlow,
//   Transaction,
// } from '@/components'

// const Features = () => {
//   return (
//     <>
//       <Sendflows />
//       <EmailMarketing />
//       <SingleFlow />
//       <Transaction />
//       <Dinamically />
//       <Signup />
//       <Contact />
//     </>
//   )
// }

const Index = ({ page }) => {
  return (
    <>
      <Sendflows />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  )
}

export default Index

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page', 'feature')

  return {
    props: {
      page,
    },
  }
}
