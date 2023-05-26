import React from 'react'

import image from './image.png'

export default {
  name: 'SKB Mines',
  short_name: 'skbmines',
  description: '',
  creator: 'FYS2cqreFwXzxi6HZsDWp3m2vjoCGWjGe6HKhRbxLp45',
  theme_color: '#ff6a6a',
  image,
  app: React.lazy(() => import('./App')),
}
