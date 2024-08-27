import { SocialLinkGroups } from '@/components/auth/SocialLinkGroups'
import { SocialLinkMobileGroups } from '@/components/auth/SocialLinkMobileGroups'

import Text from '@/components/shared/Text'
import { SignupForm } from '@/components/auth/SignupForm'
import { Suspense } from 'react'

export default function SignUpPage() {
  return (
    <div className="flex w-full justify-center bg-background-gray">
      <section className="flex w-[690px] flex-col justify-center">
        <div className="mt-24">
          <h2 className="text-center text-[34px]">인플루언서 회원가입</h2>
          <Text
            color="black"
            size="t2"
            weight={400}
            className="text-center">
            다인리뷰에서 새로운 체험단을 접해보세요.
          </Text>
        </div>

        <div className="mb-11 flex gap-4 max-lg:justify-center">
          <SocialLinkGroups
            color={true}
            border={false}
            weight={700}
          />
          <SocialLinkMobileGroups />
        </div>
        <Suspense fallback={<>로딩중</>}>
          <SignupForm />
        </Suspense>
      </section>
    </div>
  )
}
