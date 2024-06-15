import Image from 'next/image'

const Connect = () => {
  return (
    <section
      id="contact"
      className="m-auto max-w-page py-24 pb-12 text-center md:px-8"
    >
      <p className="mb-16 flex flex-col items-center justify-center text-2xl font-medium md:text-xl sm:text-lg mobile:text-base">
        Thank you for scrolling, lets stay in touch
        <Image
          src="/images/line.svg"
          width={469}
          height={10}
          alt=""
          className="md:w-[400px]"
        />
      </p>
      <p className="mb-4 text-3xl font-light md:text-2xl">
        If you have an opportunity or a project idea in mind
      </p>
      <h2 className="mb-24 text-center text-5xl md:text-4xl sm:mb-16">
        Let&apos;s <strong>Connect</strong>
      </h2>
      <div className="mb-20 flex items-center justify-center md:flex-col md:gap-8">
        <a
          className="relative flex cursor-pointer rounded-3xl bg-purple p-6 px-10 pl-[240px] text-white shadow-button sm:rounded-2xl sm:px-4 sm:py-3 sm:pl-[140px]"
          href="tel:+919773024818"
        >
          <Image
            src="/images/contact/contact.png"
            width={200}
            height={200}
            alt=""
            className="absolute bottom-0 left-6 sm:left-2 sm:w-[120px]"
          />
          <div className="text-left">
            <div className="mb-2 text-xl sm:mb-0 sm:text-base">Contact Me</div>
            <div className="cursor-text text-3xl font-medium sm:text-xl">
              +91 9773024818
            </div>
          </div>
        </a>
        <div className="ml-8 flex md:ml-0">
          <a
            href="https://www.linkedin.com/in/aashaydedhia/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[120px] w-[120px] items-center justify-center rounded-3xl bg-linkedin shadow-button md:h-[100px] md:w-[100px] sm:h-[80px] sm:w-[80px] sm:rounded-2xl"
          >
            <Image
              src="/images/contact/linkedin.png"
              width={70}
              height={70}
              className="h-[80px] w-[80px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px]"
              alt=""
            />
          </a>
          <a
            href="mailto:hey@aashaydedhia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-8 flex h-[120px] w-[120px] items-center justify-center rounded-3xl bg-white shadow-button md:h-[100px] md:w-[100px] sm:h-[80px] sm:w-[80px] sm:rounded-2xl"
          >
            <Image
              src="/images/contact/gmail.png"
              width={70}
              height={70}
              alt=""
              className="md:w-[60px] sm:w-[45px]"
            />
          </a>
          <a
            href="https://www.behance.net/aashaydedhia"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-8 flex h-[120px] w-[120px] items-center justify-center rounded-3xl bg-behance shadow-button md:h-[100px] md:w-[100px] sm:h-[80px] sm:w-[80px] sm:rounded-2xl"
          >
            <Image
              src="/images/wardrobe/behance.png"
              width={70}
              height={70}
              alt=""
              className="sm:w-[50px]"
            />
          </a>
        </div>
      </div>
      <div className="text-lg">Made with ❤️ by Aashay</div>
    </section>
  )
}

export default Connect
