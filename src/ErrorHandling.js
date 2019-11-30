import React, { Component } from 'react';

class ErrorHandling extends Component {
    constructor(props){
        super(props);
        this.state={ hasError: false}
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    }

    render() {
        const { hasError } = this.state;
        if (hasError){
            return <h1>Oppss... An error occured</h1>
        }
        return this.props.children;
    }

}

export default ErrorHandling;
