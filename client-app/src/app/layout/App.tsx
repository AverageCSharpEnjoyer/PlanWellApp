import { useEffect, useState } from 'react';
import axios from 'axios';
import { Meal } from '../models/meal';
import NavBar from './NavBar';
import { Container } from 'semantic-ui-react';
import MealDashboard from '../../features/fitness_feature/diet_dashboard/meal-dashboard';
import MainDashboard from '../../features/main-dashboard';

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
    <MainDashboard></MainDashboard>
    <Container style={{marginTop: '7em'}}>
      <MealDashboard meals={meals} />
    </Container>
    </>
  )
}

export default App
