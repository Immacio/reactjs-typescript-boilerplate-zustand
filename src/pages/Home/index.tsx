import useUserDetailsStore, { UserDetailsState } from '../../store/UserDetailsStore';

const Home = (): JSX.Element => {
  const { token, setToken } = useUserDetailsStore((state: UserDetailsState) => state);

  return (
    <div>
      {token}
      <button type="button" onClick={() => setToken(Math.random().toString())}>
        Set Token
      </button>
    </div>
  );
};

export default Home;
