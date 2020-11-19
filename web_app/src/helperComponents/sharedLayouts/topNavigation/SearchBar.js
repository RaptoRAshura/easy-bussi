import React from 'react';

class SearchBar extends React.Component{
    state = { term: '' };
    onFormSubmit = (event) => {
       event.preventDefault();
    }
    render(){
        return(
            <div onSubmit = { this.onFormSubmit } className = "ui left icon input" >
                <input 
                    type = "text" 
                    value = {this.state.term}
                    placeholder="Search"
                    onChange = { (event) => this.setState({ term: event.target.value }) }/>
                <i className="users icon"></i>
            </div>
        );
    };
};
export default SearchBar;