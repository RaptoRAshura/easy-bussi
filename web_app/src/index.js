import React from 'react';
import ReactDOM from 'react-dom'; 
import'mdbreact/dist/css/mdb.css';
import Dashboard from './appComponents/dashboardComponent/Dashboard';
import TopNavigation from './helperComponents/sharedLayouts/topNavigation/TopNavigation';
class EasyBussi extends React.Component{
    render(){
        return( 
            <div>
                <TopNavigation />
                <Dashboard/>
            </div>
        );
    };
};
ReactDOM.render(<EasyBussi/>,document.getElementById("root"));