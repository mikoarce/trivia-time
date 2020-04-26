import React from 'react';
import {
  Header, Segment, Divider, Grid,
} from 'semantic-ui-react';
import rawQuestions from '../util/questions.json';

const Welcome = () => (
  <Grid centered padded="horizontally">
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>
          <Header>
            Hello!
            <Header.Subheader>
              { rawQuestions && rawQuestions.length > 0 ? 'HAS QUESTIONS' : 'EMPTY QUESTIONS'}
            </Header.Subheader>
          </Header>
          <Divider />
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Welcome;