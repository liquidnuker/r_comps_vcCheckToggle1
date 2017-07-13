<template>
  <div>
    <div class="row col-sm-12">    
      <!-- checkToggle1-01 -->
      <template v-for="i in items">
      <span class="checkToggle1-01">
        <input type="checkbox" v-bind:id="i"
        v-model="selectedItems" v-bind:value="i" />
        <label v-bind:for="i" class="checkToggle1-01_bg">
          <span class="checkToggle1-01_switch">
            &nbsp;
          </span>
        </label>
        <label v-bind:for="i" class="checkToggle1-01_vlabel">
          {{ i }}
        </label>
      </span>
      </template>
      <!-- end checkToggle1-01 -->
      <p>Selected: {{ selectedItems }}</p>
    </div>  
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        "item1",
        "item2"
      ],
      selectedItems: []
    }
  }
}
</script>