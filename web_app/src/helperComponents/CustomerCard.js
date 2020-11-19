import React from 'react';
import { Container } from 'semantic-ui-react';
import CreateOrderModal from '../helperComponents/createOrderModal/CreateOrderModal' 
import OrderHistoryModal from '../helperComponents/orderHistoryModal/OrderHistoryModal' 
// import Avatar from '../Assets/kristy.png';

class CustomerCard extends React.Component{
    
    state = { 
        isCreateOrderModalOpen : false,
        isOrderHistoryModalOpen : false,
        customerInfo : [],
    };

    // Create Order Modal
    onCreateOrderModalOpen = () => {
        this.setState({ isCreateOrderModalOpen: true });
    }
    onCreateOrderModalClose = () => {
        this.setState({ isCreateOrderModalOpen: false });
    }
    
    //Order Histroy Modal
    onOrderHistoryModalOpen = () => {
        this.setState({ isOrderHistoryModalOpen: true });
    }
    onOrderHistoryModalClose = () => {
        this.setState({ isOrderHistoryModalOpen: false });
    }

    render(){
        return(
            <div className = "ui card raised p-1">
                <div className = "content" style={{backgroundColor:"#02dee1"}}>
                    <button className="ui white labled button large" >
                        <i className="user icon "></i>
                        {this.props.customerName}
                    </button>
                    <div className="ui divider"></div>
                    <button className="ui button large white" >
                        <i className="balance scale icon "></i>Accounts
                    </button>
                </div>
                <div className="ui two buttons">
                    <div className="ui  bottom attached button " onClick={ this.onOrderHistoryModalOpen }>History</div>
                    <div className="ui  bottom attached button " onClick={ this.onCreateOrderModalOpen }>Create</div>
                </div>
                <Container>
                    <CreateOrderModal 
                        isModalOpen = { this.state.isCreateOrderModalOpen }
                        onClickCancel = { this.onCreateOrderModalClose }
                        customerInfo = {this.state.customerInfo}/>
                        
                </Container>
                <Container>
                    <OrderHistoryModal 
                        isModalOpen = { this.state.isOrderHistoryModalOpen }
                        onClickCancel = { this.onOrderHistoryModalClose }
                        customerInfo = {this.state.customerInfo}/>
                        
                </Container>
            </div>
        );
    };
};
export default CustomerCard;