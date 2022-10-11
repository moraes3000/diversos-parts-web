import Image from 'next/image'
import Link from 'next/link'
import img1 from '../../public/img1.png'

export function Produtos() {
  return (
    <section className="w-full bg-[#000] py-10 text-white" id='produtos'>


      <div className='max-w-5xl  mx-auto grid grid-cols-4 gap-4  p-5'>
        <div className='   col-span-4 sm:col-span-2'>
          <h2 className="font-bold text-4xl mb-5">Produtos que trabalhamos </h2>


          <nav className="mb-10">
            <ul className="flex flex-col gap-4 flex-wrap ">
              <li className="text-gray-100 ">
                <Link href={`/menu/todas`}>
                  <a className='active'>Linha Leve</a>
                </Link >
              </li>

              <li className="text-gray-100 " key='slug'>
                <Link href={`/menu/slug`}>
                  Linha Pesada
                </Link >
              </li>
              <li className="text-gray-100 " key='slug'>
                <Link href={`/menu/slug`}>
                  Linha Importada
                </Link >
              </li>
              <li className="text-gray-100 " key='slug'>
                <Link href={`/menu/slug`}>
                  Linha Moto/Diversas
                </Link >
              </li>

            </ul>
          </nav>

        </div>

        <div className='  col-span-4 sm:col-span-2   grid grid-cols-3 gap-5'>
          <Image src={img1} className=' object-cover w-36 h-24' />
          <Image src={img1} className=' object-cover w-36 h-24' />
          <Image src={img1} className=' object-cover w-36 h-24' />
          <Image src={img1} className=' object-cover w-36 h-24' />
          <Image src={img1} className=' object-cover w-36 h-24' />


        </div>


      </div>

    </section>
  )
}