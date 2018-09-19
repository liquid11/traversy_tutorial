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
                {{user.name}} | {{user.email}} | {{user.contacted}} 
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
      users: [
        {
          name: "arsalan khan",
          contacted: false,
          email: "arsalankhan@gmail.com"
        },
        {
          name: "fahad",
          contacted: false,
          email: "fahad@gmail.com"
        },
        {
          name: "usman",
          contacted: false,
          email: "usman@gmail.com"
        }
      ]
    };
  },
  methods: {
    addUser: function(e) {
    //   console.log("adduser");
      users.push({

          name: this.newUser.name,
          email:this.newUser.name,
          contacted: true
      });
            e.preventDefault();
    }
  }
};
</script>
<style scoped>
</style>
