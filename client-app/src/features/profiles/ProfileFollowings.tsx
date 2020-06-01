import React, {useContext, useEffect} from "react";
import {RootStoreContext} from "../../app/stores/rootStore";
import {Tab, Grid, Header, Card} from "semantic-ui-react";
import ProfileCard from "./ProfileCard";

const ProfileFollowings = () => {
    const rootStore = useContext(RootStoreContext);
    const {profile, followings, loadFollowings, loading, activeTab} = rootStore.profileStore;

    useEffect(() => {
        loadFollowings('following')
    }, [loadFollowings]);

    return (
        <Tab.Pane loading={loading}>
            <Grid>
                <Grid.Column width={16}>
                    <Header floated={'left'} icon={'user'}
                            content={activeTab === 3 ? `People following ${profile!.displayName}` : `People ${profile!.displayName} is following`}/>
                </Grid.Column>
                <Grid.Column width={16}>
                    <Card.Group itemsPerRow={5}>
                        {followings.map((profile) => (
                            <ProfileCard key={profile.userName} profile={profile} />
                        ))}
                    </Card.Group>

                </Grid.Column>
            </Grid>
        </Tab.Pane>
    )
};

export default ProfileFollowings;