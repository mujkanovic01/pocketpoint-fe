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

    <div class="text-5xl ml-4 my-4">Tournaments</div>

    <DataTable :value="tournaments" class="lg:w-8 w-12">
      <Column field="name" header="Name">
        <template #body="slotProps">
          <div class="text-lg">{{ slotProps.data.title }}</div>
        </template>
      </Column>
      <Column field="name" header="Start time">
        <template #body="slotProps">
          <div class="text-lg">{{ new Date(slotProps.data.startTime).toDateString() }}</div>
        </template>
      </Column>

      <Column field="name" header="End time">
        <template #body="slotProps">
          <div class="text-lg">{{ new Date(slotProps.data.endTime).toDateString() }}</div>
        </template>
      </Column>

      <Column field="name" header="Discipline">
        <template #body="slotProps">
          <div class="text-lg">{{ slotProps.data.discipline }}</div>
        </template>
      </Column>

      <Column field="name" header="Players">
        <template #body="slotProps">
          <AvatarGroup>
            <Avatar :label="slotProps.data.players[0].name.split(' ').map(word => word.charAt(0)).join('')" class="mr-2 p-3"
                    shape="circle" size="medium" style="background-color:#2196F3; color: #ffffff"/>
            <Avatar :label="slotProps.data.players[1].name.split(' ').map(word => word.charAt(0)).join('')" class="mr-2 p-3"
                    shape="circle" size="medium" style="background-color:#2196F3; color: #ffffff"/>
            <Avatar :label="slotProps.data.players[2].name.split(' ').map(word => word.charAt(0)).join('')" class="mr-2 p-3"
                    shape="circle" size="medium" style="background-color:#2196F3; color: #ffffff"/>
            <Avatar :label="slotProps.data.players[3].name.split(' ').map(word => word.charAt(0)).join('')" class="mr-2 p-3"
                    shape="circle" size="medium" style="background-color:#2196F3; color: #ffffff"/>
            <Avatar :label="`+${(slotProps.data.players.length - 4)}`" class="mr-2 p-3"
                    shape="circle" size="medium"/>
          </AvatarGroup>
        </template>
      </Column>
      <Column field="icon" header="">
        <template #body>
          <i class="pi pi-angle-right"></i>
        </template>
      </Column>
    </DataTable>

  </div>
</template>

<script>

import Flag from "@/components/Flag.vue";
import tournaments from "@/data/tournaments";
import players from "@/data/players";

export default {
  name: 'LeaderboardPage',
  computed: {
    players() {
      return players
    }
  },
  components: {Flag},
  data: function () {
    return {
      tournaments: Object.values(tournaments).map(tournament => ({...tournament,
          players: tournament.players.map(player => players[player]),
        }
      )),
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
          class: "p-focus",
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
    }
  }
}
</script>

