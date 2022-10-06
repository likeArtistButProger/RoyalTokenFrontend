import { Web3ReactProvider } from "@web3-react/core"
import { ethers } from "ethers"
import AuthorizeModalProvider from "../src/components/AuthorizeModal/AuthorizeModalProvider";

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 15000;

  return library;
}

function MyApp({ Component, pageProps }) {
  return <Web3ReactProvider getLibrary={getLibrary}>
      <AuthorizeModalProvider>
        <Component {...pageProps} />
      </AuthorizeModalProvider>
  </Web3ReactProvider>
}

export default MyApp
