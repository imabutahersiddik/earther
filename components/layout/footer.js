import Link from 'next/link'
import Form from '../form/form'
function Footer() {
    return (
        <footer className=" flex flex-col items-center bg-black w-full space-x-2 py-10 md:px-12 px-4 mt-8 text-white font-Rubik bottom-0 ">
            <div className="md:flex w-full">
                <div className="md:w-1/5 text-center ">
                    <span className="font-Bai font-extrabold text-2xl"><Link href='/' >Earther</Link></span>
                    <div className="flex align-baseline">
                        <h3 className="font-light text-xl mt-2 md:mt-5 text-gray-300 mx-auto ">Exploring the Uncharted Territory of a Post-Earth World</h3>
                    </div>
                </div>
                <div className="md:w-1/2 py-2 flex flex-col items-center my-3 md:my-0">
                    <h2 className="font-medium text-xl text-gray-300 my-2">Subscribe to our newsletter</h2>
                    <Form />
                </div>
                <div className="flex flex-col items-center md:items-end md:w-1/5 p-2  ">
                    <h2 className="font-medium text-xl text-gray-300 my-2">Links</h2>
                    <div className='flex justify-evenly w-full md:w-1/5 md:flex-col md:text-right'>
                        <span className="text-lg text-gray-500 hover:text-white"><a href='https://earther.vercel.app/rss.xml'>RSS</a></span>
                        <span className="text-lg text-gray-500 hover:text-white"><a href='https://github.com/imabutahersiddik/earther' >Github</a></span>
                        <span className="text-lg text-gray-500 hover:text-white"><a href='https://twitter.com/earther' >twitter</a></span>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <h2 className="text-gray-500 text-base ">© 2023 - Present Earther.</h2>
            </div>
        </footer>
    )
}

export default Footer