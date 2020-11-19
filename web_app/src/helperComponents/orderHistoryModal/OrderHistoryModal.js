import React from 'react';
import { Button, Modal, Label, Image, Segment, Icon, Grid, Table } from 'semantic-ui-react';
import addIcon from '../../Assets/add.png';

class OrderHistoryModal extends React.Component{
    constructor(props){ 
        super(props);
        this.state = {
            orderHistory: [
                {orderDate: '1', orderID: '1', deliveryStatus: '1', orderCost: '1', paymentStatus: '1'},
                {orderDate: '1', orderID: '1', deliveryStatus: '1', orderCost: '1', paymentStatus: '1'},
                {orderDate: '1', orderID: '1', deliveryStatus: '1', orderCost: '1', paymentStatus: '1'},
                {orderDate: '1', orderID: '1', deliveryStatus: '1', orderCost: '1', paymentStatus: '1'},
                {orderDate: '1', orderID: '1', deliveryStatus: '1', orderCost: '1', paymentStatus: '1'},
                {orderDate: '1', orderID: '1', deliveryStatus: '1', orderCost: '1', paymentStatus: '1'},
                {orderDate: '1', orderID: '1', deliveryStatus: '1', orderCost: '1', paymentStatus: '1'},
                {orderDate: '1', orderID: '1', deliveryStatus: '1', orderCost: '1', paymentStatus: '1'},
                {orderDate: '1', orderID: '1', deliveryStatus: '1', orderCost: '1', paymentStatus: '1'},
                {orderDate: '1', orderID: '1', deliveryStatus: '1', orderCost: '1', paymentStatus: '1'},
                {orderDate: '1', orderID: '1', deliveryStatus: '1', orderCost: '1', paymentStatus: '1'},
                {orderDate: '1', orderID: '1', deliveryStatus: '1', orderCost: '1', paymentStatus: '1'},
                {orderDate: '1', orderID: '1', deliveryStatus: '1', orderCost: '1', paymentStatus: '1'},
                {orderDate: '1', orderID: '1', deliveryStatus: '1', orderCost: '1', paymentStatus: '1'},
                {orderDate: '1', orderID: '1', deliveryStatus: '1', orderCost: '1', paymentStatus: '1'},
                {orderDate: '1', orderID: '1', deliveryStatus: '1', orderCost: '1', paymentStatus: '1'},
            ],
        }
    }  

    componentDidMount = () => {
        // here we call api with axios 
        // this.setState({ orderHistory: 'blah blah blah'});
    }
    render(){
        const { isModalOpen, onClickCancel } = this.props;
        return (
            <Modal 
                size = "large"
                open = {isModalOpen} 
                onClose = { onClickCancel }>
                <Modal.Header>
                    <Grid>
                        <Grid.Column width='3' >
                            <Label style = {{ fontSize:28, color: 'black', backgroundColor: 'white', padding: 0 }}>Order History</Label>
                        </Grid.Column>
                        <Grid.Column width = '6'>
                        </Grid.Column>
                        <Grid.Column width='4'>                        
                        </Grid.Column>  
                        <Grid.Column width = '3' >
                        </Grid.Column>
                    </Grid>
                </Modal.Header>
                <Modal.Content style = {{ padding: 6, height: 412 }} scrolling>
                    <Segment style = {{ minHeight: 400 }}>
                        <Table celled selectable size='large'>
                            <Table.Header>
                                <Table.Row textAlign='center'>
                                    <Table.HeaderCell width={1}>S no.</Table.HeaderCell>
                                    <Table.HeaderCell width={2}>Order Date</Table.HeaderCell>
                                    <Table.HeaderCell width={3}>Order ID</Table.HeaderCell>
                                    <Table.HeaderCell width={3}>Delivery Status</Table.HeaderCell>
                                    <Table.HeaderCell width={3}>Order Cost</Table.HeaderCell>
                                    <Table.HeaderCell width={3}>Payment Status</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                { this.state.orderHistory.map((order, index) => {
                                    return (<Table.Row textAlign='center'>
                                        <Table.Cell>{index + 1 }</Table.Cell>
                                        <Table.Cell>{ order.orderDate }</Table.Cell>
                                        <Table.Cell>{ order.orderID }</Table.Cell>
                                        <Table.Cell>{ order.deliveryStatus }</Table.Cell>
                                        <Table.Cell>{ order.orderCost }</Table.Cell>
                                        <Table.Cell>{ order.paymentStatus }</Table.Cell>
                                    </Table.Row>);
                                })}
                            </Table.Body>
                        </Table>
                    </Segment>
                </Modal.Content>
                <Modal.Actions>
                        <Button 
                            color = "red" 
                            onClick = { onClickCancel }>
                                 Cancel
                        </Button>
                        <Button 
                            color="green" 
                            onClick = { this.handleSave }>
                                Create
                        </Button>
                </Modal.Actions>
            </Modal>
        );
    };
}
export default OrderHistoryModal;