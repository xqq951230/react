import login from '../pages/login'
import index from '../pages/admin/dashboard/index'
import edit from '../pages/admin/products/edit'
import list from '../pages/admin/products/list'

export const mainRouters = [
  {
    path: '/',
    component: login,
  },
]

export const adminRouters = [
  {
    path: '/admin/dashboard',
    component: index,
  },
  {
    path: '/admin/products',
    component: list,
  },
  {
    path: '/admin/products/edit/:id',
    component: edit,
  },
]
