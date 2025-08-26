import {useState,useEffect} from "react"

export default function Clock(){
    const[time,setTime] = useState(new Date().toLocaleDateString()) //몇시 땡땡 몇분 몇초 시간만 보여주는 애 

    useEffect(()=>{
        const timer = setInterval(() => {
            setTime(new Date.toLocaleDateString()) //상태를 계속 갱신 한다 이말이여 
        }, 1000); //마운트 

        return () => { //언마운트
            clearInterval(timer)
        }
    },[])

    return (
        <div>
            <h2>현재 시각</h2>
            <p>{time}</p>
        </div>
    )
}