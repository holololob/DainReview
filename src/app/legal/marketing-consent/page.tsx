import React from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

// 마케팅 정보 수신 동의

const page = () => {
  return (
    <main>
      <Header
        subtitle="마케팅 정보 수신 동의"
        isLogin={false}
      />

      <div className="bg-white py-32">마케팅 정보 수신 동의서</div>
      <Footer />
    </main>
  )
}

export default page
