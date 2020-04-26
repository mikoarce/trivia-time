import React from 'react';
import {
  Header, Segment, Divider, Grid,
} from 'semantic-ui-react';
import QuestionPicker from './QuestionPicker';

const Welcome = () => (
  <Grid centered padded="horizontally">
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>
          <Header>
            Trivia Time!
          </Header>
          <Divider />
          <QuestionPicker />
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Welcome;