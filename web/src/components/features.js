import React from 'react'

class Features extends React.Component {
    features = [
        { text: 'starting and ending session with buttons', id: 0 },
        { text: 'bell to mark 10, 20, 30, etc minutes', id: 1 },
        { text: 'different types of graphs (bar chart for avg, min, and max times per day, week, month, year', id: 2 }
    ]
    render () {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Features</h1>
                <ul /*style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}*/>
                    {this.features.map(feature => <li key={feature.id}>{feature.text}</li>)}
                </ul>
            </div>
        );
    }
}

export default Features