import Layout from "@/components/Layout";
import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { components } from "../slices";

const Page = ({ page, header, footer }) => {
  return (
    <Layout
      alternateLanguages={page.alternate_languages}
      header={header}
      footer={footer}
    >
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params.uid, { lang: locale });
  const header = await client.getSingle("header", { lang: locale });
  const footer = await client.getSingle("footer", { lang: locale });

  return {
    props: {
      page,
      header,
      footer,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page", { lang: "*" });

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,
  };
}
