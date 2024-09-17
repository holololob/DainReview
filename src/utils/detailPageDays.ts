type DaysKey =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'

const days: Record<DaysKey, string> = {
  monday: '월',
  tuesday: '화',
  wednesday: '수',
  thursday: '목',
  friday: '금',
  saturday: '토',
  sunday: '일'
}

// 가능한 요일과 불가능한 요일 정보를 추출하는 함수
export const getDayInfo = (data: Record<DaysKey, number>) => {
  const availableDays = Object.keys(days)
    .filter(day => data[day as DaysKey] === 1)
    .map(day => days[day as DaysKey])
    .join('/')

  const unavailableDays = Object.keys(days)
    .filter(day => data[day as DaysKey] === 0)
    .map(day => days[day as DaysKey])
    .join('/')

  return { availableDays, unavailableDays }
}

// Schedule 컴포넌트 날짜 포맷 함수
export const formatDate = (date: string) => {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0) // 시간을 00:00:00으로 고정
  const day = d.getDate().toString().padStart(2, '0')
  const month = (d.getMonth() + 1).toString().padStart(2, '0') // 월은 0부터 시작하므로 +1
  const weekday = d.toLocaleDateString('ko-KR', { weekday: 'short' })

  return `${month}.${day} (${weekday})`
}

// Schedule 컴포넌트 기간 포맷 함수
export const formatPeriod = (startDate: string, endDate: string) => {
  const start = new Date(startDate)
  const end = new Date(endDate)
  end.setHours(23, 59, 59, 999) // 종료일의 시간을 23:59:59로 고정

  return `${formatDate(start.toISOString())} ~ ${formatDate(end.toISOString())}`
}

export interface transDateProps {
  applicationStartDate: string
  applicationEndDate: string
  applicationParticipantsDate: string
  experienceStartDate: string
  experienceEndDate: string
  reviewEndDate: string
}

// 날짜 API 데이터를 캘린더에 맞춘 형식으로 변환, UTC가 아니라 한국 날짜로 맞추기
export const transformApiData = (data: transDateProps) => {
  return {
    applicationStartDate:
      new Date(data.applicationStartDate).toISOString().split('T')[0] +
      'T00:00:00',
    applicationEndDate:
      new Date(data.applicationEndDate).toISOString().split('T')[0] +
      'T23:59:59',
    applicationParticipantsDate:
      new Date(data.applicationParticipantsDate).toISOString().split('T')[0] +
      'T23:59:59',
    experienceStartDate:
      new Date(data.experienceStartDate).toISOString().split('T')[0] +
      'T00:00:00',
    experienceEndDate:
      new Date(data.experienceEndDate).toISOString().split('T')[0] +
      'T23:59:59',
    reviewEndDate:
      new Date(data.reviewEndDate).toISOString().split('T')[0] + 'T23:59:59'
  }
}
