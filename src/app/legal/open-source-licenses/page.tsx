import React from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

// 오픈소스 라이센스

const page = () => {
  return (
    <main>
      <Header
        subtitle="오픈소스 라이센스"
        isLogin={false}
      />

      <div className="bg-white py-32">UX/UI로부터 전달 받아 내용 쓸 것</div>
      <Footer />
    </main>
  )
}

export default page
