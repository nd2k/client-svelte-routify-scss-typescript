<script lang="ts">
  import { onMount } from 'svelte';
  let root: HTMLElement; 
  // const formControl: HTMLElement = root.querySelector('.form-control');
  

  export let fieldName: string;
  export let fieldType: string = 'text';
  export let fieldLabel: string;
  export let errorMessage: string;

  onMount(() => {
    const formControl: HTMLElement = root.querySelector('.form-control');
    formControl.addEventListener('input', () => {
      if (formControl.value.length > 0) {
        formControl.classList.add('has-value');
      } else {
        formControl.classList.remove('has-value');
      }
    });
  });
  
</script>

<div class="form-field" bind:this={root}>
  <input 
    type={fieldType}
    class="form-control"
    id={fieldName}
    name={fieldName}
    on:input />
  <label for={fieldName}>
    {fieldLabel}
  </label>
  <div class="error">
    {errorMessage}
  </div>
</div>

<style lang="scss">
@import '../styles/global.scss';

.form-field {
  position: relative;
  margin: 2rem auto;
  width: 75%;
  .form-control {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 2rem;
    border: none;
    font-size: 1rem;
    padding-left: 0.5rem;
    border-bottom: 1px solid rgba($color-1, $alpha: 1);
    background-color: transparent;
    & + label {
      position: absolute;
      top: 0.8rem;
      left: 0.5rem;
      font-size: 1rem;
      transition: all 0.2s ease-out;
      color: rgba($color-1, $alpha: 1);
      font-style: italic;
    }
    &:focus {
      outline: none;
      border-width: 2px;
      border-color: $color-3;
      transition: all 0.2s ease-out;
    }
    &:focus + label,
    &.has-value + label {
      top: -1rem;
      color: $color-3;
      font-size: 0.8rem;
    }
    &.has-value:not(:focus) + label {
      color: rgba($color-1, $alpha: 0.6);
    }
  }
  .error {
    display: none;
    margin-left: 0.5rem;
    font-size: 0.8rem;
    color: $red;
  }
}

</style>