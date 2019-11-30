import React, { Component } from 'react';
import { robots } from "./robots";

import CardList from "./CardList";
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorHandling from "./ErrorHandling";

class App extends Component{
    constructor(){
        super();
        this.state={
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
               return response.json()
            })
            .then((users)=>{
                this.setState({robots: users})
            })
        this.setState({robots: robots});
        console.log('componentDidMount');
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});

        // console.log(filteredRobots);
        // this.setState({robots: filteredRobots});
    };

    render() {
        const filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return(
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorHandling>
                        <CardList robots={filteredRobots}/>
                    </ErrorHandling>
                </Scroll>
            </div>
        );
    }
}

export default App;
