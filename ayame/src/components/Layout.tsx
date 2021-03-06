import { FC, ReactNode } from "react";
import Head from "next/head";

type LayoutProps = {
  title: string;
  description?: string;
  keywords?: string;
  children: ReactNode,
};

const Layout: FC<LayoutProps> = ({
  title,
  description,
  keywords,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {children}
    </>
  );
};

Layout.defaultProps = {
  title: "LinkedList",
  description: "A single platform for all your work",
  keywords: "social media, youtuber, social media influencer",
};

export default Layout;
