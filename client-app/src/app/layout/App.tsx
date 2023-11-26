import { useEffect, useState } from 'react';
import axios from 'axios';
import { Meal } from '../models/meal';
import NavBar from './NavBar';

function App() {

  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    axios.get<Meal[]>('http://localhost:5000/api/meals')
      .then(response => {
        setMeals(response.data)
      })
  }, [])

  return (
    <>
    <NavBar></NavBar>
      <h1>MealApp</h1>
      <ul>
        {meals.map((meal: Meal) => (
          <li key={meal.id}>
            {meal.name}
          </li>  
        ))}
      </ul>
    </>
  )
}

export default App
