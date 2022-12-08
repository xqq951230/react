import login from '../pages/login/login'
import notFound from '../pages/notFound/index'
export const mainRouters = [
  {
    path: '/',
    component: login,
  },
  {
    path: '/notFound',
    component: notFound,
  }
]

