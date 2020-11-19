import React from 'react';
import CustomerCard from '../../helperComponents/CustomerCard';

class Dashboard extends React.Component{
    
    state = {
    };

    render(){
        return(
            <div>
                <div className="ui raised segment" style = {{ margin: 10, }}>
                    <div className="ui six doubling cards">
                        <CustomerCard customerName="Apoorv Agarwal" />
                        
                    </div>    
                </div>
            </div> 
        );
    };
}
export default Dashboard;