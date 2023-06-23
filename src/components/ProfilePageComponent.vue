<template>
  <div class="surface-section">
    <div class="font-medium text-3xl text-900 mb-3">Profile Information</div>
    <div class="text-500 mb-5">The best player that world has ever seen!</div>
    <ul class="list-none p-0 m-0">
      <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
        <div class="text-500 w-6 md:w-2 font-medium">First Name</div>
        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1" v-if="user">{{this.user.firstName}}</div>
        <div class="w-6 md:w-2 flex justify-content-end">
          <Button pButton pRipple label="Edit" type="button" class="p-button-outlined" icon="pi pi-pencil" />
        </div>
      </li>
      <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
        <div class="text-500 w-6 md:w-2 font-medium">Last Name</div>
        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1" v-if="user">{{this.user.lastName}}</div>
        <div class="w-6 md:w-2 flex justify-content-end">
          <Button pButton pRipple label="Edit" type="button" class="p-button-outlined" icon="pi pi-pencil" />
        </div>
      </li>
      <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
        <div class="text-500 w-6 md:w-2 font-medium">Date of Birth</div>
        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">12/03/2001</div>
        <div class="w-6 md:w-2 flex justify-content-end">
          <Button pButton pRipple label="Edit" type="button" class="p-button-outlined" icon="pi pi-pencil" />
        </div>
      </li>
      <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
        <div class="text-500 w-6 md:w-2 font-medium">Nationality</div>
        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Bosnia and Herzegovina</div>
        <div class="w-6 md:w-2 flex justify-content-end">
          <Button pButton pRipple label="Edit" type="button" class="p-button-outlined" icon="pi pi-pencil" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import jwtDecode from "jwt-decode";

export default {
  name: 'ProfilePage',
  methods: {
  },
  data: function () {
  return{
    user: null
  }
  },
  mounted: function (){
    const access_token = localStorage.getItem('access_token');

    if (!access_token) return;
    const decodedToken = jwtDecode(access_token);

    if (decodedToken && decodedToken.first_name && decodedToken.last_name) {
      this.user = {
        'firstName': decodedToken.first_name,
        'lastName':  decodedToken.last_name
      }
    }
  }
};
</script>

