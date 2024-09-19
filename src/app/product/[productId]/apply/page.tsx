import ApplyClient from '@/components/client-page/ApplyClient'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import { fetchProductDetail } from '@/lib/api'

const page = async ({ params }: { params: { productId: string } }) => {
  const productDetail = await fetchProductDetail(params.productId)

  return (
    <>
      <div className="mx-auto w-full min-w-[360px]">
        <Header
          isLogin
          isOnlyBackButton
        />
        <div className="h-[calc(100vh-56px)] lg:h-[calc(100vh-160px)]">
          <ApplyClient data={productDetail} />
        </div>
      </div>
      <div className="mt-[280px] hidden desktop:block">
        <Footer />
      </div>
    </>
  )
}

export default page
