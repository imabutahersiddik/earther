import fs from 'fs'
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowDown } from 'react-icons/ai'
import PostList from "../components/posts/post-list";
import generateRSSFeed from "../helpers/build-helpers/generate-rss-feed";
import { getAllPosts, getLatestPosts } from "../helpers/posts-utils";



export default function Home({ posts }) {

  return (
    <>
      <header className="w-full md:py-8 md:px-14 font-Rubik text-gray-800  py-8 animate-fade-in-down border-b border-black">

        <div className="h-auto md:my-6  rounded-2xl shadow-lg py-8 px-4 md:px-12  bg-black text-center ">
          <h1 className="text-white font-Bai font-semibold text-6xl">Exploring the Uncharted Territory of a Post-Earth World</h1>
          <h1 className=" font-light text-2xl mt-5 text-gray-300 leading-relaxed align-baseline"><span className="mt-8">
        <p>Join us on a journey into the unknown, where we contemplate the consequences of a world forever changed by environmental challenges. Earther is your portal to thought-provoking insights, research, and discussions surrounding a post-Earth scenario.</p></span></h1>
          <AiOutlineArrowDown className="w-12 mt-4 h-16 rounded-3xl p-2 text-white mx-auto my-auto border border-white" />
        </div>
      </header>

      <div className="w-full font-Rubik text-gray-800 ">
        <PostList posts={posts} heading='Latest Articles' />
      </div>


    </>
  )
}

export const getStaticProps = () => {

  const data = getLatestPosts();
  const allPost = getAllPosts();
  const feed = generateRSSFeed(allPost)
  // Write the RSS output to a public file, making it
  // accessible at https://markdown-blog-ten-beta.vercel.app/rss.xml
  fs.writeFileSync('public/rss.xml', feed.rss2());

  return {
    props: {
      posts: data
    }
  }
}
