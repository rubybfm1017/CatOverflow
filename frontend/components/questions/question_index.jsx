import React from 'react';

class questionIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchQuestions()
    }
    
    render() { 
        return ( 
            <div>questions</div>
         );
    }
}
 
export default questionIndex;