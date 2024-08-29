import ProductDetailClient from '@/components/client-page/ProductDetailClient'
import Header from '@/components/shared/Header'

const page = () => {
  return (
    <main className="mx-auto w-full min-w-[360px]">
      {/* 공통 헤더 - lg 이상에서만 노출 */}
      <div className="hidden lg:block">
        <Header isLogin />
      </div>
      <ProductDetailClient />
    </main>
  )
}

export default page
