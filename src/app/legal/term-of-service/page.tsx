import React from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

// 이용 약관

const page = () => {
  return (
    <main>
      <Header
        subtitle="이용 약관"
        isLogin={false}
      />

      <div className="bg-white py-32">
        https://docs.google.com/document/d/1vAzBFPxKE-H28DzjEZMqIWi4qp3jRIB6vBwDZw6vwLc/edit
        이용 약관
      </div>
      <Footer />
    </main>
  )
}

export default page
