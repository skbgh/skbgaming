import React from 'react'
import image from './image.png'

export default {
  name: 'SKB HiLo',
  short_name: 'skbhilo',
  description: '',
  creator: '7rdwG1fmii5PmbKuu78sKv1bH96ksTtmqnV6M8ftDnUs',
  image,
  app: React.lazy(() => import('./App')),
}
