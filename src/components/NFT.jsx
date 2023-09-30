import { useState } from "react";
import Price from "./UI/Price"
import { Link } from "react-router-dom";

const NFT = ({ nft }) => {
    const [isShown, setIsShown] = useState(false);

    return (
        <Link className="flex flex-col" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
            <div className="flex relative w-[17.77vw] lg:w-[26.07vw] sm:w-[68.2vw] h-[21.06vw] lg:h-[29.6vw] sm:h-[80.8vw] bg-cover bg-center bg-no-repeat rounded-16 lg:rounded-16-lg sm:rounded-16-sm bg-neutrals-2" style={{backgroundImage: isShown ? null : `url(${nft.img})`}}>
                {
                    isShown ?
                    <div className="w-full relative top-0 left-0 right-0 bottom-0 p-16 lg:p-16-lg sm:p-16-sm flex flex-col justify-between justify-self-stretch">
                        <div className="flex items-center justify-between">
                            <div className="text-12 lg:text-12 sm:text-12-sm font-bold p-8 lg:p-8-lg sm:p-8-sm uppercase text-neutrals-8 rounded-6 bg-primary-4 leading-90">purchasing !</div>
                            <div className="p-6 lg:p-6-lg sm:p-6-sm bg-neutrals-8 rounded-circle">
                                <svg className="icon-20" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5772 5.76422C10.2547 6.07365 9.7456 6.07365 9.42316 5.76422L8.84616 5.2105C8.1708 4.56239 7.25844 4.16667 6.25016 4.16667C4.17909 4.16667 2.50016 5.8456 2.50016 7.91667C2.50016 9.90219 3.57498 11.5417 5.12663 12.8888C6.67959 14.237 8.53633 15.1312 9.6457 15.5876C9.87766 15.683 10.1227 15.683 10.3546 15.5876C11.464 15.1312 13.3207 14.237 14.8737 12.8888C16.4253 11.5417 17.5002 9.90218 17.5002 7.91667C17.5002 5.8456 15.8212 4.16667 13.7502 4.16667C12.7419 4.16667 11.8295 4.56239 11.1542 5.2105L10.5772 5.76422ZM10.0002 4.00798C9.02692 3.074 7.70557 2.5 6.25016 2.5C3.25862 2.5 0.833496 4.92512 0.833496 7.91667C0.833496 13.2235 6.64211 16.1542 9.01165 17.1289C9.6498 17.3914 10.3505 17.3914 10.9887 17.1289C13.3582 16.1542 19.1668 13.2235 19.1668 7.91667C19.1668 4.92512 16.7417 2.5 13.7502 2.5C12.2948 2.5 10.9734 3.074 10.0002 4.00798Z" fill="#777E91"/>
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="lg-primary-btn">
                                Place a bid
                                <svg className="icon-16" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M13.3333 8.66683C13.7015 8.66683 14 8.36835 14 8.00016C14 7.63197 13.7015 7.3335 13.3333 7.3335C12.9651 7.3335 12.6667 7.63197 12.6667 8.00016C12.6667 8.36835 12.9651 8.66683 13.3333 8.66683Z" fill="#FCFCFD"/>
                                    <path d="M13.3333 11.3335C13.7015 11.3335 14 11.035 14 10.6668C14 10.2986 13.7015 10.0002 13.3333 10.0002C12.9651 10.0002 12.6667 10.2986 12.6667 10.6668C12.6667 11.035 12.9651 11.3335 13.3333 11.3335Z" fill="#FCFCFD"/>
                                    <path d="M13.3333 14.0002C13.7015 14.0002 14 13.7017 14 13.3335C14 12.9653 13.7015 12.6668 13.3333 12.6668C12.9651 12.6668 12.6667 12.9653 12.6667 13.3335C12.6667 13.7017 12.9651 14.0002 13.3333 14.0002Z" fill="#FCFCFD"/>
                                    <path d="M8 11.3335C8.36819 11.3335 8.66667 11.035 8.66667 10.6668C8.66667 10.2986 8.36819 10.0002 8 10.0002C7.63181 10.0002 7.33333 10.2986 7.33333 10.6668C7.33333 11.035 7.63181 11.3335 8 11.3335Z" fill="#FCFCFD"/>
                                    <path d="M8 14.0002C8.36819 14.0002 8.66667 13.7017 8.66667 13.3335C8.66667 12.9653 8.36819 12.6668 8 12.6668C7.63181 12.6668 7.33333 12.9653 7.33333 13.3335C7.33333 13.7017 7.63181 14.0002 8 14.0002Z" fill="#FCFCFD"/>
                                    <path d="M2.66667 14.0002C3.03486 14.0002 3.33333 13.7017 3.33333 13.3335C3.33333 12.9653 3.03486 12.6668 2.66667 12.6668C2.29848 12.6668 2 12.9653 2 13.3335C2 13.7017 2.29848 14.0002 2.66667 14.0002Z" fill="#FCFCFD"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.3332 6C12.2286 6 11.3332 5.10457 11.3332 4C11.3332 2.89543 12.2286 2 13.3332 2C14.4377 2 15.3332 2.89543 15.3332 4C15.3332 5.10457 14.4377 6 13.3332 6ZM13.3332 4.66667C12.965 4.66667 12.6665 4.36819 12.6665 4C12.6665 3.63181 12.965 3.33333 13.3332 3.33333C13.7014 3.33333 13.9998 3.63181 13.9998 4C13.9998 4.36819 13.7014 4.66667 13.3332 4.66667Z" fill="#FCFCFD"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.99984 8.66667C6.89527 8.66667 5.99984 7.77124 5.99984 6.66667C5.99984 5.5621 6.89527 4.66667 7.99984 4.66667C9.10441 4.66667 9.99984 5.5621 9.99984 6.66667C9.99984 7.77124 9.10441 8.66667 7.99984 8.66667ZM7.99984 7.33333C7.63165 7.33333 7.33317 7.03486 7.33317 6.66667C7.33317 6.29848 7.63165 6 7.99984 6C8.36803 6 8.6665 6.29848 8.6665 6.66667C8.6665 7.03486 8.36803 7.33333 7.99984 7.33333Z" fill="#FCFCFD"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.666504 9.33333C0.666504 10.4379 1.56193 11.3333 2.6665 11.3333C3.77107 11.3333 4.6665 10.4379 4.6665 9.33333C4.6665 8.22876 3.77107 7.33333 2.6665 7.33333C1.56193 7.33333 0.666504 8.22876 0.666504 9.33333ZM1.99984 9.33333C1.99984 9.70152 2.29831 10 2.6665 10C3.03469 10 3.33317 9.70152 3.33317 9.33333C3.33317 8.96514 3.03469 8.66667 2.6665 8.66667C2.29831 8.66667 1.99984 8.96514 1.99984 9.33333Z" fill="#FCFCFD"/>
                                </svg>
                            </button>
                        </div>
                    </div> :
                    null
                }
            </div>
            <div className="py-20 lg:py-20-lg sm:py-20-sm flex flex-col gap-12 lg:gap-12-lg sm:gap-12-sm">
                <div className="flex items-center justify-between">
                    <h6>{nft.title}</h6>
                    <Price price={nft.price} />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex">
                        <div className="bg-enrico-cole bg-contain icon-24 rounded-circle bg-primary-3 border-2 border-neutrals-8"></div>
                        <div className="-ml-[0.7vw] bg-enrico-cole bg-contain icon-24 rounded-circle bg-primary-4 border-2 border-neutrals-8"></div>
                        <div className="-ml-[0.8vw] bg-enrico-cole bg-contain icon-24 rounded-circle bg-primary-2 border-2 border-neutrals-8"></div>
                    </div>
                    <div className="text-14 lg:text-14-lg sm:text-14-sm font-medium leading-170">3 in stock</div>
                </div>
                <div></div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 lg:gap-4-lg sm:gap-4-sm">
                        <svg className="icon-20" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M14.1667 0C14.6269 0 15 0.373096 15 0.833333V2.5C15 2.96024 14.6269 3.33333 14.1667 3.33333C13.7064 3.33333 13.3333 2.96024 13.3333 2.5V0.833333C13.3333 0.373096 13.7064 0 14.1667 0Z" fill="#777E91"/>
                            <path d="M14.1667 10C14.6269 10 15 10.3731 15 10.8333V15.8333C15 16.2936 14.6269 16.6667 14.1667 16.6667C13.7064 16.6667 13.3333 16.2936 13.3333 15.8333V10.8333C13.3333 10.3731 13.7064 10 14.1667 10Z" fill="#777E91"/>
                            <path d="M5.83333 3.33333C6.29357 3.33333 6.66667 3.70643 6.66667 4.16667V10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333V4.16667C5 3.70643 5.3731 3.33333 5.83333 3.33333Z" fill="#777E91"/>
                            <path d="M5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333V19.1667C6.66667 19.6269 6.29357 20 5.83333 20C5.3731 20 5 19.6269 5 19.1667V15.8333C5 15.3731 5.3731 15 5.83333 15Z" fill="#777E91"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.6668 4.1665C11.6668 2.78579 12.7861 1.6665 14.1668 1.6665C15.5475 1.6665 16.6668 2.78579 16.6668 4.1665V9.1665C16.6668 10.5472 15.5475 11.6665 14.1668 11.6665C12.7861 11.6665 11.6668 10.5472 11.6668 9.1665V4.1665ZM15.0002 4.1665V9.1665C15.0002 9.62674 14.6271 9.99984 14.1668 9.99984C13.7066 9.99984 13.3335 9.62674 13.3335 9.1665V4.1665C13.3335 3.70627 13.7066 3.33317 14.1668 3.33317C14.6271 3.33317 15.0002 3.70627 15.0002 4.1665Z" fill="#777E91"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.3335 12.4998C3.3335 11.1191 4.45278 9.99984 5.8335 9.99984C7.21421 9.99984 8.3335 11.1191 8.3335 12.4998V14.1665C8.3335 15.5472 7.21421 16.6665 5.8335 16.6665C4.45278 16.6665 3.3335 15.5472 3.3335 14.1665V12.4998ZM6.66683 12.4998V14.1665C6.66683 14.6267 6.29373 14.9998 5.8335 14.9998C5.37326 14.9998 5.00016 14.6267 5.00016 14.1665V12.4998C5.00016 12.0396 5.37326 11.6665 5.8335 11.6665C6.29373 11.6665 6.66683 12.0396 6.66683 12.4998Z" fill="#777E91"/>
                        </svg>
                        <div className="font-Poppins text-12 lg:text-12-lg sm:text-12-sm leading-160 text-neutrals-4">Highest bid</div>
                        <div className="font-Poppins font-semibold text-12 lg:text-12-lg sm:text-12-sm leading-160 text-neutrals-3">0.001 ETH</div>
                    </div>
                    <div className="font-Poppins text-12 lg:text-12-lg sm:text-12-sm leading-160 text-neutrals-4">New bid 🔥</div>
                </div>
            </div>
        </Link>
  )
}

export default NFT