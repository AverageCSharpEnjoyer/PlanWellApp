import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/meal')
      .then(response => {
        setMeals(response.data)
      })
  }, [])

  return (
    <>
      <h1>MealApp</h1>
      <ul>
        {meals.map((meal: any) => (
          <li key={meal.id}>
            {meal.name}
          </li>  
        ))}
      </ul>
    </>
  )
}

export default App
