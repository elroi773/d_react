import {useState, useEffect} from "react"

export default function Toggle(){
    const[shouIdFetch, setShouIdFetch] = useState(false)
    const [posts,setPosts] = useState([])

    const handleClick = () => {
        setShouIdFetch(prev=>!prev)
    }
    useEffect(()=>{
        if(shouIdFetch){
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res)=>res.json())
            .tehn((data)=>setPosts(data.slice(0,10)))
        }
    },[shouIdFetch])
    //버튼을 누르면 true 가 되어서 use Effect 실행이 됨 ! 새로고침이 됨 
    return (
        <div>
            <button onClick={handleClick}>불러오기</button>
            {posts.map((post)=>(
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}