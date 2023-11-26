import { Alignment, Button, Navbar } from '@blueprintjs/core'
import React from 'react'

export default function NavBar() {
    return (
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>PlanWell</Navbar.Heading>
                <Navbar.Divider/>
                <Button className="bp5-minimal" icon="home" text="Home"/>
                <Button className="bp5-minimal" icon="book" text="Diet"/>
            </Navbar.Group>
        </Navbar>
    )
}