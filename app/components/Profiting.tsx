import Image from "next/image"
import Container from "./Container"
import profitimg from '@/public/images/profiting.png'
import profitimg2 from '@/public/images/vis.png'
import profitimg3 from '@/public/images/prof.png'

const Profiting = () => {
  return (
        <Container>
            <div className="w-full xl:grid xl:grid-cols-6 md:flex md:flex-col text-white xl:px-[14rem] lg:px-0 pb-16">
                <h1 className="text-[36px] xl:col-span-4 xl:mb-20 md:mb-1">PROFITING THROUGH</h1>
                <h1 className="xl:hidden text-[28px] text-right mb-4 bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text">AI INNOVATION & DECENTRALIZATION</h1>
                <div className="w-full col-span-6 grid grid-cols-6 items-center">
                    <Image src={profitimg} alt="" className="hidden xl:flex col-span-4"/>
                    <Image src={profitimg3} alt="" className="hidden xl:hidden lg:flex g:col-span-4 col-span-4"/>
                    <Image src={profitimg2} alt="" className="lg:hidden flex col-span-6 object-cover w-full"/>
                    <div className="hidden col-span-2 xl:flex flex-col items-start justify-center gap-5 px-4 ml-4">
                        <h1 className="font-[400] italic text-sm">The dynamic community driven business model of the future.</h1>
                        <p className="font-[700] italic text-xs">At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.</p>
                    </div>
                    <div className="xl:hidden lg:col-span-2 col-span-6 flex flex-col items-start justify-center gap-5 lg:px-4 lg:ml-4 pt-8">
                        <h1 className="font-[400] italic text-md">A Dynamic Business Model for Sustainable Growth and Community Engagement</h1>
                        <p className="font-[700] italic text-sm lg:leading-6">At Creon, we merge AI tools with the crypto and NFT markets, leveraging a dynamic business model to generate profits. Our commitment to innovation and decentralization allows us to strengthen our market position and foster a sustainable ecosystem. <br/>We empower our community, ensuring transparency and actively involving NFT holders in our success.</p>
                    </div>
                </div>
            </div>
        </Container>
  )
}

export default Profiting