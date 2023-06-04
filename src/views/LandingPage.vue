<template>
  <div class="grid grid-nogutter surface-section text-800">
    <div class="col-12 relative">
      <Menubar :model="menubarItems">
        <template #start>
          <img alt="logo" src="../assets/logo-nobg.png" height="65" class="mr-2"/>
        </template>
        <template #end>
          <Button pButton pRipple label="Sign in" type="button" class="p-button-outlined"
                  @click="openSigninComponent()"></Button>
        </template>
      </Menubar>
    </div>
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
      <section>
        <span class="block text-6xl font-bold mb-1">Climb te ranks and</span>
        <div class="text-6xl text-primary font-bold mb-3">make a name for yourself</div>
        <p class="mt-0 mb-4 text-700 line-height-3">Join or organise tournaments, battle with some of the best players
          in the region. Become a member and start your journey today.</p>

        <Button pButton pRipple label="Host a tournament" type="button" class="mr-3 p-button-raised"
                @click="openSigninComponent()"></Button>
      </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden flex align-items-center justify-content-center image-media">
      <img src="../assets/landing-page-bg.png" alt="Image" class="md:ml-auto block md:h-full"/>
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
import SignUpComponent from "@/components/SignUpComponent.vue";
import SignInComponent from "@/components/SignInComponent.vue";

export default {
  name: 'LandingPage',
  components: {
    SignUpComponent,
    SignInComponent
  },
  data: function () {
    return {
      visible: false,
      isSignInVisible: false,
      isSignUpVisible: false,
      menubarItems: [
        {separator: true},
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          class: "p-focus",
          url: '/',
        },

        {
          label: 'Tournaments',
          icon: 'pi pi-fw pi-sitemap',
          url: '/tournaments'
        },
        {
          label: 'Leaderboards',
          icon: 'pi pi-fw pi-chart-bar',
          url: '/leaderboard'
        },
        {separator: true},
      ]
    }
  },
  methods: {
    openSigninComponent: function () {
      this.isSignUpVisible = false;
      this.isSignInVisible = true;
    },
    openSignupComponent: function () {
      this.isSignUpVisible = true;
      this.isSignInVisible = false;
    },
    // openTournaments() {
    //   this.$router.push('/tournaments')
    // }
  }
}
</script>

<style>

@media (min-width: 768px) {
  .image-media {
    clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%);
  }
}
</style>