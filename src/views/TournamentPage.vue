<template>
  <div class="grid-nogutter surface-section text-800" style="height: 100vh">
    <NavigationBar page="tournaments"/>
    <div class="surface-section w-full p-6">
      <div class="font-medium text-3xl text-900 mb-3">{{ title }}</div>
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

        <div v-for="round in rounds">
          <div class="font-medium text-3xl text-900 mt-8 mb-4">{{ round[0].round_title }}</div>
          <div class="flex justify-content-center w-full">
            <DataView :value="round" class="w-full">
              <template #list="slotProps">
                <div class="flex col-12 w-full">
                  <div class="flex align-items-center px-2 m-0" style="border-right: 1px solid lightgray"><p
                      class="text-2xl">
                    {{
                      slotProps.data.match_number < 10 ? `0${slotProps.data.match_number}` : slotProps.data.match_number
                    }}</p>
                  </div>
                  <div class="flex flex-row align-items-center justify-content-evenly p-4 gap-4 col-10 mr-2"
                       style="width: calc(100% - 100px)">
                    <div v-if="slotProps.data.player_one_id"
                         class="flex flex-column justify-content-center align-items-center">
                      <Avatar
                          :label="slotProps.data.player_one_first_name.charAt(0).toUpperCase() + slotProps.data.player_one_last_name.charAt(0).toUpperCase() "
                          class="mr-2" shape="circle" size="xlarge" style="background-color:#2196F3; color: #ffffff"/>
                      <p class="block md:hidden">
                        {{ slotProps.data.player_one_first_name + ' ' + slotProps.data.player_one_last_name }}</p>
                    </div>
                    <div v-else class="flex flex-column justify-content-center align-items-center">
                      <Avatar label="?" class="mr-2" shape="circle" size="xlarge"
                              style="background-color:#2196F3; color: #ffffff"/>
                      <p v-if="slotProps.data.match_slot_one_reference_match" class="block md:hidden">Winner of match
                        {{ slotProps.data.match_slot_one_reference_match }}</p>
                      <p v-else class="block md:hidden">Forfeit</p>
                    </div>

                    <div v-if="slotProps.data.player_one_id" class="hidden md:flex flex-column">
                      <p class="text-xl p-0 m-1">
                        {{ slotProps.data.player_one_first_name + ' ' + slotProps.data.player_one_last_name }}</p>
                      <p class="text-xl p-0 m-1">Age: {{ calculateAge(slotProps.data.player_one_date_of_birth) }}</p>
                      <p class="text-xl p-0 m-1">Win percentage: 20%</p>
                    </div>
                    <div v-else>
                      <div class="hidden md:flex flex-column">
                        <p v-if="slotProps.data.match_slot_one_reference_match" class="text-xl p-0 m-1">
                          Winner of match {{ slotProps.data.match_slot_one_reference_match }}</p>
                        <p v-else class="text-xl p-0 m-1">Forfeit</p>
                      </div>
                    </div>

                    <div v-if="slotProps.data.player_one_id" class="hidden md:block">
                      <Flag :code="JSON.parse(slotProps.data.player_one_nationality).code"
                            styleProp='width: 32px'></Flag>
                    </div>
                    <div v-else class="hidden md:block">
                      <Flag code="TBD" styleProp='width: 32px'></Flag>
                    </div>

                    <div class="flex gap-4 px-4">
                      <p class="text-4xl">{{ slotProps.data.match_player_one_score || "N / A" }}</p>
                      <p class="text-4xl">:</p>
                      <p class="text-4xl">{{ slotProps.data.match_player_two_score || "N / A" }}</p>
                    </div>

                    <div v-if="slotProps.data.player_two_id" class="hidden md:block">
                      <Flag :code="JSON.parse(slotProps.data.player_two_nationality).code"
                            styleProp='width: 32px'></Flag>
                    </div>
                    <div v-else class="hidden md:block">
                      <Flag code="TBD" styleProp='width: 32px'></Flag>
                    </div>

                    <div v-if="slotProps.data.player_two_id" class="hidden md:flex flex-column justify-content-end">
                      <p class="text-xl p-0 m-1">
                        {{ slotProps.data.player_two_first_name + ' ' + slotProps.data.player_two_last_name }}</p>
                      <p class="text-xl p-0 m-1">Age: {{ calculateAge(slotProps.data.player_two_date_of_birth) }}</p>
                      <p class="text-xl p-0 m-1">Win percentage: 20%</p>
                    </div>
                    <div v-else>
                      <div class="hidden md:flex flex-column">
                        <p v-if="slotProps.data.match_slot_two_reference_match" class="text-xl p-0 m-1">Winner of match
                          {{ slotProps.data.match_slot_two_reference_match }}</p>
                        <p v-else class="text-xl p-0 m-1">Forfeit</p>
                      </div>
                    </div>

                    <div v-if="slotProps.data.player_two_id"
                         class="flex flex-column justify-content-center align-items-center">
                      <Avatar
                          :label="slotProps.data.player_one_first_name.charAt(0).toUpperCase() + slotProps.data.player_one_last_name.charAt(0).toUpperCase() "
                          class="mr-2" shape="circle" size="xlarge" style="background-color:#2196F3; color: #ffffff"/>
                      <p class="block md:hidden">
                        {{ slotProps.data.player_two_first_name + ' ' + slotProps.data.player_two_last_name }}</p>
                    </div>
                    <div v-else class="flex flex-column justify-content-center align-items-center">
                      <Avatar label="?" class="mr-2" shape="circle" size="xlarge"
                              style="background-color:#2196F3; color: #ffffff"/>
                      <p v-if="slotProps.data.match_slot_two_reference_match" class="block md:hidden">Winner of match
                        {{ slotProps.data.match_slot_two_reference_match }}</p>
                      <p v-else class="block md:hidden">'Forfeit</p>
                    </div>
                  </div>
                  <div class="flex align-items-center px-2 m-0" style="border-left: 1px solid lightgray"><p
                      class="text-2xl">
                    {{
                      slotProps.data.match_number < 10 ? `0${slotProps.data.match_number}` : slotProps.data.match_number
                    }}</p>
                  </div>
                </div>
              </template>
            </DataView>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Flag from "@/components/Flag.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import {api_root} from "@/helpers/constants";
