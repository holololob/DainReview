const Footer = () => {
  return (
    <>
      {/* 모바일 반응형 푸터 */}
      <div className="fixed bottom-0 z-30 flex h-[64px] w-full items-center justify-between rounded-tl-2xl rounded-tr-2xl bg-white text-caption-3 font-bold shadow-fotter lg:hidden">
        <div className="flex w-full flex-col items-center justify-center gap-[2px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_5639_26720)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.3861 1.21065C11.7472 0.929784 12.2528 0.929784 12.6139 1.21065L21.6139 8.21065C21.8575 8.4001 22 8.69141 22 9V20C22 20.7957 21.6839 21.5587 21.1213 22.1213C20.5587 22.6839 19.7957 23 19 23H15V14H9V23H5C4.20435 23 3.44129 22.6839 2.87868 22.1213C2.31607 21.5587 2 20.7957 2 20V9C2 8.69141 2.14247 8.4001 2.38606 8.21065L11.3861 1.21065Z"
                fill="#FF394E"
              />
            </g>
            <defs>
              <clipPath id="clip0_5639_26720">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="">홈</span>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-[2px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_5639_26730)">
              <path
                d="M11.0886 1.66385C11.3503 0.778716 12.6497 0.778719 12.9114 1.66385L14.4031 6.70934C14.5435 7.18415 15.0488 7.46579 15.545 7.34573L20.8174 6.06999C21.7423 5.84619 22.3921 6.93253 21.7288 7.59386L17.9481 11.3636C17.5923 11.7184 17.5923 12.2816 17.9481 12.6364L21.7288 16.4061C22.3921 17.0675 21.7423 18.1538 20.8174 17.93L15.545 16.6543C15.0488 16.5342 14.5435 16.8158 14.4031 17.2907L12.9114 22.3362C12.6497 23.2213 11.3503 23.2213 11.0886 22.3362L9.5969 17.2907C9.45652 16.8158 8.95118 16.5342 8.45502 16.6543L3.18259 17.93C2.25765 18.1538 1.60791 17.0675 2.27117 16.4061L6.05191 12.6364C6.4077 12.2816 6.4077 11.7184 6.05191 11.3636L2.27116 7.59386C1.60791 6.93253 2.25765 5.84619 3.18259 6.06999L8.45502 7.34573C8.95118 7.46579 9.45652 7.18415 9.5969 6.70934L11.0886 1.66385Z"
                fill="#A9ABB1"
              />
            </g>
            <defs>
              <clipPath id="clip0_5639_26730">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="">체험단</span>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-[2px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3ZM8 14C5.23858 14 3 16.2386 3 19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19C21 16.2386 18.7614 14 16 14H8Z"
              fill="#A9ABB1"
            />
          </svg>
          <span className="">마이페이지</span>
        </div>
      </div>
      {/* 웹 푸터 */}
      <div className="hidden h-[286px] w-full bg-background-red lg:block">
        <div className="px-4 text-caption-1 text-gray-40">
          <section className="mx-auto flex max-w-[1400px] flex-col gap-2 py-12">
            <div className="flex items-center gap-[6px] font-[700]">
              <p>{`(주)`} 다인기획</p>
              <div className="h-[10px] w-[2px] border bg-gray-10" />
              <p>대표: 김광욱</p>
            </div>
            <div className="flex items-center gap-[6px]">
              <p>전화 : 010-3570-2290</p>
              <div className="h-[10px] w-[2px] border bg-gray-10" />
              <p>주소 : 인천광역시 연수구 센트럴로 313</p>
            </div>
            <div className="flex items-center gap-[6px]">
              <p>메일 : daingiplan2023@gmail.com</p>
              <div className="h-[10px] w-[2px] border bg-gray-10" />
              <p>사업자등록번호 : 695-87-02923</p>
            </div>
            <p>통신판매업신고번호 : 제 2024-인천연수구-1408호</p>
          </section>
          {/* <div className="mx-auto w-[calc(100%-40px)] border px-5" /> */}
          <ul className="mx-auto mb-[53px] flex max-w-[1400px] items-center gap-4 border-t py-[28px]">
            <li>이용약관</li>
            <div className="h-[10px] w-[2px] border bg-gray-10" />
            <li>오픈 소스 라이센스</li>
            <div className="h-[10px] w-[2px] border bg-gray-10" />
            <li className="font-[700]">개인정보처리방침</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
