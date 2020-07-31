import React from 'react';
import {Container} from './style'

const AppLayout = (props) => {

    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default AppLayout;