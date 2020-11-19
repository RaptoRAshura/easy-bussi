import React from 'react';
import { Button, Modal, Label, Image, Segment, Icon, Grid } from 'semantic-ui-react';
import FormSegment from './FormSegment';
import addIcon from '../../Assets/add.png';

class CreateOrderModal extends React.Component{
    constructor(props){ 
        super(props);
        this.state = {
            orderInfo: [{
                itemCode: '',
                itemName: '',
                quantity: '',
                weight: '',
                rate: '',
                itemCost: ''
            }],
            isAddDisabled: true,
            orderDate: '',
            orderID: '0001MA',
            orderCost: 0
        }
    }

    componentDidMount(){
        const today = new Date();
        const dateTime = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
        this.setState({ orderDate: dateTime });
    }

    handleItemTrash = (itemIndex, itemCost) => {
        const newOrderInfo = this.state.orderInfo.slice();
        newOrderInfo.splice(itemIndex, 1);
        this.setState({ orderInfo: newOrderInfo,
                        orderCost: this.state.orderCost - itemCost});
    }

    handleAdd = () => {
        if(!this.state.isAddDisabled){
            const orderAfterAdd = this.state.orderInfo.slice();
            orderAfterAdd.push({
                itemCode: '',
                itemName: '',
                quantity: '',
                weight: '',
                rate: '',
                itemCost: ''
            });
            this.setState({ 
                orderInfo: orderAfterAdd, isAddDisabled: true });
        }
    }

    handleItemSubmit = (itemInfo, itemCost, itemIndex) => {
        itemInfo.itemCost = itemCost.toString();
        const updatedOrder = this.state.orderInfo.slice();
        updatedOrder.splice(itemIndex, 1, itemInfo);
        this.setState({  
            orderInfo: updatedOrder,
            isAddDisabled: false,
            orderCost: this.state.orderCost + itemCost
        });
    }

    handleSave = () => {
        console.log(this.state.orderInfo)
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
                            <Label style = {{ fontSize:28, color: 'black', backgroundColor: 'white', padding: 0 }}>Create Order</Label>
                        </Grid.Column>
                        <Grid.Column width = '6'>
                        </Grid.Column>
                        <Grid.Column width='4'>
                        <Label basic floated = 'right' style = {{ fontSize: 16, color: 'black' }}>
                            Order ID :
                            <Label.Detail>{ this.state.orderID }</Label.Detail>
                        </Label>  
                        </Grid.Column>  
                        <Grid.Column width = '3' >
                        <Label basic floated = 'right' style = {{ fontSize: 16, color: 'black' }}>
                            Date :
                            <Label.Detail>{ this.state.orderDate }</Label.Detail>
                        </Label> 
                        </Grid.Column>
                    </Grid>
                </Modal.Header>
                <Modal.Content style = {{ padding: 6, height: 412 }} scrolling>
                    <Segment style = {{ minHeight: 400 }}>
                        <div>
                            <Button as = 'div' labelPosition = 'left'>
                                <Label basic style = {{fontSize: 16, fontWeight: 400}}>
                                    <Icon name = 'edit outline' />
                                    Add Item
                                </Label>
                                <Button as = 'a' color = "green"
                                    style = {{ 
                                        paddingRight: 8, 
                                        paddingLeft: 8, 
                                        paddingTop: 5, 
                                        paddingBottom: 5 
                                    }} 
                                    onClick = { this.handleAdd }>
                                    <Image 
                                        src = { addIcon }  
                                        style = {{ height: 25, width: 25 }}/>  
                                </Button>
                            </Button>
                        </div>
                        { this.state.orderInfo.map((item, index) =>
                            <FormSegment 
                                key = { index }
                                itemIndex = { index }
                                item = { item }
                                itemSubmit = { this.handleItemSubmit }
                                handleTrash = { this.handleItemTrash }
                            />
                        )}
                    </Segment>
                </Modal.Content>
                <Modal.Actions>
                        <Label basic floated = 'right' style = {{ fontSize: 16, color: 'black' }}>
                            Total Cost 
                            <Label.Detail>Rs. { this.state.orderCost }</Label.Detail>
                        </Label>
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
export default CreateOrderModal;