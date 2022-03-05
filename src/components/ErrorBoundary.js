import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props) {

        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setSate({hasError: true});
    }
    render() {
        if (this.state.hasError) {
            return <h1>Oops. Something went wrong Buddy. We are sorry that you are seein this.</h1>
        }
        return this.props.children
    }
}


export default ErrorBoundary;

