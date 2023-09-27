import { useEffect } from "react";
import useScreenSizeStore from '../../useScreenSizeStore'

const Auction = () => {
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
        <section className="pt-128 pb-136 lg:py-112-lg sm:py-64-sm">
            <div className="container grid grid-cols-[55fr_45fr] sm:grid-cols-1 gap-x-128 lg:gap-x-32-lg sm:gap-y-32-sm">
                <div className="flex bg-auction bg-cover bg-no-repeat bg-center w-[44.44vw] lg:w-[51.56vw] sm:w-[83.33vw] h-[55.55vw] lg:h-[78.125vw] sm:h-[127vw] rounded-16 lg:rounded-16-lg sm:rounded-16-sm">
                    <div className="bg-neutrals-8 flex items-center gap-24 lg:gap-24-lg sm:gap-24-sm rounded-48 lg:rounded-48-lg sm:rounded-48-sm self-end m-8 lg:m-8-lg sm:m-8-sm py-8 lg:py-8-lg sm:py-8-sm px-20 lg:px-20-lg sm:px-20-sm w-full">
                        <svg className="icon-24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3.7002 4.38562C3.7002 2.03509 6.28069 0.597611 8.27926 1.83482L20.5797 9.44937C22.4743 10.6222 22.4743 13.3781 20.5797 14.551L8.27926 22.1655C6.28069 23.4027 3.7002 21.9652 3.7002 19.6147V4.38562Z" fill="#141416"/>
                        </svg>
                        <div className="bg-neutrals-6 rounded-8 lg:rounded-8-lg sm:rounded-8-sm flex-auto h-[0.55vw] lg:h-[0.78vw] sm:h-[2.22vw]">
                            <div className="bg-primary-1 rounded-8 lg:rounded-8-lg w-[25%] h-full"></div>
                        </div>
                        <span className="text-16 lg:text-16-lg sm:text-16-sm font-medium leading-150">2:20</span>
                        <svg className="icon-24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16 4C15.4477 4 15 4.44772 15 5C15 5.55228 15.4477 6 16 6C19.3137 6 22 8.68629 22 12C22 15.3137 19.3137 18 16 18C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4Z" fill="#777E91"/>
                            <path d="M16 8C15.4477 8 15 8.44772 15 9C15 9.55228 15.4477 10 16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14C15.4477 14 15 14.4477 15 15C15 15.5523 15.4477 16 16 16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8Z" fill="#777E91"/>
                            <path d="M5 8.99981L9.63212 4.6572C10.9094 3.4597 13 4.36539 13 6.11627V17.8833C13 19.6342 10.9095 20.5399 9.63212 19.3424L5 14.9998H2C0.89543 14.9998 0 14.1044 0 12.9998V10.9998C0 9.89524 0.895431 8.99981 2 8.99981H5Z" fill="#777E91"/>
                        </svg>
                        <svg className="icon-24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.36899 6.54184C2.65912 4.34504 4.34504 2.65912 6.54184 2.36899C8.05208 2.16953 9.94127 2 12 2C14.0587 2 15.9479 2.16953 17.4582 2.36899C19.655 2.65912 21.3409 4.34504 21.631 6.54184C21.8305 8.05208 22 9.94127 22 12C22 14.0587 21.8305 15.9479 21.631 17.4582C21.3409 19.655 19.655 21.3409 17.4582 21.631C15.9479 21.8305 14.0587 22 12 22C9.94127 22 8.05208 21.8305 6.54184 21.631C4.34504 21.3409 2.65912 19.655 2.36899 17.4582C2.16953 15.9479 2 14.0587 2 12C2 9.94127 2.16953 8.05208 2.36899 6.54184ZM5 14C5.55228 14 6 14.4477 6 15V17C6 17.5523 6.44772 18 7 18H9C9.55228 18 10 18.4477 10 19C10 19.5523 9.55228 20 9 20H7C5.34315 20 4 18.6569 4 17V15C4 14.4477 4.44772 14 5 14ZM18 15C18 14.4477 18.4477 14 19 14C19.5523 14 20 14.4477 20 15V17C20 18.6569 18.6569 20 17 20H15C14.4477 20 14 19.5523 14 19C14 18.4477 14.4477 18 15 18H17C17.5523 18 18 17.5523 18 17V15ZM5 10C5.55228 10 6 9.55228 6 9V7C6 6.44772 6.44772 6 7 6H9C9.55228 6 10 5.55228 10 5C10 4.44772 9.55228 4 9 4H7C5.34315 4 4 5.34315 4 7V9C4 9.55228 4.44772 10 5 10ZM18 9C18 9.55228 18.4477 10 19 10C19.5523 10 20 9.55228 20 9V7C20 5.34315 18.6569 4 17 4H15C14.4477 4 14 4.44772 14 5C14 5.55228 14.4477 6 15 6H17C17.5523 6 18 6.44772 18 7V9Z" fill="#777E91"/>
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col gap-40 lg:gap-40-lg sm:gap-40-sm">
                    <div className="flex flex-col gap-20 lg:gap-20-lg sm:gap-20-sm">
                        <h1 className="text-64 lg:text-64-lg sm:text-64-sm font-bold tracking-[0.1vw] leading-90">{screenSize.width > 1024 ? 'the creator network®' : 'Marco carrillo®'}</h1>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-8 lg:gap-8-lg sm:gap-8-sm">
                                <div className="bg-enrico-cole bg-cover bg-center w-[2.77vw] lg:w-[3.9vw] sm:w-[10vw] h-[2.77vw] lg:h-[3.9vw]csm
                                sm:h-[10vw] rounded-circle"></div>
                                <div className="flex flex-col">
                                    <span className="text-12 lg:text-12-lg sm:text-12-sm text-neutrals-4 leading-160 font-Poppins">Creator</span>
                                    <h6 className="text-14 lg:text-14-lg sm:text-14-sm font-medium leading-170 font-Poppins">Enrico Cole</h6>
                                </div>
                            </div>
                            <div className="flex items-center gap-8 lg:gap-8-lg sm:gap-8-sm">
                                <div className="bg-primary-4 w-[2.77vw] lg:w-[3.9vw] sm:w-[10vw] h-[2.77vw] lg:h-[3.9vw]csm
                                sm:h-[10vw] rounded-circle flex items-center justify-center">
                                    <svg className="icon-24" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 4C10.5478 4 8.74816 4.161 7.30371 4.35177C6.00372 4.52346 5.02346 5.50372 4.85177 6.80371C4.66101 8.24816 4.5 10.0478 4.5 12C4.5 13.9522 4.661 15.7518 4.85177 17.1963C5.02346 18.4963 6.00372 19.4765 7.30371 19.6482C8.74816 19.839 10.5478 20 12.5 20C14.4522 20 16.2518 19.839 17.6963 19.6482C18.9963 19.4765 19.9765 18.4963 20.1482 17.1963C20.339 15.7518 20.5 13.9522 20.5 12C20.5 10.0478 20.339 8.24816 20.1482 6.80371C19.9765 5.50372 18.9963 4.52346 17.6963 4.35177C16.2518 4.16101 14.4522 4 12.5 4ZM7.04184 2.36899C4.84504 2.65912 3.15912 4.34504 2.86899 6.54184C2.66953 8.05208 2.5 9.94127 2.5 12C2.5 14.0587 2.66953 15.9479 2.86899 17.4582C3.15912 19.655 4.84504 21.3409 7.04184 21.631C8.55208 21.8305 10.4413 22 12.5 22C14.5587 22 16.4479 21.8305 17.9582 21.631C20.155 21.3409 21.8409 19.655 22.131 17.4582C22.3305 15.9479 22.5 14.0587 22.5 12C22.5 9.94127 22.3305 8.05208 22.131 6.54184C21.8409 4.34504 20.155 2.65912 17.9582 2.36899C16.4479 2.16953 14.5587 2 12.5 2C10.4413 2 8.55208 2.16953 7.04184 2.36899Z" fill="#FCFCFD"/>
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-12 lg:text-12-lg sm:text-12-sm text-neutrals-4 leading-160 font-Poppins">Instant price</span>
                                    <h6 className="text-14 lg:text-14-lg sm:text-14-sm font-medium leading-170 font-Poppins">3.5 ETH</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-24 lg:gap-24-lg sm:gap-24-sm p-32 lg:p-32-lg sm:p-32-sm border-2 lg:border-2-lg sm:border-2-sm border-neutrals-6 rounded-24 lg:rounded-24-lg sm:rounded-24-sm shadow-black lg:shadow-black-lg">
                        <div className="flex flex-col items-center text-center">
                            <div className="text-16 lg:text-16-lg sm:text-16-sm font-medium leading-150">Current Bid</div>
                            <h2 className="text-neutrals-1 font-DM -tracking-[0.07vw]">1.00 ETH</h2>
                            <div className="text-24 lg:text-24 sm:text-24-sm text-neutrals-4 leading-130 font-semibold">$3,618.36</div>
                        </div>
                        <div className="flex flex-col items-center gap-8 lg:gap-8-lg sm:gap-8-sm">
                            <div className="text-16 lg:text-16-lg sm:text-16-sm font-medium leading-150">Auction ending in</div>
                            <div className="flex items-center gap-40 lg:gap-40-lg sm:gap-40-sm">
                                <div className="flex flex-col items-center">
                                    <h4 className="text-32 lg:text-32-lg sm:text-32-sm text-neutrals-1 font-bold leading-120 tracking-[0.022vw]">19</h4>
                                    <span className="text-16 lg:text-16-lg sm:text-16-sm text-neutrals-4 font-medium leading-150">Hrs</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h4 className="text-32 lg:text-32-lg sm:text-32-sm text-neutrals-1 font-bold leading-120 tracking-[0.022vw]">24</h4>
                                    <span className="text-16 lg:text-16-lg sm:text-16-sm text-neutrals-4 font-medium leading-150">mins</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h4 className="text-32 lg:text-32-lg sm:text-32-sm text-neutrals-1 font-bold leading-120 tracking-[0.022vw]">19</h4>
                                    <span className="text-16 lg:text-16-lg sm:text-16-sm text-neutrals-4 font-medium leading-150">secs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-8 lg:gap-8-lg sm:gap-8-sm">
                        <button className="md-primary-btn flex items-center justify-center self-stretch">Place a bid</button>
                        <button className="md-btn flex items-center justify-center self-stretch">View item</button>
                    </div>
                    <div className="flex items-center gap-8 lg:gap-8-lg sm:gap-8-sm sm:justify-center">
                        <div className="p-8 lg:p-8-lg sm:p-8-sm border-2 lg:border-2-lg sm:border-2-sm border-[rgba(255,255,255,0)] hover:border-neutrals-6 rounded-circle cursor-pointer">
                            <svg className="icon-24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.90906 7.26521C9.50324 6.8906 8.87058 6.9159 8.49597 7.32172L5.2652 10.8217C4.9116 11.2047 4.9116 11.7952 5.26519 12.1782L8.49597 15.6783C8.87057 16.0841 9.50323 16.1094 9.90905 15.7348C10.3149 15.3602 10.3402 14.7276 9.96558 14.3217L8.28397 12.5L18 12.5C18.5523 12.5 19 12.0523 19 11.5C19 10.9477 18.5523 10.5 18 10.5L8.284 10.5L9.96557 8.67829C10.3402 8.27247 10.3149 7.63981 9.90906 7.26521Z" fill="#777E91"/>
                            </svg>
                        </div>
                        <div className="p-8 lg:p-8-lg sm:p-8-sm border-2 lg:border-2-lg sm:border-2-sm border-[rgba(255,255,255,0)] hover:border-neutrals-6 rounded-circle cursor-pointer">
                            <svg className="icon-24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z" fill="#777E91"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Auction