import { useEffect, useState } from 'react';
import { Meal } from '../models/meal';
import NavBar from './NavBar';
import { Container } from 'semantic-ui-react';
import MealDashboard from '../../features/health/diet/meal-dashboard';
import MainDashboard from '../../features/main-dashboard';
import { getMeals } from '../api/planWellApi';

function App() {

  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const responseData = await getMeals();
        setMeals(responseData);
      } catch (error) {
        console.error('Meals could not be loaded: ', error);
      }
    };
    
    fetchData();
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
