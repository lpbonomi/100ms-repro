'use client'

import { HMSPrebuilt } from '@100mslive/roomkit-react';

type Props = {
  params: {
    artist: string
  }
}

export default function Page({ params }: Props) {
  return (
    <HMSPrebuilt roomCode='12345678' />
  )
}