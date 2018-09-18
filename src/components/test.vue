<template>
    <div class="test">
        <input type="text" v-model="title">
        <br>
        <!-- <h1>{{title}}</h1> -->
       <!-- {{title}} -->
        <span v-html="title"></span>
        <p>{{user.first_name}}</p>
        <br>
        <p>{{user.last_name}}</p>
        <p v-if="showName" v-text="user.first_name"></p>
        <p v-else v-text="user.last_name"></p>
        <!-- <ul>
        
            <li v-for="item in items">{{item.title}}</li>
        </ul> -->
     <button v-on:click="greet">action</button>
       <br>
     <input type="text" v-on:keyup="presskey" v-on:keyup.enter="enterkey"/>
       <br>
     <label>First Name</label>
       <br>
     <input type="text" v-model="user.first_name">
     <br>
     <input type="text" v-model="user.last_name">
     <br>
    <h3>{{fullName}}</h3>
    <h2>{{msg}}</h2>
    </div>
</template>

<script>
export default {
  name: "test",
  props: {
    msg: {
      type: String,
      default: "bismillah"
    }
  },
  data() {
    return {
      //   title: "<h1>Hello World</h1>",
      title: "Hello World",
      user: {
        first_name: "john",
        last_name: "doe"
      },
      showName: false,
      items: [{ title: "item 1 " }, { title: "item 2 " }, { title: "item 3 " }]
    };
  },
  methods: {
    greet: function() {
      alert("HELLO");
    },
    presskey: function(e) {
      //    console.log("key pressed");
      console.log(e.target.value);
    },
    enterkey: function(e) {
      //    console.log("key pressed");
      console.log("the value entered is " + e.target.value);
    }
  },
  computed: {
    fullName: function() {
      return this.user.first_name + " " + this.user.last_name;
    }
  }
};
</script>
<style scoped>
</style>
