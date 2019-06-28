<template>
  <div class="full-width center-content">
    <img src="static/img/vue.png">
    <HelloComponent name="World" />
  </div>
</template>

<script>
import HelloComponent from '../components/HelloComponent'
export default {
  components: {
    HelloComponent
  }
}
</script>
