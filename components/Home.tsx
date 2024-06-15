import Image from 'next/image'

const Home = () => {
  return (
    <section className="relative m-auto flex max-w-page items-center py-28 md:flex-col md:px-2 md:py-20 lg:px-16">
      <div>
        <div className="mb-20">
          <p className="mobile:text-xl mb-4 text-3xl font-light sm:text-2xl">
            Hey peeps! 👋🏼
          </p>
          <h1 className="">
            <p className="mobile:text-3xl relative mb-2 text-6xl font-bold sm:text-4xl md:text-5xl lg:text-5xl">
              I&apos;m Aashay Dedhia,{' '}
              <Image
                src="/images/highlight-1.svg"
                width={35}
                height={35}
                alt=""
                className="md-min:h-[25px] md-min:w-[25px] mobile:left-[280px] absolute left-[565px] top-[-22px] sm:left-[330px] sm:h-[25px] sm:w-[25px] md:left-[450px] lg:left-[450px] lg:top-[-18px]"
              />
            </p>
            <p className="mobile:text-3xl relative text-6xl sm:text-4xl md:text-5xl lg:text-5xl">
              a <strong className="font-bold">Product</strong> designer
              <Image
                src="/images/highlight-2.svg"
                width={60}
                height={60}
                alt=""
                className="absolute bottom-[-50px] left-[-65px] sm:bottom-[-30px] sm:left-[-40px] sm:h-[40px] sm:w-[40px] lg:bottom-[-40px] lg:left-[-50px] lg:h-[50px] lg:w-[50px]"
              />
            </p>
          </h1>
        </div>
        <div className="md:hidden">
          <p className="mb-4">
            <Image src="/images/quote.svg" alt="Quote" width={40} height={40} />
          </p>
          <p className="max-w-[600px] text-2xl font-light leading-8 text-gray-light lg:text-xl">
            Crafting exceptional digital experiences to simplify intricate
            challenges into effortless resolutions.
          </p>
        </div>
      </div>
      <div>
        <Image
          src="/images/profile.png"
          alt="4 Years Experience"
          width={580}
          height={822}
          className="relative right-[-80px] sm:w-full sm:px-8 md:right-0 lg:right-0"
        />
      </div>
      <div className="lg-min:hidden sm:px-8 xl:hidden">
        <p className="mb-4">
          <Image src="/images/quote.svg" alt="Quote" width={40} height={40} />
        </p>
        <p className="mobile:text-lg max-w-[600px] text-2xl font-light leading-8 text-gray-light sm:text-xl">
          Crafting exceptional digital experiences to simplify intricate
          challenges into effortless resolutions.
        </p>
      </div>
    </section>
  )
}

export default Home
