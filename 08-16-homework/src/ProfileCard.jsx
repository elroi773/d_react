import { useState } from "react";

function ProfileCard({ name, hobby, fav_food}) {
    const[count , setCount] = useState(0);
    const handleHeart = () =>{
        setCount(count+1);
    }
    return (
      <div>
        <h1>{name}의 프로필~</h1>
        <h2>취미 : {hobby}</h2>
        <h2>좋아하는 음식 : {fav_food}</h2>
        <button onClick={handleHeart}>❤️</button>
        <p>{count}</p>
      </div>
    );
  }
  
export default ProfileCard;
  

ProfileCard.jsx

