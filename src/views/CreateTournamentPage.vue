<template>
  <div class="grid-nogutter surface-section text-800" style="height: 100vh">
    <div class="surface-section w-full p-6">
      <div class="font-medium text-3xl text-900 mb-3">Host a tournament</div>
      <div class="text-500 mb-5">Please provide some basic information about your tournament</div>
      <div class="flex flex-column list-none p-0 m-0">
        <Divider class="flex col-12"/>
        <div class="flex col-12 gap-2">
          <div class="flex col-4 align-items-center justify-content-between py-3 px-2 surface-border">
            <div class="flex text-500 font-medium w-6">Tournament Title</div>
            <div class="col-1"/>
            <div class="flex flex-column w-full">
              <InputText v-model="title" :class="{ 'p-invalid': errorMessages.title }" class="flex w-full"></InputText>
              <small class="p-error" id="text-error">{{ errorMessages.title || '&nbsp;' }}</small>
            </div>
          </div>
          <div class="flex col-2"/>
          <div class="flex col-4 align-items-center align-content-end justify-content-between py-3 px-2 surface-border">
            <div class="text-500 w-6 font-medium">Date & time</div>
            <div class="col-1"/>
            <div class="flex flex-column w-full">
              <Calendar :options="{'readonlyInput': false}"
                        :class="{'w-full': true, 'p-invalid': errorMessages.datetime }"
                        showIcon v-model="datetime"
                        :manualInput="false" showTime hourFormat="24"/>
              <small class="p-error" id="text-error">{{ errorMessages.datetime || '&nbsp;' }}</small>
            </div>
          </div>
        </div>
        <div class="flex col-12 gap-2">
          <div class="flex col-4 align-items-center justify-content-between py-3 px-2 surface-border">
            <div class="flex text-500 font-medium w-6">Discipline</div>
            <div class="col-1"/>
            <div class="flex flex-column w-full">
              <Dropdown v-model="discipline" :options="disciplinesOptions" optionLabel="name"
                        placeholder="Select a discipline" :class="{ 'p-invalid': errorMessages.discipline }"
                        class="w-full"/>
              <small class="p-error" id="text-error">{{ errorMessages.discipline || '&nbsp;' }}</small>
            </div>
          </div>
          <div class="flex col-2"/>
          <div class="flex col-4 align-items-center justify-content-between py-3 px-2 surface-border">
            <div class="flex text-500 font-medium w-6">Number of players</div>
            <div class="col-1"/>
            <div class="flex flex-column w-full">
              <Dropdown v-model="playerNum" :options="playerNumOptions" optionLabel="name" placeholder="Select a number"
                        class="w-full" :class="{ 'p-invalid': errorMessages.playerNum }"/>
              <small class="p-error" id="text-error">{{ errorMessages.playerNum || '&nbsp;' }}</small>
            </div>
          </div>
        </div>
        <div class="flex col-12 gap-2">
          <div class="flex col-4 align-items-center justify-content-between py-3 px-2 surface-border">
            <div class="flex text-500 font-medium w-6">Race to</div>
            <div class="col-1"/>
            <div class="flex flex-column w-full">
              <InputNumber class="w-full" v-model="raceTo" :useGrouping="false" mode="decimal" showButtons :min="5"
                           :max="100" :class="{ 'p-invalid': errorMessages.raceTo }"/>
              <small class="p-error" id="text-error">{{ errorMessages.raceTo || '&nbsp;' }}</small>
            </div>
          </div>
          <div class="flex col-2"/>
          <div class="flex col-4 align-items-center align-content-end justify-content-between py-3 px-2 surface-border">
            <div class="text-500 w-6 font-medium">Club name</div>
            <div class="col-1"/>

            <div class="flex flex-column w-full">
              <InputText class="w-full" v-model="clubName" :class="{ 'p-invalid': errorMessages.clubName }"/>
              <small class="p-error" id="text-error">{{ errorMessages.clubName || '&nbsp;' }}</small>
            </div>
          </div>
        </div>
        <Divider class="flex col-12"/>
        <div class="flex col-12 justify-content-center">
          <Button label="Create Tournament" class="w-2" @click="createTournament()"></Button>
        </div>
        <div class="font-medium text-3xl text-900 mb-3">Add players</div>
        <div class="text-500 mb-5">Please add up to 32 players who will participate in the tournament</div>
        <div class="flex justify-content-center">
          <Toast/>
          <ConfirmPopup></ConfirmPopup>
          <DataTable :value="players" class="w-12 lg:w-8" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]">
            <template #header>
              <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                <span class="text-xl text-900 font-bold">Players</span>
                <Button icon="pi pi-plus" rounded outlined raised size="small" @click="isAddPlayerDialogOpen = true"/>
              </div>
            </template>
            <Column field="rank" header="No.">
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
            <Column field="icon" header="">
              <template #body="slotProps">
                <i class="pi pi-times" style="color: #DC143C" @click="deletePlayer($event, slotProps.data)"></i>
              </template>
            </Column>
            <!--          <Column field="quantity" header="Quantity"></Column>-->
          </DataTable>
        </div>
        <div class="flex col-12 justify-content-center mt-4">
          <Button label="Create Tournament" class="w-2" @click="createTournament()"></Button>
        </div>
      </div>
    </div>
    <Dialog v-model:visible="isAddPlayerDialogOpen" modal header="Add player">
      <div class="flex justify-content-start flex-nowrap">
        <AutoComplete placeholder="Enter player's full name" v-model="playerToAdd" optionLabel="name"
                      :suggestions="suggestedPlayers" @complete="search" forceSelection/>
        <div class="flex col-1"/>
        <Button icon="pi pi-plus" @click="addPlayer()"/>
      </div>
    </Dialog>
  </div>
