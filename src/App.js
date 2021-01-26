import './App.css';
import {useState} from 'react'

function App() {
  const [Weight, setWeight] = useState(90);
  const [Intensity, setIntensity] = useState(1.3);
  const [Gender, setGender] = useState('male');
  const [Result, setResult] = useState(0);

  function Calculate(e) {
    e.preventDefault();
    let calories = 0;
    if (Gender === 'male') {
      calories = (879 + 10.2 * Weight) * Intensity;
    } else {
      calories = (795 + 7.18 * Weight) * Intensity;
    }
    setResult(calories);
  }

  return (
    <div className="App">
      <form onSubmit={Calculate}>
        <h3>Calories</h3>
        <div>
          <label>Weight</label>
          <input name='weight' type='number' value={Weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Intensity</label>
          <select name='intensity' value={Intensity} onChange={e => setIntensity(e.target.value)}>
            <option value='1.3'>Light</option>
            <option value='1.5'>Usual</option>
            <option value='1.7'>Moderate</option>
            <option value='2'>Hard</option>
            <option value='2.2'>Very hard</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type='radio' name='gender' value='male' defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
          <input type='radio' name='gender' value='female' onChange={e => setGender(e.target.value)} /><label>Female</label>
        </div>
        <div><output>{Result.toFixed(0)}</output></div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
