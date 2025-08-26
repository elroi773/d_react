import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <h1>MY BFF</h1>
      <ProfileCard
        name="우지영"
        hobby="김진현이랑 통화하기"
        fav_food="마라탕"
      />
      <ProfileCard
        name="김지혜"
        hobby="공부하기"
        fav_food="채소"
      />
      <ProfileCard
        name="추다율"
        hobby="낮잠"
        fav_food="과일"
      />
      <ProfileCard
        name="전유림"
        hobby="밥먹기"
        fav_food="밥"
      />
      <ProfileCard
        name="김이레"
        hobby="불멍 물멍"
        fav_food="연어!!!!!!!!!!!!!!1"
      />
      <ProfileCard
        name="이민준"
        hobby="잠자기"
        fav_food="연어!!!!!!!!!!!!!!1"
      />
      <ProfileCard
        name="윤성연"
        hobby="늦잠 자기"
        fav_food="마라탕 속 감자"
      />
    </div>
  );
}


export default App