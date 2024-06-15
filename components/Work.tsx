import Image from 'next/image'

const works = [
  {
    src: '/images/work/nexa',
    link: 'https://www.behance.net/gallery/200685455/AI-Driven-Cross-Border-Payments-App',
  },
  {
    src: '/images/work/heigo',
    link: 'https://www.behance.net/gallery/111941639/Heigo-Your-Communication-Hub',
  },
]

const Work = () => {
  return (
    <section className="m-auto max-w-page py-24 pb-0 sm:px-4 md:px-8 lg:px-16">
      <h2 className="relative mb-16 text-center text-5xl sm:mb-12 sm:text-3xl">
        A glimpse into my <strong className="font-bold">Work</strong>
      </h2>
      <div className="md:px-8">
        {works.map((work, index) => (
          <div key={index} className="mb-12 cursor-pointer md:hidden">
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              <Image src={`${work.src}.png`} width={1104} height={519} alt="" />
            </a>
          </div>
        ))}
        {works.map((work, index) => (
          <div
            key={index}
            className="lg-min:hidden mb-12 cursor-pointer xl:hidden"
          >
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={`${work.src}-mobile.png`}
                width={1104}
                height={519}
                alt=""
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work
