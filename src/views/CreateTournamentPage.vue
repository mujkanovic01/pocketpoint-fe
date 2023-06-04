<template>
  <div class="grid grid-nogutter surface-section text-800">
    <div class="col-12 relative">
      <Menubar :model="items">
        <template #start>
          <img alt="logo" src="../assets/logo-nobg.png" height="65" class="mr-2" />
        </template>
        <template #end>
          <Button pButton pRipple label="Sign in" type="button" class="p-button-outlined" @click="openSigninComponent()"></Button>
        </template>
      </Menubar>
    </div>
    <div class="surface-section w-full p-6">
      <div class="font-medium text-3xl text-900 mb-3">Host a tournament</div>
      <div class="text-500 mb-5">Please provide some basic information about your tournament</div>
      <ul class="list-none p-0 m-0">
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Tournament Title</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Tuzla Open</div>
          <div class="w-6 md:w-2 flex justify-content-end">
            <Button pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Date & time</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            <p-chip label="Crime" class="mr-2"></p-chip>
            <p-chip label="Drama" class="mr-2"></p-chip>
            <p-chip label="Thriller"></p-chip>
          </div>
          <div class="w-6 md:w-2 flex justify-content-end">
            <Button pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Schema</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">9 ball pool</div>
          <div class="w-6 md:w-2 flex justify-content-end">
            <Button pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Actors</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>
          <div class="w-6 md:w-2 flex justify-content-end">
            <Button pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Plot</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
            A group of professional bank robbers start to feel the heat from police
            when they unknowingly leave a clue at their latest heist.</div>
          <div class="w-6 md:w-2 flex justify-content-end">
            <Button pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CreateTournamentPage',
  components: {
  },
  data: function () {
    return {
      visible: false,
      isSignInVisible: false,
      isSignUpVisible: false,
      items: [
        { separator: true },
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          class: "p-focus",
        },

        {
          label: 'Tournaments',
          icon: 'pi pi-fw pi-sitemap'
        },
        {
          label: 'Leaderboards',
          icon: 'pi pi-fw pi-chart-bar'
        },
        { separator: true },

      ]
    }
  },
  methods: {
    openSigninComponent: function () {
      this.isSignUpVisible = false;
      this.isSignInVisible  = true;
    },
    openSignupComponent: function () {
      console.log('ae');
      this.isSignUpVisible  = true;
      this.isSignInVisible = false;
    }
  }
}
</script>
  