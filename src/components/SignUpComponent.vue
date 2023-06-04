<template>
  <div v-if="step === 1" class="surface-card p-4 w-full">
    <div class="text-center mb-5">
      <img src="../assets/logo-nobg.png" alt="Image" height="85" class="mb-3">
      <div class="text-900 text-3xl font-medium mb-3">Welcome!</div>
      <span class="text-600 font-medium line-height-3">Already have an account?</span>
      <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" @click="openSignIn()">Sign in!</a>
    </div>

    <div class="">
      <label for="email1" class="block text-900 font-medium mb-2">Email</label>
      <InputText id="email1" type="text" class="w-full mb-3" />

      <label for="password1" class="block text-900 font-medium mb-2">Password</label>
      <InputText id="password1" type="password" class="w-full mb-3" />

      <label for="password2" class="block text-900 font-medium mb-2">Confirm password</label>
      <InputText id="password2" type="password" class="w-full mb-6" />

      <div class="flex justify-content-center">
        <Button label="Sign Up" icon="pi pi-user" class="w-6" @click="step = 2"></Button>
      </div>
    </div>
  </div>
  <div v-if="step === 2" class="surface-card p-4 w-full">
    <div class="text-center mb-5">
      <img src="../assets/logo-nobg.png" alt="Image" height="85" class="mb-3">
      <div class="text-900 text-3xl font-medium mb-3">Before continuing..</div>
      <span class="text-600 font-medium line-height-3">Tell us a little bit about yourself.</span>
    </div>

    <div class="">
      <label for="firstname" class="block text-900 font-medium mb-2">First name</label>
      <InputText id="firstname" v-model="firstName" type="text" class="w-full mb-3" />

      <label for="lastname" class="block text-900 font-medium mb-2">Last name</label>
      <InputText id="lastname" v-model="lastName" type="text" class="w-full mb-3" />

      <div class="card flex justify-content-between mb-6">
        <div class="flex flex-column col-5 p-0">
          <label for="datepicker" class="block text-900 font-medium mb-2">Birth date</label>
          <Calendar id="datepicker" v-model="date" view="month" showIcon dateFormat="mm/yy"/>
        </div>

        <div class="flex flex-column col-6 p-0">
          <label for="country" class="block text-900 font-medium mb-2">Nationality</label>
          <Dropdown id="country" filter v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Select a Country" class="w-full">
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex align-items-center">
                <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                      {{ slotProps.placeholder }}
                  </span>
            </template>
            <template #option="slotProps">
              <div class="flex align-items-center">
                <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Dropdown>
        </div>
      </div>

      <div class="flex justify-content-center">
        <Button label="Sign Up" icon="pi pi-user" class="w-6" @click="handleSignUp()"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import countries from "@/data/countries";
export default {
  name: 'SignUpComponent',
  components: {},
  data: function () {
    return  {
      step: 1,
      firstName: null,
      lastName: null,
      date: null,
      selectedCountry: null,
      countries: countries
    }
  },
  methods: {
    handleSignUp() {
      console.log(this.selectedCountry)
      localStorage.setItem('user', JSON.stringify({
        'firstname': this.firstName,
        'lastname': this.lastName,
        'country': this.selectedCountry,
        'date': this.date
      }))
      this.$emit('handleSignUp');
    },
    openSignIn(){
      this.$emit('openSignIn')
    }
  }
}
</script>
