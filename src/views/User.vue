<template>
  <div>
    <h1>Mars Rover Photos</h1>
    <div class="row container text-center">
      <div class="card">
        <div v-for="(nasa, v) in userData" :key="v" class="col-5">
          <div class="card" style="width: 30rem">
            <img :src="nasa.img_src" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Data Nasa</h5>
              <p class="card-text">
                ID{{ nasa.id }}<br />
                id Camera{{ nasa.camera.id }}<br />
                Name{{ nasa.camera.name }}<br />
                Full Name{{ nasa.camera.full_name }}<br />
                Date{{ nasa.earth_date }}
              </p>
              <a href="#" class="btn btn-primary"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-airplane-engines-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0Z"
                  /></svg
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const url = ref(
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=pZJYMKfcX3bnSEw889g5aSvAQ5oPCTIDQnnC4QqE"
);
const userData = ref();
function LoadUser() {
  axios
    .get(url.value)
    .then((response) => {
      userData.value = response.data.photos;
    })
    .catch((err) => {
      console.log(err);
    });
}

onMounted(() => {
  LoadUser();
});
</script>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
