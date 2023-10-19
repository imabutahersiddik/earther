import PostList from "../../components/posts/post-list";
import { getAllPosts } from "../../helpers/posts-utils"
import { NextSeo } from 'next-seo';

function AllPost({ posts }) {
    return (
        <>
            <NextSeo
                title="All post"
                description="Discover a collection of thought-provoking articles, research findings, and discussions on the consequences of a post-Earth scenario. Explore ecological changes, man survival challenges, and ethical dilemmas in a world altered by environmental crises."
            />
            <PostList posts={posts} />
        </>
    )
}

export const getStaticProps = () => {
    const data = getAllPosts();
    return {
        props: {
            posts: data
        }
    }
}

export default AllPost