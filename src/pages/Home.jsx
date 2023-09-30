import Auction from "../components/sections/Auction"
import Feed from "../components/sections/Feed"
import Hero from "../components/sections/Hero"
import HotBid from "../components/sections/HotBid"
import HotCollections from "../components/sections/HotCollections"
import PopularSellers from "../components/sections/PopularSellers"

const Home = () => {
  return (
    <>
        <Hero />
        <Auction />
        <Feed />
        <PopularSellers />
        <HotBid />
        <HotCollections />
    </>
  )
}

export default Home