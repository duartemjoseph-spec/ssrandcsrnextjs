import Usernameform from '@/app/components/Usernameform'
import React from 'react'

const SetNamePage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="">
        <h1 className="text-3xl font-bold">Server vs Client Components</h1>
        <div className="w-350px">
          <Usernameform />
        </div>
      </main>
    </div>

  )
}

export default SetNamePage