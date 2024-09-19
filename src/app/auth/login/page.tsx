import { LoginForm } from '@/components/auth/form/LoginForm'
import { SocialLinkGroups } from '@/components/auth/SocialLinkGroups'
import { SocialLinkMobileGroups } from '@/components/auth/SocialLinkMobileGroups'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className="h-[calc(100vh-10rem)] w-full bg-background-gray">
      <div className="flex h-full w-full justify-center bg-background-gray">
        <div className="flex w-[908px] items-center">
          <div className="box-border flex-1 border-b-2 border-l-2 border-t-2 bg-white px-[40px] py-[44px] max-lg:border-r-2">
            <h1 className="mb-[32px] text-center text-[26px] font-bold leading-8">
              LOGIN
            </h1>
            <div className="mb-8">
              <LoginForm />
            </div>
            <div className="mb-11 flex max-lg:justify-center max-lg:gap-6 lg:flex-col lg:space-y-3">
              <SocialLinkGroups
                border={true}
                color={false}
                weight={400}
              />
              <SocialLinkMobileGroups />
            </div>
            <div className="text-center">
              <a
                href="/auth/sign-up"
                className="font-bold leading-4">
                회원가입
              </a>
            </div>
          </div>
          <div className="max-lg:sr-only">
            <Image
              src="/img/login.webp"
              alt="로그인 이미지"
              width={454}
              height={605}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
