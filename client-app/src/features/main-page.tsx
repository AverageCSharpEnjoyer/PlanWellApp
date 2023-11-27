import { Button, Card, Checkbox, Elevation } from "@blueprintjs/core";
import '../app/layout/styles.css'

export default function MainPage() {
    return (
        <>
            <div className="row">
                <Card className="column"
                    interactive={true} elevation={Elevation.TWO}>
                    <h5>
                        <a href="#">_tasks</a>
                    </h5>
                    <ul>
                        <Checkbox checked={true} label="make bread" />
                        <Checkbox checked={false} label="buy food for pets" />
                        <Checkbox checked={false} label="clean windows" />
                    </ul>
                    <Button>Add new</Button>
                </Card>
                <Card className="column" interactive={true} elevation={Elevation.TWO}>
                    <h5>
                        <a href="#">_money</a>
                    </h5>
                    <p>Your current balance: 5,000 $</p>
                    <p>Spent this month: 240 $</p>
                    <Button>View details</Button>
                </Card>
                <Card className="column" interactive={true} elevation={Elevation.TWO}>
                    <h5>
                        <a href="#">_fitness</a>
                    </h5>
                    <p>Weight from previous weighing: +0.5 kg</p>
                    <p>Closest day in a gym: Tomorrow</p>
                    <Button>View details</Button>
                </Card>
                <Card className="column" interactive={true} elevation={Elevation.TWO}>
                    <h5>
                        <a href="#">_projects</a>
                    </h5>
                    <p>Make Planning App - in progress</p>
                    <p>Find new job - not started</p>
                    <Button>View all</Button>
                </Card>
                <Card className="column" interactive={true} elevation={Elevation.TWO}>
                    <h5>
                        <a href="#">_summary</a>
                    </h5>
                    <p>View your charts</p>
                    <Button>View details</Button>
                </Card>
            </div>
        </>
    )
}