import FooterCard from '../components/common/FooterCard'
import nav from '../config/nav.json'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="w-full py-8 bg-primary mt-12">
            <div className="container mx-auto flex md:flex-row flex-col items-center justify-between">
                <FooterCard />
                <div className="flex flex-col items-center md:mt-0 mt-8">
                    {nav.map((item, i) => (
                        <Link as={item.url} href="/[page]" key={i}>
                            <span className="font-bold text-gray-600 mx-3 uppercase cursor-pointer md:my-0 my-2">{item.name}</span>
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col items-start md:mt-0 mt-8">
                    <div className="bg-white p-4 text-sm font-semibold mb-3 text-gray-600">
                        <p>LFB di Riccardo Gianolio</p>
                        <p>Via della croce 1 Vittorito AQ</p>
                        <p>02030000661</p>
                    </div>
                    <div className="bg-white p-4 text-sm font-semibold mb-3 text-gray-600">
                        <p>Luma Farm Bio di Golini Marco</p>
                        <p>Via piano S Maria 114 Vittorito AQ</p>
                        <p>02030030668</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
