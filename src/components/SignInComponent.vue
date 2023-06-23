<template>
  <div class="surface-card p-4 w-full">
    <div class="text-center mb-5">
      <img src="../assets/logo-nobg.png" style="filter: invert(100%);" alt="Image" height="75" class="mb-3">
      <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
      <span class="text-600 font-medium line-height-3">Don't have an account?</span>
      <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" @click="openSignUp()">Create today!</a>
    </div>

    <div>
      <div class="mb-2">
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText v-model="email" id="email1" type="text" :class="{ 'p-invalid': errorMessages.email }"
                   class="w-full"/>
        <small class="p-error" id="text-error">{{ errorMessages.email || '&nbsp;' }}</small>
      </div>
      <div class="mb-2">
        <label for="password" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password" v-model="password" :class="{ 'p-invalid': errorMessages.password }" type="password"
                   class="w-full"/>
        <small class="p-error" id="text-error">{{ errorMessages.password || '&nbsp;' }}</small>
      </div>
      <div class="flex align-items-center justify-content-between mb-6">
        <div class="flex align-items-center">
          <Checkbox id="checkbox" :binary="true" v-model="checked" disabled class="mr-2"></Checkbox>
          <label for="checkbox">Remember me</label>
        </div>
        <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
      </div>
      <div class="flex flex-column align-items-center">
        <Button label="Sign In" icon="pi pi-user" class="w-6" @click="handleLogin()"></Button>
        <small class="p-error" id="text-error">{{ errorMessages.generalError || '&nbsp;' }}</small>
      </div>
    </div>
  </div>
</template>

<script>

import {api_root} from "@/helpers/constants";

export default {
  name: 'SignInComponent',
  components: {},
  data: function () {
    return {
      checked: true,
      email: null,
      password: null,
      errorMessages: {},
      isLoading: false,
    }
  },
  methods: {
    openSignUp: function () {
      this.$emit('openSignUp');
    },
    validateForm: function () {
      this.errorMessages = {}

      if (!this.email) this.errorMessages['email'] = 'Missing email'
      if (!this.password) this.errorMessages['password'] = 'Missing password'

      return !Object.keys(this.errorMessages).length
    },
    handleLogin: async function () {
      if (!this.validateForm()) return;

      const response = await this.loginUser();

      if (response.error) {
        this.errorMessages['generalError'] = response.error.message
        return;
      }

      localStorage.setItem('access_token', response.data.access_token);
      this.$router.push('/dashboard')
    },
    loginUser: async function () {
      this.isLoading = true
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };

      const response = await fetch(api_root + "/auth/login", requestOptions);
      this.isLoading = false;
      return response.json();
    },
  }
}
</script>
