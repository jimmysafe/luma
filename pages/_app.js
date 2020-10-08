import Layout from '../components/Layout'
import "../dist/styles.css"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500;600&display=swap" rel="stylesheet" />
        </Head>
        <Layout {...pageProps}>
            <Component {...pageProps} />
        </Layout>
        </>
    )
  }

  MyApp.getInitialProps = async({ Component, ctx }) => {
      let pageProps
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      } 

      return {
          pageProps
      }
  }

  
  export default MyApp