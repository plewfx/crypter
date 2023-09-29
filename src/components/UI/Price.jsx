const Price = ({ price }) => {
  return (
    <div className="font-bold text-primary-4 text-12 lg:text-12-lg sm:text-12-sm leading-90 pt-8 lg:pt-8-lg sm:pt-8-sm px-8 lg:px-8-lg sm:px-8-sm pb-6 lg:pb-6-lg sm:pb-6-sm rounded-4 lg:rounded-4-lg sm:rounded-4-sm border-2 lg:border-2-lg sm:border-2-sm border-primary-4">
        {price} ETH
    </div>
  )
}

export default Price