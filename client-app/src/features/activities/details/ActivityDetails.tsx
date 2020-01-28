import React, {useContext} from "react";
import {Card, Image, Button} from "semantic-ui-react";
import ActivityStore from "../../../app/stores/ActivityStore";
import {observer} from "mobx-react-lite";

const ActivityDetails: React.FC = () => {

    const activityStore = useContext(ActivityStore);
    const {selectedActivity: activity, openEditForm, cancelSelectedActivity} = activityStore;

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity!.category}.jpg`} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{activity!.title}</Card.Header>
                <Card.Meta>
                    <span>{activity!.title}</span>
                </Card.Meta>
                <Card.Description>
                    {activity!.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button basic onClick={() => openEditForm(activity!.id)} color={'blue'} content={'Edit'}/>
                    <Button onClick={cancelSelectedActivity} basic color={'grey'} content={'Cancel'}/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default observer(ActivityDetails);