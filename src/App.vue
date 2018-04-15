<template>
    <div id="app">
        <router-view class="view"></router-view>
        <router-view class="view" name="subject"></router-view>
    </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body,
ul,
li,
a,
h2,
p,
h3 {
  margin: 0;
  padding: 0;
}
h3 {
  font-size: 16px;
  color: #000;
  font-weight: normal;
  margin-bottom: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
body {
  background: #f4f4f4;
}
li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
