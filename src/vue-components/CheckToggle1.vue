<template>
  <div>
    <div class="row col-sm-12">    
      <!-- checkToggle1-01 -->
      <template v-for="i in items">
      <span class="checkToggle1-01">
        <input type="checkbox" :id="i"
         v-model="selectedItems" :value="i" 
         :disabled="disabled"
         :aria-disabled="disabled" />
        <label v-bind:for="i" class="checkToggle1-01_bg" role="checkbox">
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
      
      <button v-show="!disabled" 
      :disabled="checkAllButton" 
      :aria-disabled="checkAllButton"
      @click="toggleCheck(true)">checkAll</button>
      
      <button v-show="!disabled" 
      :disabled="unCheckAllButton" 
      :aria-disabled="unCheckAllButton"
      @click="toggleCheck(false)">unCheckAll</button>
      <!-- for previewing disabled css style -->
      <button @click="disabled = !disabled">{{ disabled ? "enable" : "disable" }}</button>
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
      disabled: false,
      // 
      checkAllButton: false,
      unCheckAllButton: true
    }
  },
  watch: {
    selectedItems: function () {
      let selectedItems = this.selectedItems;
      let items = this.items;
            
      // for checkAllButton
      if (selectedItems.length === items.length) {
        this.checkAllButton = true;
      } else {
        this.checkAllButton = false;
      }

      // for unCheckAllButton
      if (selectedItems.length === 0) {
        this.unCheckAllButton = true;
      } else {
        this.unCheckAllButton = false;
      }
    },
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
    }
  }
}
</script>