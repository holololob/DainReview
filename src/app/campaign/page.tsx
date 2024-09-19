import SearchClient from '@/components/client-page/SearchClient'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import { fetchCampaignList } from '@/lib/api'

const page = async ({ searchParams }: any) => {
  const { searchWord, platform, type, category } = searchParams

  const data = await fetchCampaignList()
  const displayData = data.list.slice(0, 20)

  return (
    <div>
      {/* 웹 반응형 헤더 - 프로필 표시 */}
      <div className="hidden lg:block">
        <Header isLogin />
      </div>
      {/* 모바일 반응형 헤더 - 뒤로 가기 버튼과 제목만 표시 */}
      <div className="lg:hidden">
        <Header
          subtitle="체험단"
          isLogin
        />
      </div>
      <SearchClient
        keyword={searchWord}
        platform={platform}
        type={type}
        category={category}
        data={displayData}
      />
      <Footer />
    </div>
  )
}

export default page
