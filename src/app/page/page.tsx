import { permanentRedirect } from 'next/navigation'
import React from 'react'

function Page() {
  return permanentRedirect("/page/1")
}
export default Page