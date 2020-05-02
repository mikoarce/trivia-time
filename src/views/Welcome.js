import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import HeaderRow from './HeaderRow';
import QuestionPicker from './QuestionPicker';

const Welcome = () => (
  <Grid centered padded="horizontally">
    <Grid.Row stretched>
      <Grid.Column>
        <Segment attached='top' compact style={{ display: 'inline-block', padding:'10px 14px' }}>
          <HeaderRow />
        </Segment>
        <Segment attached>
          <QuestionPicker />
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Welcome;