import { Container } from "semantic-ui-react";
import MealDashboard from "./diet/meal-dashboard";
import { useEffect, useState } from "react";
import { Meal } from "../../app/models/meal";
import { getMeals } from "../../app/api/planWellApi";

export function Health() {

    const [meals, setMeals] = useState<Meal[]>([]);

    useEffect(() => {
        const fetchData = async () => {
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
            <Container style={{ marginTop: '7em' }}>
                <MealDashboard meals={meals} />
            </Container>
        </>
    )
}