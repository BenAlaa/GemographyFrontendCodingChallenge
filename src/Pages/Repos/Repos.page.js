import { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import Spinner from '../../Components/Spinner/Spinner';
import ReposApis from '../../Services/repos.service';
import {findDateBeforeDays, getISODate} from '../../Utils/helpers';
import PageContainer from '../../Components/PageContainer/PageContainer';
import RepoCard from '../../Components/RepoCard/RepoCard';
import './repos.styles.css';

const Repos = (props) => {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [date, setDate] = useState(getISODate(findDateBeforeDays(new Date(), 30)));



  // useEffect(() => {
  //   const queryDate = getISODate(findDateBeforeDays(new Date(), 30));
  //   setDate(queryDate);
  // }, []);

  const { isLoading, isFetching, refetch } = useQuery(`repos-${currentPage}-${date}`, () => ReposApis.getLastRepos(date, currentPage), {
    cacheTime: 30 * 60 * 1000,
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: ({data: {items, total_count, incomplete_results}}) => {
      setRepos(items);
    }
  });

  if(isLoading) return (
    <div className="spinner-container">
      <Spinner type="ThreeDots" color="#f57f1a" height={80} width={80} />
    </div>
  )
  return ( 
    <PageContainer title="Github Reposatories">
      <div className="repos-container">
        {repos.map((repo, index) => <RepoCard repo={repo} key={index}/>)}
      </div>
    </PageContainer>
   );
}
 
export default Repos;