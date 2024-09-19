import { FindIdForm } from '@/components/auth/FindIdForm'
import { InputField } from '@/components/auth/InputField'
import Text from '@/components/shared/Text'
import { Form } from 'react-hook-form'

export default function findIdPage() {
  // 🚨 KG이니시스 모듈 확인
  // const SERVER_BASE_URL = 'http://localhost:8080'
  // const IMP_CODE = 'imp3312183'
  // const MID = 'MIIiasTest'

  // const getCertification = async imp_uid => {
  //   const body = {
  //     imp_uid: imp_uid
  //   }
  //   const response = await axios.post(`${SERVER_BASE_URL}/api/auth`, body)
  //   return response
  // }

  // 2. Call Certification
  // const certification = async () => {
  //   // v1
  //   window.IMP.init(IMP_CODE)
  //   window.IMP.certification(
  //     {
  //       pg: `inicis_unified.${MID}`,
  //       merchant_uid: `mer_id_${Date.now()}`
  //     },
  //     async resp => {
  //       console.log(`=== IMP 모달 인증 결과 ===`)
  //       console.log(resp)
  //       if (resp.success) {
  //         const result = await getCertification(resp.imp_uid)
  //         console.log(`=== 유저 인증정보 조회 결과 ===`)
  //         console.log(result)
  //       } else {
  //         console.log(`==== 인증 실패 ====`)
  //       }
  //     }
  //   )
  // }
  return (
    <div className="flex h-[calc(100vh-10rem)] w-full justify-center bg-background-gray">
      <div className="box-border w-[454px]">
        <div className="mx-auto mt-20 border-2 bg-white px-10 py-[60px]">
          <h3 className="mb-3 text-center text-[26px] font-bold leading-8">
            아이디 찾기
          </h3>
          <Text
            color="gray60"
            weight={500}
            className="mb-10 text-center text-[16px]">
            가입 시 등록한 이름과 휴대전화번호를 입력해 주세요
          </Text>
          <FindIdForm />
        </div>
      </div>
    </div>
  )
}
