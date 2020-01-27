import React from "react";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu";
import Container from "semantic-ui-react/dist/commonjs/elements/Container";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";

interface IProps {
    openCreateForm: () => void;
}

const NavBar: React.FC<IProps> = ({openCreateForm}) => {
    return (
        <Menu fixed={'top'} inverted>
            <Container>
                <Menu.Item header>
                    <img src={"/assets/logo.png"} alt={"logo"} style={{marginRight: '10px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item>
                    <Button onClick={openCreateForm}  positive content={"Create activity"} />
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar;