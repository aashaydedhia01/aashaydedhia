import Chip from './Chip'
import Image from 'next/image'
import Marquee from './Marquee'

const domains = [
  'Fintech',
  'InsurTech',
  'Edtech',
  'SaaS',
  'Travel & Tourism',
  'Food & Beverages',
]

const skills = [
  'User Journey Mapping',
  'Persona',
  'Competitor analysis',
  'User Research',
  'Prototyping',
  'Interaction Design',
  'Usability Testing',
  'Wireframes',
  'Sketching',
  'Information Architecture',
]

const About = () => {
  return (
    <>
      <section
        id="about"
        className="w-full bg-gradient-about p-24 md:px-14 sm:px-12 mobile:px-10"
      >
        <div className="m-auto max-w-page">
          <h2 className="relative mb-16 text-center text-5xl sm:mb-12 sm:text-3xl">
            <span className="relative">
              <span>A few words </span>
              <strong className="font-bold sm:block">About Me</strong>
              <Image
                src="/images/highlight-1.svg"
                width={30}
                height={30}
                alt=""
                className="absolute right-[-35px] top-[-22px] sm:right-[25px]"
              />
            </span>
            <Image
              src="/images/star-1.svg"
              width={20}
              height={20}
              alt=""
              className="absolute bottom-[-10px] left-[20px]"
            />
            <Image
              src="/images/star-2.svg"
              width={20}
              height={20}
              alt=""
              className="absolute bottom-[-45px] right-[60px] md:right-[20px] sm:bottom-[-20px]"
            />
          </h2>
          <div className="mb-16 text-xl font-light leading-8 text-gray-light">
            <p className="mb-10">
              I am a chemical engineer, but my passion for{' '}
              <strong className="font-medium">creative thinking</strong> and{' '}
              <strong className="font-medium">art</strong> has led me to explore
              digital design, specifically{' '}
              <strong className="font-medium">UX UI design</strong>.
            </p>
            <p>
              I craft{' '}
              <strong className="font-medium">
                engaging digital experiences
              </strong>{' '}
              aligned with user needs, ensuring designs meet both technical
              requirements and business objectives through understanding{' '}
              <strong className="font-medium">user preferences,</strong>{' '}
              <strong className="font-medium">developing personas</strong> and{' '}
              <strong className="font-medium">journeys,</strong> and fostering
              collaboration.
            </p>
          </div>
          <div className="flex items-start md:flex-col">
            <div className="flex-1 md:mb-10">
              <div className="mb-4 font-light text-gray-thin">Projects</div>
              <div className="mb-1 text-5xl font-semibold md:text-3xl">15+</div>
              <div className="text-xl font-medium">
                Mobile Apps and Web Products
              </div>
            </div>
            <div className="mb-2 flex-1">
              <div className="mb-4 font-light text-gray-thin">Domains</div>
              <div className="flex flex-wrap">
                {domains.map(domain => (
                  <Chip key={domain} content={domain} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Marquee items={skills} />
    </>
  )
}

export default About
