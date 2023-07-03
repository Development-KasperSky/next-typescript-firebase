import { BracketItemComponent } from '@/components'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <BracketItemComponent />
    </>
  )
}
