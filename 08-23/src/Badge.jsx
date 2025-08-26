export default function Badge({ status }){

    //1. if 문과 early return 
    //early return 조건 자체가 맞지 않으면 컴포넌트 자체를 렌더링 하지 않는다 
    //왜쓸까? 복잡한 분기를 jsx 안에서 억지로 표현하지 않는다
    //일찍 잘라내서 가독성을 높인다 
    if(!status){
        return <span>상태 없음</span>
    }
    //삼항 연산자 (? : ) -- 텍스트 분기 

    // const label = score > 90 ? "우수" : score >= 70?"보통":"노력"
    // const color =  score > 90 ? "green" : score >= 70?"blue":"red"

    let color1 = "";
    let label1 = "";

    if(status === "정상"){
        color1 = "green";
        label1 = "정상 제출";
    } else if (status === "지각"){
        color1 = "orange";
        label1 = "지각 제출";
    } else if (status === "미제출"){
        color1 = "red";
        label1 = "미제출";
    } else {
        return <span>잘못된 상태</span>
    }

    //물음표 앞에 조건 맞으면 콜론 뒤 
    //짧은 조건 분기를 jsx 에서 한줄로 표현할 수 있다 
    //간단한 값을 바꿀때 적합하다 
    //조건이 많아지면 가독성이 떨어지기 때문에 
    //"짧을때,  조건이 많지 않을 때"만 사용하자 --이건 첫번째 레슨! 


    //조건부 UI는 단순 텍스트 뿐 아니라, 스타일 변경에도 쓸 수 있다.
    return (
        <span style = {{background :color1, color: "white",padding: "4px 8px", borderRadius: 8}}>
            {label}
            {/* 3. && 연산자 -- 보조 요소 달기
                왜 쓸까
                간지나고 잇어보이잖아요 ㅋ
                단순히 보조요소를 붙이거나 뺄 때 가장 간단하기 때문에
                0 : falsy 값 펄시? 0도 보여야 하는 상황에서는 저렇게 해야 하는게 아니라 명시적으로 해야한다! 
                
            */}

            { score === 0 && <span style = {{marginLeft : 8}}>❤️</span> }
        </span>
    )
}

