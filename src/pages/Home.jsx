import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
function Home() {
  return (
    <div>
      <h1 className='text-4xl mb-11 grid '>Welcome to Github finder</h1>
      <h4>Search for a github user</h4>
      <UserSearch />
      <UserResults />
    </div>
  );
}

export default Home;
