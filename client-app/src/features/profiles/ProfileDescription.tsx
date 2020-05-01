import React, {useContext, useState} from "react";
import {RootStoreContext} from "../../app/stores/rootStore";
import {Tab, Grid, GridColumn, Header, Button} from "semantic-ui-react";
import ProfileEditForm from "./ProfileEditForm";

const ProfileDescription = () => {
  const rootStore = useContext(RootStoreContext);
  const {updateProfile, profile, isCurrentUser} = rootStore.profileStore;
  const [editMode, setEditMode] = useState(false);

  return (
      <Tab.Pane>
        <Grid>
          <GridColumn width={16}>
            <Header floated={'left'} icon={'user'} content={`About ${profile!.userName}`} />
            {isCurrentUser && (
                <Button floated={'right'} basic content={editMode ? 'Cancel' : 'Edit Profile'} onClick={() => setEditMode(!editMode)} />
            )}
          </GridColumn>
          <GridColumn width={16}>
            {editMode ? (
                <ProfileEditForm updateProfile={updateProfile} profile={profile!} />
            ) : (
                <span>{profile!.bio}</span>
            )}
          </GridColumn>
        </Grid>
      </Tab.Pane>
  )
};

export default ProfileDescription;