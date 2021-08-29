const fetchUser = async () => {
  let response = await fetch('https://randomuser.me/api/');
  response = await response.json();
  return response.results[0];
}

export default fetchUser;
