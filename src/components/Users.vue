<template>
    <div class="users">
        <h3>todolist</h3>
        <form  v-on:submit="addUser">
        <input type="text" v-model="newUser.name" placeholder="enter name">
        <br>
        <input type="email" v-model="newUser.email" placeholder="enter email">
        <br>
        <input type="submit" value="Submit">
        </form>
        <ul >
            <li v-for="user in users">
              <input type="checkbox" class="toggle" v-model="user.contacted">
              <span :class="{contacted: user.contacted}">|  {{user.name}} | {{user.email}} |</span>  
              <button v-on:click="deleteUser(user)">X</button>
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      newUser: {},
      users: []
    };
  },
  methods: {
    addUser: function(e) {
    //   console.log("adduser");
      this.users.push({

          name: this.newUser.name,
          email:this.newUser.name,
          contacted: true
      });
            e.preventDefault();
    },

    deleteUser: function(user){

     this.users.splice(this.users.indexOf(user), 1);
    }
  },
  created: function(){
this.$http.get("https://jsonplaceholder.typicode.com/users").then( 
  function(response){
    //console.log(response.data);
    this.users = response.data;
  }
);

  }
};
</script>
<style scoped>
.contacted {
  text-decoration: line-through;
}
</style>
