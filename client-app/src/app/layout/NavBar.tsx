import { Alignment, Button, Navbar } from '@blueprintjs/core'

export default function NavBar() {
    return (
        <Navbar>
            <Navbar.Group align={Alignment.RIGHT}>
                <Navbar.Heading>_planWell</Navbar.Heading>
                <Navbar.Divider/>
                <Button className="bp5-minimal" icon="home" text="_main"/>
                <Button className="bp5-minimal" icon="form" text="_tasks"/>
                <Button className="bp5-minimal" icon="euro" text="_money"/>
                <Button className="bp5-minimal" icon="cycle" text="_fitness"/>
                <Button className="bp5-minimal" icon="projects" text="_projects"/>
                <Button className="bp5-minimal" icon="stacked-chart" text="_summary"/>
            </Navbar.Group>
        </Navbar>
    )
}