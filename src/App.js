import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Filters } from './Components/Filters/Filters';
import { Results } from './Components/Results/Results';
import { getCategories } from './redux/actions/mainActions';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, []) //eslint-disable-line

  return (
    <div className="App">
      <Filters />
      <Results />
    </div>
  );
}

export default App;
