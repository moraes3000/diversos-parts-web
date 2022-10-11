import type { NextPage } from 'next'
import BtnWhatssap from '../components/btnWhatssap'
import Contato from '../components/Contato'
import { Header } from '../components/Header'
import { Produtos } from '../components/Produtos'
import { Sobre } from '../components/Sobre'


const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Sobre />
      <Produtos />
      <Contato />
      <BtnWhatssap phone={5511981334418} msg='Olá gostaria de conversar sobre o...' />

    </>
  )
}

export default Home
