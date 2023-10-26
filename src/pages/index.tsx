import * as React from 'react'
import type { NextLayout } from "next";
import { Button } from "~/components/ui/button";
import RootLayout from "~/components/layout/root";

const Page: NextLayout = function Page() {
  return (
    <section>
      <Button>Submit</Button>
      <Button>Submit</Button>
      <Button>Submit</Button>
      <Button>Submit</Button>
    </section>
  )
}

Page.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}


export default Page