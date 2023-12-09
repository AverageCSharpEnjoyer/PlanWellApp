import { Grid, List } from "semantic-ui-react";
import { Meal } from "../../../app/models/meal";
import MealList from "./meal-list";

interface Props {
    meals: Meal[]
}

export default function MealDashboard({meals}: Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <MealList meals = {meals}/>
            </Grid.Column>
        </Grid>
    )
}