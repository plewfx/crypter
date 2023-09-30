import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useStore } from "../../useStore"
import useScreenSizeStore from "../../useScreenSizeStore"

const Creator = ({ creator, index }) => {
    return (
        <Link className="flex flex-col gap-24 lg:gap-24-lg sm:gap-24-sm p-24 lg:p-24-lg sm:p-24-sm bg-neutrals-8 rounded-16 lg:rounded-16-lg sm:rounded-16-lg hover:scale-110 hover:shadow-black lg:hover:shadow-black-lg">
            <div className="flex items-center gap-40 lg:gap-32-lg sm:gap-64-sm">
                <div className={`bg-primary-${index + 1} px-8 lg:px-8-lg sm:px-8-sm py-2 lg:py-2-lg sm:py-2-sm flex items-center gap-4 lg:gap-4-lg sm:gap-4-sm rounded-24 lg:rounded-24-lg sm:rounded-24-sm`}>
                    {creator.icon}
                    <span className="text-12 lg:text-12-lg sm:text-12-sm text-neutrals-8 font-semibold leading-160">#{index + 1}</span>
                </div>
                <div className="flex items-center gap-8 lg:gap-8-lg sm:gap-8-sm">
                    <svg className="icon-24" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.3999 4C10.4477 4 8.64807 4.161 7.20361 4.35177C5.90363 4.52346 4.92337 5.50372 4.75168 6.80371C4.56091 8.24816 4.3999 10.0478 4.3999 12C4.3999 13.9522 4.56091 15.7518 4.75168 17.1963C4.92337 18.4963 5.90363 19.4765 7.20361 19.6482C8.64806 19.839 10.4477 20 12.3999 20C14.3521 20 16.1517 19.839 17.5962 19.6482C18.8962 19.4765 19.8764 18.4963 20.0481 17.1963C20.2389 15.7518 20.3999 13.9522 20.3999 12C20.3999 10.0478 20.2389 8.24816 20.0481 6.80371C19.8764 5.50372 18.8962 4.52346 17.5962 4.35177C16.1517 4.16101 14.3521 4 12.3999 4ZM6.94174 2.36899C4.74495 2.65912 3.05903 4.34504 2.76889 6.54184C2.56944 8.05208 2.3999 9.94127 2.3999 12C2.3999 14.0587 2.56944 15.9479 2.76889 17.4582C3.05903 19.655 4.74495 21.3409 6.94174 21.631C8.45198 21.8305 10.3412 22 12.3999 22C14.4586 22 16.3478 21.8305 17.8581 21.631C20.0549 21.3409 21.7408 19.655 22.0309 17.4582C22.2304 15.9479 22.3999 14.0587 22.3999 12C22.3999 9.94127 22.2304 8.05208 22.0309 6.54184C21.7408 4.34504 20.0549 2.65912 17.8581 2.36899C16.3478 2.16953 14.4586 2 12.3999 2C10.3412 2 8.45198 2.16953 6.94174 2.36899Z" fill="#B1B5C4"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.3999 17C12.9522 17 13.3999 16.5523 13.3999 16V13H16.3999C16.9522 13 17.3999 12.5523 17.3999 12C17.3999 11.4477 16.9522 11 16.3999 11H13.3999V8C13.3999 7.44772 12.9522 7 12.3999 7C11.8476 7 11.3999 7.44772 11.3999 8V11H8.3999C7.84762 11 7.3999 11.4477 7.3999 12C7.3999 12.5523 7.84762 13 8.3999 13H11.3999V16C11.3999 16.5523 11.8476 17 12.3999 17Z" fill="#B1B5C4"/>
                    </svg>
                    <svg className="icon-24" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.3731 13.516C17.9249 13.494 18.3544 13.0287 18.3323 12.4769L18.142 7.71753C18.1211 7.19663 17.7036 6.77913 17.1827 6.75829L12.4233 6.56789C11.8715 6.54581 11.4062 6.97527 11.3842 7.52712C11.3621 8.07896 11.7915 8.54421 12.3434 8.56629L14.8206 8.6654L7.95037 15.5357C7.55984 15.9262 7.55984 16.5594 7.95037 16.9499C8.34089 17.3404 8.97406 17.3404 9.36458 16.9499L16.2348 10.0796L16.3339 12.5568C16.356 13.1086 16.8212 13.5381 17.3731 13.516Z" fill="#B1B5C4"/>
                    </svg>
                </div>
            </div>
            <div className="h-[0.07vw] lg:h-[0.1vw] sm:h-[0.3vw] self-stretch bg-neutrals-6"></div>
            <div className="flex flex-col gap-16 lg:gap-16-lg sm:gap-16-sm items-center">
                <div className="relative bg-cover bg-no-repeat bg-center bg-neutrals-4 icon-64 rounded-circle" style={{backgroundImage: `url(${creator.img})`}}>
                    {
                        creator.premium ?
                        <svg className="icon-24 absolute bottom-0 right-0" width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.30789 22.0207L4.80789 21.1547L4.30789 22.0207L10.7002 25.7113C12.2472 26.6045 14.1532 26.6045 15.7002 25.7113L22.0925 22.0207C23.6395 21.1276 24.5925 19.4769 24.5925 17.6906V10.3094C24.5925 8.52307 23.6395 6.87244 22.0925 5.97927L15.7002 2.28868C14.1532 1.39551 12.2472 1.39551 10.7002 2.28868L4.30789 5.97927C2.76089 6.87244 1.80789 8.52307 1.80789 10.3094V17.6906C1.80789 19.4769 2.76089 21.1276 4.30789 22.0207Z" fill="#45B36B" stroke="#FCFCFD" strokeWidth="2"/>
                            <path d="M12.3026 9.56319C12.4072 9.38022 12.2524 9.15792 12.0445 9.19256L11.0728 9.35451C10.9242 9.37927 10.8311 9.52873 10.8744 9.67295L11.1771 10.6818C11.2402 10.8923 11.5246 10.9248 11.6336 10.734L12.3026 9.56319Z" fill="#FCFCFD"/>
                            <path d="M10.0168 10.296C9.9611 10.1102 9.72508 10.0567 9.59849 10.2037C9.20593 10.6594 8.83516 11.1383 8.45122 11.599C8.42985 11.6246 8.40947 11.6508 8.39006 11.6775C8.28594 11.8206 8.40424 12.0002 8.58124 12.0002H10.1921C10.3596 12.0002 10.4797 11.8388 10.4316 11.6784L10.0168 10.296Z" fill="#FCFCFD"/>
                            <path d="M8.50838 13C8.34022 13 8.22082 13.1639 8.30502 13.3095C8.33204 13.3562 8.3618 13.4018 8.39429 13.4461L11.9909 18.3506C12.051 18.4326 12.1174 18.5064 12.1888 18.5719C12.3441 18.7145 12.5388 18.5502 12.4767 18.3487L10.8828 13.1764C10.8505 13.0715 10.7536 13 10.6439 13H8.50838Z" fill="#FCFCFD"/>
                            <path d="M13.924 18.3488C13.8619 18.5503 14.0565 18.7147 14.2118 18.5721C14.2833 18.5065 14.3497 18.4327 14.4099 18.3506L18.0065 13.4461C18.039 13.4018 18.0688 13.3562 18.0958 13.3095C18.18 13.1639 18.0606 13 17.8924 13H15.7569C15.6471 13 15.5502 13.0715 15.5179 13.1764L13.924 18.3488Z" fill="#FCFCFD"/>
                            <path d="M17.8191 11.9998C17.9961 11.9998 18.1144 11.8202 18.0103 11.6771C17.9909 11.6504 17.9705 11.6242 17.9491 11.5986C17.5652 11.1378 17.1944 10.659 16.8018 10.2032C16.6752 10.0562 16.4392 10.1097 16.3835 10.2955L15.9687 11.678C15.9206 11.8384 16.0407 11.9998 16.2082 11.9998H17.8191Z" fill="#FCFCFD"/>
                            <path d="M15.3279 9.35453C15.4764 9.37928 15.5695 9.52874 15.5263 9.67296L15.2236 10.6819C15.1605 10.8924 14.8761 10.9249 14.7671 10.7341L14.098 9.5632C13.9934 9.38022 14.1483 9.15792 14.3561 9.19256L15.3279 9.35453Z" fill="#FCFCFD"/>
                            <path d="M13.2002 10.0078L14.1249 11.626C14.2201 11.7927 14.0998 12 13.9078 12H12.4926C12.3006 12 12.1803 11.7927 12.2755 11.626L13.2002 10.0078Z" fill="#FCFCFD"/>
                            <path d="M13.439 16.5232C13.3666 16.7586 13.0335 16.7586 12.9611 16.5232L11.9766 13.3235C11.9271 13.1628 12.0473 13 12.2155 13H14.1846C14.3528 13 14.473 13.1628 14.4235 13.3235L13.439 16.5232Z" fill="#FCFCFD"/>
                        </svg> :
                        null
                    }
                </div>
                <div className="flex flex-col gap-2 lg:gap-2 sm:gap-2-sm items-center">
                    <h6 className="text-14 lg:text-14-lg sm:text-14-sm font-medium leading-170">{creator.name}</h6>
                    <div className="text-12 lg:text-12 sm:text-12-sm text-neutrals-3 font-semibold leading-160">{creator.balance}  <span className="font-normal text-neutrals-4">ETH</span></div>
                </div>
            </div>
        </Link>
    )
}

