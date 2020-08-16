<script lang="ts">
  import Card from '../components/Card.svelte';
  import FieldForm from '../components/FieldForm.svelte';
  import Button from '../components/Button.svelte';
  import axios from 'axios';

  let root: HTMLElement; 
  let value: string;

  let signinForm: object = {
		email: '',
		password:'',
  }

  const handleInput = (event) => {
    const field = event.target.id;
    let value = event.target.value;
    if(field === "email") { signupForm.email = value}
    if(field === "password") { signupForm.password = value}       
	}
  
  async function signup() {
    console.log('ok');
		console.log(signupForm)
		const response = await axios.post('http://localhost:3000/api/v1/user/signin', signinForm);
    console.log(response);
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

<div id = "signin" bind:this={root}>
  <Card>
    <h1 slot="title">Sign In</h1>
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
        on:click={signup}
      />
    </div>
  </Card>
</div>

<style lang="scss">

#signin {
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