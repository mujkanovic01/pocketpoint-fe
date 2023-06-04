<template>
  <div class="flex flex-column align-items-center text-800">
    <div class="col-12 relative">
      <Menubar :model="items">
        <template #start>
          <img alt="logo" src="../assets/logo-nobg.png" height="65" class="mr-2"/>
        </template>
        <!--        TODO insert player info-->
      </Menubar>
    </div>

    <div class="text-5xl ml-4 my-4">Leaderboard</div>

    <DataTable :value="players" class="lg:w-8 w-12">
      <Column field="rank" header="Rank">
        <template #body="slotProps">
          <div class='text-l'>#{{ slotProps.index + 1 }}</div>
        </template>
      </Column>
      <Column field="name" header="Player">
        <template #body="slotProps">
          <Avatar :label="slotProps.data.name.split(' ').map(word => word.charAt(0)).join('')" class="mr-2"
                  shape="circle" size="medium" style="background-color:#2196F3; color: #ffffff"/>
          {{ slotProps.data.name }}
        </template>
      </Column>
      <Column field="code" header="Nationality">
        <template #body="slotProps">
          <Flag :code="slotProps.data.code"></Flag>
        </template>
      </Column>
      <Column field="age" header="Age"></Column>
      <Column field="age" header="Win percentage">
        <template #body="slotProps">
          <div class='text-l'>
            {{ slotProps.data.winPercentage }}%
          </div>
        </template>
      </Column>
      <Column field="icon" header="">
        <template #body>
          <i class="pi pi-angle-right"></i>
        </template>
      </Column>
      <!--          <Column field="quantity" header="Quantity"></Column>-->
    </DataTable>

  </div>
</template>

<script>

import players from "@/data/players";
import Flag from "@/components/Flag.vue";

export default {
  name: 'LeaderboardPage',
  components: {Flag},
  data: function () {
    const sortedPlayers = Object.values(players)
    sortedPlayers.sort((a, b) => {
      return b.winPercentage - a.winPercentage;
    })

    return {
      players: sortedPlayers,
      items: [
        {separator: true},
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
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
          class: "p-focus",
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
    }
  }
}
</script>

