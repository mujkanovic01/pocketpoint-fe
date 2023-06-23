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
    </DataTable>

  </div>
</template>

<script>

import players from "@/data/players";
import Flag from "@/components/Flag.vue";
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: 'LeaderboardPage',
  components: {NavigationBar, Flag},
  data: function () {
    const sortedPlayers = Object.values(players)
    sortedPlayers.sort((a, b) => {
      return b.winPercentage - a.winPercentage;
    })
    return {
      players: sortedPlayers,
    }
  },
}
</script>

