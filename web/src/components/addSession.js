import React from 'react';
import { 
    FormControl,
    FormLabel, 
    NumberInput,
    NumberInputField, 
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Button
} from '@chakra-ui/react';

class AddSession extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            minutes: 10,
        }
    }

    addSession = (e) => {
        let { date, minutes } = this.state;

        if (minutes < 1) {
            minutes = 1;
        }
        
        e.preventDefault();

        const newSession = { date, minutes };
        
        const request = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newSession)
        }
        fetch('http://localhost:3001/addsession', request);
        
        this.props.refresh();
    }

    handleMinutesChange = (e) => {
        this.setState({ minutes: parseInt(e.target.value) });
    }

    handleIncrement = () => {
        this.setState({ minutes: this.state.minutes + 2 });
        console.log(this.state.minutes)
    }

    handleDecrement = () => {
        this.setState({ minutes: this.state.minutes - 2 });
        console.log(this.state.minutes)
    }

    render() {
        return (
            <FormControl display='flex' flexDirection='column' alignItems='center'>
                <FormLabel>Session Duration</FormLabel>
                <NumberInput defaultValue={10} step={2} size='sm' maxW='135' marginBottom='2' min={1}>
                    <NumberInputField onChange={ this.handleMinutesChange } textAlign='center' />
                    {/*<NumberInputStepper>
                        <NumberIncrementStepper onClick={ this.handleIncrement } />
                        <NumberDecrementStepper onClick={ this.handleDecrement } />
                    </NumberInputStepper>*/}
                </NumberInput>
                <Button onClick={ this.addSession }>Add Session</Button>
            </FormControl>
        )
    }
}

export default AddSession;