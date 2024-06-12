import Image from 'next/image'

const works = [
  {
    src: '/images/work/nexa.png',
    link: 'https://www.behance.net/gallery/200685455/AI-Driven-Cross-Border-Payments-App',
  },
  {
    src: '/images/work/heigo.png',
    link: 'https://www.behance.net/gallery/111941639/Heigo-Your-Communication-Hub',
  },
]

const Work = () => {
  return (
    <section className="max-w-page m-auto py-24 pb-0">
      <h2 className="mb-16 text-center text-5xl">
        A glimpse into my <strong className="font-bold">Work</strong>
      </h2>
      <div>
        {works.map((work, index) => (
          <div key={index} className="mb-12 cursor-pointer">
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              <Image src={work.src} width={1104} height={519} alt="" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work