</template>

<script>
import Flag from "@/components/Flag.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import {api_root} from "@/helpers/constants";

export default {
  name: 'TournamentPage',
  components: {
    NavigationBar,
    Flag
  },
  data: function () {
    return {
      visible: false,
      title: null,
      datetime: null,
      discipline: null,
      raceTo: null,
      clubName: null,
      errorMessages: {},
      disciplinesOptions: [{'name': '8 ball'}, {'name': '9 ball'}, {'name': '10 ball'}, {'name': 'Snooker'}],
      playerNumOptions: [{'name': 32}],
      playerNum: null,
      players: [],
      playerToAdd: null,
      suggestedPlayers: [],
      isAddPlayerDialogOpen: false,
    }
  },
  methods: {
    validateForm: function () {
      this.errorMessages = {}

      if (!this.title) this.errorMessages['title'] = 'Missing title'
      if (!this.datetime) this.errorMessages['datetime'] = 'Missing datetime'
      if (!this.discipline) this.errorMessages['discipline'] = 'Missing discipline'
      if (!this.raceTo) this.errorMessages['raceTo'] = 'Missing race to'
      if (!this.clubName) this.errorMessages['clubName'] = 'Missing club name'
      if (!this.playerNum) this.errorMessages['playerNum'] = 'Missing num. of players'

      return !Object.keys(this.errorMessages).length
    },
    deletePlayer: function (event, row) {
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Do you want to delete this record?',
        icon: 'pi pi-info-circle',
        acceptClass: 'p-button-danger',
        accept: () => {
          this.players.splice(this.players.findIndex(item => item.id === row.id), 1)
          this.$toast.add({severity: 'info', summary: 'Confirmed', detail: 'Player removed', life: 3000});
        },
        reject: () => {
        }
      });
    },
    search: async function (event) {
      this.isLoading = true
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      };

      const res = await fetch(api_root + `/user/getUsersByName?name=${event.query}`, requestOptions);
      const responseBody = await res.json();

      this.suggestedPlayers = responseBody.data.map((user) => {
        return {
          id: user.id,
          'name': user.first_name + ' ' + user.last_name,
          'code': JSON.parse(user.nationality).code,
          'age': this.calculateAge(user.date_of_birth),
        }
      }).filter(player => !this.players.some(p => p.id === player.id))
    },
    calculateAge: function (birthdate) {
      const birthdateObj = new Date(birthdate);
      const currentDate = new Date();

      // Calculate the difference in years
      let age = currentDate.getFullYear() - birthdateObj.getFullYear();

      // Adjust the age if the current month is before the birth month
      const currentMonth = currentDate.getMonth();
      const birthMonth = birthdateObj.getMonth();
      if (currentMonth < birthMonth) {
        age--;
      }

      // Adjust the age if the current month is the same as the birth month, but the current day is before the birth day
      if (currentMonth === birthMonth && currentDate.getDate() < birthdateObj.getDate()) {
        age--;
      }

      return age;
    },
    addPlayer: function () {
      this.players.push(this.playerToAdd);
      this.isAddPlayerDialogOpen = false;
    },
    createTournament: async function () {
      if (!this.validateForm()) return;

      // const playerIds = this.players.map(p => p.id);
      console.log('playerids', playerIds);

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          datetime: this.datetime,
          discipline: this.discipline,
          raceTo: this.raceTo,
          clubName: this.clubName,
          playerNum: this.playerNum,
          players: this.players,
        })
      };

      const res = await fetch(api_root + `/tournaments/createTournament`, requestOptions);
      const responseBody = await res.json();

      console.log(responseBody);
      // const tournaments = JSON.parse(localStorage.getItem("tournaments") || "{}");
      //
      // const tournamentIds = Object.keys(tournaments).map(i => Number(i));
      // const maxId = tournamentIds.length > 0 ? Math.max(...tournamentIds) : 0;
      // const nextId = maxId + 1;
      // const newTournament = {
      //   'title': this.title,
      //   'datetime': this.datetime,
      //   'discipline': this.discipline,
      //   'raceTo': this.raceTo,
      //   'clubName': this.clubName,
      //   'numberOfPlayers': this.playerNum,
      //   'players': this.players,
      // }
      // tournaments[nextId] = newTournament
      // localStorage.setItem('tournaments', JSON.stringify(tournaments));
      // this.$router.push(`/tournament?id=${nextId}`)
    }
  }
}
</script>
