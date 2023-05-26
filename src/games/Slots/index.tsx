import React from 'react'
import image from './image.png'

export default {
  name: 'SKB Slots',
  short_name: 'skbslots',
  description: '',
  creator: 'CCJqzXTgZPTHKaRwAn3wMaec87FcYYeW1mvwuXMhqHQr',
  image,
  theme_color: '#ad6bff',
  app: React.lazy(() => import('./App')),
}
