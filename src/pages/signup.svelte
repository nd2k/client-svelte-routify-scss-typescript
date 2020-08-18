<script lang="ts">
  import Card from '../components/Card.svelte';
  import FieldForm from '../components/FieldForm.svelte';
  import Button from '../components/Button.svelte';
  import axios from 'axios';
  import { signup } from '../store/actions.ts';
  import type { SignupForm } from '../interfaces/SignupForm.interface.ts';

  let signupForm: SignupForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  let root: HTMLElement; 
  let value: string;

  const handleInput = (event) => {
    const field = event.target.id;
    let value = event.target.value;
    if(field === "name") { signupForm.name = value}
    if(field === "email") { signupForm.email = value}
    if(field === "password") { signupForm.password = value}
    if(field === "confirmPassword") { signupForm.confirmPassword = value}        
	}
  
  function handleSignup() {
    signup(signupForm);
    reset();
  }
  
  function reset() {
    const inputFields = root.querySelectorAll('input');
    
    inputFields.forEach(field => {
      field.value = '';
      field.classList.remove('has-value');
    }); 
  }
</script>

<div id = "signup" bind:this={root}>
  <Card>
    <h1 slot="title">Sign Up</h1>
    <FieldForm
      fieldName="name"
      fieldLabel="Name"
      errorMessage="This field is required"
      on:input={handleInput}
    />
    <FieldForm
      fieldName="email"
      fieldLabel="Email"
      errorMessage="This field is required"
      on:input={handleInput}
    />
    <FieldForm
      fieldName="password"
      fieldLabel="Password"
      fieldType="password"
      errorMessage="This field is required"
      on:input={handleInput}
    />
    <FieldForm
      fieldName="confirmPassword"
      fieldLabel="Confirm your password"
      fieldType="password"
      errorMessage="This field is required"
      on:input={handleInput}
    />
    <div class="buttons">
      <Button 
        buttonName="Reset"
        buttonClasses="right"
        buttonColor="#5c9ead"
        on:click={reset}
      />
      <Button 
        buttonName="Submit"
        buttonClasses="right"
        buttonColor="#326273"
        on:click={handleSignup}
      />
    </div>
  </Card>
</div>

<style lang="scss">

#signup {
  margin: 4rem;
  h1 {
    font-size: 2rem;
    margin-left: 2rem;
  }
}

.buttons {
  width: 75%;
  margin: auto;
  display:flex;
  justify-content: flex-end;
  padding-top: 1rem;
}
  
</style>