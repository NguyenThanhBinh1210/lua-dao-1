/* eslint-disable @typescript-eslint/no-explicit-any */
import { Drawer, IconButton, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '~/assets/icons/bestpricevn_logo_vn_15042022.png'
import hotro from '~/assets/icons/ho-tro.png'
import { headerMenu } from '~/constants/renaral.const'

const Header = () => {
  const [openRight, setOpenRight] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const openDrawerRight = () => setOpenRight(true)
  const closeDrawerRight = () => setOpenRight(false)
  const [menuItems, setMenuItems] = useState<any>(headerMenu.slice(0, 4))
  const [menuItemsHide, setMenuItemsHide] = useState(headerMenu.slice(4))
  const navigate = useNavigate()
  const handleItemClick = (item: any, index: number) => {
    navigate(menuItemsHide[index].path)
    const newMenu = menuItems.slice(0, 3)
    const show = [...newMenu, item]
    const lastItem = menuItems.slice(3, 4)[0]
    const newHide = [...menuItemsHide]
    newHide[index] = lastItem

    setMenuItemsHide(newHide)
    setMenuItems(show)
  }
  return (
    <>
      <div className='mx-auto shadow-md py-2 px-2.5 flex justify-between items-center fixed top-0 left-0 w-full h-max bg-white !z-50'>
        <Link to={'/'}>
          <img className='w-[179px] py-1' src={logo} alt='logo' />
        </Link>
        <div className=' xl:flex hidden'>
          {menuItems.map((item: any, index: any) => (
            <div
              key={index}
              className='py-2 px-5 group mr-4 flex items-center hover:text-primary font-bold text-gray-800'
            >
              <span className='!group-hover:text-primary mr-2'>{item.icon}</span>
              <Link to={item.path}>{item.title}</Link>
            </div>
          ))}
          <Menu placement='bottom-start'>
            <MenuHandler>
              <button>
                <svg
                  className='w-10 h-10 text-gray-800 '
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path stroke='currentColor' strokeLinecap='round' strokeWidth='4' d='M6 12h.01m6 0h.01m5.99 0h.01' />
                </svg>
              </button>
            </MenuHandler>
            <MenuList placeholder={''} className='p-0'>
              {menuItemsHide.map((item, index) => (
                <MenuItem
                  onClick={() => handleItemClick(item, index)}
                  key={index}
                  placeholder={''}
                  className='  rounded-none border-b group text-base flex items-center justify-between'
                >
                  <span className='group-hover:text-primary text-gray-800 mr-2'>{item.icon}</span>
                  <span className='text-gray-800 group-hover:text-primary font-bold w-[200px]'>{item.title}</span>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          {/* {showAll && (
          <div>
            {headerMenu.slice(4).map((item, index) => (
              <div key={index}>
                <a href={item.path}>{item.title}</a>
              </div>
            ))}
          </div>
        )} */}
        </div>
        <div className='hidden xl:flex gap-x-2 items-center pr-2 '>
          <img className='w-[38px] h-[38px] flex-shrink-0' src={hotro} alt='hotro' />
          <div className='border-r pr-3 mr-2'>
            <p className='text-lg font-bold text-red-900 leading-4'>1900 2605</p>
            <p>(024/028) 7307 2605</p>
          </div>
          <svg
            onClick={() => setOpenSearch(!openSearch)}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 cursor-pointer'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
          {openSearch && (
            <form className='absolute top-16 right-4 bg-[#e9e9e9] p-1 flex items-center'>
              <input type='text' className='bg-white p-1.5 px-3 t' placeholder='Bạn muốn đi đâu?' name='' id='' />
              <svg
                onClick={() => setOpenSearch(!openSearch)}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={4}
                stroke='currentColor'
                className='w-6 h-6 mx-2 cursor-pointer text-red-800'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
              </svg>
              <button type='submit'></button>
            </form>
          )}
        </div>
        <div className='flex items-center gap-x-2 xl:hidden'>
          <Menu placement='bottom-start'>
            <MenuHandler>
              <svg
                className='w-7 h-7 text-[#cd2a2a] '
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z' />
              </svg>
            </MenuHandler>
            <MenuList placeholder={''} className='p-0'>
              <MenuItem
                placeholder={''}
                className='w-[250px] rounded-none border-b text-base flex items-center justify-between'
              >
                <span className='text-black'>Tổng đài:</span>
                <span className='text-primary'>1900 2605</span>
              </MenuItem>
              <MenuItem
                placeholder={''}
                className='w-[250px] rounded-none border-b text-base flex items-center justify-between'
              >
                <span className='text-black'>Hà Nội:</span>
                <span className='text-primary'>024 73072605</span>
              </MenuItem>
              <MenuItem
                placeholder={''}
                className='w-[250px] rounded-none  text-base flex items-center justify-between'
              >
                <span className='text-black'>Hồ Chí Minh:</span>
                <span className='text-primary'>028 73072605</span>
              </MenuItem>
            </MenuList>
          </Menu>

          <svg
            onClick={openDrawerRight}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-8 h-8'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
          </svg>
        </div>
      </div>
      <Drawer placeholder={''} placement='right' open={openRight} onClose={closeDrawerRight} className='pl-4 pr-4 py-2'>
        <div className='mb-2 flex items-center justify-between'>
          <p></p>
          <IconButton placeholder={''} variant='text' color='blue-gray' onClick={closeDrawerRight}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </IconButton>
        </div>
        <input
          type='text'
          placeholder='Bạn muốn đi đâu'
          className='my-2 w-full bg-[#f6f6f6] px-3 py-1.5 leading-9 rounded'
        />
        <ul className='border-b pb-3'>
          {headerMenu.map((item, index) => (
            <li onClick={closeDrawerRight} key={index} className=''>
              <Link to={item.path} className='flex items-center justify-between py-3 px-3'>
                <div className='flex items-center '>
                  <p className='text-sm font-semibold'>{item.title}</p>
                </div>
                <svg
                  className='w-5 h-5 text-gray-800 '
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m9 5 7 7-7 7'
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  )
}

export default Header