const PopularSellers = () => {
    const creators = useStore((state) => state.creators)
    const [scroll, setScroll] = useState('start')

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
        <section className="py-128 lg:py-112-lg sm:py-64-sm bg-neutrals-7">
            <div className="container">
                <div className="flex flex-col gap-64 lg:gap-64 sm:gap-32-sm">
                    <div className="flex sm:flex-col items-center sm:items-start justify-between sm:gap-24-sm">
                        <div className="flex flex-col">
                            <div className="text-24 lg:text-24-lg sm:text-24-sm text-neutrals-4 font-semibold leading-130">Popular</div>
                            <div className="flex items-center gap-8 lg:gap-8-lg sm:gap-8-sm">
                                <h3>Sellers</h3>
                                <svg className="icon-40" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M27.0118 16.3215C26.361 15.6706 25.3057 15.6706 24.6548 16.3215L20 20.9763L15.3452 16.3215C14.6943 15.6706 13.639 15.6706 12.9882 16.3215C12.3373 16.9724 12.3373 18.0276 12.9882 18.6785L18.8215 24.5118C19.4724 25.1627 20.5276 25.1627 21.1785 24.5118L27.0118 18.6785C27.6627 18.0276 27.6627 16.9724 27.0118 16.3215Z" fill="#23262F"/>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col sm:gap-12-sm self-stretch">
                            <div className="hidden sm:flex sm:text-12-sm text-neutrals-5 font-bold uppercase">timeframe</div>
                            <div className="flex items-center gap-128 sm:justify-between text-14 lg:text-14-lg sm:text-14-sm font-medium leading-170 pr-8 lg:pr-8-lg sm:pr-8-sm py-8 lg:py-8-lg sm:py-8-sm sm:pl-16-sm lg:pl-16-lg pl-16 rounded-12 lg:rounded-12-lg sm:rounded-12-sm bg-neutrals-8 border-2 lg:border-2-lg sm:border-2-sm border-neutrals-6 sm:self-stretch">
                                Today
                                <div className="p-4 lg:p-4-lg sm:p-4-sm border-2 border-neutrals-6 rounded-circle">
                                    <svg className="icon-24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z" fill="#777E91"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:flex-col items-center gap-32 lg:gap-32-lg sm:gap-32-sm overflow-scroll">
                        {
                            screenSize.width > 1024 ?
                            <div onClick={() => setScroll(prev => prev = 'left')} className="p-8 lg:p-8-lg sm:p-8-sm cursor-pointer">
                                <svg className="icon-24" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.90906 7.76521C9.50324 7.3906 8.87058 7.4159 8.49597 7.82172L5.2652 11.3217C4.9116 11.7047 4.9116 12.2952 5.26519 12.6782L8.49597 16.1783C8.87057 16.5841 9.50323 16.6094 9.90905 16.2348C10.3149 15.8602 10.3402 15.2276 9.96558 14.8217L8.28397 13L18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11L8.284 11L9.96557 9.17829C10.3402 8.77247 10.3149 8.13981 9.90906 7.76521Z" fill="#777E91"/>
                                </svg>
                            </div> :
                            null
                        }
                        <div className={"flex items-center gap-32 lg:gap-32-lg sm:gap-32-sm" + ` justify-${scroll}`}>
                            {
                                creators.map((creator, index) => {
                                    return (
                                        <Creator
                                            key={index}
                                            creator={creator}
                                            index={index}
                                        />
                                    )
                                })
                            }
                        </div>
                        {
                            screenSize.width > 1024 ?
                            <div onClick={() => setScroll(prev => prev = 'end')} className="p-8 lg:p-8-lg sm:p-8-sm cursor-pointer">
                                <svg className="icon-24" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.0909 7.76521C14.4968 7.3906 15.1294 7.4159 15.504 7.82172L18.7348 11.3217C19.0884 11.7047 19.0884 12.2952 18.7348 12.6782L15.504 16.1783C15.1294 16.5841 14.4968 16.6094 14.091 16.2348C13.6851 15.8602 13.6598 15.2276 14.0344 14.8217L15.716 13L6 13C5.44771 13 5 12.5523 5 12C5 11.4477 5.44771 11 6 11L15.716 11L14.0344 9.17829C13.6598 8.77247 13.6851 8.13981 14.0909 7.76521Z" fill="#777E91"/>
                                </svg>
                            </div> :
                            null
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularSellers