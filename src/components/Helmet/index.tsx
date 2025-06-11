import Head from "next/head";

const Helmet = ({ pageTitle, pageDescription }:any) => (
    <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        ...
    </Head>
);

export default Helmet;