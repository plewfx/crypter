import { useEffect } from "react"
import { Link } from "react-router-dom"
import useScreenSizeStore from '../../useScreenSizeStore'
import Price from "../UI/Price"

const items = [
    {
        img: 'https://s3-alpha-sig.figma.com/img/6a09/ed82/b562f01dfa364b43dabda531bae36ea0?Expires=1696809600&Signature=d9FcaXEtV3vV1U5wKBAfonQxMTiFMXzsN6wb1BNyruCSDqBdDumG5g0LpnUjy2vmePNy9DSiWxo7a9OoLibuLI5ElOlAbAn87ICBfPuDw5FkRgvzI73~V~iMiXCF05-AM6APQkRht9e4GSKr9ihKlKBxs85rJOXlltiF-gbd6m89b2qldg9A2bkX~Q1MmUWh7ceh052ffIUnbAI~WkIslCV6xyLQy7F~z04w7k57FkAUIUphs26UwYluseysHMItKSoPbMCWasaoiG~tvjZ60YkUMF5L8wf~BkYRh9tW7slJ6lZyblkMzMjzFosH3FLL4PrDVMcaaZwC~PrgoABKSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        title: 'ETH never die',
        price: 0.27
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/634b/0785/e84bd90a9edeb71e1be24c0148550393?Expires=1696809600&Signature=V3zrfYeviYFlscbml3VC39oWvpZaaqR5p~WgR-G9PVZWtOuV6gMZKHBs2yooGzDPi3Y6Xo05OUwq9jjWetJqjxqC9xfpfkzW2~tvRrf9L1ghC13tGza93tp8rFwi60GtogtoFMIxeaWglSQs64VkNgyIJEVJJFSxqbGGIowSlVNF2ttcLgRQBXcwZiRiPVJpSIaOwC~wnlnyYz3Xr-j-1tFsYxOsYBL4LZxpzBolZyROrAf~ee9wfo3t0Bp2KSY3IcNAoCYvXT9bGRisUsuAfIGZvarT65Y899galKq0tr7NKI88g3uEI~aFygXVPjneDT30f~F8nOE-rPemKsvbFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        title: 'ETH never die',
        price: 0.27
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/ec9c/c4ad/02d172c4429c97ad822db9ef5fe3f854?Expires=1696809600&Signature=jYpdS12H5wlynYpzAvhGOknXKq7TlhEAmd0oAOXqif0M8zU77iyWizi9qtL~73EXMb6M8X5a21abqCCV5VKP4UUI~QrKwiRE~4mI7zI4m3vzvFWhxNssu5h3To42panoWOuBBl~CzWWN5zZc~IvNnfQbb4XnSmqH7yMcRMc6V5pCiVrPP6DvmF5iBhMyYA~~Y-u0lsm9HHuWhQD-peAFPLvslWY8huL1xmpq7n0NtTMrpgFhMT8u5ppDNEjdoa1cyZMjB3rttSh2g1mr61swnKu2wLS3~VrlxeHO4~Ra2wukiWCtZK6CGZa2oWaBiN5ZYbx6J4JeiU5adQWNxFIyow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        title: 'ETH never die',
        price: 0.27
    },
]

const Item = ({ img, title, price }) => {
    return (
        <div className="flex items-center gap-24 lg:gap-24-lg sm:gap-24-sm">
            <div className='w-[11.11vw] lg:w-[15.625vw] h-[10.27vw] lg:h-[14.45vw] rounded-12 lg:rounded-12-lg bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${img})`}}></div>
            <div className="flex flex-col items-start gap-16 lg:gap-16-lg">
                <div className="flex flex-col gap-8 lg:gap-8">
                    <h6>{title}</h6>
                    <div className="flex items-center gap-11 lg:gap-11-lg">
                        <div className="bg-enrico-cole bg-contain rounded-circle icon-24 bg-primary-2"></div>
                        <Price price={price}></Price>
                        <div className="text-14 lg:text-14 text-neutrals-4 leading-170">1 of 12</div>
                    </div>
                </div>
                <button className="sm-btn">Place a bid</button>
            </div>
        </div>
    )
}

const creators = ['Payton Harris', 'Anita Bins', 'Joana Wuckert', 'Lorena Ledner']

const Creator = ({ index, title }) => {
    return (
        <div className="flex items-center gap-16 lg:gap-16-lg sm:gap-16-sm pb-24 lg:pb-24-lg sm:pb-24-sm border-b-1 lg:border-[0] border-neutrals-6">
            <div className='relative bg-enrico-cole bg-contain bg-center bg-no-repeat icon-56 rounded-circle bg-primary-3'>
                <span className="absolute -top-[8%] -left-[8%] w-[1.66vw] lg:icon-24 h-[1.66vw] flex items-center justify-center bg-neutrals-2 rounded-circle text-12 lg:text-12-lg sm:text-12-sm font-semibold leading-160 text-neutrals-8 border-2 lg:border-2-lg sm:border-2-sm border-neutrals-8">{index}</span>
            </div>
            <div className="flex flex-col gap-2 lg:gap-2-lg sm:gap-2-sm">
                <h5 className="text-14 lg:text-14-lg sm:text-14-sm font-medium leading-170">{title}</h5>
                <div className="text-neutrals-3 text-12 lg:text-12-lg sm:text-12-sm font-bold leading-160">2.456 <span className="text-neutrals-4">ETH</span></div>
            </div>
        </div>
    )
}

