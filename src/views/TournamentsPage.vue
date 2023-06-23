<template>
  <div class="flex flex-column align-items-center text-800">
    <NavigationBar page="tournaments"/>

    <div class="text-5xl ml-4 my-4">Tournaments</div>

    <DataTable :value="tournaments" class="lg:w-8 w-12" @row-click="openTournament">
      <Column field="name" header="Name">
        <template #body="slotProps">
          <div class="text-lg">{{ slotProps.data.title }}</div>
        </template>
      </Column>
      <Column field="name" header="Start time">
        <template #body="slotProps">
          <div class="text-lg">{{ new Date(slotProps.data.datetime).toDateString() }}</div>
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
            <Avatar label="??"
                    class="mr-2 p-3"
                    shape="circle" size="medium" style="background-color:#2196F3; color: #ffffff"/>
            <Avatar label="??"
                    class="mr-2 p-3"
                    shape="circle" size="medium" style="background-color:#2196F3; color: #ffffff"/>
            <Avatar label="??"
                    class="mr-2 p-3"
                    shape="circle" size="medium" style="background-color:#2196F3; color: #ffffff"/>
            <Avatar label="??"
                    class="mr-2 p-3"
                    shape="circle" size="medium" style="background-color:#2196F3; color: #ffffff"/>
            <Avatar :label="`+${(slotProps.data.num_of_players - 4)}`" class="mr-2 p-3"
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
import NavigationBar from "@/components/NavigationBar.vue";
import {api_root} from "@/helpers/constants";

export default {
  name: 'LeaderboardPage',
  computed: {
    players() {
      return players
    }
  },
  components: {NavigationBar, Flag},
  data: function () {
    return {
      tournaments: Object.values(tournaments).map(tournament => ({
            ...tournament,
            players: tournament.players.map(player => players[player]),
          }
      )),
    }
  },
  methods: {
    openTournament: function (event) {
      this.$router.push(`/tournament?id=${this.tournaments[event.index].id}`)
    },
    fetchTournamentData: async function () {
      this.isLoading = true
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      };
      try {
        const res = await fetch(api_root + `/tournaments/getAllTournaments`, requestOptions);
        const responseBody = await res.json();
        this.isLoading = false
        this.tournaments = responseBody.data
      } catch {
        this.errorMessages['generalError'] = 'Server ran into an issue. Please try again'
        this.isLoading = false
        return null;
      }
    },
  },
  mounted: function () {
    this.fetchTournamentData();
  }
}
</script>

