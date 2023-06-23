<template>
  <div class="flex flex-column align-items-center text-800">
    <NavigationBar page="leaderboards"/>
    <div class="text-5xl ml-4 my-4">Leaderboard</div>

    <DataTable :value="players" class="lg:w-8 w-12">
      <Column field="rank" header="Rank">
        <template #body="slotProps">
          <div class='text-l'>#{{ slotProps.index + 1 }}</div>
        </template>
      </Column>
      <Column field="name" header="Player">
        <template #body="slotProps">
          <Avatar :label="slotProps.data.first_name.charAt(0) + slotProps.data.last_name.charAt(0)" class="mr-2"
                  shape="circle" size="medium" style="background-color:#2196F3; color: #ffffff"/>
          {{ slotProps.data.first_name }} {{ slotProps.data.last_name }}
        </template>
      </Column>
      <Column field="code" header="Nationality">
        <template #body="slotProps">
          <Flag :code="JSON.parse(slotProps.data.nationality).code"></Flag>
        </template>
      </Column>
      <Column field="age" header="Age">
        <template #body="slotProps">
          <div class='text-l'>
            {{ calculateAge(slotProps.data.date_of_birth) }}
          </div>
        </template>
      </Column>
      <Column field="age" header="Win percentage">
        <template #body="slotProps">
          <div class='text-l'>
            {{ slotProps.data.win_percentage }}%
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>

import Flag from "@/components/Flag.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import {api_root} from "@/helpers/constants";
import calculateAge from "../helpers/helpers";

export default {
  name: 'LeaderboardPage',
  components: {NavigationBar, Flag},
  data: function () {
    return {
      players: []
    }
  },
  methods: {
    calculateAge,
    fetchUserData: async function () {
      this.isLoading = true
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      };
      try {
        const res = await fetch(api_root + `/user/getAllUsers`, requestOptions);
        const responseBody = await res.json();
        this.isLoading = false
        const sortedPlayers = Object.values(responseBody.data)
        sortedPlayers.sort((a, b) => {
          return b.win_percentage - a.win_percentage;
        })
        this.players = sortedPlayers;
      } catch {
        this.errorMessages['generalError'] = 'Server ran into an issue. Please try again'
        this.isLoading = false
        return null;
      }
    },
  },
  mounted: function () {
    this.fetchUserData();
  }
}
</script>

