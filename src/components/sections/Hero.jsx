import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section>
        <div className="container pt-128 lg:pt-112-lg sm:pt-64-sm px-192 lg:px-64-lg sm:px-[0] flex flex-col items-center gap-24 lg:gap-24-lg sm:gap-24-sm text-center">
            <div className="flex flex-col items-center gap-8 lg:gap-8-lg sm:gap-8-sm">
                <span className="text-12 lg:text-12-lg sm:text-12-sm text-neutrals-4 font-bold uppercase">Create, explore, & collect digital art NFTs.</span>
                <h3>The new creative economy.</h3>
            </div>
            <Link className="md-btn">Start your search</Link>
        </div>
    </section>
  )
}

export default Hero