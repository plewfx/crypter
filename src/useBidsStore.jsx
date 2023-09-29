import { create } from "zustand";

const useNFTsStore = create((set) => ({
    NFTs: [
        {
            id: 0,
            img: 'https://www.figma.com/file/TLfPETaB3oqRLEkl6TDZWr/image/44852131fba351a9290ff25abfe122d9b64d7fac',
            name: 'The future of ETH®',
            howManyInStock: 18,
            bid: 1.125,            
        },
    ]
}))

export default useNFTsStore