import Image from 'next/image'

const Marquee = ({ items }) => {
  return (
    <div class="bg-purple -rotate-2 overflow-x-hidden text-white">
      <div class="animate-marquee whitespace-nowrap py-2">
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
