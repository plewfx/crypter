import { NavLink, Link } from "react-router-dom"
import { useEffect } from "react"
import Logo from "../UI/Logo"
import useScreenSizeStore from '../../useScreenSizeStore'

const Header = () => {
  const { screenSize, updateScreenSize } = useScreenSizeStore();

  useEffect(() => {
    const updateDimension = () => {
      updateScreenSize();
    };
    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, []);

  return (
    <header className="py-20 lg:py-20-lg sm:pt-48-sm sm:pb-24-sm border-1 lg:border-1-lg sm:border-[0] border-neutrals-6">
      <div className="container">
        <nav className="flex items-center justify-between">
          <ul className="flex items-center gap-32">
            <Logo />
            { screenSize.width > 1024 ? 
              <>
                <span className="w-[0.14vw] h-[2.77vw] bg-neutrals-6 rounded-2"></span>
                <li>
                  <NavLink to='/crypter/' className={({ isActive }) =>
                    "text-14 font-bold leading-110 " + (isActive ? 'text-neutrals-2' : 'text-neutrals-4')
                  }>Discover</NavLink>
                </li>
                <li>
                  <NavLink to='/crypter/faq' className={({ isActive }) =>
                    "text-14 font-bold leading-110 " + (isActive ? 'text-neutrals-2' : 'text-neutrals-4')
                  }>How it work</NavLink>
                </li>
              </> : null
            }
          </ul>
          {
            screenSize.width > 600 ?
            <ul className="flex items-center gap-24">
              <div className="flex items-center justify-between py-10 lg:py-10-lg pl-16 lg:pl-16-lg pr-12 lg:pr-12-lg border-2 border-neutrals-6 rounded-8 lg:rounded-8-lg">
                <input className="font-Poppins focus:outline-none text-12 lg:text-12-lg placeholder:text-12 placeholder:lg:text-12-lg placeholder:leading-160" type="text" placeholder="Search"/>
                <button>
                  <svg className="icon-20" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.4212 13.6002C11.2923 14.4778 9.87376 15.0003 8.33317 15.0003C4.65127 15.0003 1.6665 12.0156 1.6665 8.33366C1.6665 4.65176 4.65127 1.66699 8.33317 1.66699C12.0151 1.66699 14.9998 4.65176 14.9998 8.33366C14.9998 9.87425 14.4773 11.2928 13.5997 12.4217L18.0891 16.9111C18.4145 17.2365 18.4145 17.7641 18.0891 18.0896C17.7637 18.415 17.236 18.415 16.9106 18.0896L12.4212 13.6002ZM13.3332 8.33366C13.3332 11.0951 11.0946 13.3337 8.33317 13.3337C5.57175 13.3337 3.33317 11.0951 3.33317 8.33366C3.33317 5.57224 5.57175 3.33366 8.33317 3.33366C11.0946 3.33366 13.3332 5.57224 13.3332 8.33366Z" fill="#777E91"/>
                  </svg>
                </button>
              </div>
              <div className="p-8 lg:p-8-lg relative after:absolute after:top-0 after:right-0 after:w-[0.83vw] lg:after:w-[1.17vw] after:h-[0.83vw] lg:after:h-[1.17vw]  after:rounded-circle after:bg-primary-4">
                <svg className="icon-24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_22921_22124)">
                    <path d="M21 18.0233C21 18.5113 20.6043 18.907 20.1163 18.907H3.88372C3.39565 18.907 3 18.5113 3 18.0233C3 17.5352 3.39566 17.1395 3.88372 17.1395H3.9V10.9809C3.9 6.57288 7.527 3 12 3C16.473 3 20.1 6.57288 20.1 10.9809V17.1395H20.1163C20.6043 17.1395 21 17.5352 21 18.0233ZM5.7 17.1395H18.3V10.9809C18.3 7.5494 15.4794 4.76744 12 4.76744C8.5206 4.76744 5.7 7.5494 5.7 10.9809V17.1395ZM9.97604 20.7558C9.73121 20.2608 10.1977 19.7907 10.75 19.7907H13.25C13.8023 19.7907 14.2688 20.2608 14.024 20.7558C13.9155 20.9751 13.7699 21.1773 13.591 21.3529C13.169 21.7672 12.5967 22 12 22C11.4033 22 10.831 21.7672 10.409 21.3529C10.2301 21.1773 10.0845 20.9751 9.97604 20.7558Z" fill="#777E91"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_22921_22124">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <Link className="lg-primary-btn">Upload</Link>
              <Link className="lg-btn">Connect Wallet</Link>
            </ul> :
            <svg className="w-[8.53vw] h-[8.53vw]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M6.66634 10.667C5.92996 10.667 5.33301 11.2639 5.33301 12.0003C5.33301 12.7367 5.92996 13.3337 6.66634 13.3337H25.333C26.0694 13.3337 26.6663 12.7367 26.6663 12.0003C26.6663 11.2639 26.0694 10.667 25.333 10.667H6.66634Z" fill="#777E91"/>
              <path d="M6.66634 18.667C5.92996 18.667 5.33301 19.2639 5.33301 20.0003C5.33301 20.7367 5.92996 21.3337 6.66634 21.3337H25.333C26.0694 21.3337 26.6663 20.7367 26.6663 20.0003C26.6663 19.2639 26.0694 18.667 25.333 18.667H6.66634Z" fill="#777E91"/>
            </svg>
          }

        </nav>
      </div>
    </header>
  )
}

export default Header