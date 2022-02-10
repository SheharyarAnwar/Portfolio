//@ts-nocheck
import React from "react";
import cn from "classnames";
import { HeaderV2 } from "../../components";
import Head from "next/head";
import { useRouter } from "next/router";

interface Props {
  /**
   * Give classnames to the wrapper component of container children
   */
  className?: string | undefined;
}
/**
 * Container components ensures that the children fit into the 10 out of 12 grid columns
 * where 3 are reserved for header
 */
const Index: React.FC<any> = ({ children, className, ...customMeta }) => {
  const router = useRouter();
  const meta = {
    title: "Sheharyar Anwar – Web Developer | React Expert | Freelancer",
    description: `Full-Stack developer, JavaScript & React enthusiast`,
    type: "website",
    ...customMeta,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          property="og:url"
          content={`https://sheharyaranwar.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://sheharyaranwar.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Sheharyar Anwar" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        {/* <meta property="og:image" content={meta.image} /> */}

        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="flex flex-col">
        {/* <Header /> */}
        <HeaderV2 />
        <div
          className={cn(
            `px-6 text-center xs:text-left sm:px-12 md:px-24 xl:px-40 mt-32 bg-primary`,
            className
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};
export default Index;
