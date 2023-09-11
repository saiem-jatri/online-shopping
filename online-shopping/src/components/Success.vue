<script setup>

</script>

<template>
  <div style="display: flex; flex-direction: column">
    <div class="backButton" style="margin-bottom: 20px">
      <router-link style="text-decoration: none; color: white; text-align: center" to="/"> Back to catalog</router-link>
    </div>
    <div class="card">
      <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
        <i class="checkmark">✓</i>
      </div>
      <h1>Success</h1>
      <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
    </div>
  </div>
</template>
<style>
body {
  text-align: center;
  padding: 40px 0;
  background: #EBF0F5;
}
h1 {
  color: #88B04B;
  font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 10px;
}
p {
  color: #404F5E;
  font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
  font-size:20px;
  margin: 0;
}
i {
  color: #9ABC66;
  font-size: 100px;
  line-height: 200px;
  margin-left:-15px;
}
.card {
  background: white;
  padding: 60px;
  border-radius: 4px;
  box-shadow: 0 2px 3px #C8D0D8;
  display: inline-block;
  margin: 0 auto;
}
</style>