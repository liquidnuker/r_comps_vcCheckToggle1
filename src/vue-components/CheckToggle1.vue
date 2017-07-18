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
      <button :disabled="checkAllButton" v-on:click="checkAll()">checkAll</button>
      <button v-on:click="unCheckAll()">unCheckAll</button>
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
      selectedItems: [],
      checkAllButton: false
    }
  },
  mounted: function() {
    console.log("mounted");
    this.checkAll();
  },
  methods: {
    checkAll: function() {
      let items = this.items;
      let selectedItems = this.selectedItems;

      selectedItems = [];
      for (let i in items) {
        selectedItems.push(items[i]);
      }   
      this.selectedItems = selectedItems;
      // todo: add disabled button toggle

    },
    unCheckAll: function() {
      this.selectedItems = [];
    }
  }
}
</script>