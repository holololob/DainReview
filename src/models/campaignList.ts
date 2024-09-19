export interface CampaignProps {
  seq: number // 상품 상세 페이지로 이동시킬 id
  image: string // 이미지 URL
  title: string // 체험단 제목
  service: string // 제공 내역
  type: string // 배송형 등 labelType으로 사용
  platform: string // ReviewType 컴포넌트에서 사용
  point?: number // 프리미엄이나 다인일 경우 금액 표시
  recruiter: number // 모집 인원
  applicationEndDate: string // 모집 종료일
  segment: '프리미엄' | '다인' | '일반' // 세그먼트
}
