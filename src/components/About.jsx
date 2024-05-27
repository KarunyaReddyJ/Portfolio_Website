import { useEffect, useState } from "react";
import axios from "axios";
import constant from "../utils/constants";
import loading from "../assets/pre.svg";
import developer from "../assets/home-dev2.png";
function About() {
  const [githubData, setGithubData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [codeforcesData, setCodeforcesData] = useState(null);

  useEffect(() => {
    axios
      .get(constant.githubENDPOINT)
      .then((response) => setGithubData(response.data))
      .catch((error) => console.error("Error fetching GitHub data:", error));

    axios
      .get(constant.leetcodeENDPOINT)
      .then((response) => setLeetcodeData(response.data))
      .catch((error) => console.error("Error fetching LeetCode data:", error));

    axios
      .get(constant.codeforcesENDPOINT)
      .then((response) => setCodeforcesData(response.data.result[0]))
      .catch((error) =>
        console.error("Error fetching Codeforces data:", error)
      );
  }, []);
  if (!(githubData && leetcodeData && codeforcesData))
    return (
      <div className="h-screen">
        <img src={loading} className="w-52" />
      </div>
    );
  return (
    <div className="text-white h-screen flex flex-row justify-between">
      <header className="App-header">
        <section>
          <h2>GitHub</h2>
          {githubData ? (
            <div>
              <p>
                <strong>Username:</strong> {githubData.login}
              </p>
              <p>
                <strong>Repositories:</strong> {githubData.public_repos}
              </p>
              <p>
                <strong>Followers:</strong> {githubData.followers}
              </p>
              <p>
                <strong>Following:</strong> {githubData.following}
              </p>
            </div>
          ) : (
            <p>Loading GitHub data...</p>
          )}
        </section>
        <section>
          <h2>LeetCode</h2>
          {leetcodeData ? (
            <div>
              <p>
                <strong>Username:</strong> {leetcodeData.username}
              </p>
              <p>
                <strong>Total Problems Solved:</strong>{" "}
                {leetcodeData.totalSolved}
              </p>
              <p>
                <strong>Ranking:</strong> {leetcodeData.ranking}
              </p>
            </div>
          ) : (
            <p>Loading LeetCode data...</p>
          )}
        </section>
        <section>
          <h2>Codeforces</h2>
          {codeforcesData ? (
            <div>
              <p>
                <strong>Username:</strong> {codeforcesData.handle}
              </p>
              <p>
                <strong>Rating:</strong> {codeforcesData.rating}
              </p>
              <p>
                <strong>Max Rating:</strong> {codeforcesData.maxRating}
              </p>
              <p>
                <strong>Rank:</strong> {codeforcesData.rank}
              </p>
            </div>
          ) : (
            <p>Loading Codeforces data...</p>
          )}
        </section>
      </header>
      <img src={developer} alt="" className="h-32" />
    </div>
  );
}

export default About;
