import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'

// export default function Home() {
//   return (
//     <>
//       {/* <Hero />
//       <Testimonials />
//       <Features />
//       <SingleFlow />
//       <Transaction />
//       <Signup />
//       <HighLightFree />
//       <Reviews />
//       <Process />
//       <FAQ />
//       <HighLightNow /> */}
//     </>
//   )
// }

const Index = ({ page }) => {
  return <SliceZone slices={page.data.slices} components={components} />
}

export default Index

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page', 'home')

  return {
    props: {
      page,
    },
  }
}
