import { Link } from 'react-router-dom'
import { footerContent, footerImage, footerContact } from '~/constants/renaral.const'
import bocongthuong from '~/assets/icons/bo-cong-thuong.png'
import email_new from '~/assets/icons/email_new.png'

const Footer = () => {
  return (
    <div className='relative '>
      <div className='mx-auto max-w-[1170px] px-2.5 absolute w-full left-1/2 -translate-x-1/2 -top-24 md:-top-12  h-max'>
        <div className=' md:px-10 bg-white md:grid grid-cols-2 items-center rounded-md border border-primary p-2'>
          <div className='flex md:pr-6 lg:pr-32 items-center '>
            <img className='flex-shrink-0 h-max' src={email_new} alt='email_new' />
            <div className='ml-3'>
              <div className='font-bold text-xl mb-2'>
                Cơ hội giảm giá tới <span className='text-3xl text-primary'>50%</span>
              </div>
              <p>Hãy đăng ký ngay để nhận ưu đãi bí mật từ BestPrice nhé!</p>
            </div>
          </div>
          <div className='md:flex md:h-max gap-x-1'>
            <input
              type='text'
              placeholder='Nhập email của bạn'
              className='my-2 md:my-0 w-full md:flex-1 bg-[#f6f6f6] px-3 py-1.5 leading-9  rounded'
            />
            <button className='border border-primary md:border-primaryLight bg-primaryLight md:w-[140px] text-primary font-bold rounded w-full py-3 md:py-0'>
              Đăng ký ngay
            </button>
          </div>
        </div>
      </div>
      <div className='bg-primary'>
        <div className='mx-auto max-w-[1170px] px-2.5 mt-[180px]  pt-44 md:pt-28'>
          <h2 className='font-bold text-white text-2xl mb-6'>Công ty Cổ Phần Công nghệ Du Lịch BestPrice</h2>
          <div className='grid grid-cols-1 lg:grid-cols-3 text-white'>
            <div className='md:col-span-2'>
              <div className='mb-4'>
                <p>
                  57 Trần Quốc Toản, phường Trần Hưng Đạo, quận Hoàn Kiếm, Hà Nội.{' '}
                  <strong>
                    <a href='tel:02873072605'>(024) 7307 2605</a>
                  </strong>
                </p>
              </div>
              <div className='mb-4'>
                <p>
                  {' '}
                  21 Bùi Thị Xuân, Phường Bến Thành, Quận 1, Hồ Chí Minh.{' '}
                  <strong>
                    <a href='tel:02873072605'>(024) 7307 2605</a>
                  </strong>
                </p>
              </div>
              <div className='mb-4'>
                <p>
                  {' '}
                  Số 32, đường 208, Cái Tắt, An Đồng, An Dương, Hải Phòng.{' '}
                  <strong>
                    <a href='tel:02873072605'>(024) 7307 2605</a>
                  </strong>
                </p>
              </div>
              <div className='mb-4'>
                <p>Giấy phép kinh doanh số: 0104679428. Ngày cấp: 26/05/2010. Nơi cấp: Sở KH & ĐT TP Hà Nội.</p>
              </div>
              <div className='mb-4'>
                <p>Giấy phép kinh doanh Lữ Hành Quốc Tế số 01-1794/2022/TCDL- GPLHQT</p>
              </div>
            </div>
            <div className='md:col-span-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 lg:pl-10 text-sm mb-8 border-t pt-4 lg:pt-0 lg:border-t-0 lg:border-l'>
              {footerContent.map((item, index) => (
                <Link className='leading-8 font-bold' key={index} to={item.path}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-secondary'>
        <div className='text-white md:flex items-center mx-auto max-w-[1170px] px-2.5 py-2.5'>
          <p className='mb-3 md:mr-10'>
            Các thương hiệu cùng tập đoàn <strong>BPGroup</strong>:
          </p>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
            {footerImage.map((item, index) => (
              <img loading='lazy' key={index} src={item} alt={item} />
            ))}
          </div>
        </div>
      </div>
      <div className='bg-white mx-auto max-w-[1170px] justify-center px-2.5 p-2.5 md:flex items-center'>
        <img className='mx-auto block md:mx-0' src={bocongthuong} alt='bocongthuong' />
        <div className='flex justify-center items-center gap-1 my-2'>
          {footerContact.map((item, index) => (
            <Link key={index} to={'/'}>
              {' '}
              <img src={item} alt={item} />{' '}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
