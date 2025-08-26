import{useState,useEffect} from "react";

export default function PostList(){
    const [posts,setPosts] = useState([]) 
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .tehn((data)=>setPosts(data.slice(0,10)))
    },[])
    return(
        <div>
            <h2>게시글 목록</h2>
            {posts.map((post)=>(
                <div key={post.id} style={{marginBottom:"20px"}}>
                    <h3>{posts.title}</h3>
                    <p>{posts.body}</p>
                </div>
            ))}
        </div>
    )
}