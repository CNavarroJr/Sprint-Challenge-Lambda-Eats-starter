import React, { useState } from 'react'; 
import { Card, CardImg, Form, FormGroup, Input, Dropdown, DropdownToggle,DropdownMenu, Label, Button, } from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';

const OrderForm = () => {

  // All useState's
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

  // this is the schema for yup

  const schema = yup.object().shape({
    name: yup.string().required().min(2),
    size: yup.string().required(),
    sauce: yup.string().required(),
    special: yup.string(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianbacon: yup.boolean(),
    spicyitaliansausage: yup.boolean(),
    extracheese: yup.boolean()
  })

  // here is the submit function with axios

  const submit = () => {
    schema.validate(formData).then(() => {
      axios.post('https://reqres.in/api/users', formData).then((res) => {
        console.log(res.data, 'This is your posted data')
      })
    })
  }

  return (
    <>
      <Card color='info' style={{ width: '50%', margin: '0 auto'}}>
        <h2 style={{ color: 'white', margin: '0 auto' }}>Build Your Own Pizza!</h2>
        <CardImg src={require('./assets/Pizza.jpg')}/>
      </Card>

      {/* onSubmit function */}

      <Form data-cy='submit' onSubmit={(e) => {
        e.preventDefault()
        submit()
      }} style={{ margin: '5% auto', width: '50%', }}>

        <FormGroup>
          <legend>Name</legend>
          <Input type='name' name='name' data-cy='name' value={formData.name} onChange={handleChange}/>
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
            <Input type='checkbox' name='pepperoni' data-cy='checkbox1' checked={formData.pepperoni} onChange={handleToppings}/>
            Pepperoni
          </Label>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type='checkbox' name='sausage' data-cy='checkbox2' checked={formData.sausage} onChange={handleToppings}/>
            Sausage
          </Label>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type='checkbox' name='canadianbacon' data-cy='checkbox3' checked={formData.canadianbacon} onChange={handleToppings}/>
            Canadian Bacon 
          </Label>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type='checkbox' name='spicyitaliansausage' data-cy='checkbox4' checked={formData.spicyitaliansausage} onChange={handleToppings}/>
            Spicy Italian Sausage 
          </Label>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type='checkbox' name='extracheese' data-cy='checkbox5' checked={formData.extracheese} onChange={handleToppings}/>
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