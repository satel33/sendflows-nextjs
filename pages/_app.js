import { useEffect } from "react";
import Script from "next/script";
import Aos from "aos";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName, linkResolver } from "../prismicio";

// import "bootstrap/dist/css/bootstrap.css";
import "../public/css/aos.min.css";
import "../public/css/custom-s.css";
import "../public/css/docs.min.css";
import "../public/css/floating.css";
import "../public/css/plyr.min.css";
import "../public/css/prism.min.css";
import "../public/css/swiper.min.css";
import "../public/icon/remixicon/remixicon.css";
import "../public/css/findeas.min.css";

const richTextComponents = {
  image: ({ node, key }) => {
    return (
      <p key={key} className="block-img">
        <img
          src={node.url}
          className="w-100"
          alt={node.alt ?? undefined}
          data-copyright={node.copyright ? node.copyright : undefined}
        />
      </p>
    );
  },
};
export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init();
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossOrigin="anonymous"
        async
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.js"
        async
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.js"
        async
      />
      {/* <Script src="https://code.jquery.com/jquery-3.6.1.min.js" async />
      <Script src="/js/jquery.min.js" /> */}
      <Script src="/js/popper.min.js" />
      <Script src="/js/svg-inject.min.js" />
      <Script src="/js/aos.min.js" />
      <Script src="/js/medium-zoom.min.js" />
      <Script src="/js/plyr.min.js" />
      <Script src="/js/swiper.min.js" />
      {/* <Script src="/js/jquery.waypoints.min.js" />
      <Script src="/js/counterup.min.js" /> */}
      <Script src="/js/findeas.js" />

      <PrismicProvider
        internalLinkComponent={(props) => <Link {...props} />}
        linkResolver={linkResolver}
        richTextComponents={richTextComponents}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </>
  );
}
