import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import NotFound from '~/pages/NotFound'
import Register from '~/pages/Register'
import Login from '~/pages/Login'
import { AppContext } from '~/contexts/app.context'
import LoginLayout from '~/layouts/LoginLayout'
import HomeLayout from '~/layouts/HomeLayout'
import Home from '~/pages/Home'
import { useContext } from 'react'
import { VeVuiChoi } from '~/pages/VeVuiChoi'
import { VeMayBay } from '~/pages/VeMayBay'
import KhachSan from '~/pages/KhachSan'
import TourDuLich from '~/pages/TourDuLich'
import ComboKhuyenMai from '~/pages/ComboKhuyenMai'
import Vinpearl from '~/pages/Vinpearl'
import DuThuyenHaLong from '~/pages/DuThuyenHaLong'

const useRouteElements = () => {
  function ProtecedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return isAuthenticated ? <Outlet /> : <Navigate to='login' />
  }
  function RejectedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
  }
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: 'login',
          element: (
            <LoginLayout>
              <Login />
            </LoginLayout>
          )
        },
        {
          path: 'register',
          element: (
            <LoginLayout>
              <Register />
            </LoginLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtecedRoute />,
      children: [
        {
          path: '/',
          index: true,
          element: (
            <HomeLayout>
              <Home />
            </HomeLayout>
          )
        },
        {
          path: '/ve-vui-choi',
          element: (
            <HomeLayout>
              <VeVuiChoi />
            </HomeLayout>
          )
        },
        {
          path: '/ve-may-bay',
          element: (
            <HomeLayout>
              <VeMayBay />
            </HomeLayout>
          )
        },
        {
          path: '/khach-san',
          element: (
            <HomeLayout>
              <KhachSan />
            </HomeLayout>
          )
        },
        {
          path: '/tour-du-lich',
          element: (
            <HomeLayout>
              <TourDuLich />
            </HomeLayout>
          )
        },
        {
          path: '/combo-du-lich',
          element: (
            <HomeLayout>
              <ComboKhuyenMai />
            </HomeLayout>
          )
        },
        {
          path: '/vinpearl',
          element: (
            <HomeLayout>
              <Vinpearl />
            </HomeLayout>
          )
        },
        {
          path: '/du-thuyen-ha-long',
          element: (
            <HomeLayout>
              <DuThuyenHaLong />
            </HomeLayout>
          )
        },
        {
          path: '/ve-vui-choi',
          element: (
            <HomeLayout>
              <VeVuiChoi />
            </HomeLayout>
          )
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}
export default useRouteElements
