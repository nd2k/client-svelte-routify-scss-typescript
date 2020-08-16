<script lang="ts">
import { onMount } from 'svelte';
let root;

export let buttonName;
export let buttonClasses;
export let buttonColor;

onMount(() => { 
  root.style.backgroundColor = buttonColor;
});
</script>

<button class={buttonClasses} bind:this={root} on:click>
  {buttonName}
</button>

<style lang="scss">
@import '../styles/global.scss';

button {
  margin: 0 0.5rem;
  border: none;
  text-align: center;
  width: 7rem;
  padding: 1rem;
  border-radius: 2rem;
  color: $white;
  font-weight: bold;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 0.7rem 1.4rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  &.left {
    margin-right: auto;
  }
  &.right {
    float: right;
  }
  &.center {
    margin: auto;
  }
  &:hover {
    box-shadow: inset 0 0 5px #c1c1c1;
    outline: none;
  }
}
</style>