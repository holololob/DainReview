import ProductDetailClient from '@/components/client-page/ProductDetailClient'
import Header from '@/components/shared/Header'
import { fetchProductDetail } from '@/lib/api'

const page = async ({ params }: { params: { productId: string } }) => {
  const productDetail = await fetchProductDetail(params.productId)

  return (
    <main className="mx-auto w-full min-w-[360px]">
      {/* 공통 헤더 - lg 이상에서만 노출 */}
      <div className="hidden lg:block">
        <Header isLogin />
      </div>
      <ProductDetailClient data={productDetail} />
    </main>
  )
}

export default page
