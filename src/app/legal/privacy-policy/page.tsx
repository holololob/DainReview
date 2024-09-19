import React from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

// 개인정보처리방침 & 개인정보 이용 동의

const page = () => {
  return (
    <main>
      <Header
        subtitle="개인정보처리방침"
        isLogin={false}
      />

      <div className="bg-white py-32">
        https://docs.google.com/document/d/1CQFtI5mbM_BqFWl89Fp7T0gSsHQfaoQNuoxJPRg_duA/edit
        개인정보처리방침
      </div>
      <Footer />
    </main>
  )
}

export default page
