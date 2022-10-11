
import { IoLogoWhatsapp } from "react-icons/io";

interface whatMensagemProps {
  phone: number;
  msg: string
}

export default function BtnWhatssap(whats: whatMensagemProps) {
  return (
    <>
      <div className='fixed right-5 bottom-5'>
        <a target='_blank' href={`https://api.whatsapp.com/send?phone=${whats.phone}&text=${whats.msg}`} rel="noreferrer">
          <IoLogoWhatsapp fill={'#45c153'} size={36} />
        </a>
      </div>

    </>
  )
}