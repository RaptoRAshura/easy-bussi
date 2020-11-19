import React from 'react';
import { Menu } from 'semantic-ui-react'
import SearchBar from './SearchBar';

class TopNavigation extends React.Component {
    state = {
        activeItem: 'home'
    };
      
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        return (
            <Menu inverted >
              <Menu.Item
                name='EasyBussi'
                style={{fontSize:20}}
              />
              <Menu.Item
                name='DASHBOARD'
                active={this.state.activeItem === 'messages'}
                onClick={this.handleItemClick}
                style={{fontSize:16}}
              />
              <Menu.Item
                name='WAREHOUSE'
                active={this.state.activeItem === 'friends'}
                onClick={this.handleItemClick}
                style={{fontSize:16}}
              />
              <Menu.Menu position='right'>
                <Menu.Item>
                  <SearchBar/>
                </Menu.Item>
              </Menu.Menu>
            </Menu>    
        );
    }
}
export default TopNavigation;
