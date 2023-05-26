import React from 'react'
import image from './image.png'

export default {
  name: 'SKB Flip',
  short_name: 'skbflip',
  description: '',
  creator: '3wHhNeDcK69AsPQnFJ6buzA15y8MtdTmX2zkDEABr7c7',
  image,
  theme_color: '#ad6bff',
  app: React.lazy(() => import('./App')),
}
