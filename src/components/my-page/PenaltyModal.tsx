import Image from 'next/image'

const PenaltyModal = () => {
  return (
    <div className="flex w-[320px] flex-col gap-5 p-5 lg:w-[625px]">
      <div className="flex gap-[6px]">
        <Image
          alt="star"
          width={20}
          height={20}
          src="/img/menu-star.png"
          priority
        />
        <p className="text-body-1 font-bold text-red-main">페널티는?</p>
      </div>

      <div className="text-caption-1 font-medium text-gray-90">
        <p className="font-semibold">페널티는 인플루언서, 사업주</p>
        <p className="font-semibold">
          서로간의 약속을 지키기 위한 시스템입니다.
        </p>

        <div className="mt-5">
          <p>
            <span className="font-semibold">페널티 0회 : </span>
            자유롭게 사이트 이용 가능
          </p>
          <p>
            <span className="font-semibold">페널티 1회 : </span>
            사이트 이용 7일 정지
          </p>
          <p>
            <span className="font-semibold">페널티 2회 : </span>
            사이트 이용 30일 정지
          </p>
          <p>
            <span className="font-semibold">페널티 3회 : </span>
            사이트 이용 영구 정지
          </p>
        </div>

        <p className="mb-5 mt-8 font-semibold">
          패널티는 이런 이유로 받게 돼요!
        </p>

        <ul className="">
          <li>
            · 서비스를 제공받은 후 리뷰 작성 및 미션 수행을 하지 않은 경우
            (서비스에 대한 배상금 별도)
          </li>
          <li>· 방문 예약 후 방문하지 않은 경우</li>
          <li>
            · 체험단 선정된 후 취소 시 취소 횟수 부여, 취소 횟수 5회 시 페널티
            1회
          </li>
          <li>· 타 회원에 대해 거짓 정보를 제공해 불이익을 준 경우</li>
        </ul>
      </div>
    </div>
  )
}

export default PenaltyModal
