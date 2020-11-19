import React from 'react';
import { Form, Label, Input, Icon, Button } from 'semantic-ui-react';
class FormSegment extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
            itemInfo: {
                itemCode: '',
                itemName: '',
                quantity: '',
                weight: '',
                rate: '',
            },
            itemCost: '',
            isItemSubmitted: false,
        }   
    }  
    
    handleInput = (event) => {
        const {name, value} = event.target;
        const item = this.state.itemInfo;
        item[name] = value;
        if(name === 'rate' || name === 'weight' || name === 'quantity'){
            this.setState({ 
                itemInfo: item ,
                itemCost: this.state.itemInfo.quantity === '' ?
                this.state.itemInfo.weight * this.state.itemInfo.rate:
                this.state.itemInfo.quantity * this.state.itemInfo.rate});
        }
        else{
            this.setState({itemInfo: item});
        }
        
    }

    onItemChecked = () => {
        this.setState({ isItemSubmitted: true,});
        this.props.itemSubmit(this.state.itemInfo, this.state.itemCost, this.props.itemIndex);
    }

    onItemTrashed = () => {
        this.props.handleTrash(this.props.itemIndex, this.state.itemCost);
    }

    render(){
        const { itemIndex, item } = this.props;
        return(
            <Form style = {{ marginTop: 10 }} onSubmit={this.onItemChecked}>
                <Form.Group>
                    <Label style = {{ fontSize: 16, fontWeight: 400 , paddingTop: 10, marginLeft: 10, color: "black" }}>{ itemIndex + 1 }</Label>
                    <Form.Input  
                        placeholder = 'item code' 
                        width = { 2 }
                        required = { true }
                        type = "text"
                        name = "itemCode"
                        disabled = { this.state.isItemSubmitted }
                        value = { this.state.isItemSubmitted ? item.itemCode: this.state.itemInfo.itemCode }
                        onChange = {this.handleInput}/>
                    <Form.Input 
                        placeholder = 'item name' 
                        width = { 3 }
                        required = { true }
                        type = "text"
                        name = "itemName" 
                        value = { this.state.isItemSubmitted ? item.itemName: this.state.itemInfo.itemName }
                        disabled = { this.state.isItemSubmitted } 
                        onChange = { this.handleInput }/>
                    <Form.Input 
                        labelPosition = 'right' 
                        width = { 2 }>
                        <Input 
                            placeholder = 'quantity' 
                            type = "text" 
                            name = "quantity" 
                            required = { true }
                            value = { this.state.isItemSubmitted ? item.quantity: this.state.itemInfo.quantity }
                            disabled = { this.state.isItemSubmitted } 
                            onChange = { this.handleInput }></Input>
                        <Label 
                            style = {{ backgroundColor: '#02dee1', color:'white' }}>
                            pc
                        </Label>
                    </Form.Input>
                    <Form.Input 
                        labelPosition = 'right' 
                        width={2}>
                        <Input 
                            placeholder = 'weight' 
                            type = "text" 
                            name = "weight" 
                            required = { true }
                            value = { this.state.isItemSubmitted ? item.weight: this.state.itemInfo.weight } 
                            disabled = { this.state.isItemSubmitted }
                            onChange = { this.handleInput }></Input>
                        <Label 
                            style = {{ backgroundColor: '#02dee1', color:'white' }}>
                                kg
                        </Label>
                    </Form.Input>
                    <Form.Input 
                        labelPosition = 'left' 
                        width = { 3 }>
                        <Label 
                            style = {{ backgroundColor: '#02dee1', color:'white' }}>
                                Rs.
                        </Label>
                        <Input 
                            placeholder = 'rate' 
                            type = "text" 
                            name = "rate" 
                            required = { true } 
                            value = { this.state.isItemSubmitted ? item.rate: this.state.itemInfo.rate }
                            disabled = { this.state.isItemSubmitted }
                            onChange = { this.handleInput }></Input>       
                    </Form.Input>
                    <Form.Input 
                        labelPosition = 'left' 
                        width = {3 }>
                        <Label 
                            style = {{ backgroundColor: '#02dee1', color:'white' }}>
                            Rs.
                        </Label>
                        <Input 
                            placeholder = 'total item cost' 
                            name = "totalItemCost" 
                            disabled = { this.state.isItemSubmitted }
                            value = { this.state.isItemSubmitted ? item.itemCost: this.state.itemCost }
                            readOnly
                            ></Input>       
                    </Form.Input>
                    { !this.state.isItemSubmitted? 
                    <Button 
                        style = {{ 
                            fontSize: 16, 
                            paddingLeft: 14,
                            paddingRight: 4, 
                            paddingTop: 10,
                            backgroundColor: "aqua", 
                            }}>
                        <Icon name = "check"/>
                    </Button>
                        :  
                    <Button 
                        type = "button"
                        style = {{ 
                           fontSize: 16, 
                           paddingRight: 4, 
                           paddingLeft: 14, 
                           backgroundColor: "aqua",
                           paddingTop: 10,
                           }}
                        onClick = { this.onItemTrashed }>
                       <Icon name = "trash"/>
                    </Button >
                    }  
                </Form.Group>
            </Form>
        );
    }
}
export default FormSegment;