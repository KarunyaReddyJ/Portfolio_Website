import  { useEffect, useState } from "react";
import axios from "axios";
import profile from '../assets/temp/profile.png'
import leetcode from '../utils/constants'
function LeetCodeProfile() {
  const [profileData, setProfileData] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const username=leetcode.leetcode
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const profileResponse = await axios.get(
         //   https://alfa-leetcode-api.onrender.com/${username}
        //   `https://alfa-leetcode-api.onrender.com/${username}`
        // );
        // setAvatar(profileResponse.avatar)

        const reposResponse = await axios.get(
          `https://leetcode-api-faisalshohag.vercel.app/${username}`
        );
        setProfileData({totalSubmissions:reposResponse.data.totalSubmissions,ranking:reposResponse.data.ranking});
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, [username]);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  const {
    totalSubmissions,
    ranking
  } = profileData;
  console.log(profileData,avatar)
  return (
    <div className="p-6 h-auto min-h-5xl text-black rounded-lg w-auto shadow-lg hover:shadow-sm">
        <h2 className="text-3xl radio-canada-big-homepage" > LeetCode </h2>
        <div className="flex justify-between items-center">
      <img src={avatar || profile} alt="profile" className="w-20 h-20 rounded-full" /> <a href="https://leetcode.com/u/karunya_kumar/" className="text-3xl radio-canada-big-homepage  hover:underline"> {username} </a>
      </div>
      <p> <strong className="my-1xl text-xl">Ranking:</strong>  {ranking} </p>
      {
        totalSubmissions.map((submission,index)=>{
            return ( <div key={index} className="my-1xl">
            <strong> {submission['difficulty']} :</strong> 
            <span> {submission['count']}  </span>
            </div> )
        })
      }
    </div>
  );
}

export default LeetCodeProfile;
