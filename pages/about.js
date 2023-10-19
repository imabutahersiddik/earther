import Image from 'next/image'

function About() {
    return (
        <div className='w-full flex justify-center font-Bai'>
            <div className='md:w-2/3 px-12 py-6 text-xl'>
                <div className='md:w-1/3 mx-auto border-2 border-black rounded-2xl my-3'>
                </div>
                <h3>Welcome to <span className='font-semibold text-gray-700'>Earther</span>, At Earther, we are passionate about exploring the profound consequences of a post-Earth scenario. Our mission is to provide a platform for inquisitive minds, researchers, and environmental enthusiasts to delve into the intricate web of challenges and possibilities that may arise in a world fundamentally altered by environmental crises. </h3>
                <h3>We invite you to explore our repository, read thought-provoking articles, and contribute your insights to the ongoing conversation. Whether you&apos;re a scientist, writer, or simply someone who cares about the future of our planet, there&apos;s a place for you in our community.</h3>
                <h1 className=' text-2xl font-semibold text-gray-700 my-2'>Trying to connect ?</h1>
                <ul className='px-5  font-semibold text-gray-500 my-2'>
                    <li><a href='https://github.com/earther'>Github</a></li>
                </ul>
            </div>

        </div>
    )
}

export default About