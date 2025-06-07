import { redirect, RedirectType } from 'next/navigation'
import React from 'react'

function Page() {
  return redirect("/page/1")
}
export default Page