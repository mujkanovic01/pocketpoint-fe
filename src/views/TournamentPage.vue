<template>
  <div class="grid-nogutter surface-section text-800" style="height: 100vh">
    <NavigationBar page="tournaments"/>
    <div class="surface-section w-full p-6">
      <div class="font-medium text-3xl text-900 mb-3">{{ title.toUpperCase() }}</div>
      <div class="text-500 mb-5">{{ datetime }} (local time)</div>
      <div class="flex flex-column list-none p-0 m-0">
        <div class="flex flex-column col-12 gap-4 p-0">
          <div class="flex text-800 font-medium w-6 text-xl">Organizer: {{ clubName }}</div>
          <div class="flex text-800 font-medium w-6 text-xl">Discipline: {{ discipline }}</div>
          <div class="flex text-800 font-medium w-6 text-xl">Num. of players:
            {{ players.length }}/{{ numberOfPlayers }}
          </div>
          <div class="flex text-800 font-medium w-6 text-xl">Race to: {{ raceTo }}</div>
        </div>
        <Divider class="flex col-12 mb-6"/>
        <div class="font-medium text-4xl text-900 mb-6">Matches</div>

        <div class="font-medium text-3xl text-900 mb-4">Round 1</div>
        <div class="flex justify-content-center">
          <DataView :value="Object.values(matches).slice(0, 16)">
            <template #list="slotProps">
              <div class="flex col-12 w-full">
                <div class="flex flex-row align-items-center justify-content-between p-4 gap-4 w-full col-12">
                  <div class="flex flex-column justify-content-center align-items-center">
                    <Avatar :label="slotProps.data.player1.name.split(' ').map(word => word.charAt(0)).join('')"
                            class="mr-2" shape="circle" size="xlarge" style="background-color:#2196F3; color: #ffffff"/>
                    <p class="block md:hidden">{{ slotProps.data.player1.name }}</p>
                  </div>
                  <div class="hidden md:flex flex-column">
                    <p class="text-xl p-0 m-1">{{ slotProps.data.player1.name }}</p>
                    <p class="text-xl p-0 m-1">Age: {{ slotProps.data.player1.age }}</p>
                    <p class="text-xl p-0 m-1">Win percentage: {{ slotProps.data.player1.winPercentage }}%</p>
                  </div>
                  <div class="hidden md:block">
                    <Flag :code="slotProps.data.player1.code" styleProp='width: 32px'></Flag>
                  </div>
                  <div class="flex gap-4 px-4">
                    <p class="text-4xl">{{ slotProps.data.scoreLeft }}</p>
                    <p class="text-4xl">:</p>
                    <p class="text-4xl">{{ slotProps.data.scoreRight }}</p>
                  </div>
                  <div class="hidden md:block">
                    <Flag :code="slotProps.data.player2.code" styleProp='width: 32px'></Flag>
                  </div>
                  <div class="hidden md:flex flex-column justify-content-end">
                    <p class="text-xl p-0 m-1">{{ slotProps.data.player2.name }}</p>
                    <p class="text-xl p-0 m-1">Age: {{ slotProps.data.player2.age }}</p>
                    <p class="text-xl p-0 m-1">Win percentage: {{ slotProps.data.player2.winPercentage }}%</p>
                  </div>
                  <div class="flex flex-column justify-content-center align-items-center">
                    <Avatar :label="slotProps.data.player2.name.split(' ').map(word => word.charAt(0)).join('')"
                            class="mr-2" shape="circle" size="xlarge" style="background-color:#2196F3; color: #ffffff"/>
                    <p class="block md:hidden">{{ slotProps.data.player2.name }}</p>
                  </div>
                </div>
              </div>
            </template>
          </DataView>
        </div>
        <div class="font-medium text-3xl text-900 mt-6 mb-4">Round 2</div>
        <div class="flex justify-content-center">
          <DataView :value="Object.values(matches).slice(16, 24)">
            <template #list="slotProps">
              <div class="flex col-12 w-full">
                <div class="flex flex-row align-items-center justify-content-between p-4 gap-4 w-full col-12">
                  <div class="flex flex-column justify-content-center align-items-center">
                    <Avatar :label="slotProps.data.player1.name.split(' ').map(word => word.charAt(0)).join('')"
                            class="mr-2" shape="circle" size="xlarge" style="background-color:#2196F3; color: #ffffff"/>
                    <p class="block md:hidden">{{ slotProps.data.player1.name }}</p>
                  </div>
                  <div class="hidden md:flex flex-column">
                    <p class="text-xl p-0 m-1">{{ slotProps.data.player1.name }}</p>
                    <p class="text-xl p-0 m-1">Age: {{ slotProps.data.player1.age }}</p>
                    <p class="text-xl p-0 m-1">Win percentage: {{ slotProps.data.player1.winPercentage }}%</p>
                  </div>
                  <div class="hidden md:block">
                    <Flag :code="slotProps.data.player1.code" styleProp='width: 32px'></Flag>
                  </div>
                  <div class="flex gap-4 px-4">
                    <p class="text-4xl">{{ slotProps.data.scoreLeft }}</p>
                    <p class="text-4xl">:</p>
                    <p class="text-4xl">{{ slotProps.data.scoreRight }}</p>
                  </div>
                  <div class="hidden md:block">
                    <Flag :code="slotProps.data.player2.code" styleProp='width: 32px'></Flag>
                  </div>
                  <div class="hidden md:flex flex-column justify-content-end">
                    <p class="text-xl p-0 m-1">{{ slotProps.data.player2.name }}</p>
                    <p class="text-xl p-0 m-1">Age: {{ slotProps.data.player2.age }}</p>
                    <p class="text-xl p-0 m-1">Win percentage: {{ slotProps.data.player2.winPercentage }}%</p>
                  </div>
                  <div class="flex flex-column justify-content-center align-items-center">
                    <Avatar :label="slotProps.data.player2.name.split(' ').map(word => word.charAt(0)).join('')"
                            class="mr-2" shape="circle" size="xlarge" style="background-color:#2196F3; color: #ffffff"/>
                    <p class="block md:hidden">{{ slotProps.data.player2.name }}</p>
                  </div>
                </div>
              </div>
            </template>
          </DataView>
        </div>

        <div class="font-medium text-3xl text-900 mt-6 mb-4">Quarter finals</div>
        <div class="flex justify-content-center">
          <DataView :value="Object.values(matches).slice(0, 4)">
            <template #list="slotProps">
              <div class="flex col-12 w-full">
                <div class="flex flex-row align-items-center justify-content-between p-4 gap-4 w-full col-12">
                  <div class="flex flex-column justify-content-center align-items-center">
                    <Avatar label="?" class="mr-2" shape="circle" size="xlarge"
                            style="background-color:#2196F3; color: #ffffff"/>
                    <p class="block md:hidden">TBD</p>
                  </div>
                  <div class="hidden md:flex flex-column">
                    <p class="text-xl p-0 m-1">TBD</p>
                  </div>
                  <div class="hidden md:block">
                    <Flag code="TBD" styleProp='width: 32px'></Flag>
                  </div>
                  <div class="flex gap-4 px-4">
                    <p class="text-4xl">N/A</p>
                    <p class="text-4xl">:</p>
                    <p class="text-4xl">N/A</p>
                  </div>
                  <div class="hidden md:block">
                    <Flag code="TBD" styleProp='width: 32px'></Flag>
                  </div>
                  <div class="hidden md:flex flex-column justify-content-end">
                    <p class="text-xl p-0 m-1">TBD</p>
                  </div>
                  <div class="flex flex-column justify-content-center align-items-center">
                    <Avatar label="?" class="mr-2" shape="circle" size="xlarge"
                            style="background-color:#2196F3; color: #ffffff"/>
                    <p class="block md:hidden">TBD</p>
                  </div>
                </div>
              </div>
            </template>
          </DataView>
        </div>

        <div class="font-medium text-3xl text-900 mt-6 mb-4">Semi finals</div>
        <div class="flex justify-content-center">
          <DataView :value="Object.values(matches).slice(0, 2)" class="w-full">
            <template #list="slotProps">
              <div class="flex col-12 w-full">
                <div class="flex flex-row align-items-center justify-content-between p-4 gap-4 w-full col-12">
                  <div class="flex flex-column justify-content-center align-items-center">
                    <Avatar label="?" class="mr-2" shape="circle" size="xlarge"
                            style="background-color:#2196F3; color: #ffffff"/>
                    <p class="block md:hidden">TBD</p>
                  </div>
                  <div class="hidden md:flex flex-column">
                    <p class="text-xl p-0 m-1">TBD</p>
                  </div>
                  <div class="hidden md:block">
                    <Flag code="TBD" styleProp='width: 32px'></Flag>
                  </div>
                  <div class="flex gap-4 px-4">
                    <p class="text-4xl">N/A</p>
                    <p class="text-4xl">:</p>
                    <p class="text-4xl">N/A</p>
                  </div>
                  <div class="hidden md:block">
                    <Flag code="TBD" styleProp='width: 32px'></Flag>
                  </div>
                  <div class="hidden md:flex flex-column justify-content-end">
                    <p class="text-xl p-0 m-1">TBD</p>
                  </div>
                  <div class="flex flex-column justify-content-center align-items-center">
                    <Avatar label="?" class="mr-2" shape="circle" size="xlarge"
                            style="background-color:#2196F3; color: #ffffff"/>
                    <p class="block md:hidden">TBD</p>
                  </div>
                </div>
              </div>
            </template>
          </DataView>
        </div>

        <div class="font-medium text-3xl text-900 mt-6 mb-4">Finals</div>
        <div class="flex justify-content-center w-full">
          <DataView :value="Object.values(matches).slice(0, 1)" class="w-full">
            <template #list="slotProps">
              <div class="flex col-12 w-full">
                <div class="flex flex-row align-items-center justify-content-between p-4 gap-4 w-full col-12">
                  <div class="flex flex-column justify-content-center align-items-center">
                    <Avatar label="?" class="mr-2" shape="circle" size="xlarge"
                            style="background-color:#2196F3; color: #ffffff"/>
                    <p class="block md:hidden">TBD</p>
                  </div>
                  <div class="hidden md:flex flex-column">
                    <p class="text-xl p-0 m-1">TBD</p>
                  </div>
                  <div class="hidden md:block">
                    <Flag code="TBD" styleProp='width: 32px'></Flag>
                  </div>
                  <div class="flex gap-4 px-4">
                    <p class="text-4xl">N/A</p>
                    <p class="text-4xl">:</p>
                    <p class="text-4xl">N/A</p>
                  </div>
                  <div class="hidden md:block">
                    <Flag code="TBD" styleProp='width: 32px'></Flag>
                  </div>
                  <div class="hidden md:flex flex-column justify-content-end">
                    <p class="text-xl p-0 m-1">TBD</p>
                  </div>
                  <div class="flex flex-column justify-content-center align-items-center">
                    <Avatar label="?" class="mr-2" shape="circle" size="xlarge"
                            style="background-color:#2196F3; color: #ffffff"/>
                    <p class="block md:hidden">TBD</p>
                  </div>
                </div>
              </div>
            </template>
          </DataView>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import players from "@/data/players";
import Flag from "@/components/Flag.vue";
import matches from "@/data/tournament";
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: 'TournamentPage',
  components: {
    NavigationBar,
    Flag
  },
  data: function () {
    const tournamentId = this.$route.query.id;
    const tournaments = JSON.parse(localStorage.getItem('tournaments'));
    const tournamentData = tournaments[tournamentId];

    // Split datetime
    const dateTimeString = tournamentData.datetime;
    const dateTimeParts = dateTimeString.split("T");
    const date = dateTimeParts[0];
    const time = dateTimeParts[1].slice(0, -5);
    const [year, month, day] = date.split("-");
    const [hours, minutes] = time.split(":");
    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
    return {
      title: tournamentData.title,
      datetime: formattedDateTime,
      discipline: tournamentData.discipline.name,
      raceTo: tournamentData.raceTo,
      clubName: tournamentData.clubName,
      numberOfPlayers: tournamentData.numberOfPlayers.name,
      players: tournamentData.players,
      matches: matches
    }
  },
}
</script>
