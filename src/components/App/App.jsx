import { GetSumm, GetResult, UsersList , OrdedList , UsersDetails} from "../index";

const App = () => {

  return (
    <div>
      Hello World
      <GetSumm b={10} a={1} />
      <GetResult b={2} a={30} />
      <UsersList />
      <hr/>
      <OrdedList />
<hr/>
<UsersDetails/>
    </div>
  );
};

export default App;