import Image from 'next/image'
import img1 from '../../public/img1.png'

export function Sobre() {
  return (
    <section className="w-full bg-[#1E1E1E] py-10 text-white" id='sobre'>
      <div className='max-w-5xl  mx-auto flex gap-5 flex-col md:flex-row p-5'>
        <div className='flex mx-auto align-center justify-center  w-max-[400px]'>
          <Image src={img1} className='w-max-80 object-cover z-0' />
        </div>
        <div className="">
          <h2 className="font-bold text-4xl mb-5">Quem Somos </h2>
          <p className="mb-2 text-lg">
            Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat.
          </p>
          <p className="mb-2 text-lg">
            Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat.
          </p>
          <p className="mb-2 text-lg">
            Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat.
          </p>
        </div>

      </div>

    </section>
  )
}