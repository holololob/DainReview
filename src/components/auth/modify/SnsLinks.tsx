'use client'
import React, { useCallback, useState } from 'react'

import SocialInstagramLink from '@/assets/icons/auth/SocialInstagramLink.svg'
import SocialTikTokLink from '@/assets/icons/auth/SocialTikTokLink.svg'
import SocialNaverBlogLink from '@/assets/icons/auth/SocialNaverBlogLink.svg'
import SocialYoutubeLink from '@/assets/icons/auth/SocialYoutubeLink.svg'
import SocialAddButtonLink from '@/assets/icons/auth/SocialAddButtonLink.svg'

import SocialInstagramLinkDisable from '@/assets/icons/auth/SocialInstagramLinkDisable.svg'
import SocialTikTokLinkDisable from '@/assets/icons/auth/SocialTikTokLinkDisable.svg'
import SocialNaverBlogLinkDisable from '@/assets/icons/auth/SocialNaverBlogLinkDisable.svg'
import SocialYoutubeLinkDisable from '@/assets/icons/auth/SocialYoutubeLinkDisable.svg'
import SocialAddButtonLinkDisable from '@/assets/icons/auth/SocialAddButtonLinkDisable.svg'
import SnsInput from './SnsInput'

type SnsLinkValue = {
  naver: boolean
  instagram: boolean
  tiktok: boolean
  youtube: boolean
  other: boolean
}

const SnsLinks = () => {
  const [inputState, setInputState] = useState<SnsLinkValue>({
    naver: true,
    instagram: true,
    tiktok: true,
    youtube: true,
    other: true
  })

  const handleButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const $button = e.currentTarget as HTMLButtonElement
      const buttonName = $button.name as keyof SnsLinkValue
      console.log('buttonName', buttonName)

      setInputState(prevValue => ({
        ...prevValue,
        [buttonName]: !prevValue[buttonName]
      }))
    },
    []
  )

  return (
    <div className="">
      <div className="mb-10 flex gap-3">
        <button
          name="naver"
          type="button"
          onClick={handleButtonClick}
          className="h-10 w-10">
          {inputState.naver ? (
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <SocialNaverBlogLink />
            </div>
          ) : (
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <SocialNaverBlogLinkDisable />
            </div>
          )}
        </button>

        <button
          name="instagram"
          type="button"
          onClick={handleButtonClick}
          className="h-10 w-10">
          {inputState.instagram ? (
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <SocialInstagramLink />
            </div>
          ) : (
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <SocialInstagramLinkDisable />
            </div>
          )}
        </button>

        <button
          name="youtube"
          type="button"
          onClick={handleButtonClick}
          className="h-10 w-10">
          {inputState.youtube ? (
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <SocialYoutubeLink />
            </div>
          ) : (
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <SocialYoutubeLinkDisable />
            </div>
          )}
        </button>

        <button
          name="tiktok"
          type="button"
          onClick={handleButtonClick}
          className="h-10 w-10">
          {inputState.tiktok ? (
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <SocialTikTokLink />
            </div>
          ) : (
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <SocialTikTokLinkDisable />
            </div>
          )}
        </button>

        <button
          name="other"
          type="button"
          onClick={handleButtonClick}
          className="h-10 w-10">
          {inputState.other ? (
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <SocialAddButtonLink />
            </div>
          ) : (
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <SocialAddButtonLinkDisable />
            </div>
          )}
        </button>
      </div>
      <div className="">
        <div className="">
          <div className="space-y-2">
            {inputState.naver && (
              <SnsInput
                id={'naver'}
                type={'text'}
                icon={
                  <SocialNaverBlogLink
                    width={20}
                    height={20}
                  />
                }
              />
            )}
            {inputState.instagram && (
              <SnsInput
                id={'instagram'}
                type={'text'}
                icon={
                  <SocialInstagramLink
                    width={20}
                    height={20}
                  />
                }
              />
            )}
            {inputState.youtube && (
              <SnsInput
                id={'youtube'}
                type={'text'}
                icon={
                  <SocialYoutubeLink
                    width={20}
                    height={20}
                  />
                }
              />
            )}
            {inputState.tiktok && (
              <SnsInput
                id={'tiktok'}
                type={'text'}
                icon={
                  <SocialTikTokLink
                    width={20}
                    height={20}
                  />
                }
              />
            )}
            {inputState.other && (
              <SnsInput
                id={'other'}
                type={'text'}
                icon={
                  <SocialAddButtonLink
                    width={20}
                    height={20}
                  />
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SnsLinks
