import Image from 'next/image'

const Home = () => {
  return (
    <section
      id="home"
      className="relative m-auto flex max-w-page items-center py-28 pt-44 lg:px-16 md:flex-col md:px-2 sm:py-20"
    >
      <div>
        <div className="mb-20">
          <p className="mb-4 text-3xl font-light sm:text-2xl mobile:text-xl">
            Hey peeps! 👋🏼
          </p>
          <h1 className="">
            <p className="relative mb-2 text-6xl font-bold lg:text-5xl md:text-5xl sm:text-4xl mobile:text-3xl">
              I&apos;m Aashay Dedhia,{' '}
              <Image
                src="/images/highlight-1.svg"
                width={35}
                height={35}
                alt=""
                className="absolute left-[565px] top-[-22px] lg:left-[450px] lg:top-[-18px] md:left-[450px] md-min:h-[25px] md-min:w-[25px] sm:left-[330px] sm:h-[25px] sm:w-[25px] mobile:left-[280px]"
              />
            </p>
            <p className="relative text-6xl lg:text-5xl md:text-5xl sm:text-4xl mobile:text-3xl">
              a <strong className="font-bold">Product</strong> designer
              <Image
                src="/images/highlight-2.svg"
                width={60}
                height={60}
                alt=""
                className="absolute bottom-[-50px] left-[-65px] lg:bottom-[-40px] lg:left-[-50px] lg:h-[50px] lg:w-[50px] sm:bottom-[-30px] sm:left-[-40px] sm:h-[40px] sm:w-[40px]"
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
          className="relative right-[-80px] lg:right-0 md:right-0 sm:w-full sm:px-8"
        />
      </div>
      <div className="xl:hidden lg-min:hidden sm:px-8">
        <p className="mb-4">
          <Image src="/images/quote.svg" alt="Quote" width={40} height={40} />
        </p>
        <p className="max-w-[600px] text-2xl font-light leading-8 text-gray-light sm:text-xl mobile:text-lg">
          Crafting exceptional digital experiences to simplify intricate
          challenges into effortless resolutions.
        </p>
      </div>
    </section>
  )
}

export default Home
