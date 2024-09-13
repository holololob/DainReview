import React from 'react'

// 체험단 결과 보고서: 사업자가 진행한 체험단 종료 후, 결과 보고서 페이지
// 성과 그래프 포함
// 홈 - 마이페이지(사업자) - 체험단 - 결과 보고서

const page = () => {
  return (
    <main>
      <header className="h-[160px]">
        <h1>헤더 높이 160px</h1>
      </header>

      <div className="bg-white py-32">
        사업자 - 결과 보고서 페이지
        {/* 성과 그래프는 라이브러리 사용 예정 */}
      </div>
      <footer className="h-[286px] bg-background-red">
        <h1>푸터 높이 286px</h1>
      </footer>
    </main>
  )
}

export default page
