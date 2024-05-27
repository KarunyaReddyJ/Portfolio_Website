import React,{useState,useEffect} from 'react'
import axios from 'axios';
import github from '../utils/constants'
import Project from './Project';
function Projects() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reposResponse = await axios.get(
          `https://api.github.com/users/${github.github}/repos?sort=updated&per_page=5`
        );
        setRepos(reposResponse.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {
      repos.map(({name,created_at,language,html_url},index)=>{
       return( <Project title={name} createdOn={created_at} language={language} projectURL={html_url} key={index} />)
      })
    }
    </>
  )
}

export default Projects
