import { FindIdForm } from '@/components/auth/FindIdForm'
import Text from '@/components/shared/Text'

export default function FindIdResult() {
  return (
    <div className="flex h-[calc(100vh-10rem)] w-full justify-center bg-background-gray">
      <div className="box-border w-[454px]">
        <div className="mx-auto mt-20 border-2 bg-white px-10 py-[60px]">
          <h3 className="mb-3 text-center text-[26px] font-bold leading-8">
            가입된 아이디가 있습니다
          </h3>
          <Text
            color="gray60"
            weight={500}
            className="mb-10 text-center text-[16px]">
            해당 아이디로 로그인하거나 비밀번호를 찾아보세요
          </Text>
          <section className="flex h-[100px] w-full items-center justify-center bg-gray-5">
            <Text
              color="gray70"
              weight={400}
              className="text-center text-[16px]">
              highfive5@naver.com
            </Text>
          </section>
          <FindIdForm />
        </div>
      </div>
    </div>
  )
}
