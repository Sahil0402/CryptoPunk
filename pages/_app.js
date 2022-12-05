import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return( 
    <ThirdwebProvider
      desiredChainId={ChainId.Goerli}
      chainRpc={{
        [ChainId.Goerli]:'https://goerli.infura.io/v3/9c38e0fe9a8b4fd883eb71d2f50c292c'
      }}
      >
        <ThemeProvider>
                  <Component {...pageProps} />
        </ThemeProvider>
    </ThirdwebProvider>
  )
}
export default MyApp
