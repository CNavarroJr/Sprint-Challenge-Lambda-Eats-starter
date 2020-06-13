import React, { useState } from 'react'; 
import { Card, CardImg, Form, FormGroup, Input, Dropdown, DropdownToggle,DropdownMenu, Label, Button } from 'reactstrap';

const OrderForm = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name:"",
    size: "Select Size",
    sauce: "",
    pepperoni: false,
    sausage: false,
    canadianbacon: false,
    spicyitaliansausage: false,
    extracheese: false,
    special: ''

  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleToppings = (e) => {
    setFormData({...formData, [e.target.name]: e.target.checked})
  }

  const toggle = () => setDropdownOpen((prevState) => !prevState)

  return (
    <>
      <Card color='info' style={{ width: '50%', margin: '0 auto'}}>
        <h2 style={{ color: 'white', margin: '0 auto' }}>Build Your Own Pizza!</h2>
        <CardImg src="/assets/pizza.jpg" alt="Pizza Image"/>
      </Card>

      <Form onSubmit={(e) => {
        e.preventDefault()
        console.log(formData)
      }} style={{ margin: '5% auto', width: '50%', }}>
        <FormGroup>
          <legend>Name</legend>
          <Input type='name' name='name' value={formData.name} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>

          <Dropdown isOpen={dropdownOpen} toggle={toggle}>

            <DropdownToggle caret>{formData.size}</DropdownToggle>

            <DropdownMenu>
              <div onClick={() => {
                toggle()
                setFormData({...formData, size: "Small"})
              }}>Small</div>
              <div onClick={() => {
                toggle()
                setFormData({...formData, size: "Medium"})
              }}>Medium</div>
              <div onClick={() => {
                toggle()
                setFormData({...formData, size: "Large"})
              }}>Large</div>
            </DropdownMenu>

          </Dropdown>

        </FormGroup>
        
        {/* Sauces */}

        <FormGroup tag='fieldset'>
          <legend>Sauce</legend>

          <FormGroup check>
            <Label>
              <Input type='radio' name='sauce' value='red' onChange={handleChange}/>
              Original Red 
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label>
              <Input type='radio' name='sauce' value='garlic' onChange={handleChange}/>
              Garlic Ranch
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label>
              <Input type='radio' name='sauce' value='bbq' onChange={handleChange} />
              BBQ Sauce
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label>
              <Input type='radio' name='sauce' value='alfredo' onChange={handleChange} />
              Spinach Alfredo
            </Label>
          </FormGroup>

        </FormGroup>

        {/* Toppings */}

        <legend>Toppings!</legend>
        <FormGroup check>
          <Label check>
            <Input type='checkbox' name='pepperoni' checked={formData.pepperoni} onChange={handleToppings}/>
            Pepperoni
          </Label>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type='checkbox' name='sausage' checked={formData.sausage} onChange={handleToppings}/>
            Sausage
          </Label>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type='checkbox' name='canadianbacon' checked={formData.canadianbacon} onChange={handleToppings}/>
            Canadian Bacon 
          </Label>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type='checkbox' name='spicyitaliansausage' checked={formData.spicyitaliansausage} onChange={handleToppings}/>
            Spicy Italian Sausage 
          </Label>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type='checkbox' name='extracheese' checked={formData.extracheese} onChange={handleToppings}/>
            Extra Cheese
          </Label>
        </FormGroup>

        <FormGroup>
          <legends>Special Instructions</legends>
          <Input type='textarea' name='special' value={formData.special} onChange={handleChange}/>
        </FormGroup>

        <Button>Submit</Button>

      </Form>
    </>
  );
};

export default OrderForm;