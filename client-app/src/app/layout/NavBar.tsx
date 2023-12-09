import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function NavBar() {
    return (
        <Menu>
            <Menu.Item as={NavLink} to='/' name="_main" />
            <Menu.Item as={NavLink} to='/todotasks' name="_tasks" />
            <Menu.Item as={NavLink} to='/finance' name="_money" />
            <Menu.Item as={NavLink} to='/fitness' name="_fitness" />
            <Menu.Item as={NavLink} to='/personalprojects' name="_projects" />
            <Menu.Item as={NavLink} to='/summary' name="_summary" />
        </Menu>
    )
}