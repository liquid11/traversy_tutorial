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
        <ul>
            <!-- eslint-disable-next-line  -->
            <li v-for="item in items">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      title: "<h1>Hello World</h1>",
      user: {
        first_name: "john",
        last_name: "doe"
      },
      showName: false,
      items: [{ title: "item 1 " }, { title: "item 2 " }, { title: "item 3 " }]
    };
  }
};
</script>
<style scoped>
</style>
