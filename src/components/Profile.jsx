import  { useEffect, useState } from "react";
import axios from "axios";
import github from '../utils/constants'
function GitHubProfile( ) {
  const [profileData, setProfileData] = useState(null);
  const [repos, setRepos] = useState([]);
  const username=github.github
  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setProfileData(profileResponse.data);

        const reposResponse = await axios.get(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=5`
        );
        setRepos(reposResponse.data);
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
    avatar_url,
    name,
    bio,
    public_repos,
    followers,
    following,
    html_url,
  } = profileData;

  return (
    <div className="p-6 text-black rounded-lg w-auto shadow-lg hover:shadow-sm">
      <h2 className="text-3xl radio-canada-big-homepage">GitHub</h2>
      <div className="flex items-center">
        <img src={avatar_url} alt="avatar" className="w-20 h-20 rounded-full" />
        <div className="ml-4">
          <h2 className="text-3xl font-bold">
            <a
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {name || username}
            </a>
          </h2>
          {bio && <p className="mt-2 text-gray-400">{bio}</p>}
        </div>
      </div>
      <div className="mt-4">
        <p>
          <strong>Public Repositories:</strong> {public_repos}
        </p>
        <p>
          <strong>Followers:</strong> {followers}
        </p>
        <p>
          <strong>Following:</strong> {following}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-bold">Recent Repositories</h3>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id} className="mt-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {repo.name}
              </a>
              <p className="text-gray-400">{repo.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GitHubProfile;
