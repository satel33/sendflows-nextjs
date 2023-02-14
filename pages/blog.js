import Link from 'next/link'
import Layout from '@/components/Layout'
import { createClient } from '../prismicio'

const Blog = ({ blog, articles, header, footer }) => (
  <Layout
    alternateLanguages={blog.alternate_languages}
    header={header}
    footer={footer}
  >
    <section className="space-5 pb-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="font-weight-bold display-4">{blog.data.title}</h1>
          <p className="lead w-lg-75 mx-auto">{blog.data.description}</p>
        </div>
        <div data-aos="fade-up">
          <div className="card card-body bg-primary-3 text-white px-lg-3 py-lg-4 rounded-lg mb-5 hover-scale">
            <div className="row align-items-center justify-content-around">
              <div className="col-md-6 col-lg-5 mb-4 mb-md-0 p-0">
                <Link href={`/blog/${articles[0].uid}`}>
                  <img
                    className="img-fluid rounded-lg"
                    src={articles[0].data.cover_image.url}
                    alt="Image"
                  />
                </Link>
              </div>
              <div className="col-md-6">
                <span className="font-weight-medium text-warning">
                  {articles[0].data.date}
                </span>
                <Link
                  href={`/blog/${articles[0].uid}`}
                  className="d-block h2 font-weight-bold"
                >
                  {articles[0].data.title}
                </Link>
                <div className="d-flex align-items-center mb-3">
                  <img
                    className="rounded-pill mr-2"
                    src={articles[0].data.author_image.url}
                    height="36"
                    alt="Avatar"
                  />
                  <h6 className="m-0">{articles[0].data.author_name}</h6>
                </div>
                <p className="lead">{articles[0].data.bio}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {articles.map((article) => (
              <div className="col-lg-6" key={article.uid}>
                <div className="bg-white border rounded-lg pb-4 mb-5 hover-shadow-lg hover-translate-y">
                  <Link href={`/blog/${article.uid}`}>
                    <img
                      className="img-fluid rounded-lg mb-4"
                      src={article.data.cover_image.url}
                      alt="Image"
                    />
                  </Link>
                  <div className="px-4">
                    <span className="font-weight-medium text-muted">
                      {article.data.date}
                    </span>
                    <Link
                      href={`/blog/${article.uid}`}
                      className="d-block h2 font-weight-bold"
                    >
                      {article.data.title}
                    </Link>
                    <div className="d-flex align-items-center mb-3">
                      <img
                        className="rounded-pill mr-2"
                        src={article.data.author_image.url}
                        height="36"
                        alt="Avatar"
                      />
                      <h6 className="m-0">{article.data.author_name}</h6>
                    </div>
                    <p>{article.data.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Link
            className="d-inline-flex align-items-center text-primary mx-4"
            href="#"
          >
            <i className="ri-arrow-left-line"></i>
            <span className="ml-1">Previous page</span>
          </Link>
          <Link
            className="d-inline-flex align-items-center text-primary mx-4"
            href="#"
          >
            <span className="mr-1">Next page</span>
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default Blog

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData })

  const blog = await client.getSingle('blog', 'blog', { lang: locale })
  const articles = await client.getAllByType('article', { lang: locale })
  const header = await client.getSingle('header', { lang: locale })
  const footer = await client.getSingle('footer', { lang: locale })

  return {
    props: {
      blog,
      articles,
      header,
      footer,
    },
  }
}
