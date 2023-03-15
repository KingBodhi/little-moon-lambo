import { gsap } from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import discord from '../public/Discord.png'
import twitter from '../public/Twitter.png'



export default function Home() {

  const bgs_wrapper = useRef(null)
  const bg_1 = useRef(null)
  const bg_2 = useRef(null)
  const floating_mint_btn = useRef(null)
  const footer = useRef(null)

  useEffect(() => {
    gsap.to(bg_1.current, {
      scrollTrigger: {
        trigger: bgs_wrapper.current,
        start: 'top 50%',
        end: 'bottom top',
        scrub: true
      },
      x: '-500px'
    })
    gsap.to(bg_2.current, {
      scrollTrigger: {
        trigger: bgs_wrapper.current,
        start: 'top 50%',
        end: 'bottom top',
        scrub: true
      },
      x: '500px'
    })

    gsap.to('#crypto_heading', {
      scrollTrigger: {
        trigger: '#crypto_heading',
        start: 'top top',
        end: 'bottom 15%',
        scrub: true,
        onUpdate(e) {
          if (!floating_mint_btn?.current) return;
          floating_mint_btn.current.style.opacity = e.progress
          floating_mint_btn.current.style.pointerEvents = e.progress > 0 ? 'all' : 'none'
          floating_mint_btn.current.style.transform = `translateY(${(1 - e.progress) * 20}px)`
        }
      },
      opacity: 0
    })

  }, [bgs_wrapper, bg_1, bg_2, floating_mint_btn, footer])


  return (
    <>

      <section id="Header" className="mt-8 max-w-full overflow-hidden">
        <div className="flex flex-col justify-center overflow-hidden items-center bg-black md:gap-10 -rotate-5" ref={bgs_wrapper}>
          <div ref={bg_1} className="w-[6000px] bg-cover bg-repeat-x h-[225px] repeat_bg_mobile md:repeat_bg_desktop" style={{ backgroundImage: `url(/gridLong1.png)` }}>
          </div>
          <div ref={bg_2} className="w-[6000px] -mt-8 md:mt-0 bg-cover bg-repeat-x h-[225px] repeat_bg_mobile md:repeat_bg_desktop" style={{ backgroundImage: `url(/gridLong2.png)` }}>
          </div>
        </div>
      </section>

      <section id="about" className="mt-10" >
        <div className="bg-black px-20 py-20">
          <div className="row">
            <div className="col-12 col-lg-4"></div>
            <div className="col-12 col-lg-8">
              <p className="text-white h2 font-H3 text-center text-lg leading-loose">
                Little Moon Lambo is a Community Collection for Lamborghi Enthusiast that Grants Users Access to a Real Life 2023 Lamborghini Huracan. With Multiple Tiers of Access Holders are granted Time Blocks where they can experience this exquisite piece of performance art at intervals of 10 minutes, 30 Minutes, and Longer with 1/1 Holders earning Dinner Parties with the Founders of the project. Stake your rights into a real life experience in a Lamborghini Huracan. The Little Moon Lambo is everything you have ever fantasized about and it's yours to own a piece of its Art
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap">
        <div className="bg-black">
          <div className="row pb-20">
            <div className="col-12 col-lg-4"></div>
            <div className="col-12 col-lg-8">
              <h2 className="text-white mb-5 font-H3 text-center text-6xl text-bold">ROADMAP</h2>
            </div>
          </div>
          <div className="row text-yellow-400 mb-4">
            <div className="col-12 col-md-4 font-H3 text-center text-xl text-bold pb-5">
              <h3 className="h1">Little Moon Lambo</h3>
            </div>
            <div className="col-12 col-md-8 pb-5">
              <p className="stage py-1 h2 pl-md-5 font-H3 text-center text-lg text-white">Little Moon Lambo, Little Moon Lambo, Little Moon Lambo, Little Moon Lambo</p>
            </div>
          </div>
          <div className="row text-yellow-400 mb-4">
            <div className="col-12 col-md-4 font-H3 text-center text-xl text-bold pb-5">
              <h3 className="h1">Little Moon Lambo</h3>
            </div>
            <div className="col-12 col-md-8 pb-5">
              <p className="stage py-1 h2 pl-md-5 font-H3 text-center text-lg text-white">Little Moon Lambo, Little Moon Lambo, Little Moon Lambo, Little Moon Lambo</p>
            </div>
          </div>
          <div className="row text-yellow-400 mb-4">
            <div className="col-12 col-md-4 font-H3 text-center text-xl text-bold pb-5">
              <h3 className="h1">Little Moon Lambo</h3>
            </div>
            <div className="col-12 col-md-8 pb-5">
              <p className="stage last py-1 h2 pl-md-5 font-H3 text-center text-lg text-white">Little Moon Lambo, Little Moon Lambo, Little Moon Lambo, Little Moon Lambo</p>
            </div>
          </div>
        </div>
        <div className="row text-yellow-400 mb-4">
          <div className="col-12 col-md-4 font-H3 text-center text-xl text-bold pb-5">
            <h3 className="h1">Little Moon Lambo</h3>
          </div>
          <div className="col-12 col-md-8">
            <p className="stage py-1 h2 pl-md-5 font-H3 text-center text-lg pb-5 text-white">Little Moon Lambo, Little Moon Lambo, Little Moon Lambo, Little Moon Lambo</p>
          </div>
        </div>
      </section>

      <section id="Button" className="sticky bottom-0 left-0 w-full flex justify-center pb-4 z-50">
        <Link href="/mintpass">
          <a className="font-bold font-H3 bg-yellow-400 hover:bg-yellow-400 duration-150 text-white rounded text-base md:text-xl p-5 px-10 shadow-lg opacity-0 pointer-events-none" ref={floating_mint_btn} >
            MINT
          </a>
        </Link>
      </section>

      <footer className="flex flex-col justify-center items-center bg-black pt-5" ref={footer}>
        <div>
          <div>
          <a href="https://twitter.com/cryptohashtoken?s=21">
            <Image
              src={twitter}
              width={100}
              height={100}
            />
            </a>
            <a href="https://discord.gg/jWYvBXTn">
            <Image
              src={discord}
              width={100}
              height={100}
            />
            </a>
          </div>
        </div>
        <div className="col-12 col-md-8 pb-3">
          <p className="stage last py-5 h2 pl-md-5 text-white text-center text-sm font-H3">2022 crypto-hash.io All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}
