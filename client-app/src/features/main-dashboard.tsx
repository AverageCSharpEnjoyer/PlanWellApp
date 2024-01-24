import '../app/layout/styles.css'
import { Button, Card, Checkbox } from "semantic-ui-react";

export default function MainDashboard() {
    return (
        <>
            <Card.Group centered>
                <Card>
                    <Card.Content>
                        <Card.Header><a href="#">_tasks</a></Card.Header>
                        <Card.Description>
                            <ul>
                                <Checkbox checked={true} label="make bread" />
                                <Checkbox checked={false} label="buy food for pets" />
                                <Checkbox checked={false} label="clean windows" />
                            </ul>
                            <Button>Add new</Button>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Card.Header><a href="#">_money</a></Card.Header>
                        <Card.Description>
                            <p>Your current balance: 5,000 $</p>
                            <p>Spent this month: 240 $</p>
                            <Button>Add new</Button>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Card.Header><a href="#">_fitness</a></Card.Header>
                        <Card.Description>
                            <p>Weight from previous weighing: +0.5 kg</p>
                            <p>Closest day in a gym: Tomorrow</p>
                            <Button>Add new</Button>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Card.Header><a href="#">_projects</a></Card.Header>
                        <Card.Description>
                            <p>Make Planning App - in progress</p>
                            <p>Find new job - not started</p>
                            <Button>Add new</Button>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Card.Header><a href="#">_summary</a></Card.Header>
                        <Card.Description>
                            <p>View your charts</p>
                            <Button>Add new</Button>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        </>
    )
}