import Image from 'next/image'

const apps = [
  {
    name: 'Figma',
    icon: '/images/wardrobe/figma.svg',
    backgroundColor: 'rgba(26, 188, 256, 0.1)',
    borderColor: 'rgba(26, 188, 256, 0.2)',
  },
  {
    name: 'Adobe XD',
    icon: '/images/wardrobe/xd.svg',
    backgroundColor: 'rgba(255, 97, 246, 0.1)',
    borderColor: 'rgba(255, 97, 2466, 0.2)',
  },
  {
    name: 'Sketch',
    icon: '/images/wardrobe/sketch.svg',
    backgroundColor: 'rgba(253, 173, 0, 0.1)',
    borderColor: 'rgba(253, 173, 0, 0.2)',
  },
  {
    name: 'InVision',
    icon: '/images/wardrobe/invision.svg',
    backgroundColor: 'rgba(255, 51, 102, 0.1)',
    borderColor: 'rgba(255, 51, 102, 0.2)',
  },
  {
    name: 'Zeplin',
    icon: '/images/wardrobe/zeplin.svg',
    backgroundColor: 'rgba(246, 152, 51, 0.1)',
    borderColor: 'rgba(246, 152, 51, 0.2)',
  },
  {
    name: 'WebFlow',
    icon: '/images/wardrobe/webflow.svg',
    backgroundColor: 'rgba(67, 83, 255, 0.1)',
    borderColor: 'rgba(67, 83, 255, 0.2)',
  },
  {
    name: 'Miro',
    icon: '/images/wardrobe/miro.svg',
    backgroundColor: 'rgba(255, 208, 47, 0.1)',
    borderColor: 'rgba(255, 208, 47, 0.2)',

  },
  {
    name: 'Asana',
    icon: '/images/wardrobe/asana.svg',
    backgroundColor: 'rgba(252, 133, 82, 0.1)',
    borderColor: 'rgba(252, 133, 82, 0.2)',
  },
  {
    name: 'Canva',
    icon: '/images/wardrobe/canva.svg',
    backgroundColor: 'rgba(46, 140, 214, 0.1)',
    borderColor: 'rgba(46, 140, 214, 0.2)',
  },
  {
    name: 'Chat GPT',
    icon: '/images/wardrobe/chatgpt.svg',
    backgroundColor: 'rgba(116, 170, 156, 0.1)',
    borderColor: 'rgba(116, 170, 156, 0.2)',
  },
  {
    name: 'Jira',
    icon: '/images/wardrobe/jira.svg',
    backgroundColor: 'rgba(38, 132, 255, 0.1)',
    borderColor: 'rgba(38, 132, 255, 0.2)',
  },
  {
    name: 'Zero Height',
    icon: '/images/wardrobe/zeroheight.svg',
    backgroundColor: 'rgba(248, 124, 42, 0.1)',
    borderColor: 'rgba(248, 124, 42, 0.2)',
  },
]

const Wardrobe = () => {
  return (
    <section className="max-w-page m-auto py-24 pb-0">
      <h2 className="mb-16 text-center text-5xl">
        My Apps <strong className="font-bold">Wardrobe</strong>
      </h2>
      <div className="flex flex-wrap items-center justify-center">
        {apps.map(app => (
          <div
            key={app.name}
            className="m-6 flex h-[132px] w-[132px] flex-col items-center justify-center rounded-2xl border border-solid"
            style={{
              backgroundColor: app.backgroundColor || 'transparent',
              borderColor: app.borderColor || 'transparent',
            }}
          >
            <Image
              src={app.icon}
              alt={app.name}
              width={24}
              height={24}
              className="mb-2 h-12 w-12"
            />
            <p className="text-center">{app.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Wardrobe
