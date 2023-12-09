import { Button, Item, List, Segment } from "semantic-ui-react";
import { Meal } from "../../../app/models/meal";

interface Props {
    meals: Meal[]
}

export default function MealList({ meals }: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {meals.map(meal => (
                    <Item key={meal.id}>
                        <Item.Content>
                            <Item.Header as='a'>{meal.name}</Item.Header>
                            <Item.Meta>{meal.calories}</Item.Meta>
                            <Item.Description>
                                <div>{meal.description}</div>
                                <div>C: {meal.carbohydrates}, P: {meal.protein}, F: {meal.fat}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button floated="right" content="view" color="blue"/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}