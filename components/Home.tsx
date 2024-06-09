import Image from 'next/image'

const Home = () => {
  return (
    <section className="max-w-page relative m-auto flex items-center py-28">
      <div>
        <div className="mb-20">
          <p className="mb-4 text-3xl font-light">Hey peeps! 👋🏼</p>
          <h1 className="">
            <p className="relative mb-2 text-6xl font-bold">
              I&apos;m Aashay Dedhia,{' '}
              <Image
                src="/images/highlight-1.svg"
                width={35}
                height={35}
                alt=""
                className="absolute right-[-20px] top-[-22px]"
              />
            </p>
            <p className="relative text-6xl">
              a <strong className="font-bold">Product</strong> designer
              <Image
                src="/images/highlight-2.svg"
                width={60}
                height={60}
                alt=""
                className="absolute bottom-[-50px] left-[-65px]"
              />
            </p>
          </h1>
        </div>
        <div>
          <p className="mb-4">
            <Image src="/images/quote.svg" alt="Quote" width={40} height={40} />
          </p>
          <p className="text-gray-light max-w-[600px] text-2xl font-light">
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
          className="relative right-[-80px]"
        />
      </div>
    </section>
  )
}

export default Home
