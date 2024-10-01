import CardList from "../components/posts/CardList"
import ViewUserButton from "../components/posts/ViewUserButton"

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface InPost {
    userId:number,
    id:number,
    title:string,
    body:string

}

const Post = async() =>{
    const response = await fetch(base_url, {
        cache: "no-store"
    })
    const post:InPost[] = await response.json()
    return (
        <>
        <p>{new Date().toLocaleTimeString()}</p>
        <h1 className= "text-fuchsia-500">Postingan Page</h1>
        {post.map((posts) => {
            return (
                <CardList key={posts.id} >
                <p>{posts.id}</p>
                <b>{posts.title}</b>
                <p>{posts.body}</p>
                <br />
                <ViewUserButton userId={posts.userId}/>
            </CardList>
            )
        })}
        </>
    )
}
export default Post
