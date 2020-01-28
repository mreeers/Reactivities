import React, {useContext} from "react";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu";
import Container from "semantic-ui-react/dist/commonjs/elements/Container";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import ActivityStore from "../../app/stores/ActivityStore";
import {observer} from "mobx-react-lite";

const NavBar: React.FC = () => {

    const activityStore = useContext(ActivityStore);

    return (
        <Menu fixed={'top'} inverted>
            <Container>
                <Menu.Item header>
                    <img src={"/assets/logo.png"} alt={"logo"} style={{marginRight: '10px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button onClick={activityStore.openCreateForm} positive content={"Create activity"}/>
                </Menu.Item>
            </Container>
        </Menu>
    );
};

export default observer(NavBar);