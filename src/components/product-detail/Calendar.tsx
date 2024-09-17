'use client'

import useCalendar from '@/hooks/useCalendar'
import { transformApiData } from '@/utils/detailPageDays'

const Calendar = ({ data }: any) => {
  if (!data || !data.applicationStartDate || !data.applicationEndDate) {
    return <div>데이터를 불러오는 중입니다...</div>
  }

  const transformedData = transformApiData(data)

  const { weekCalendarList, currentDate, handlePrevMonth, handlenextMonth } =
    useCalendar(new Date(transformedData.applicationStartDate))

  const events = {
    recruitmentPeriod: {
      start: new Date(transformedData.applicationStartDate),
      end: new Date(transformedData.applicationEndDate)
    }, // 모집 기간
    announcement: new Date(
      new Date(transformedData.applicationParticipantsDate).getTime()
    ), // 모집 기간 다음날 - 결과 발표
    experiencePeriod: {
      start: new Date(transformedData.experienceStartDate),
      end: new Date(transformedData.experienceEndDate)
    }, // 체험 기간
    deadline: new Date(new Date(transformedData.reviewEndDate).getTime()) // 체험 종료 다음날 - 리뷰 마감
  }

  // const events2 = {
  //   recruitmentPeriod: {
  //     start: new Date(transDate.applicationStartDate),
  //     end: new Date(transDate.applicationEndDate)
  //   }, // 모집 기간
  //   announcement: new Date(new Date(transDate.applicationParticipantsDate)), // 모집 기간 다음날 - 결과 발표
  //   experiencePeriod: {
  //     start: new Date(transDate.experienceStartDate),
  //     end: new Date(transDate.experienceEndDate)
  //   }, // 체험 기간
  //   deadline: new Date(new Date(transDate.reviewEndDate)) // 체험 종료 다음날 - 리뷰 마감
  // }

  // 현재 달에 속하는지 확인하는 함수
  const isInCurrentMonth = (date: Date) => {
    return (
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
    )
  }

  // 날짜가 범위 내에 있는지 확인하는 함수
  const isWithinRange = (date: Date, range: { start: Date; end: Date }) => {
    return (
      date.getTime() >= range.start.getTime() &&
      date.getTime() <= range.end.getTime() &&
      isInCurrentMonth(date) // 현재 달에 속하는지 확인
    )
  }

  // 모집 기간 첫날인지 확인하는 함수
  const isFirstDayOfEvent = (date: Date, range: { start: Date; end: Date }) => {
    return (
      date.toDateString() === range.start.toDateString() &&
      isInCurrentMonth(date)
    )
  }

  const getEventStyleAndLabel = (dayDate: Date) => {
    let eventStyle = ''
    let eventLabel = ''

    if (isWithinRange(dayDate, events.recruitmentPeriod)) {
      eventStyle = 'bg-gray-10 text-gray-70' // 모집 기간 동안 스타일 적용
      eventLabel = isFirstDayOfEvent(dayDate, events.recruitmentPeriod)
        ? '모집 기간'
        : ''
    } else if (dayDate.toDateString() === events.announcement.toDateString()) {
      eventLabel = '결과 발표'
      eventStyle = 'text-red-main bg-background-red'
    } else if (isWithinRange(dayDate, events.experiencePeriod)) {
      eventStyle = 'text-blue-50 bg-blue-5'
      eventLabel = isFirstDayOfEvent(dayDate, events.experiencePeriod)
        ? '체험 기간'
        : ''
    } else if (dayDate.toDateString() === events.deadline.toDateString()) {
      eventLabel = '리뷰 마감'
      eventStyle = 'text-red-main bg-background-red'
    }

    return { eventStyle, eventLabel }
  }

  const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <div className="h-[449px] min-h-[465px] min-w-[328px] rounded-lg border border-line-neutral bg-white text-body-1 text-gray-60">
      <header className="flex h-[64px] items-center justify-between px-8 py-4 text-heading-5 font-bold">
        <button onClick={handlePrevMonth}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              width="32"
              height="32"
              rx="16"
              fill="white"
            />
            <path
              d="M17.6853 9.33398L18.7773 10.504L13.0051 16.3543L18.7773 22.2046L17.6853 23.3747L10.6649 16.3543L17.6853 9.33398Z"
              fill="#5D5F67"
            />
          </svg>
        </button>
        <h2>
          {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
        </h2>
        <button onClick={handlenextMonth}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              width="32"
              height="32"
              rx="16"
              fill="white"
            />
            <path
              d="M14.4241 9.33398L13.332 10.504L19.1043 16.3543L13.332 22.2046L14.4241 23.3747L21.4444 16.3543L14.4241 9.33398Z"
              fill="#5D5F67"
            />
          </svg>
        </button>
      </header>
      <div className="flex w-full">
        {DAY_LIST.map((day, index) => (
          <div
            key={index}
            className="w-full px-5 py-1 text-center text-body-2 text-gray-60 first:text-red-main last:text-blue-50">
            {day}
          </div>
        ))}
      </div>
      <div className="font-medium">
        {weekCalendarList.slice(0, 5).map((week, weekIndex) => (
          <div
            className="flex w-full border-t"
            key={weekIndex}>
            {week.map((day, dayIndex) => {
              // 첫째주와 마지막주의 일자가 7보다 크거나 작으면 이전달 혹은 다음달 일자
              const isCurrentMonth =
                !(weekIndex === 0 && day > 7) && !(weekIndex === 4 && day < 7)

              const dayDate = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                day
              )

              // 기준 월의 일자가 아니면 흐린 색깔로 표시
              const textStyle = !isCurrentMonth ? 'text-gray-10' : ''

              const { eventStyle, eventLabel } = isCurrentMonth
                ? getEventStyleAndLabel(dayDate)
                : { eventStyle: '', eventLabel: '' }

              return (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`h-[68px] flex-1 pt-2 text-center`}>
                  <span className={textStyle}>{day}</span>
                  {eventStyle && (
                    <div
                      className={`mt-1 flex h-5 items-center justify-center text-caption-1 ${eventStyle} `}>
                      <span className="text-body-2">{eventLabel}</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
