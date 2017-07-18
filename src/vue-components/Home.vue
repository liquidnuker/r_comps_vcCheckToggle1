<template>
  <div>
    <h2 class="item-id">vueCheckToggle1-01</h2>
    <div class="row">    
      <div class="col-sm-2">
        <div id="vcCheckToggle1_mount">
        </div>
      </div>
      <div class="col-sm-2">
        2
      </div>
      <div class="col-sm-2">
        3
      </div>
      <div class="col-sm-2">
        4
      </div>
      <div class="col-sm-2">
        5
      </div>
      <div class="col-sm-2">
        6
      </div>
    </div>  
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