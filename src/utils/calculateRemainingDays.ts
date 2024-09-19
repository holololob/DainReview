export const calculateRemainingDays = (applicationEndDate: string): number => {
  const endDate = new Date(applicationEndDate) // 모집 종료일을 Date 객체로 변환
  const today = new Date() // 현재 날짜

  // 두 날짜 간의 차이를 밀리초로 계산한 후, 일 단위로 변환
  const diffTime = endDate.getTime() - today.getTime()
  const remainingDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) // 밀리초 -> 일로 변환

  return remainingDays
}
