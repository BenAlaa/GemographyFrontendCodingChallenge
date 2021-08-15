import http from './http.service';

const endpoint = '/search/repositories';

const getLastRepos = async (date, page = 1, sort = 'stars', order = 'desc') => {
  const params = {
    q: `created:>${date}`,
    sort,
    order,
    page
  }
  return await http.get(endpoint, {params});
};


const apis = {
  getLastRepos
}

export default apis;