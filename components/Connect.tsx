import Image from 'next/image'

const Connect = () => {
  return (
    <section className="max-w-page m-auto py-24 pb-12 text-center">
      <p className="mb-16 flex flex-col items-center justify-center text-2xl font-medium">
        Thank you for scrolling, lets stay in touch
        <Image src="/images/line.svg" width={469} height={10} alt="" />
      </p>
      <p className="mb-4 text-3xl font-light">
        If you have an opportunity or a project idea in mind
      </p>
      <h2 className="mb-24 text-center text-5xl">
        Let&apos;s <strong>Connect</strong>
      </h2>
      <div className="mb-20 flex items-center justify-center">
        <a
          className="bg-purple shadow-button relative flex cursor-pointer rounded-3xl p-6 px-10 pl-[240px] text-white"
          href="tel:+919773024818"
        >
          <Image
            src="/images/contact/contact.png"
            width={200}
            height={200}
            alt=""
            className="absolute bottom-0 left-6"
          />
          <div className="text-left">
            <div className="mb-2 text-xl">Contact Me</div>
            <div className="cursor-text text-3xl font-medium">
              +91 9773024818
            </div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/aashaydedhia/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-linkedin shadow-button ml-8 flex h-[120px] w-[120px] items-center justify-center rounded-3xl"
        >
          <Image
            src="/images/contact/linkedin.png"
            width={70}
            height={70}
            className="h-[80px] w-[80px]"
            alt=""
          />
        </a>
        <a
          href="mailto:aashaydedhia01@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="shadow-button ml-8 flex h-[120px] w-[120px] items-center justify-center rounded-3xl bg-white"
        >
          <Image
            src="/images/contact/gmail.png"
            width={70}
            height={70}
            alt=""
          />
        </a>
        <a
          href="https://www.behance.net/aashaydedhia"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-behance shadow-button ml-8 flex h-[120px] w-[120px] items-center justify-center rounded-3xl"
        >
          <Image
            src="/images/wardrobe/behance.png"
            width={70}
            height={70}
            alt=""
          />
        </a>
      </div>
      <div className="text-lg">Made with ❤️ by Aashay</div>
    </section>
  )
}

export default Connect
