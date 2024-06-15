import Image from 'next/image'
import Link from 'next/link'

import classNames from 'classnames'

interface INavLinkProps {
  title: string
  link: string
  target?: string
  className?: string
}

const NavLink = ({ title, link, target, className }: INavLinkProps) => (
  <Link
    href={link}
    className={classNames(
      'flex cursor-pointer items-center justify-center rounded-full px-10 py-3 transition-all hover:bg-purple md:px-5',
      className
    )}
    target={target}
  >
    {title}
  </Link>
)

const Navbar = () => {
  return (
    <div className="flex flex-col items-center sm:px-8">
      <nav className="fixed top-[25px] z-50 flex items-center gap-[40px] rounded-full bg-navbar p-3 text-white sm:relative sm:w-full sm:justify-between">
        <NavLink title="Home" link="#home" className="sm:hidden" />
        <NavLink title="Work" link="#work" className="sm:hidden" />
        <a className="flex items-center justify-center px-10 md:px-5" href="/">
          <Image
            src="/images/portfolio-logo.svg"
            alt=""
            width={38}
            height={44}
            className="sm:w-[28px]"
          />
        </a>
        <NavLink title="Contact" link="#contact" className="sm:hidden" />
        <NavLink
          title="Resume"
          link="/resume-aashay-dedhia.pdf"
          target="_blank"
        />
      </nav>
    </div>
  )
}

export default Navbar
