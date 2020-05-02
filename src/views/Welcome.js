import React from 'react';
import { Grid } from 'semantic-ui-react';
import HeaderRow from './HeaderRow';
import QuestionPicker from './QuestionPicker';

const Welcome = () => (
  <Grid centered padded="horizontally">
    <Grid.Row stretched>
      <Grid.Column>
        <HeaderRow />
        <QuestionPicker />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Welcome;