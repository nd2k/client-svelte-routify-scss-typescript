<script>
import { url, isActive } from '@sveltech/routify';
</script>
<nav>
  <ul class="menu">
    <div class="left">
      <li><a href={$url('/')} class:active={$isActive('/')}>Home</a></li>
      <!-- <li><a href={$url('./dashboard')} class:active={$isActive('./dashboard')}>Dashboard</a></li> -->
    </div>
    <div class="right">
      <li><a href={$url('/signin')} class:active={$isActive('/signin')}>Sign In</a></li>
      <li><a href={$url('/signup')} class:active={$isActive('/signup')}>Sign Up</a></li>
    </div>
  </ul>
</nav>

<main>
  <slot />
</main>

<style lang="scss">
@import '../styles/global.scss';

nav {
  position: relative;
  width: 100%;
  border-bottom: 1px solid rgba($color-1, 0.2);
  padding: 0 auto;
  font-size: 1.2rem;
  background-color: $white;
  .menu {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 1.2rem 1.5rem;
    margin: 0;
    border: none;
    li {
      display: inline-block;
      align-items: center;
      margin: 0 1rem;
      a {
        text-decoration: none;
        display: block;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        display: inline;
        padding-bottom: 1rem;
        color: rgba($black, $alpha: 0.7);
      }
      a:hover {
        border-bottom-color: $color-3;
        transition: all 0.5s;
        color: $black;
      }
      .active {
        border-bottom-color: $color-3;
        transition: all 0.5s;
        color: $black;
      }
      .icon {
        cursor: pointer;
      }
    }
  }
}
</style>