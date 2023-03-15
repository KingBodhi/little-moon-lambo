import '../styles/globals.css'
import Link from 'next/link'
import { useEffect } from 'react'
import { gsap } from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
const ScrollTrigger = require('gsap/dist/ScrollTrigger')


gsap.registerPlugin(ScrollTrigger)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="bg-black">
        <p className="text-5xl md:text-8xl font-bold font-H3 text-white text-center pt-14 pb-6 md:pt-20 md:pb-14" id="crypto_heading">Little Moon Lambo</p>
        <nav className="boarder-b p-6 bg-black text-center sticky top-0 left-0 w-full z-50">
          <div className="flex gap-6 justify-center">
            <Link href="/">
              <a className="font-H3 text-yellow-400">
                Home
              </a>
            </Link>
            <Link href="/mintpass">
              <a className="font-H3 text-yellow-400">
                Mint
              </a>
            </Link>
          </div>
        </nav>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp



//<Link href="/my-assets">
//  <a className="mr-6 text-pink-500 font-D3">
//    My Digital Asset
//  </a>
//</Link>
//  </a>
//</Link>
//<Link href="/create-item">
//  <a className="text-pink-500 font-D3">
//    Sell Digital Asset
//  </a>
//</Link>
//<Link href="/creator-dashboard">
//  <a className="text-pink-500 font-D3">
//    Creator Dashboard
//  </a>
//</Link>
//<Link href="/render">
//  <a className="text-pink-500 font-D3">
//     Render
//  </a>
//</Link>
//      <Link href="/marketplace">
//        <a className="text-pink-500 font-D3">
//          Marketplace
//        </a>
//      </Link>
