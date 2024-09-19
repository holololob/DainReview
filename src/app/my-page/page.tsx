import Header from '@/components/shared/Header'
import MypageClient from '@/components/client-page/MypageClient'

export default function MyProfile() {
  return (
    <>
      <Header isLogin={true} />
      <MypageClient />
    </>
  )
}
