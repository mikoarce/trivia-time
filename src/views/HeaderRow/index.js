import React from 'react';
import { Header, Button, Icon } from 'semantic-ui-react';

import './styles.css';

const HeaderRow = () => (
    <>
        <Header
            className='main-box-header'
            as='h2'
            floated='left'
        >
            Trivia Time!
        </Header>
        <Button
            className='settings-button'
            icon
            floated='right'
            circular
            compact    
        >
            <Icon name='cog' size='large'/>
        </Button>
    </>
);

export default HeaderRow;
