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
      <button :disabled="checkAllButton" v-on:click="toggleCheck(true)">checkAll</button>
      <button v-on:click="toggleCheck(false)">unCheckAll</button>
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
  },
  methods: {
    toggleCheck: function(checked) {
      let items = this.items;
      let selectedItems = this.selectedItems;

      if (checked) {
        // push
        selectedItems = [];
        for (let i in items) {
          selectedItems.push(items[i]);
        }
      } else {
        selectedItems = [];
      }

      this.selectedItems = selectedItems;
      // todo: add disabled button toggle
    }
  }
}
</script>