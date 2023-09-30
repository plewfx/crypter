import Auction from "../components/sections/Auction"
import Feed from "../components/sections/Feed"
import Hero from "../components/sections/Hero"
import PopularSellers from "../components/sections/PopularSellers"

const Home = () => {
  return (
    <>
        <Hero />
        <Auction />
        <Feed />
        <PopularSellers />
    </>
  )
}

export default Home