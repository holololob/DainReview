import DefaultUserIcon from '@/assets/icons/home/default-user-icon.svg'
import Notification from './Notification'
import SearchButton from './SearchButton'

interface Props {
  noti: number
  profileUrl: string
  name: string
}

const UserMenu = ({ noti, profileUrl, name }: Props) => {
  // profileUrl이 이미지 url 용도인데 자기소개 데이터가 들어가있음. profileUrl = '안녕하세요! 저는 인플루언서입니다.'

  const mockDataprofileUrl = ''

  return (
    <>
      <SearchButton />
      <Notification noti={noti} />
      <div className="flex items-center gap-[9px]">
        {mockDataprofileUrl ? (
          <img
            src={mockDataprofileUrl}
            alt="유저 프로필 사진"
          />
        ) : (
          <DefaultUserIcon />
        )}
        <p className="text-body-2 text-gray-90">{name}</p>
      </div>
    </>
  )
}

export default UserMenu
