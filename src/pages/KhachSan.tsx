/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'
import homeBaner from '~/assets/icons/home-page-about-best-price-63bfd4eec5d18.jpg'
import local1 from '~/assets/icons/local1.png'
import lich from '~/assets/icons/lich.png'
import user from '~/assets/icons/user.png'
import luon1 from '~/assets/icons/luon-co-gia-tot-2.png'
import luon2 from '~/assets/icons/cong-ty-du-lich-hang-dau-2.png'
import luon3 from '~/assets/icons/99-hai-long-2.png'
import ks1 from '~/assets/icons/kháchan1.png'
import ks2 from '~/assets/icons/kháchan2.png'
import ks3 from '~/assets/icons/kháchan3.png'
import muuoinam from '~/assets/icons/14-nam.png'
import q from '~/assets/icons/q.png'
import a from '~/assets/icons/a.png'
// import resort1 from '~/assets/images/resort-gan-ha-noi-617f559a660e6.jpeg'
import { khachSan } from '~/constants/renaral.const'
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react'
import { useState } from 'react'
const KhachSan = () => {
  const [open, setOpen] = useState(0)

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value)

  function Icon({ id, open }: any) {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='currentColor'
        className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
      </svg>
    )
  }
  return (
    <div>
      <Link to={'/'}>
        <div className='h-[150px] md:h-max'>
          <img loading='lazy' className='w-full h-full object-cover' src={homeBaner} alt='' />
        </div>
      </Link>
      <div className='md:h-[100px] relative z-20'>
        <div
          style={{ boxShadow: '0 0 28px 6px rgba(0,0,0,.2)' }}
          className='rounded-3xl -translate-y-7 md:-translate-y-20 top-0 left-1/2 md:-translate-x-1/2 w-full md:absolute bg-white !overflow-hidden p-2 max-w-[900px] mx-auto '
        >
          <div>
            <p className='text-[26px] font-bold text-textColor px-2 pb-3 border-b mb-3 pt-1 md:text-3xl'>Tìm khách sạn giá tốt </p>
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
        </div>
      </div>
      <div className=' pb-12 '>
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
      <div className='bg-[#f6f6f6] py-3'>
        <div className='container !max-w-[900px] grid-cols-2 gap-3 grid md:grid-cols-3'>
          <Link to={'/'} style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.16)' }} className='bg-white justify-center md:gap-x-3 items-center md:flex rounded-md px-[5px] py-[15px]'>
            <img className='mx-auto h-[27px] md:mx-0 mb-1' src={ks1} loading='lazy' alt="ks1" />
            <p className='font-bold text-center'>Voucher khách sạn</p>
          </Link>
          <Link to={'/'} style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.16)' }} className='bg-white justify-center md:gap-x-3 items-center md:flex rounded-md px-[5px] py-[15px]'>
            <img className='mx-auto h-[27px] md:mx-0 mb-1' src={ks2} loading='lazy' alt="ks2" />
            <p className='font-bold text-center'>Khách sạn toàn quốc</p>
          </Link>
          <Link to={'/'} style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.16)' }} className='bg-white justify-center md:gap-x-3 items-center md:flex rounded-md px-[5px] py-[15px]'>
            <img className='mx-auto h-[27px] md:mx-0 mb-1' src={ks3} loading='lazy' alt="ks3" />
            <p className='font-bold text-center'>Nghỉ dưỡng gần Hà Nội</p>
          </Link>
        </div>
      </div>
      <div className='container'>

      </div>
      <div className='container mb-10'>
        <h2 className='text-textColor font-bold text-2xl'>Khách sạn theo địa điểm</h2>
        <div className='mt-2'>
          {khachSan.map((iitem, index) => (
            <Accordion key={index} placeholder='' open={open === index + 1} icon={<Icon id={index + 1} open={open} />}>
              <AccordionHeader className='text-lg text-textColor' placeholder='' onClick={() => handleOpen(index + 1)}>
                {iitem.title}
              </AccordionHeader>
              <AccordionBody>
                <ul className='grid grid-cols-2 md:grid-cols-4'>
                  {iitem.links.map((items, indexs) => (
                    <li className='text-textColor hover:text-primary text-base font-normal leading-7' key={indexs}>
                      <Link to={items.path}>{items.title}</Link>
                    </li>
                  ))}
                </ul>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
      <div className='container !max-w-[900px] mb-5'>
        <h2 className='text-textColor font-bold text-2xl mb-6'>
          Hỏi đáp <span className='font-normal'>(1118)</span>
        </h2>
        <form style={{ boxShadow: '0 0 7px 3px #dfdfdf' }} className='rounded-md md:flex'>
          <div className='md:flex-1 '>
            <textarea
              name=''
              id=''
              placeholder='Mời bạn để lại câu hỏi...'
              className='text-sm w-full py-1.5 px-3'
            ></textarea>
          </div>
          <div className='p-1.5 bg-[#fafafa]'>
            <button type='submit' className='md:px-10 text-[#2272b9] bg-[#e4eef7] w-full py-2.5 font-bold rounded'>
              Đặt câu hỏi
            </button>
          </div>
        </form>
        <div>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div key={index} className='border-b pb-6'>
                <div className='my-5 p-4 rounded-md bg-[#fafafa] flex gap-x-3'>
                  <img src={q} alt='q' loading='lazy' className='w-[40px] !flex-shrink-0 h-[32px]' />
                  <div className='w-full'>
                    <div className='flex justify-between items-center'>
                      <p className='text-gray-600'>Nhật Minh, 21/03/2024</p>
                      <div className='text-primary'>Trả lời</div>
                    </div>
                    <p className='mt-1'>check vé đi Sing từ HN ngày 26/4 giúp mình nhé</p>
                  </div>
                </div>
                <div className='p-4 border rounded-md flex gap-x-3 relative'>
                  <div className='absolute border-[15px] border-solid border-transparent border-b-[#ddd] left-4 bottom-full'></div>
                  <img src={a} alt='a' loading='lazy' className='w-[38px] !flex-shrink-0 h-[32px]' />
                  <div className='w-full'>
                    <div className='flex justify-between items-center'>
                      <p className='text-gray-600'>Nhật Minh, 21/03/2024</p>
                      <div className='text-primary'>Trả lời</div>
                    </div>
                    <div className='mt-1'>
                      <p className='mb-2 text-textColor'>Dạ em chào anh,</p>
                      <p className='mb-2 text-textColor'>
                        Tại thời điểm kiểm tra, ngày 26/4 chặng bay Hà Nội - Singapore có mức giá rẻ nhất là 4.278.000đ/
                        người (đã bao gồm thuế phí). Chuyến bay thẳng khởi hành lúc 13h25 và hạ cánh vào 17h45 cùng
                        ngày, do Scoot khai thác.
                      </p>
                      <p className='mb-2 text-textColor'>
                        Giá vé có thể thay đổi tùy từng thời điểm. Nếu cần thêm thông tin, Quý khách vui lòng liên hệ
                        BestPrice theo tổng đài 1900 2605 để được hỗ trợ đặt vé máy bay nhanh chóng với giá tốt nhất!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <button className='w-max mt-5 mx-auto block text-sm border-[#2d9cdb] border text-[#2d9cdb] py-1.5 hover:text-white hover:bg-[#2d9cdb] transition-all duration-500 rounded-md px-3'>
          Xem thêm <strong>(1115)</strong>
        </button>
      </div>
    </div>
  )
}

export default KhachSan
