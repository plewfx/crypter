import { useEffect } from "react";
import useScreenSizeStore from "../../useScreenSizeStore";
import { useStore } from "../../useStore"
import NFT from "../NFT"

const HotBid = () => {
    const NFTs = useStore((state) => state.NFTs);

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
        <section className="pt-136 pb-128 lg:py-112-lg sm:py-64-sm">
            <div className="container">
                <div className="flex flex-col gap-64 lg:gap-64-lg sm:gap-64-sm">
                    <div className="flex items-center justify-between">
                        <h3>Hot bid</h3>
                        <div className="flex items-center gap-8 lg:gap-8-lg sm:gap-8-sm">
                            <button className="p-8 lg:p-8-lg sm:p-8-sm border-[rgba(255,255,255,0)] hover:border-neutrals-6 border-2 rounded-circle">
                                <svg className="icon-24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.90906 7.26521C9.50324 6.8906 8.87058 6.9159 8.49597 7.32172L5.2652 10.8217C4.9116 11.2047 4.9116 11.7952 5.26519 12.1782L8.49597 15.6783C8.87057 16.0841 9.50323 16.1094 9.90905 15.7348C10.3149 15.3602 10.3402 14.7276 9.96558 14.3217L8.28397 12.5L18 12.5C18.5523 12.5 19 12.0523 19 11.5C19 10.9477 18.5523 10.5 18 10.5L8.284 10.5L9.96557 8.67829C10.3402 8.27247 10.3149 7.63981 9.90906 7.26521Z" fill="#777E91"/>
                                </svg>
                            </button>
                            <button className="p-8 lg:p-8-lg sm:p-8-sm border-[rgba(255,255,255,0)] hover:border-neutrals-6 border-2 rounded-circle">
                                <svg className="icon-24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z" fill="#777E91"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-32 lg:overflow-scroll">
                        {
                            NFTs.map((nft, index) => {
                                while(index < 4) {
                                    return (
                                        <NFT
                                            key={index}
                                            nft={nft}
                                        />
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HotBid