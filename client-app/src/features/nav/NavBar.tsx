import React from "react";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu";
import Container from "semantic-ui-react/dist/commonjs/elements/Container";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";

const NavBar: React.FC = () => {

    return (
        <Menu fixed={'top'} inverted>
            <Container>
                <Menu.Item header as={NavLink} to={'/'}>
                    <img src={"/assets/logo.png"} alt={"logo"} style={{marginRight: '10px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities' as={NavLink} to={'/activities'}/>
                <Menu.Item>
                    <Button as={NavLink} to={'/createActivity'} positive content={"Create activity"}/>
                </Menu.Item>
            </Container>
        </Menu>
    );
};

export default observer(NavBar);