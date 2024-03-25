/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'
import homeBaner from '~/assets/images/banner-ve-new-62e1ef8064cf3.jpg'
import luon1 from '~/assets/icons/luon-co-gia-tot-2.png'
import luon2 from '~/assets/icons/cong-ty-du-lich-hang-dau-2.png'
import luon3 from '~/assets/icons/99-hai-long-2.png'
import muuoinam from '~/assets/icons/14-nam.png'
import local1 from '~/assets/icons/local1.png'
import vietnam1 from '~/assets/images/VN.png'
import tin1 from '~/assets/images/tin1.jpg'
import danhgai1 from '~/assets/images/VN (1).png'
import q from '~/assets/icons/q.png'
import a from '~/assets/icons/a.png'

import lich from '~/assets/icons/lich.png'
import user from '~/assets/icons/user.png'
import fb from '~/assets/images/icon-fb.png'
import zl from '~/assets/images/icon-zalo.png'
import { Accordion, AccordionBody, AccordionHeader, Switch } from '@material-tailwind/react'
import { useState } from 'react'
import { veMayBayDiemDen } from '~/constants/renaral.const'
export const VeMayBay = () => {
  const [open, setOpen] = useState(0)

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value)
  const [openQ, setOpenQ] = useState(0)

  const handleOpenQ = (value: any) => setOpenQ(openQ === value ? 0 : value)
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
      <div className='container'>
        <h2 className='text-textColor text-2xl mb-2 md:text-[26px] font-bold md:text-center'>
          Tìm và đặt vé giá rẻ trong tháng
        </h2>
      </div>
      <div className='container'>
        <div className='bg-[#fce6d6] pt-4 px-3 text-textColor pb-5'>
          <h4 className='text-primary font-bold text-2xl mb-2.5'>Vì sao nên đặt vé tại BestPrice?</h4>
          <p className='mb-2.5'>Nhiều ưu đãi đặc quyền cho khách hàng thân thiết</p>
          <p className='mb-2.5'>
            Đội ngũ tư vấn tận tâm, hỗ trợ <strong>24/7</strong>
          </p>
          <p className='mb-2.5'>
            Phục vụ hơn 500.000 lượt khách mỗi năm với <strong>99%</strong> khách hàng hài lòng
          </p>
          <div className='grid grid-cols-2 mt-2'>
            <div>
              <p className='font-bold'>Tổng đài hỗ trợ</p>
              <a href='tel:19002605' className='text-xl text-red-900 font-bold'>
                1900 2605
              </a>
              <a className='block font-bold text-xs' href='tel:02473072605'>
                HN: (024) 7307 2605
              </a>
              <a className='block font-bold text-xs' href='tel:02873072605'>
                HCM: (028) 7307 2605
              </a>
            </div>
            <div>
              <p className='font-bold'>Chat với BestPrice</p>
              <div className='flex gap-x-4 mt-2'>
                <Link to={'/'}>
                  <img className='rounded-xl w-[50px] h-[50px]' src={fb} alt='fb' />
                </Link>
                <Link to={'/'}>
                  <img className='rounded-xl w-[50px] h-[50px]' src={zl} alt='zl' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className=' md:mt-10 mb-12'>
          <div className='md:pr-10'>
            <p className='font-bold text-2xl  text-textColor text-center mt-10 md:mt-5'>Đối tác hàng không</p>
          </div>
          <div className='grid grid-cols-3 md:grid-cols-7 md:gap-x-10 gap-y-5 mt-2 md:flex-1'>
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
      <div className='container !max-w-[900px] mb-10'>
        <h2 className='text-textColor font-bold text-2xl'>Câu hỏi thường gặp</h2>
        <div className='mt-3 grid gap-y-5'>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <Accordion
                key={index}
                placeholder=''
                open={openQ === index + 1}
                icon={<Icon id={index + 1} open={openQ} />}
              >
                <AccordionHeader
                  className='text-base pl-3 pr-3 font-normal text-textColor bg-[#f2f2f2] border-b-0'
                  placeholder=''
                  onClick={() => handleOpenQ(index + 1)}
                >
                  1.Vì sao nên đặt vé máy bay tại BestPrice?
                </AccordionHeader>
                <AccordionBody className='pt-2 text-[#333333] text-base font-normal'>
                  <p className='mb-2'>
                    <strong>BestPrice</strong> với hơn 13 năm kinh nghiệm trong ngành, phục vụ hàng TRIỆU lượt khách mỗi
                    năm. Quý khách hoàn toàn yên tâm đặt vé tại BestPrice.vn vì:
                  </p>
                  <ul className='mb-2 !list-disc'>
                    <li>- Hệ thống tìm, so sánh và đặt vé máy bay dễ dàng, tiện lợi, nhanh chóng.</li>
                    <li>- Đội ngũ tư vấn giàu kinh nghiệm, tận tâm, luôn hỗ trợ khách hàng tận tình.</li>
                    <li>
                      - Hình thức thanh toán đa dạng và linh hoạt: online, chuyển khoản, tại văn phòng, tại các cửa hàng
                      tiện lợi
                    </li>
                    <li>
                      - Nhiều ưu đãi đặc quyền cho khách hàng thân thiết: ưu đãi cho lần đặt sau, tặng voucher dịp sinh
                      nhật, giảm giá trên các dịch vụ khác như phòng khách sạn, tour du lịch... và đặc biệt được ưu đãi
                      khi mua tại Hệ thống nhà thuốc Pharmart cùng tập đoàn.
                    </li>
                  </ul>
                  <p className='mb-2'>
                    Hãy gọi ngay <strong className='text-[#3385d6] cursor-pointer hover:text-primary'>1900 2605</strong>{' '}
                    để được đội ngũ tư vấn của BestPrice hỗ trợ nhé!
                  </p>
                </AccordionBody>
              </Accordion>
            ))}
        </div>
      </div>
      <div className='container mb-20'>
        <h2 className='text-textColor font-bold text-2xl mb-5'>Tin vé khuyến mại máy bay</h2>
        <div className='grid-cols-1 md:grid-cols-2 gap-y-6 grid gap-x-20'>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <Link to={'/'} key={index} className='flex gap-x-3'>
                <div className='w-[144px] md:w-[155px] flex-shrink-0'>
                  <img className='w-full h-full object-cover' loading='lazy' src={tin1} alt='tin1' />
                </div>
                <div className='text-base font-bold hover:text-primary'>
                  Vietnam Airlines: GIẢM NGAY 25% nhóm 04 khách bay đi Indonesia
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className='container !max-w-[900px] mb-5'>
        <h2 className='text-textColor font-bold text-2xl mb-6'>Đánh giá dịch vụ máy bay</h2>
        <div className='px-2.5'>
          <div className='p-2.5 bg-[#efefef] rounded-lg md:flex'>
            <div className='grid gap-y-3 md:w-[335px] md:h-max'>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className='bg-white rounded-md px-2 py-1.5 flex items-center justify-between'>
                    <div className='flex items-center gap-x-2'>
                      <img loading='lazy' src={danhgai1} alt='danhgai1' className='w-[25px] flex-shrink-0' />
                      <p className='text-textColor text-sm font-medium'>Vietnam Airlines</p>
                    </div>
                    <div className='flex items-center gap-x-2 text-sm'>
                      <span className='text-[#297aa8] font-medium'>8.4 - Rất tốt</span>
                      <span>(27)</span>
                      <svg width={14} height={11} viewBox='0 0 14 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M14 1.10402L6.15927 10.6563L0 5.65457L1.16213 4.29577L5.89779 8.14038L12.5837 0L14 1.10402Z'
                          fill='#E9680C'
                        />
                      </svg>
                    </div>
                  </div>
                ))}
            </div>
            <div className='mt-5 md:mt-0 md:ml-10'>
              <div className='grid gap-y-3'>
                <div className='flex items-end w-full pr-10'>
                  <p className='text-sm font-medium flex-1 md:mr-4'>Đúng giờ</p>
                  <div className='flex items-end gap-x-4'>
                    <div className='w-[154px] md:w-[70px] -translate-y-1 relative border-b border-[#c4c4c4] h-[5px]'>
                      <div className='absolute -bottom-[1px] left-0 w-[60%] h-full bg-primary'></div>
                    </div>
                    <div className='text-sm'>8.5</div>
                  </div>
                </div>
                <div className='flex items-end w-full pr-10'>
                  <p className='text-sm font-medium flex-1 md:mr-4'>Dịch vụ</p>
                  <div className='flex items-end gap-x-4'>
                    <div className='w-[154px] md:w-[70px] -translate-y-1 relative border-b border-[#c4c4c4] h-[5px]'>
                      <div className='absolute -bottom-[1px] left-0 w-[60%] h-full bg-primary'></div>
                    </div>
                    <div className='text-sm'>8.5</div>
                  </div>
                </div>
                <div className='flex items-end w-full pr-10'>
                  <p className='text-sm font-medium flex-1 md:mr-4'>Tiếp viên hàng không</p>
                  <div className='flex items-end gap-x-4'>
                    <div className='w-[154px] md:w-[70px] -translate-y-1 relative border-b border-[#c4c4c4] h-[5px]'>
                      <div className='absolute -bottom-[1px] left-0 w-[60%] h-full bg-primary'></div>
                    </div>
                    <div className='text-sm'>8.5</div>
                  </div>
                </div>
              </div>
              <div className='pr-10 mt-6'>
                <div className='mb-3 flex text-sm justify-between items-end '>
                  <p className='font-medium flex-shrink-0'>Tuyệt vời</p>
                  <div className='w-full -translate-y-1 relative mr-7 border-b border-[#c4c4c4] h-[5px]'></div>
                  <p className='w-[25px] text-end'>7</p>
                </div>
                <div className='mb-3 flex text-sm justify-between items-end '>
                  <p className='font-medium flex-shrink-0'>Rất tốt</p>
                  <div className='w-full -translate-y-1 relative mr-7 border-b border-[#c4c4c4] h-[5px]'></div>
                  <p className='w-[25px] text-end'>17</p>
                </div>
                <div className='mb-3 flex text-sm justify-between items-end '>
                  <p className='font-medium flex-shrink-0'>Bình thường</p>
                  <div className='w-full -translate-y-1 relative mr-7 border-b border-[#c4c4c4] h-[5px]'></div>
                  <p className='w-[25px] text-end'>1</p>
                </div>
                <div className='mb-3 flex text-sm justify-between items-end '>
                  <p className='font-medium flex-shrink-0'>Không tốt</p>
                  <div className='w-full -translate-y-1 relative mr-7 border-b border-[#c4c4c4] h-[5px]'></div>
                  <p className='w-[25px] text-end'>0</p>
                </div>
                <div className='mb-3 flex text-sm justify-between items-end '>
                  <p className='font-medium flex-shrink-0'>Kinh khủng</p>
                  <div className='w-full -translate-y-1 relative mr-7 border-b border-[#c4c4c4] h-[5px]'></div>
                  <p className='w-[25px] text-end'>0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='px-2.5'>
          {Array(7)
            .fill(0)
            .map((_, index) => (
              <div key={index} className='py-5 border-b last:border-b-0'>
                <div className='flex gap-x-3 items-center'>
                  <div className='bg-[#297aa8] flex-shrink-0 rounded-md w-10 h-10 text-white font-medium flex items-center justify-center'>
                    8.7
                  </div>
                  <div>
                    <div className='flex items-center gap-x-2 '>
                      <p className='font-bold text-[#297aa8]'>Rất tốt</p>
                      <p>-</p>
                      <p>Phạm Mai Hoa</p>
                    </div>
                    <div className='flex items-center gap-x-2 text-sm flex-wrap'>
                      <p className='text-[#3385d6]'>Chuyến bay VN55</p>
                      <p>-</p>
                      <p className='text-textColor font-bold'>Vietnam Airlines </p>
                      <p>09/03/2024</p>
                    </div>
                  </div>
                </div>
                <p className='mt-2'>
                  Hướng dẫn viên chu đáo, kiến thức tốt, nhạy bén , tài xế lái xe an toàn, thân thiện, bạn Quyền tư vấn
                  tốt
                </p>
              </div>
            ))}
        </div>
        <button className='w-max mx-auto block text-sm border-[#2d9cdb] border text-[#2d9cdb] py-1.5 hover:text-white hover:bg-[#2d9cdb] transition-all duration-500 rounded-md px-3'>
          Xem thêm <strong>(17)</strong>
        </button>
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
      <div className='container'>
        <h2 className='text-textColor font-bold text-2xl'>Tìm mua vé máy bay</h2>
        <div className='mt-2'>
          {veMayBayDiemDen.map((iitem, index) => (
            <Accordion key={index} placeholder='' open={open === index + 1} icon={<Icon id={index + 1} open={open} />}>
              <AccordionHeader className='text-lg text-textColor' placeholder='' onClick={() => handleOpen(index + 1)}>
                {iitem.title}
              </AccordionHeader>
              <AccordionBody>
                <ul>
                  {iitem.links.map((items, indexs) => (
                    <li className='text-textColor text-base font-normal leading-7' key={indexs}>
                      <Link to={items.path}>{items.title}</Link>
                    </li>
                  ))}
                </ul>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  )
}
