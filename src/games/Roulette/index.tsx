import React from 'react'
import image from './image.png'

export default {
  name: 'SKB Roulette',
  short_name: 'skbroulette',
  description: '',
  creator: '2qjSyMe8Ag57rRTkSRzPrHc2zgS6DmpzrLe7KqE6gL36',
  image,
  theme_color: '#59ff5f',
  app: React.lazy(() => import('./App')),
}
