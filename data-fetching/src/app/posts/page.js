import FetchPost from "@/app/posts/components/FetchPost";
import FetchPostsUsingSWR from "@/app/posts/components/PostsClientUsingSWR";

export default async function PostsPage(){
    return <>
       {/* <FetchPost/>  */}
       <FetchPostsUsingSWR/>
    </>
}