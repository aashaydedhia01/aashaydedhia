import Image from 'next/image'

interface IMarqueeProps {
  items: string[]
}

const Marquee = ({ items }: IMarqueeProps) => {
  return (
    <div className="bg-purple -rotate-2 overflow-x-hidden text-white">
      <div className="animate-marquee whitespace-nowrap py-2">
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
      </div>
    </div>
  )
}

export default Marquee
