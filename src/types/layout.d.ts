import 'next'
import type { NextPage } from 'next'

declare module 'next' {
  export type NextLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: React.ReactElement) => React.ReactNode
  }
}