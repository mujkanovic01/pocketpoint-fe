<template>
  <div class="grid-nogutter surface-section text-800" style="height: 100vh">
    <div class="col-12 relative">
      <Menubar :model="menubarItems">
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
      <div class="flex flex-column list-none p-0 m-0">
        <Divider class="flex col-12"/>
        <div class="flex col-12 gap-2">
          <div class="flex col-4 align-items-center justify-content-between py-3 px-2 surface-border">
            <div class="flex text-500 font-medium w-6">Tournament Title</div>
            <div class="col-1"/>
            <InputText v-model="title" class="flex w-full"></InputText>
          </div>
          <div class="flex col-2"/>
          <div class="flex col-4 align-items-center align-content-end justify-content-between py-3 px-2 surface-border">
            <div class="text-500 w-6 font-medium">Date & time</div>
            <div class="col-1"/>
            <Calendar :options="{'readonlyInput': false}" class="w-full" showIcon v-model="datetime" :manualInput="false" showTime hourFormat="24" />
          </div>
        </div>
        <div class="flex col-12 gap-2">
          <div class="flex col-4 align-items-center justify-content-between py-3 px-2 surface-border">
            <div class="flex text-500 font-medium w-6">Discipline</div>
            <div class="col-1"/>
            <Dropdown v-model="discipline" :options="disciplinesOptions" optionLabel="name" placeholder="Select a discipline" class="w-full" />
          </div>
          <div class="flex col-2"/>
          <div class="flex col-4 align-items-center justify-content-between py-3 px-2 surface-border">
            <div class="flex text-500 font-medium w-6">Number of players</div>
            <div class="col-1"/>
            <Dropdown v-model="playerNum" :options="playerNumOptions" optionLabel="name" placeholder="Select a number" class="w-full" />
          </div>
        </div>
        <div class="flex col-12 gap-2">
          <div class="flex col-4 align-items-center justify-content-between py-3 px-2 surface-border">
            <div class="flex text-500 font-medium w-6">Race to</div>
            <div class="col-1"/>
            <InputNumber class="w-full" v-model="raceTo" :useGrouping="false" mode="decimal" showButtons :min="5" :max="100" />
          </div>
          <div class="flex col-2"/>
          <div class="flex col-4 align-items-center align-content-end justify-content-between py-3 px-2 surface-border">
            <div class="text-500 w-6 font-medium">Club name</div>
            <div class="col-1"/>
            <InputText class="w-full" v-model="clubName"></InputText>
          </div>
        </div>
        <Divider class="flex col-12"/>
        <div class="font-medium text-3xl text-900 mb-3">Add players</div>
        <div class="text-500 mb-5">Please add up to 32 players who will participate in the tournament</div>
        <div class="flex justify-content-center">
          <Toast />
          <ConfirmPopup></ConfirmPopup>
          <DataTable :value="players" class="w-12 lg:w-8">
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
                <Avatar :label="slotProps.data.name.split(' ').map(word => word.charAt(0)).join('')" class="mr-2" shape="circle" size="medium" style="background-color:#2196F3; color: #ffffff"/>
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
        <AutoComplete placeholder="Enter player's full name" v-model="playerToAdd" optionLabel="name" :suggestions="suggestedPlayers" @complete="search" forceSelection />
        <div class="flex col-1"/>
        <Button icon="pi pi-plus" @click="addPlayer()"/>
      </div>
    </Dialog>
  </div>
</template>

<script>
import players from "@/data/players";
import Flag from "@/components/Flag.vue";

export default {
  name: 'TournamentPage',
  components: {
    Flag
  },
  data: function () {
    return {
      visible: false,
      isSignInVisible: false,
      isSignUpVisible: false,
      title: null,
      datetime: null,
      discipline: null,
      raceTo: null,
      clubName: null,
      disciplinesOptions: [{'name': '8 ball'}, {'name': '9 ball'}, {'name': '10 ball'}, {'name': 'Snooker'}],
      playerNumOptions: [{'name': 32}],
      playerNum: null,
      players: Object.values(players).slice(0, 32),
      playerToAdd: null,
      suggestedPlayers: [],
      isAddPlayerDialogOpen: false,
      menubarItems: [
        { separator: true },
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          class: "p-focus",
          url: '/',
        },
        {
          label: 'Tournaments',
          icon: 'pi pi-fw pi-sitemap',
          url: '/tournaments',
        },
        {
          label: 'Leaderboards',
          icon: 'pi pi-fw pi-chart-bar',
          url: '/leaderboard',
        },
        { separator: true },
      ]
    }
  },
  methods: {
    deletePlayer: function (event, row) {
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Do you want to delete this record?',
        icon: 'pi pi-info-circle',
        acceptClass: 'p-button-danger',
        accept: () => {
          this.players.splice(this.players.findIndex(item => item.id === row.id), 1)
          this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Player removed', life: 3000 });
        },
        reject: () => {}
      });
    },
    search: function(event) {
      this.suggestedPlayers = [...Array(this.getRandomInteger(1, 10)).keys()].map((item) => {
        return {
          id: `${event.query}-${item}-${this.getRandomInteger(1,1000)}}`,
          'name': event.query.replace(/\b\w/g, char => char.toUpperCase()),
          'code': 'BA',
          'age': this.getRandomInteger(17, 35),
        }
      });
    },
    addPlayer: function() {
      this.players.push(this.playerToAdd);
      this.isAddPlayerDialogOpen = false;
    },
    getRandomInteger: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    createTournament: function () {
      const tournaments = JSON.parse(localStorage.getItem("tournaments") || "{}");

      const tournamentIds = Object.keys(tournaments).map(i => Number(i));
      const maxId = tournamentIds.length > 0 ? Math.max(...tournamentIds) : 0;
      const nextId = maxId + 1;
      const newTournament = {
        'title': this.title,
        'datetime': this.datetime,
        'discipline': this.discipline,
        'raceTo': this.raceTo,
        'clubName': this.clubName,
        'numberOfPlayers': this.playerNum,
        'players': this.players,
      }
      tournaments[nextId] = newTournament
      localStorage.setItem('tournaments', JSON.stringify(tournaments));
      this.$router.push(`/tournament?id=${nextId}`)
    }
  }
}
</script>
