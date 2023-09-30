const Collection = ({ collection, index, scroll }) => {
  return (
    <div className="flex flex-col gap-16 lg:gap-16-lg sm:gap-16-sm" style={{margin: `0 ${scroll <= 0 ? '0' : scroll}vw 0 ${scroll >= 0 ? '0' : scroll}vw`}}>
        <div className="flex flex-col gap-8 lg:gap-8-lg sm:gap-8-sm">
            <div className="bg-cover bg-no-repeat bg-center rounded-8 lg:rounded-8-lg sm:rounded-8-sm w-[24.44vw] lg:w-[34.375vw] sm:w-[82.93vw] h-[16.66vw] lg:h-[23.4375vw] sm:h-[64vw]" style={{backgroundImage: `url(${collection.images[0]})`}}></div>
            <div className="flex items-center self-stretch gap-8 lg:gap-8-lg sm:gap-8-sm">
                <div className="bg-cover bg-no-repeat bg-center rounded-8 lg:rounded-8-lg sm:rounded-8-sm flex-auto h-[5.208vw] lg:h-[7.32vw] sm:h-[20vw]" style={{backgroundImage: `url(${collection.images[1]})`}}></div>
                <div className="bg-cover bg-no-repeat bg-center rounded-8 lg:rounded-8-lg sm:rounded-8-sm flex-auto h-[5.208vw] lg:h-[7.32vw] sm:h-[20vw]" style={{backgroundImage: `url(${collection.images[2]})`}}></div>
                <div className="bg-cover bg-no-repeat bg-center rounded-8 lg:rounded-8-lg sm:rounded-8-sm flex-auto h-[5.208vw] lg:h-[7.32vw] sm:h-[20vw]" style={{backgroundImage: `url(${collection.images[3]})`}}></div>
            </div>
        </div>
        <div className="flex flex-col gap-8 lg:gap-8-lg sm:gap-8-sm">
            <h5>{collection.title}</h5>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-12 lg:gap-12-lg sm:gap-12-sm">
                    <div className="bg-enrico-cole bg-contain bg-center bg-no-repeat bg-neutrals-6 rounded-circle icon-24"></div>
                    <p className="leading-170 text-neutrals-3">By <span className="font-medium">{collection.author}</span></p>
                </div>
                <div className="p-8 lg:p-8-lg sm:p-8-sm uppercase font-bold text-12 lg:text-12-lg sm:text-12-sm rounded-4 lg:rounded-4-lg sm:rounded-4-sm border-2 lg:border-2 sm:border-2-sm border-neutrals-6">{collection.items} Items</div>
            </div>
        </div>
    </div>
  )
}

export default Collection