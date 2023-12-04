import Footer from "./footer";
import Header from "./header";
import Head from "next/head";
import { PropsWithChildren, FC } from "react";
interface ILayout extends PropsWithChildren {
  title?: string;
  description?: string;
}

const Layout: FC<ILayout> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="UTF-8" />

        <meta httpEquiv="X-UA-Compatible" content="chrome=1; IE=edge" />

        {/* <!--  Essential META Tags --> */}

        <meta name="title" property="og:title" content={title} />
        <meta name="description" property="og:description" content={description} />
        <meta name="type" property="og:type" content="website" />
        <meta name="image:width" property="og:image:width" content="1200" />
        <meta name="image:height" property="og:image:height" content="628" />

        {/* <!--  Non-Essential, But Recommended --> */}
        <meta name="twitter:image:alt" content="Meta-node app blockchain" />
        <meta name="twitter:site" content="Meta-node app blockchain" />

        {/* <!--  Non-Essential, But Required for Analytics --> */}
        <meta name="referrer" content="origin" />
      </Head>
      <Header />
      <main className="mt-[60px]">{children}</main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Marketplace",
  description: "New Arrival",
};

export default Layout;
