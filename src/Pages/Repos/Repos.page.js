import { useState } from "react";
import { useQuery } from "react-query";
import Spinner from '../../Components/Spinner/Spinner';
import ReposApis from '../../Services/repos.service';
import {findDateBeforeDays, getISODate} from '../../Utils/helpers';
import PageContainer from '../../Components/PageContainer/PageContainer';
import RepoCard from '../../Components/RepoCard/RepoCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import './repos.styles.css';

const Repos = (props) => {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreData, setHasMoreDate] = useState(true);
  const [date, setDate] = useState(getISODate(findDateBeforeDays(new Date(), 30)));

  const { refetch } = useQuery(`repos-${currentPage}-${date}`, () => ReposApis.getLastRepos(date, currentPage), {
    cacheTime: 30 * 60 * 1000,
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: ({data: {items}}) => {
      setRepos([...repos, ...items]);
      setHasMoreDate(true)
    },
    onError:(error) => {
      if(error.response.status === 422) setHasMoreDate(false)
    }
  });

  return ( 
    <PageContainer title="Github Reposatories">
      <InfiniteScroll
        dataLength={repos.length}
        next={() => setCurrentPage(currentPage + 1)}
        hasMore={hasMoreData}
        loader={
          <div className="spinner-container">
            <Spinner type="ThreeDots" color="#f57f1a" height={80} width={80} />
          </div>
        }
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      > 
        <div className="repos-container">
          {repos.map((repo, index) => <RepoCard repo={repo} key={index}/>)}
        </div>
      </InfiniteScroll>
    </PageContainer>
   );
}
 
export default Repos;