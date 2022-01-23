import React from "react";
import { Formik, Form, FastField } from "formik";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Content, Wrapper, ButtonLocal, Grid } from "./styles";
import { useDispatch } from "react-redux";
import { updateUserAsync } from "../../redux/userSlice";

const UpdateUser = ({ setOpenModal, currentUser, setReload }) => {
    const dispatch = useDispatch();
    const initialValues = {
        name: currentUser.name,
        email: currentUser.email,
        phone: currentUser.phoneNumber,
        admin: currentUser.isAdmin.toString(),
    };



    const handleSubmit = (values) => {
        const payload = { ...values, id: currentUser.id };
        dispatch(updateUserAsync(payload));
        setReload(1);
        setOpenModal(false);
    };
    return (
        <Wrapper>
            <Content>
                <h1>Update Admin</h1>
                <ButtonLocal onClick={() => setOpenModal(false)}>
                    <span className='ti-close'></span>
                </ButtonLocal>
                <Formik initialValues={initialValues} onSubmit={(values) => handleSubmit(values)}>
                    {(props) => {
                        return (
                            <Form>
                                <FastField
                                    // Formik's props
                                    name='name'
                                    component={Input}
                                    // Additional props
                                    label='Full name'
                                    type='text'
                                    placeholder=''
                                    disable={true}
                                />

                                <FastField
                                    // Formik's props
                                    name='email'
                                    component={Input}
                                    // Additional props
                                    label='Email'
                                    type='email'
                                    placeholder=''
                                    disable={true}
                                />

                                <FastField
                                    // Formik's props
                                    name='phone'
                                    component={Input}
                                    // Additional props
                                    label='Phone number'
                                    type='text'
                                    placeholder=''
                                    disable={true}
                                />

                                <Grid>
                                    <FastField
                                        // Formik's props
                                        name='admin'
                                        component={Input}
                                        // Additional props
                                        label='Admin'
                                        type='text'
                                        placeholder=''
                                        disable={true}
                                    />
                                </Grid>
                                <Button type='submit' block>
                                    Accept Admin
                                </Button>
                            </Form>
                        );
                    }}
                </Formik>
            </Content>
        </Wrapper>
    );
};

export default UpdateUser;
