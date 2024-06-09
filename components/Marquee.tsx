import Image from 'next/image'

import ReactMarquee from 'react-fast-marquee'

interface IMarqueeProps {
  items: string[]
}

const Marquee = ({ items }: IMarqueeProps) => {
  return (
    <div className="-rotate-2">
      <ReactMarquee
        className="bg-purple mb-16 overflow-x-hidden py-1 text-white"
        pauseOnHover
        speed={150}
      >
        {items.map(item => (
          <span key={item} className="inline-flex items-center text-2xl">
            {item}
            <Image
              src="/images/stripdivider.svg"
              width={30}
              height={30}
              alt=""
              className="mx-6"
            />
          </span>
        ))}
      </ReactMarquee>
    </div>
  )
}

export default Marquee
