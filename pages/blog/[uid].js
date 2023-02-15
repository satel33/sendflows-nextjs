import Layout from "@/components/Layout";
import { PrismicRichText } from "@prismicio/react";
import { createClient } from "../../prismicio";

const Article = ({ article, header, footer }) => {
  const { data } = article;
  return (
    <Layout
      alternateLanguages={article.alternate_languages}
      header={header}
      footer={footer}
    >
      <section className="space-5 pb-5">
        <div className="container">
          <div className="text-center w-lg-75 mx-auto mb-5">
            <h1 className="font-weight-bold">{data.title}</h1>
            <div className="d-flex align-items-center mb-3 justify-content-center">
              <img
                className="rounded-pill mr-2"
                src={data.author_image.url}
                height="36"
                alt="Avatar"
              />
              <h6 className="m-0 mr-3">{data.author_name}</h6>
              <span className="font-weight-medium text-primary">
                {data.date}
              </span>
            </div>
          </div>
          <img
            src={data.cover_image.url}
            alt="Image"
            className="img-fluid rounded-lg"
            data-zoomable
          />
          <PrismicRichText field={data.article_content} />
          <div className="text-center mt-5 pt-3">
            <a
              className="d-inline-flex align-items-center text-primary"
              href="#"
            >
              <i className="ri-arrow-left-line"></i>
              <span className="ml-1">Return to homeBlog</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Article;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });
  const article = await client.getByUID("article", params.uid, {
    lang: locale,
  });
  const header = await client.getSingle("header", { lang: locale });
  const footer = await client.getSingle("footer", { lang: locale });

  return {
    props: {
      article,
      header,
      footer,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const Articles = await client.getAllByType("article", { lang: "*" });

  return {
    paths: Articles.map((article) => {
      return {
        params: { uid: article.uid },
        locale: article.lang,
      };
    }),
    fallback: false,
  };
}
