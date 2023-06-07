import React from 'react'
import image from './image.png'

export default {
  name: 'HiLo',
  short_name: 'hilo',
  description: '',
  creator: '7rdwG1fmii5PmbKuu78sKv1bH96ksTtmqnV6M8ftDnUs',
  image,
  app: React.lazy(() => import('./App')),
}
