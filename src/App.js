import React, {useState} from 'react';
import './App.css';
import Header from './Header.js';
import Input from './Input.js';
import Button from './Button.js';
import InputResults from './InputResults.js';
function App() {
  const [selectedType, setSelectedType ] = useState('recreational');
  const [activity, setActivity] = useState(null);

  const handleSelectedType = (event) => {
    setSelectedType(event.target.value)
}

  const generateActivity = () => {
    fetch(`https://www.boredapi.com/api/activity?type=${selectedType}`)
      .then(response => response.json()).then(data => {setActivity(data)});
  };
  return (
    <>
    <Header />
    <Input selectedType={selectedType} typeChange={handleSelectedType} />
    <Button onClick={generateActivity} />
    <InputResults activity={activity}/>
    </>
  );
}

export default App;
