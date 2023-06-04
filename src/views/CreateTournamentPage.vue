<template>
  <div class="grid-nogutter surface-section text-800" style="height: 100vh">
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
      <div class="flex flex-column list-none p-0 m-0">
        <Divider class="flex col-12"/>
        <div class="flex col-12 gap-2">
          <div class="flex col-4 align-items-center justify-content-between py-3 px-2 surface-border">
            <div class="flex text-500 font-medium w-6">Tournament Title</div>
            <div class="col-1"/>
            <InputText class="flex w-full"></InputText>
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
            <InputText class="w-full"></InputText>
          </div>
        </div>
        <Divider class="flex col-12"/>
        <div class="flex justify-content-center">
        <DataTable :value="players" class="w-8">
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
            <template #body>
              <i class="pi pi-times" style="color: #DC143C"></i>
            </template>
          </Column>
<!--          <Column field="quantity" header="Quantity"></Column>-->
        </DataTable>
        </div>
        <div class="flex col-12 justify-content-center">
          <Button label="Next" class="w-1"></Button>
        </div>
<!--          <li class="flex align-items-center py-3 px-2 surface-border flex-wrap">-->
<!--            <div class="text-500 w-6 md:w-2 font-medium">Schema</div>-->
<!--            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">9 ball pool</div>-->
<!--            <div class="w-6 md:w-2 flex justify-content-end">-->
<!--              <Button pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>-->
<!--            </div>-->
<!--          </li>-->

<!--        <li class="flex align-items-center py-3 px-2 surface-border flex-wrap">-->
<!--          <div class="text-500 w-6 md:w-2 font-medium">Actors</div>-->
<!--          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>-->
<!--          <div class="w-6 md:w-2 flex justify-content-end">-->
<!--            <Button pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li class="flex align-items-center py-3 px-2 surface-border flex-wrap">-->
<!--          <div class="text-500 w-6 md:w-2 font-medium">Plot</div>-->
<!--          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">-->
<!--            A group of professional bank robbers start to feel the heat from police-->
<!--            when they unknowingly leave a clue at their latest heist.</div>-->
<!--          <div class="w-6 md:w-2 flex justify-content-end">-->
<!--            <Button pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>-->
<!--          </div>-->
<!--        </li>-->
      </div>
    </div>

  </div>
</template>

<script>
import players from "@/data/players";
import Flag from "@/components/Flag.vue";
export default {
  name: 'CreateTournamentPage',
  components: {
    Flag
  },
  data: function () {
    return {
      visible: false,
      isSignInVisible: false,
      isSignUpVisible: false,
      datetime: null,
      discipline: null,
      raceTo: null,
      disciplinesOptions: [{'name': '8 ball'}, {'name': '9 ball'}, {'name': '10 ball'}, {'name': 'Snooker'}],
      playerNumOptions: [{'name': 32}],
      playerNum: null,
      players: Object.values(players).slice(32)
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
  