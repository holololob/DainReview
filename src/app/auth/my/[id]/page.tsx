import ModifyMyForm from '@/components/auth/form/ModifyMyForm'

export default function My({
  params,
  searchParams
}: {
  params: { id: string }
  searchParams: { country: string }
}) {
  console.log('my', params, searchParams)
  return (
    <>
      <div className="h-[200px] w-full bg-slate-400">
        <h3>회원정보 변경</h3>
      </div>
      <div className="flex w-full justify-center">
        <section className="mt-20 flex w-[690px] flex-col justify-center">
          <ModifyMyForm />
        </section>
      </div>
    </>
  )
}
