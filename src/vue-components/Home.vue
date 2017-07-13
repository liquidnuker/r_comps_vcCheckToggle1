<template>
  <div>
    <h2 class="item-id">vueCheckToggle1-01</h2>
    <!-- vueCheckToggle1-01 mount-->
    <div id="vcCheckToggle1_mount"></div>
    <!-- end vueCheckToggle1-01 mount-->
  </div>
</template>
<script>
import {inject} from "../js/componentinjector.js";;
  export default {
    data () {
      return {    
      }
    },
    mounted: function () {
      this.mountCheckToggle1();
    },
    methods: {
      mountCheckToggle1: function() {
        const CheckToggle1 = resolve => {
          require.ensure(['./CheckToggle1.vue'], () => {
            resolve(require('./CheckToggle1.vue'))
          })
        };
        inject("#vcCheckToggle1_mount", CheckToggle1);
      }
    }
  }
</script>