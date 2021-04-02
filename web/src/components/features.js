import React from 'react'

class Features extends React.Component {
    features = [
        'starting and ending session with buttons',
        'bell to mark 10, 20, 30, etc minutes'
    ]
    render () {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Features</h1>
                <ul /*style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}*/>
                    {this.features.map(feature => <li>{feature}</li>)}
                </ul>
            </div>
        );
    }
}

export default Features