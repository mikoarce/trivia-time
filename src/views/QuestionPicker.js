import React from 'react';
import { Segment, Header, Icon, Button } from 'semantic-ui-react';
import rawQuestions from '../util/questions.json';

const QuestionPicker = () => {
    const [question, setQuestion] = React.useState();
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name="hand spock outline" />
                {question ? question
                    : "Can't think of a get to know question? Click the button and I'll give you one!"}
            </Header>
            <Button
                color='green'
                content={question ? 'Draw another!' : 'Do it!'}
                onClick={() => {
                    const max = rawQuestions.length;
                    const idx = Math.floor(Math.random() * max);
                    setQuestion(rawQuestions[idx]);
                }}
            />
        </Segment>
    );
};

export default QuestionPicker;
