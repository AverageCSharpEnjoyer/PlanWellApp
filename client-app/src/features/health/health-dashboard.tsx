import { Container } from "semantic-ui-react";
import MealDashboard from "./diet/meal-dashboard";
import { getMeals } from "../../app/api/planWellApi";
import { useQuery } from "react-query";

export function Health() {
    const {data: meals, error, isLoading} = useQuery('meals', getMeals);

    if (error) return <div>Request Failed</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <Container style={{ marginTop: '7em' }}>
                <MealDashboard meals={meals ? meals : []} />
            </Container>
        </>
    )
}