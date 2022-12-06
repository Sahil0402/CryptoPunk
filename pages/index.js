import { useAddress, useMetamask } from '@thirdweb-dev/react'
import Main from '../components/Home'
import Image from 'next/image'
import banner from '../assets/banner.png'

const img = require("../assets/banner.png");
const style = {
  wrapper: 'flex h-screen items-center justify-center',
  connectWalletButton: 'rounded-lg border border-black px-10 py-5 transition-all hover:bg-black hover:text-blue-500',
}
const styling = {
  backgroundImage: `url('${img}')`,
  width:"100%",
  height:"100%",
}

export default function Home() {

  const connectWithMetamask = useMetamask()
  const address = useAddress()

  console.log(address)

  const Auth = () => {
    return (
      <div className={style.wrapper}>
        <button
          onClick={connectWithMetamask}
          className={style.connectWalletButton}
        >Connect Metamask
        </button>
      </div>
    )
  }

  return <>{address ? <Main /> : Auth()}</>
}
