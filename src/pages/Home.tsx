import { Switch, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import homeBaner from '~/assets/icons/home-page-about-best-price-63bfd4eec5d18.jpg'
import local1 from '~/assets/icons/local1.png'
import local2 from '~/assets/icons/local2.png'
import lich from '~/assets/icons/lich.png'
import user from '~/assets/icons/user.png'
import muuoinam from '~/assets/icons/14-nam.png'
import luon1 from '~/assets/icons/luon-co-gia-tot-2.png'
import luon2 from '~/assets/icons/cong-ty-du-lich-hang-dau-2.png'
import luon3 from '~/assets/icons/99-hai-long-2.png'

import homead1 from '~/assets/images/home-page-ad-01-6482e8c5bfbc4.jpg'
import homead2 from '~/assets/images/home-page-ad-02-65ee8a6cd54be.jpg'
import homead3 from '~/assets/images/home-page-ad-03-6482fc7002bde.jpg'

import vietnam1 from '~/assets/images/VN.png'

import top10 from '~/assets/images/top-10-dich-vu-du-lich-2.png'

import { homeButton, homeLinkFooter } from '~/constants/renaral.const'
const Home = () => {
  const [activeTab, setActiveTab] = useState('ve-may-bay')
  const data = [
    {
      label: 'Vé máy bay',
      value: 've-may-bay',
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
      content: (
        <div>
          <div className='md:grid grid-cols-2 md:w-[70%] '>
            <div className='flex border-b pb-3 md:pt-3 cursor-pointer'>
              <img className='h-[40px] mr-2' src={local1} alt='' />
              <div className='text-sm'>
                <p className='uppercase'>Điểm đi</p>
                <p className='font-bold'>Chọn điểm đi</p>
              </div>
            </div>
            <div className='flex border-b py-3 cursor-pointer'>
              <img className='h-[40px] mr-2' src={local1} alt='' />
              <div className='text-sm'>
                <p className='uppercase'>Điểm đến</p>
                <p className='font-bold'>Chọn điểm đến</p>
              </div>
            </div>
          </div>
          <div className='md:flex md:pt-2 items-center'>
            <div className='md:flex-1 md:flex md:justify-between md:pr-28'>
              <div className='grid grid-cols-2 border-b sm:gap-x-10 xl:gap-x-32 md:border-0 py-3 cursor-pointer '>
                <div className='flex '>
                  <img className='h-[40px] mr-2' src={lich} alt='' />
                  <div className='text-sm'>
                    <p className='uppercase'>Ngày đi</p>
                    <p className='font-bold'>Chọn ngày</p>
                  </div>
                </div>
                <div className='flex '>
                  <img className='h-[40px] mr-2' src={lich} alt='' />
                  <div className='text-sm'>
                    <p className='uppercase'>Ngày về</p>
                    <p className='font-bold'>Chọn ngày</p>
                  </div>
                </div>
              </div>
              <div className='flex  pt-3 pb-3 cursor-pointer'>
                <img className='h-[40px] mr-2' src={user} alt='' />
                <div className='text-sm'>
                  <p className='uppercase'>Hành khách</p>
                  <p className='font-bold'>1 khách</p>
                </div>
              </div>
            </div>
            <div>
              <div className='flex justify-center mb-3'>
                <Switch
                  crossOrigin
                  label={<div className='font-medium text-sm'>Tìm vé rẻ nhất</div>}
                  id='custom-switch-component'
                  ripple={false}
                  className='h-full w-full checked:bg-primary '
                  containerProps={{
                    className: 'w-11 h-6'
                  }}
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none'
                  }}
                />
              </div>
              <button className='bg-primary text-white font-bold w-full py-3 rounded-lg'>Tìm chuyến bay</button>
            </div>
          </div>
        </div>
      )
    },
    {
      label: 'Khách sạn',
      value: 'khach-san',
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
      content: (
        <div>
          <div className='flex border-b pb-2 cursor-pointer md:w-[75%] md:mb-2 md:pb-4'>
            <img className='h-[40px] mr-2' src={local1} alt='' />
            <div className='text-sm'>
              <p className='uppercase'>Địa điểm</p>
              <p className='font-bold'>Thành phố, địa danh, khách sạn</p>
            </div>
          </div>
          <div className='md:flex md:gap-x-10'>
            <div className='md:flex flex-1 justify-between sm:pr-0 xl:pr-10'>
              <div className='grid grid-cols-2  py-3 cursor-pointer sm:gap-x-10 xl:gap-x-32'>
                <div className='flex '>
                  <img className='h-[40px] mr-2' src={lich} alt='' />
                  <div className='text-sm'>
                    <p className='uppercase'>Nhận phòng</p>
                    <p className='font-bold'>Chọn ngày</p>
                  </div>
                </div>
                <div className='flex '>
                  <img className='h-[40px] mr-2' src={lich} alt='' />
                  <div className='text-sm'>
                    <p className='uppercase'>Trả phòng</p>
                    <p className='font-bold'>Chọn ngày</p>
                  </div>
                </div>
              </div>
              <div className='flex  pt-3 pb-3 cursor-pointer'>
                <img className='h-[40px] mr-2' src={user} alt='' />
                <div className='text-sm'>
                  <p className='uppercase'>Hành khách</p>
                  <p className='font-bold'>1 khách</p>
                </div>
              </div>
            </div>
            <button className='bg-primary md:w-[172px] md:mt-auto md:h-max text-white font-bold w-full py-3 rounded-lg'>
              Tìm ngay
            </button>
          </div>
        </div>
      )
    },
    {
      label: 'Tour du lịch',
      value: 'tour-du-lich',
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
      content: (
        <div className='md:flex justify-between'>
          <div className='flex border-b md:border-0 pb-3 md:pt-3 cursor-pointer'>
            <img className='h-[40px] mr-2' src={local1} alt='' />
            <div className='text-sm'>
              <p className='uppercase'>Địa điểm</p>
              <p className='font-bold'>Bạn muốn đi đâu?</p>
            </div>
          </div>
          <div className='flex  pt-3 pb-3 cursor-pointer'>
            <img className='h-[40px] mr-2' src={local2} alt='' />
            <div className='text-sm'>
              <p className='uppercase'>Khởi hành từ</p>
              <select name='from' id='from' className='font-bold'>
                <option value=''>Vui lòng chọn</option>
                <option value=''>Cần thơ</option>
                <option value=''>Hạ Long</option>
                <option value=''>Hà Nội</option>
                <option value=''>Hồ Chí Minh</option>
                <option value=''>Huế</option>
                <option value=''>Nha Trang</option>
                <option value=''>Phú Quốc</option>
                <option value=''>Tây Nguyên</option>
                <option value=''>Quy Nhơn</option>
                <option value=''>Đà Lạt </option>
                <option value=''>Đà Nẵng </option>
              </select>
            </div>
          </div>
          <button className='bg-primary text-white font-bold w-full md:w-[172px] py-3 rounded-lg'>Tìm ngay</button>
        </div>
      )
    }
  ]
  return (
    <div>
      <Link to={'/'}>
        <div className='h-[150px] md:h-max'>
          <img className='w-full h-full object-cover' src={homeBaner} alt='' />
        </div>
      </Link>
      <div className='md:h-[100px] relative z-20'>
        <div
          style={{ boxShadow: '0 0 28px 6px rgba(0,0,0,.2)' }}
          className='rounded-3xl -translate-y-7 md:-translate-y-20 top-0 left-1/2 md:-translate-x-1/2 w-full md:absolute bg-white !overflow-hidden p-2 max-w-[900px] mx-auto '
        >
          <Tabs value={activeTab} className=''>
            <TabsHeader
              placeholder={''}
              className=' border-b rounded-t-lg border-blue-gray-50 bg-transparent p-0'
              indicatorProps={{
                className: 'bg-transparent border-b-4 border-primary shadow-none rounded-none'
              }}
            >
              {data.map(({ label, value }) => (
                <Tab
                  placeholder={''}
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={
                    activeTab === value
                      ? 'text-primary font-bold text-base pb-3 w-max md:px-6 px-3'
                      : 'font-bold pb-3 text-base text-[#828282] hover:text-primary w-max md:px-6 px-3'
                  }
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody placeholder={''}>
              {data.map(({ value, content }) => (
                <TabPanel key={value} value={value}>
                  {content}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
      <div className='md:border-b-[1px] border-b-[8px] pb-12 '>
        <div className=' mt-0 md:mt-[100px] container !max-w-[900px] md:flex '>
          <div className='flex items-center gap-3 pb-5 md:pr-6 md:pb-0 md:border-b-0 md:border-r border-b border-secondary'>
            <img className='w-[56px]' loading='lazy' src={muuoinam} alt='' />
            <div className='text-secondary text-xl'>
              <p>
                <strong>14</strong> năm chặng đường
              </p>
              <p className='uppercase font-bold'>CHINH PHỤC MỘT NIỀM TIN</p>
            </div>
          </div>
          <div className='flex gap-4 pt-4 md:pt-0 md:pl-8'>
            <div className='flex flex-col items-center gap-1'>
              <img className='w-[42px]' loading='lazy' src={luon1} alt='' />
              <p className='text-sm text-center'>Luôn có giá tốt</p>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <img className='w-[42px]' loading='lazy' src={luon2} alt='' />
              <p className='text-sm text-center'>Công ty du lịch hàng đầu Việt Nam</p>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <img className='w-[42px]' loading='lazy' src={luon3} alt='' />
              <p className='text-sm text-center'>99% khách hàng hài lòng</p>
            </div>
          </div>
        </div>
      </div>
      <div className='md:border-b-[1px] border-b-[8px] pt-6 md:pt-10 pb-6'>
        <div className='container !max-w-[1160px] grid grid-cols-4 gap-y-4 md:grid-cols-7'>
          {homeButton.map((item, index) => (
            <Link to={item.path} key={index}>
              <div
                className='w-[56px] h-[56px] rounded-2xl mx-auto mb-2 flex items-center justify-center'
                style={{
                  backgroundImage: 'linear-gradient(180deg, #ff9448 0, #e9680c 70%)',
                  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, .25))'
                }}
              >
                {item.icon}
              </div>
              <p className='text-center font-bold text-sm md:w-[80px] md:mx-auto'>{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className='container md:border-b-[1px] border-b-[8px] mt-[30px]'>
        <h2 className='font-bold text-[#444444] text-[26px] text-center'>
          Khuyến mại <strong className='text-red-800'>HOT</strong> tại BestPrice
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-4'>
          <Link to={'/'}>
            <img loading='lazy' src={homead1} alt='homead1' />
          </Link>
          <Link to={'/'}>
            <img loading='lazy' src={homead2} alt='homead1' />
          </Link>
          <Link to={'/'}>
            <img loading='lazy' src={homead3} alt='homead1' />
          </Link>
        </div>
        <div className='md:flex md:mt-10 mb-12'>
          <div className='md:w-[430px] md:pr-10'>
            <p className='font-bold text-lg mt-10 md:mt-5'>
              Tổng đại lý của hơn <strong className='text-re-800'>50</strong> hãng hàng không trong nước & quốc tế
            </p>
            <p className='mt-2'>
              Với hệ thống tìm kiếm và so sánh giá linh hoạt, khách hàng sẽ đặt được vé máy bay giá rẻ nhất
            </p>
          </div>
          <div className='grid grid-cols-3 md:gap-x-10 md:grid-cols-4 gap-y-5 mt-2 md:flex-1'>
            {Array(12)
              .fill(0)
              .map((_, index) => (
                <div key={index} className='rounded-md border border-white overflow-hidden hover:border-primary'>
                  <img loading='lazy' className='w-[130px] mx-auto' src={vietnam1} alt='vietnam1' />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className='container mt-[30px]'>
        <div className='md:flex md:mt-10  mb-10'>
          <div className='md:w-[430px] md:pr-10'>
            <p className='font-bold text-lg mt-10 md:mt-5'>Đối tác khách sạn hàng đầu</p>
            <p className='mt-2'>
              BestPrice liên kết chọn lọc với những đối tác uy tín, chất lượng để mang đến bạn những trải nghiệm tuyệt
              vời.
            </p>
          </div>
          <div className='grid grid-cols-3 md:gap-x-10 md:grid-cols-4 gap-y-5 mt-2 md:flex-1'>
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <div key={index} className='rounded-md border border-white overflow-hidden hover:border-primary'>
                  <img className='w-[130px] mx-auto' src={vietnam1} alt='vietnam1' />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className='bg-[#fcfcfc] pt-10 pb-10'>
        <div className='container'>
          <h2 className='font-bold text-xl text-center mb-[30px]'>Thành tựu & giải thưởng</h2>
          <div className='grid-cols-1 grid md:grid-cols-5'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div key={index} className='py-4 px-2.5 grid grid-cols-2 md:flex flex-col'>
                  <img className='w-[96px] mx-auto' src={top10} loading='lazy' alt='' />
                  <div className='font-bold text-sm mt-3 md:text-center'>
                    Top 10 Dịch vụ du lịch được yêu thích nhất
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='pt-10'>
          {homeLinkFooter.map((item, index) => (
            <div key={index} className='pb-6 border-b last:border-0 mb-6'>
              <h3 className='font-bold text-xl text-[#444444] mb-3'>{item.title} </h3>
              <div className='grid grid-cols-2 md:grid-cols-5 gap-2.5 gap-x-6 md:gap-x-2.5'>
                {item.links.map((items, indexs) => (
                  <Link key={indexs} className='hover:text-primary' to={items.path}>
                    {items.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
