import './repoCard.styles.css';
import {FaStar} from 'react-icons/fa';
import {MdErrorOutline} from 'react-icons/md';
import {roundThousandToK, getDiffInDays} from '../../Utils/helpers';

const RepoCard = ({repo}) => {
  const {
    name,
    description,
    html_url,
    open_issues,
    stargazers_count,
    created_at,
    owner: {
      login,
      avatar_url
    }
  } = repo;
  return ( 
    <a className="repo-Container" href={html_url} target="_blank">
      <div className="avatar-container primary-border-color-dark" style={{backgroundImage: `url(${avatar_url})`}}></div>
      <div className="info-container">
        <div className="main-info-container">
          <div className="repo-name primary-bgcolor-dark">{name}</div>
          <div className="repo-description">{description}</div>
        </div>
        <div className="counters-container">
          <div className="starts-container primary-border-color-medium primary-color-dark primary-bgcolor-xlight">
            <div>Stars</div>
            <FaStar className="star-icon"/>
            <div className="stars-count">{roundThousandToK(stargazers_count)}</div>
          </div>
          <div className="issues-container secodary-border-color-medium secodary-bgcolor-xxlight secodary-color-medium ">
            <div>Issues</div>
            <MdErrorOutline className="star-icon"/> 
            <div className="stars-count">{open_issues}</div>
          </div>
          <div className="create-duration"> {`Submitted ${getDiffInDays(new Date(), created_at)} ago by ${login}`}</div>
        </div>
      </div>
    </a>
   );
}
 
export default RepoCard;