import { useState } from 'react';
import './App.css';
import JoinForm from './components/JoinForm';
import GameDisplay from './components/GameDisplay';

function App() {
	const [account,setAccount] = useState(null);
  return (
    <div className="App">
			<h1>ようこそ</h1>
				<GameDisplay/>
			{
				// account ? 
				// (
				// <>
				// {JSON.stringify(account)}
				// <GameDisplay/>
				// </>
				// )
				// :
				// (<JoinForm setAccount={setAccount}/>)
			}
    </div>
  );
}
export default App;
