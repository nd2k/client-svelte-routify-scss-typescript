<script lang="ts">
  
</script>

<div class="card">
  <slot name="title">
    <h1 class="cardTitle">Title</h1>
  </slot>
  <hr>
  <slot />  
</div>

<style lang="scss">
@import '../styles/global.scss';

hr {
  border-top: 2px solid $color-3;
}
.card {
  width: 75%;
  height: 100%;
  background-color: $white;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgba($black, $alpha: 0.4);
  margin: 1rem auto;
  padding: 2rem 1rem;
}
</style>