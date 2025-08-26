function ProfileCard({ name, hobby, fav_food}) {
  return (
    <div>
      <h1>{name}의 프로필~</h1>
      <h2>취미 : {hobby}</h2>
      <h2>좋아하는 음식 : {fav_food}</h2>
    </div>
  );
}

export default ProfileCard;
