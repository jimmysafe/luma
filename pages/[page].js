import { getSinglePage } from '../prismic/queries'
import { useRouter } from 'next/router'
import Slice from '../components/Slice'

export default function Page({ page }) {

    // console.log(page)

    return (
        <>
            {/* <Seo page={page} /> */}
            <div className="page-content">
                {page.data.body.map((slice, i) => (
                    <Slice key={i} slice={slice} page={page}/>
                ))}
            </div>
        </>
    )
}

export async function getServerSideProps({ res, query, params }) {
    const page = await getSinglePage(query.page)
    if(!page && res) {
        res.writeHead(301, {
            Location: '/404'
            });
        res.end();
        return {}
    }
    return {
      props: {
          page: page || null
      }
    }
  }
