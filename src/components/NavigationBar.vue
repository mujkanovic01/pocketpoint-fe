<template>
  <div class="col-12 relative p-0">
    <div class="">
      <Menubar :model="items">
        <template #start>
          <img alt="logo" style="filter: invert(100%);" src="../assets/logo-nobg.png" height="65"
               class="mr-2 logo-image" @click="redirectToHome"/>
        </template>
        <template #end>
          <div>
            <div v-if="!user">
              <Button pButton pRipple label="Sign in" type="button" class="p-button-outlined"
                      @click="openSigninComponent()"/>
            </div>
            <div v-if="user">
              <button label="Toggle" @click="toggleProfile"
                      class="w-full p-link flex align-items-center p-2 text-color hover:surface-200 border-noround">
                <Avatar
                    :label="user.name.split(' ')[0].charAt(0).toUpperCase() + user.name.split(' ')[1].charAt(0).toUpperCase()"
                    class="mr-2" shape="circle"/>
                <div class="flex flex-column align ml-2">
                  <span class="font-bold">{{ user.name }}</span>
                  <span class="text-sm">Player</span>
                </div>
              </button>
              <Menu ref="profileMenu" :model="profileItems" :popup="true">
                <template #end>
                  <button @click="logoutUser"
                          class="w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround ml-auto">
                    <i class="pi pi-sign-out"/>
                    <span class="ml-2">Log Out</span>
                  </button>
                </template>
              </Menu>
            </div>
          </div>
        </template>
      </Menubar>
    </div>

    <Dialog v-model:visible="isSignUpVisible" modal header="Sign Up" class="w-11 md:w-8 xl:w-6">
      <SignUpComponent @openSignIn="openSigninComponent()"/>
    </Dialog>

    <Dialog v-model:visible="isSignInVisible" modal header="Sign In" class="w-11 md:w-8 xl:w-6">
      <SignInComponent @openSignUp="openSignupComponent()"/>
    </Dialog>
  </div>
</template>

<script>

import SignInComponent from "@/components/SignInComponent.vue";
import SignUpComponent from "@/components/SignUpComponent.vue";
import jwtDecode from "jwt-decode";

export default {
  name: 'NavigationBar',
  components: {SignUpComponent, SignInComponent},
  props: {page: String},
  data: function () {
    return {
      user: null,
      profileToggle: false,
      items: [
        {separator: true},
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          class: this.page === 'home' ? 'p-focus' : '',
          url: '/',
        },
        {
          label: 'Tournaments',
          icon: 'pi pi-fw pi-sitemap',
          class: this.page === 'tournaments' ? 'p-focus' : '',
          url: '/tournaments'
        },
        {
          label: 'Leaderboards',
          icon: 'pi pi-fw pi-chart-bar',
          class: this.page === 'leaderboards' ? 'p-focus' : '',
          url: '/leaderboards'
        },
        {separator: true},
      ],
      profileItems: [
        {separator: true},
        {
          label: 'Dashboard',
          icon: 'pi pi-fw pi-box',
          command: () => {
            this.$router.push('/dashboard');
          }
        },
        {
	  label: 'Profile', 
	  icon: 'pi pi-fw pi-user', 
          command: () => {
            this.$router.push('/profile');
          }
	},
        {separator: true}
      ],
      isSignInVisible: false,
      isSignUpVisible: false,
    }
  },
  methods: {
    openSigninComponent: function () {
      this.isSignUpVisible = false;
      this.isSignInVisible = true;
      if (this.user) this.$refs.profileMenu.hide();
    },
    openSignupComponent: function () {
      this.isSignUpVisible = true;
      this.isSignInVisible = false;
    },
    toggleProfile: function (event) {
      this.$refs.profileMenu.toggle(event);
    },
    redirectToHome: function () {
      this.$router.push("/");
    },
    logoutUser: function () {
      localStorage.removeItem('access_token');
      location.reload();
    }
  },
  mounted: function () {
    // Style the navbar correctly
    const element = this.$el.querySelector(".p-menubar-end");
    element.className += ' lg:ml-0';
    const element2 = this.$el.querySelector(".p-menubar");
    element2.className += ' lg:justify-content-between';

    const access_token = localStorage.getItem('access_token');

    if (!access_token) return;
    const decodedToken = jwtDecode(access_token);

    if (decodedToken && decodedToken.first_name && decodedToken.last_name) {
      this.user = {
        'id': decodedToken.id,
        'name': decodedToken.first_name + ' ' + decodedToken.last_name,
        'code': decodedToken.first_name.charAt(0) + decodedToken.last_name.charAt(0),
      }
    }
  }
}
</script>

<style>
.logo-image:hover {
  cursor: pointer;
}
</style>
