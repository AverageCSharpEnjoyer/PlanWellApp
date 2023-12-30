import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { PathConstants } from "../common/PathConstants";

export default function NavBar() {
    return (
        <Menu>
            <Menu.Item as={NavLink} to={PathConstants.DASHBOARD} name="_main" />
            <Menu.Item as={NavLink} to={PathConstants.TASKS} name="_tasks" />
            <Menu.Item as={NavLink} to={PathConstants.FINANCE} name="_money" />
            <Menu.Item as={NavLink} to={PathConstants.HEALTH} name="_fitness" />
            <Menu.Item as={NavLink} to={PathConstants.DASHBOARD} name="_projects" />
            <Menu.Item as={NavLink} to={PathConstants.DASHBOARD} name="_summary" />
        </Menu>
    )
}