import calculateAge from "../helpers/helpers";

export default {
  name: 'TournamentPage',
  components: {
    NavigationBar,
    Flag
  },
  data: function () {
    // const tournamentId = this.$route.query.id;
    // const tournaments = JSON.parse(localStorage.getItem('tournaments'));
    // const tournamentData = tournaments[tournamentId];
    //
    // // Split datetime
    // const dateTimeString = tournamentData.datetime;
    // const dateTimeParts = dateTimeString.split("T");
    // const date = dateTimeParts[0];
    // const time = dateTimeParts[1].slice(0, -5);
    // const [year, month, day] = date.split("-");
    // const [hours, minutes] = time.split(":");
    // const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
    return {
      tournamentData: null,
      title: null,
      datetime: null,
      discipline: null,
      raceTo: null,
      clubName: null,
      numberOfPlayers: null,
      rounds: [],
      players: [],
      // matches: matches
    }
  },
  methods: {
    calculateAge,
    populateTournamentDetails: function (tournamentData) {
      this.title = tournamentData.tournament_title;
      this.datetime = tournamentData.tournament_datetime;
      this.discipline = tournamentData.tournament_discipline;
      this.raceTo = tournamentData.round_race_to;
      this.clubName = tournamentData.tournament_club_name;
      this.numberOfPlayers = tournamentData.tournament_num_of_players;
    },
    getRoundsFromData: function (tournamentData) {
      const result = tournamentData.reduce((acc, obj) => {
        const roundId = obj.round_id;
        if (!acc[roundId]) {
          acc[roundId] = [];
        }
        acc[roundId].push(obj);
        return acc;
      }, {});

      // Extract the separate arrays from the result
      const roundArrays = Object.values(result);

      return roundArrays
    },
    fetchTournamentData: async function () {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);

      console.log(urlParams, urlParams.get('id'))
      this.isLoading = true
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      };
      try {
        const res = await fetch(api_root + `/tournaments/tournamentData?id=${urlParams.get('id')}`, requestOptions);
        const responseBody = await res.json();
        this.isLoading = false
        return responseBody.data
      } catch {
        this.errorMessages['generalError'] = 'Server ran into an issue. Please try again'
        this.isLoading = false
        return null;
      }
    },
  },
  mounted: async function () {
    console.log('alo')
    const tournamentData = await this.fetchTournamentData();
    this.populateTournamentDetails(tournamentData.tournamentData[0]);
    const rounds = this.getRoundsFromData(tournamentData.tournamentData);
    const players = tournamentData.userData;

    this.tournamentData = tournamentData;
    this.rounds = rounds
    this.players = players
    console.log(this.rounds);
  }
}
</script>
