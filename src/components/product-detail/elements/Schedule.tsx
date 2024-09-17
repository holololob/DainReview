import {
  formatDate,
  formatPeriod,
  transformApiData
} from '@/utils/detailPageDays'

const Schedule = ({ data }: any) => {
  const transformedData = transformApiData(data)

  // 변환된 데이터가 없다면 로딩 중 메시지 표시
  if (
    !transformedData ||
    !transformedData.applicationStartDate ||
    !transformedData.applicationEndDate
  ) {
    return <div>데이터를 불러오는 중입니다...</div>
  }

  const experiencePeriods = [
    {
      label: '체험단 모집기간',
      period: formatPeriod(
        transformedData.applicationStartDate,
        transformedData.applicationEndDate
      )
    },
    {
      label: '선정자 발표',
      period: formatDate(transformedData.applicationParticipantsDate)
    },
    {
      label: '리뷰 & 체험',
      period: formatPeriod(
        transformedData.experienceStartDate,
        transformedData.experienceEndDate
      )
    },
    { label: '리뷰 마감', period: formatDate(transformedData.reviewEndDate) }
  ]

  return (
    <>
      {/* 모바일 */}
      <div className="my-4 flex min-h-[128px] flex-col gap-4 rounded-lg bg-gray-100 px-4 py-3 lg:hidden">
        {experiencePeriods.map((item, i) => (
          <div
            key={i}
            className="flex justify-between">
            <p>{item.label}</p>
            <p>{item.period}</p>
          </div>
        ))}
      </div>

      {/* 데스크탑 */}
      <div className="hidden min-h-[152px] flex-col rounded-2xl border border-line-neutral bg-white px-4 py-3 text-body-2 font-medium lg:flex">
        {experiencePeriods.map((item, i) => (
          <div
            key={i}
            className="flex justify-between py-[6px]">
            <p className="text-gray-40">{item.label}</p>
            <p className="font-medium text-gray-60">{item.period}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Schedule
