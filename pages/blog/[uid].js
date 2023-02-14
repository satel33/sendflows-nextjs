import Layout from '@/components/Layout'
import { PrismicRichText } from '@prismicio/react'
import { createClient } from '../../prismicio'

const Page = ({ article, header, footer }) => {
  const { data } = article
  return (
    <Layout
      alternateLanguages={article.alternate_languages}
      header={header}
      footer={footer}
    >
      <section class="space-5 pb-5">
        <div class="container">
          <div class="text-center w-lg-75 mx-auto mb-5">
            <h1 class="font-weight-bold">{data.title}</h1>
            <div class="d-flex align-items-center mb-3 justify-content-center">
              <img
                class="rounded-pill mr-2"
                src={data.author_image.url}
                height="36"
                alt="Avatar"
              />
              <h6 class="m-0 mr-3">{data.author_name}</h6>
              <span class="font-weight-medium text-primary">{data.date}</span>
            </div>
          </div>
          <img
            src={data.cover_image.url}
            alt="Image"
            class="img-fluid rounded-lg"
            data-zoomable
          />
          <PrismicRichText field={data.article_content} />
          <div class="text-center mt-5 pt-3">
            <a class="d-inline-flex align-items-center text-primary" href="#">
              <i class="ri-arrow-left-line"></i>
              <span class="ml-1">Return to homepage</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Page

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData })
  const article = await client.getByUID('article', params.uid, { lang: locale })
  const header = await client.getSingle('header', { lang: locale })
  const footer = await client.getSingle('footer', { lang: locale })

  return {
    props: {
      article,
      header,
      footer,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const Articles = await client.getAllByType('article')

  return {
    paths: Articles.map((article) => {
      return {
        params: { uid: article.uid },
      }
    }),
    fallback: false,
  }
}
