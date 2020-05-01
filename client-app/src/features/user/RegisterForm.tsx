import React, {useContext} from "react";
import {Form as FinalForm, Field} from 'react-final-form';
import {Form, Button, Header} from "semantic-ui-react";
import TextInput from "../../app/common/form/TextInput";
import {RootStoreContext} from "../../app/stores/rootStore";
import {IUserFormValues} from "../../app/models/user";
import {FORM_ERROR} from "final-form";
import ErrorMessage from "../../app/common/form/ErrorMessage";

const RegisterForm = () => {
  const rootStore = useContext(RootStoreContext);
  const {register} = rootStore.userStore;

  return (
        <FinalForm onSubmit={(values: IUserFormValues) => register(values).catch(error => ({[FORM_ERROR]: error}))}
                   render={({handleSubmit, submitting, submitError, invalid, pristine, dirtySinceLastSubmit}) => (
                       <Form onSubmit={handleSubmit} error>
                         <Header as={'h2'} content={'Sing up Reactivities'} color={'teal'} textAlign={'center'}/>
                         <Field name={'username'} component={TextInput} placeholder={'Username'}/>
                         <Field name={'displayName'} component={TextInput} placeholder={'Display Name'}/>
                         <Field name={'email'} component={TextInput} placeholder={'Email'}/>
                         <Field name={'password'} component={TextInput} placeholder={'Password'} type={'password'}/>
                         {submitError && !dirtySinceLastSubmit && (<ErrorMessage error={submitError}  />)}
                         <Button disabled={(invalid && !dirtySinceLastSubmit) || pristine} loading={submitting} positive
                                 content={'Login'} fluid/>
                       </Form>
                   )}/>
  )
};

export default RegisterForm;