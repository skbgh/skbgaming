import React from 'react'
import image from './image.png'

export default {
  name: 'SKB Dice',
  short_name: 'skbdice',
  description: '',
  creator: 'BqA8jwLmzapMQPpsjX6e7BJEFGckPTVxhg6gBr16hsZx',
  image,
  theme_color: '#ad6bff',
  app: React.lazy(() => import('./App')),
}