const Feed = () => {
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
        <section className="pb-128 lg:pb-80-lg sm:py-64-sm">
            <div className="container flex lg:flex-col gap-32 lg:gap-64-lg sm:gap-32-sm">
                <div className="flex sm:flex-col gap-32 lg:gap-32-lg">
                    <div className="flex flex-col gap-24 lg:gap-24-lg sm:gap-24-sm">
                        <div className="bg-[url(https://s3-alpha-sig.figma.com/img/634b/0785/e84bd90a9edeb71e1be24c0148550393?Expires=1696809600&Signature=V3zrfYeviYFlscbml3VC39oWvpZaaqR5p~WgR-G9PVZWtOuV6gMZKHBs2yooGzDPi3Y6Xo05OUwq9jjWetJqjxqC9xfpfkzW2~tvRrf9L1ghC13tGza93tp8rFwi60GtogtoFMIxeaWglSQs64VkNgyIJEVJJFSxqbGGIowSlVNF2ttcLgRQBXcwZiRiPVJpSIaOwC~wnlnyYz3Xr-j-1tFsYxOsYBL4LZxpzBolZyROrAf~ee9wfo3t0Bp2KSY3IcNAoCYvXT9bGRisUsuAfIGZvarT65Y899galKq0tr7NKI88g3uEI~aFygXVPjneDT30f~F8nOE-rPemKsvbFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)] bg-cover bg-no-repeat bg-center w-[31.11vw] lg:w-[40.4vw] sm:w-full h-[30vw] lg:h-[42.18vw] sm:h-[115.2vw] rounded-12 lg:rounded-12-lg sm:rounded-12-sm"></div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-16 lg:gap-16-lg sm:gap-16-sm">
                                <div className="bg-enrico-cole bg-contain icon-48 rounded-circle"></div>
                                <div className="flex flex-col">
                                    <h6>The future of ETH®</h6>
                                    <div className="text-14 lg:text-14-lg sm:text-14-sm text-neutrals-3 font-semibold leading-170">18 in stock</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2  items-center">
                                <div className="text-12 lg:text-12-lg sm:text-12-sm leading-160 text-neutrals-4">Highest bid</div>
                                <Price price={1.125}></Price>
                            </div>
                        </div>
                    </div>
                    {
                        screenSize.width > 600 ?
                        <div className="flex flex-col justify-between">
                            {
                                items.map((item, index) => {
                                    return (
                                        <Item
                                            key={index}
                                            img={item.img}
                                            title={item.title}
                                            price={item.price}
                                        />
                                    )
                                })
                            }
                        </div> :
                        null
                    }
                </div>
                {
                    ((screenSize.width < 600) || (screenSize.width > 1024)) ?
                    <div className="border-1 lg:border-1-lg sm:border-1-sm self-stretch border-neutrals-6"></div> :
                    null
                }
                <div className="flex flex-col lg:flex-row items-start gap-32 lg:gap-32-lg sm:gap-40-sm">
                    <div className="flex flex-col gap-24 lg:gap-24-lg sm:gap-16-sm w-full">
                        <div className="text-12 lg:text-12-lg sm:text-12-sm text-neutrals-4 font-semibold leading-160">Latest upload from creators 🔥</div>
                        <div className="flex flex-col lg:flex-row gap-24 lg:justify-between sm:gap-64-sm sm:overflow-scroll">
                            {
                                creators.map((creator, index) => {
                                    return (
                                        <Creator
                                            key={index}
                                            title={creator}
                                            index={index}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    {
                        screenSize.width > 1024 ?
                        <Link className="lg-btn">
                            Discover more
                            <svg className="icon-16" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.39412 4.84331C9.66467 4.59357 10.0864 4.61044 10.3362 4.88099L12.49 7.21429C12.7258 7.46967 12.7258 7.86329 12.49 8.11867L10.3362 10.452C10.0865 10.7226 9.66468 10.7394 9.39413 10.4897C9.12358 10.24 9.10671 9.81821 9.35644 9.54766L10.4775 8.33315L4.00016 8.33315C3.63197 8.33315 3.3335 8.03467 3.3335 7.66648C3.3335 7.29829 3.63197 6.99982 4.00016 6.99982L10.4775 6.99982L9.35645 5.78536C9.10671 5.51482 9.12358 5.09305 9.39412 4.84331Z" fill="#23262F"/>
                            </svg>
                        </Link> :
                        null
                    }
                </div>
            </div>
        </section>
    )
}

export default Feed