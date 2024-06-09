import Image from 'next/image'

const Home = () => {
  return (
    <section className="max-w-page relative m-auto flex h-screen items-center">
      <div>
        <div className="mb-16">
          <p className="mb-4 text-3xl font-light">Hey peeps! 👋🏼</p>
          <h1 className="">
            <p className="mb-2 text-6xl font-bold">I&apos;m Aashay Dedhia,</p>
            <p className="text-6xl">
              a <strong className="font-bold">Product</strong> designer
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
