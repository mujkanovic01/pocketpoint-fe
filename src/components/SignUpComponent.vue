<template>
  <div v-if="step === 1" class="surface-card p-4 w-full">
    <div class="text-center mb-5">
      <img src="../assets/logo-nobg.png" style="filter: invert(100%);" alt="Image" height="85" class="mb-3">
      <div class="text-900 text-3xl font-medium mb-3">Welcome!</div>
      <span class="text-600 font-medium line-height-3">Already have an account?</span>
      <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" @click="openSignIn()">Sign in!</a>
    </div>

    <div class="">
      <div class="mb-2">
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email" v-model="email" :class="{ 'p-invalid': errorMessages.email }" type="text"
                   class="w-full"/>
        <small class="p-error" id="text-error">{{ errorMessages.email || '&nbsp;' }}</small>
      </div>
      <div class="mb-2">
        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password1" v-model="password" :class="{ 'p-invalid': errorMessages.password }" type="password"
                   class="w-full"/>
        <small class="p-error" id="text-error">{{ errorMessages.password || '&nbsp;' }}</small>
      </div>
      <div class="mb-4">
        <label for="password2" class="block text-900 font-medium mb-2">Confirm password</label>
        <InputText id="password2" v-model="confirmPassword" :class="{ 'p-invalid': errorMessages.confirmPassword }"
                   type="password" class="w-full"/>
        <small class="p-error" id="text-error">{{ errorMessages.confirmPassword || '&nbsp;' }}</small>
      </div>

      <div class="flex flex-column align-items-center">
        <Button label="Next step" icon="pi pi-user" class="w-6" :loading="isLoading" @click="changeStep(2)"></Button>
        <small class="p-error" id="text-error">{{ errorMessages.generalError || '&nbsp;' }}</small>
      </div>
    </div>
  </div>
  <div v-if="step === 2" class="surface-card p-4 w-full">
    <div class="text-center mb-5">
      <img src="../assets/logo-nobg.png" style="filter: invert(100%);" alt="Image" height="85" class="mb-3">
      <div class="text-900 text-3xl font-medium mb-3">Before continuing..</div>
      <span class="text-600 font-medium line-height-3">Tell us a little bit about yourself.</span>
    </div>
    <div>
      <div class="mb-2">
        <label for="firstname" class="block text-900 font-medium mb-2">First name</label>
        <InputText id="firstname" v-model="firstName" :class="{ 'p-invalid': errorMessages.firstName }" type="text"
                   class="w-full"/>
        <small class="p-error" id="text-error">{{ errorMessages.firstName || '&nbsp;' }}</small>
      </div>
      <div class="mb-2">
        <label for="lastname" class="block text-900 font-medium mb-2">Last name</label>
        <InputText id="lastname" v-model="lastName" :class="{ 'p-invalid': errorMessages.lastName }" type="text"
                   class="w-full"/>
        <small class="p-error" id="text-error">{{ errorMessages.lastName || '&nbsp;' }}</small>
      </div>
      <div class="card flex justify-content-between mb-4">
        <div class="flex flex-column col-5 p-0">
          <label for="datepicker" class="block text-900 font-medium mb-2">Date of birth</label>
          <Calendar id="datepicker" v-model="dateOfBirth" :class="{ 'p-invalid': errorMessages.dateOfBirth }"
                    view="month" showIcon dateFormat="mm/yy"/>
          <small class="p-error" id="text-error">{{ errorMessages.dateOfBirth || '&nbsp;' }}</small>

        </div>

        <div class="flex flex-column col-6 p-0">
          <label for="country" class="block text-900 font-medium mb-2">Nationality</label>
          <Dropdown id="country" filter v-model="selectedCountry" :options="countries" optionLabel="name"
                    placeholder="Select a Country"
                    :class="{ 'w-full': true, 'p-invalid': errorMessages.selectedCountry }">
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex align-items-center">
                <img :alt="slotProps.value.label"
                     src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                     :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px"/>
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                      {{ slotProps.placeholder }}
                  </span>
            </template>
            <template #option="slotProps">
              <div class="flex align-items-center">
                <img :alt="slotProps.option.label"
                     src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                     :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px"/>
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Dropdown>
          <small class="p-error" id="text-error">{{ errorMessages.selectedCountry || '&nbsp;' }}</small>
        </div>
      </div>

      <div class="flex justify-content-center">
        <Button label="Sign Up" icon="pi pi-user" class="w-6" :loading="isLoading" @click="handleSignUp()"></Button>
        <small class="p-error" id="text-error">{{ errorMessages.generalError || '&nbsp;' }}</small>
      </div>
    </div>
  </div>
</template>

<script>
import countries from "@/data/countries";
import {api_root} from "@/helpers/constants";

export default {
  name: 'SignUpComponent',
  components: {},
  data: function () {
    return {
      step: 1,
      email: null,
      password: null,
      confirmPassword: null,
      firstName: null,
      lastName: null,
      dateOfBirth: null,
      selectedCountry: null,
      errorMessages: {},
      countries: countries,
      isLoading: false,
    }
  },
  methods: {
    validateStepOneForm: async function () {
      this.errorMessages = {}

      if (!this.email) this.errorMessages['email'] = 'Missing email'
      if (!this.password) this.errorMessages['password'] = 'Missing password'
      if (!this.confirmPassword) this.errorMessages['confirmPassword'] = 'Missing confirm password'
      if (this.password !== this.confirmPassword) {
        this.errorMessages['password'] = 'Passwords do not match'
        this.errorMessages['confirmPassword'] = 'Passwords do not match'
      }

      if (!Object.keys(this.errorMessages).length && await this.checkIfUserExists()) this.errorMessages['email'] = 'User already exists';

      return !Object.keys(this.errorMessages).length
    },
    validateStepTwoForm: function () {
      this.errorMessages = {}

      if (!this.firstName) this.errorMessages['firstName'] = 'Missing first name'
      if (!this.lastName) this.errorMessages['lastName'] = 'Missing last name'
      if (!this.dateOfBirth) this.errorMessages['dateOfBirth'] = 'Missing date of birth'
      if (!this.selectedCountry) this.errorMessages['selectedCountry'] = 'Missing nationality'

      return !Object.keys(this.errorMessages).length
    },
    handleSignUp: async function () {
      if (!this.validateStepTwoForm()) return;

      const response = await this.registerUser();

      if (response.error) {
        this.errorMessages['generalError'] = response.error
        return;
      }

      localStorage.setItem('access_token', response.data.access_token);
      this.$router.push('/create-tournament')
    },
    changeStep: async function (step) {
      if (step === 2) {
        if (!(await this.validateStepOneForm())) return;
      }
      this.step = step
    },
    openSignIn: function () {
      this.$emit('openSignIn')
    },
    checkIfUserExists: async function () {
      this.isLoading = true
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      };
      try {
        const res = await fetch(api_root + `/user/getUserByEmail?email=${this.email}`, requestOptions);
        const responseBody = await res.json();
        this.isLoading = false
        return !!responseBody.data
      } catch {
        this.errorMessages['generalError'] = 'Server ran into an issue. Please try again'
        this.isLoading = false
        return false;
      }
    },
    registerUser: async function () {
      this.isLoading = true
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          first_name: this.firstName,
          last_name: this.lastName,
          date_of_birth: this.dateOfBirth,
          nationality: this.selectedCountry,
        }),
      };

      const response = await fetch(api_root + "/auth/register", requestOptions);
      this.isLoading = false;
      return response.json();
    },
  }
}
</script>
