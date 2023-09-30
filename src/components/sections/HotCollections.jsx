import { useState, useEffect } from "react";
import useScreenSizeStore from "../../useScreenSizeStore";
import { useStore } from "../../useStore"
import Collection from "../Collection";

const HotCollections = () => {
    const collections = useStore((state) => state.collections);

    const [scroll, setScroll] = useState(0)

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
                <div className="flex flex-col gap-80 lg:gap-48-lg sm:gap-32-sm">
                    <h3>Hot collections</h3>
                    <div className='flex items-center gap-32 self-stretch lg:overflow-scroll'>
                        {
                            collections.map((collection, index) => {
                                return (
                                    <Collection
                                        key={index}
                                        index={index}
                                        scroll={scroll}
                                        collection={collection}
                                    />
                                )
                            })
                        }
                    </div>
                    {
                        // screenSize.width < 600 ?
                        // <div className="flex items-center">
                        //     <div onClick={() => (scroll <= 0) && (setScroll(prev => prev += 20))} className="p-8 lg:p-8-lg sm:p-8-sm cursor-pointer">
                        //         <svg className="icon-24" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        //             <path fillRule="evenodd" clipRule="evenodd" d="M9.90906 7.76521C9.50324 7.3906 8.87058 7.4159 8.49597 7.82172L5.2652 11.3217C4.9116 11.7047 4.9116 12.2952 5.26519 12.6782L8.49597 16.1783C8.87057 16.5841 9.50323 16.6094 9.90905 16.2348C10.3149 15.8602 10.3402 15.2276 9.96558 14.8217L8.28397 13L18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11L8.284 11L9.96557 9.17829C10.3402 8.77247 10.3149 8.13981 9.90906 7.76521Z" fill="#777E91"/>
                        //         </svg>
                        //     </div>
                        //     <div onClick={() => (scroll <= 0) && (setScroll(prev => prev -= 20))} className="p-8 lg:p-8-lg sm:p-8-sm cursor-pointer">
                        //         <svg className="icon-24" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        //             <path fillRule="evenodd" clipRule="evenodd" d="M14.0909 7.76521C14.4968 7.3906 15.1294 7.4159 15.504 7.82172L18.7348 11.3217C19.0884 11.7047 19.0884 12.2952 18.7348 12.6782L15.504 16.1783C15.1294 16.5841 14.4968 16.6094 14.091 16.2348C13.6851 15.8602 13.6598 15.2276 14.0344 14.8217L15.716 13L6 13C5.44771 13 5 12.5523 5 12C5 11.4477 5.44771 11 6 11L15.716 11L14.0344 9.17829C13.6598 8.77247 13.6851 8.13981 14.0909 7.76521Z" fill="#777E91"/>
                        //         </svg>
                        //     </div>
                        // </div> :
                        // null
                    }
                </div>
            </div>
        </section>
    )
}

export default HotCollections