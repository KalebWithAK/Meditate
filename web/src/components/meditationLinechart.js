import React from 'react';
import Plot from 'react-plotly.js';

class MeditationLinechart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            sessions: []
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:3001/meditationdata');
        this.setState({
            sessions: await response.json(),
            isLoaded: true
        });
    }

    render() {
        const { error, isLoaded, sessions } = this.state;

        if (error)
            return <div>Error: {error.message}</div>;
        else if(!isLoaded)
            return <div>Loading...</div>;
        else {
            const xValues = [];
            const yValues = [];
            sessions.forEach((session) => {
                xValues.push(session.date);
                yValues.push(session.minutes);
            })
            return (<Plot 
                data = {[
                    {
                        x: xValues,
                        y: yValues,
                        type: 'scatter',
                        mode: 'lines'
                    }

                ]}

                layout = {{ 
                    width: 500, height: 500, 
                    xaxis_title: 'Date', yaxis_title: 'Session Duration', 
                    title: 'Meditation Session Durations Over Time' 
                }}
            />);
        }
    }
}

export default MeditationLinechart;