import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { PathConstants } from "../common/PathConstants";

export default function NavBar() {
    return (
        <Menu>
            <Menu.Item as={NavLink} to={PathConstants.DASHBOARD} name="main" />
            <Menu.Item as={NavLink} to={PathConstants.TASKS} name="tasks" />
            <Menu.Item as={NavLink} to={PathConstants.FINANCE} name="money" />
            <Menu.Item as={NavLink} to={PathConstants.HEALTH} name="fitness" />
            <Menu.Item as={NavLink} to={PathConstants.PROJECTS} name="projects" />
            <Menu.Item as={NavLink} to={PathConstants.SUMMARY} name="summary" />
        </Menu>
    )
}