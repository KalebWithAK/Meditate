import React from 'react';

import MeditationLinechart from '../components/meditationLinechart.js';
import AddSession from '../components/addSession.js'
import Features from '../components/features.js';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.refresh = this.refresh.bind(this);

        this.state = {
            refresh: false
        }
    }

    refresh = () => {
        this.setState({ refreshed: !this.state.refresh });
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', /* hotel: trivago */}}>
                <h1>Meditation</h1>
                <AddSession refresh={this.refresh} />
                <MeditationLinechart key={this.state.refreshed} />
                <Features />
            </div>
        );
    }
}

export default Home;