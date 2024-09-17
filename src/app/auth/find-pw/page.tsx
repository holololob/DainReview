import { FindPwForm } from '@/components/auth/FindPwForm'
import Text from '@/components/shared/Text'

function FindPwPage() {
  return (
    <div className="flex h-[calc(100vh-10rem)] w-full justify-center bg-background-gray">
      <div className="box-border w-[454px]">
        <div className="mx-auto mt-20 border-2 bg-white px-10 py-[60px]">
          <h3 className="mb-3 text-center text-[26px] font-bold leading-8">
            비밀번호 찾기
          </h3>
          <Text
            color="gray60"
            weight={500}
            className="mb-10 text-center text-[16px]">
            비밀번호 찾기 가입 시 등록한 아이디, 이름, 전화번호를 입력해 주세요
          </Text>
          <FindPwForm />
        </div>
      </div>
    </div>
  )
}

export default FindPwPage
