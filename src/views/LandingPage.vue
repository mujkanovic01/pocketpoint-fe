<template>
  <div class="grid grid-nogutter surface-section text-800">
    <NavigationBar page="home"/>
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
      <section>
        <span class="block text-6xl font-bold mb-1">Climb the ranks and</span>
        <div class="text-6xl text-primary font-bold mb-3">make a name for yourself</div>
        <p class="mt-0 mb-4 text-700 line-height-3">Join or organise tournaments, battle with some of the best players
          in the region. Become a member and start your journey today.</p>

        <Button pButton pRipple label="Host a tournament" type="button" class="mr-3 p-button-raised"
                @click="openHostTournamentComponent()"></Button>
      </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden flex align-items-center justify-content-center image-media">
      <img src="../assets/landing-page-bg.png" alt="Image" class="hidden md:ml-auto md:block"
           style="height: calc(100vh - 90px)"/>
      <img src="../assets/landing-page-bg.png" alt="Image" class="block md:ml-auto md:hidden"/>
    </div>

    <Dialog v-model:visible="isSignUpVisible" modal header="Sign Up" class="w-11 md:w-8 xl:w-6">
      <SignUpComponent @openSignIn="openSigninComponent()"/>
    </Dialog>

    <Dialog v-model:visible="isSignInVisible" modal header="Sign In" class="w-11 md:w-8 xl:w-6">
      <SignInComponent @openSignUp="openSignupComponent()"/>
    </Dialog>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import SignInComponent from "@/components/SignInComponent.vue";
import SignUpComponent from "@/components/SignUpComponent.vue";
import jwtDecode from "jwt-decode";

export default {
  name: 'LandingPage',
  components: {
    SignUpComponent,
    SignInComponent,
    NavigationBar,
  },
  data: function () {
    return {
      visible: false,
      isSignInVisible: false,
      isSignUpVisible: false,
      isLoggedInUser: false,
    }
  },
  methods: {
    setTournaments: function () {
      const obj = {
        "1": {
          "title": "Sarajevo",
          "datetime": "2023-05-07T11:00:38.000Z",
          "discipline": {"name": "9 ball"},
          "raceTo": 9,
          "clubName": "Dynamic Club",
          "numberOfPlayers": {"name": 32},
          "players": [{
            "id": "p-001",
            "name": "John Doe",
            "age": 25,
            "code": "de",
            "wins": 23,
            "losses": 8,
            "winPercentage": 74
          }, {
            "id": "p-002",
            "name": "Jane Smith",
            "age": 27,
            "code": "it",
            "wins": 15,
            "losses": 12,
            "winPercentage": 56
          }, {
            "id": "p-003",
            "name": "David Johnson",
            "age": 30,
            "code": "fr",
            "wins": 19,
            "losses": 10,
            "winPercentage": 66
          }, {
            "id": "p-004",
            "name": "Emily Williams",
            "age": 23,
            "code": "es",
            "wins": 14,
            "losses": 13,
            "winPercentage": 52
          }, {
            "id": "p-005",
            "name": "Michael Brown",
            "age": 26,
            "code": "pl",
            "wins": 18,
            "losses": 11,
            "winPercentage": 62
          }, {
            "id": "p-006",
            "name": "Sarah Taylor",
            "age": 29,
            "code": "pt",
            "wins": 20,
            "losses": 9,
            "winPercentage": 69
          }, {
            "id": "p-007",
            "name": "Daniel Martinez",
            "age": 24,
            "code": "nl",
            "wins": 17,
            "losses": 12,
            "winPercentage": 59
          }, {
            "id": "p-008",
            "name": "Olivia Davis",
            "age": 28,
            "code": "se",
            "wins": 16,
            "losses": 11,
            "winPercentage": 59
          }, {
            "id": "p-009",
            "name": "Matthew Anderson",
            "age": 31,
            "code": "ch",
            "wins": 21,
            "losses": 8,
            "winPercentage": 72
          }, {
            "id": "p-010",
            "name": "Sophia Thomas",
            "age": 22,
            "code": "gr",
            "wins": 12,
            "losses": 15,
            "winPercentage": 44
          }, {
            "id": "p-011",
            "name": "James Rodriguez",
            "age": 25,
            "code": "ru",
            "wins": 25,
            "losses": 5,
            "winPercentage": 83
          }, {
            "id": "p-012",
            "name": "Emma Lee",
            "age": 27,
            "code": "fi",
            "wins": 19,
            "losses": 10,
            "winPercentage": 66
          }, {
            "id": "p-013",
            "name": "Benjamin Clark",
            "age": 30,
            "code": "cz",
            "wins": 8,
            "losses": 18,
            "winPercentage": 31
          }, {
            "id": "p-014",
            "name": "Ava Scott",
            "age": 23,
            "code": "at",
            "wins": 14,
            "losses": 12,
            "winPercentage": 54
          }, {
            "id": "p-015",
            "name": "Christopher Walker",
            "age": 26,
            "code": "ua",
            "wins": 10,
            "losses": 16,
            "winPercentage": 38
          }, {
            "id": "p-016",
            "name": "Mia Lewis",
            "age": 29,
            "code": "ro",
            "wins": 16,
            "losses": 11,
            "winPercentage": 59
          }, {
            "id": "p-017",
            "name": "William Rodriguez",
            "age": 24,
            "code": "hu",
            "wins": 18,
            "losses": 9,
            "winPercentage": 67
          }, {
            "id": "p-018",
            "name": "Amelia Garcia",
            "age": 28,
            "code": "no",
            "wins": 22,
            "losses": 7,
            "winPercentage": 76
          }, {
            "id": "p-019",
            "name": "Ethan Martinez",
            "age": 31,
            "code": "dk",
            "wins": 11,
            "losses": 16,
            "winPercentage": 41
          }, {
            "id": "p-020",
            "name": "Charlotte Allen",
            "age": 22,
            "code": "bg",
            "wins": 10,
            "losses": 18,
            "winPercentage": 36
          }, {
            "id": "p-021",
            "name": "Daniel Wilson",
            "age": 25,
            "code": "gb",
            "wins": 16,
            "losses": 13,
            "winPercentage": 55
          }, {
            "id": "p-022",
            "name": "Sofia Thompson",
            "age": 27,
            "code": "ie",
            "wins": 14,
            "losses": 16,
            "winPercentage": 46
          }, {
            "id": "p-023",
            "name": "Elijah Hall",
            "age": 30,
            "code": "be",
            "wins": 20,
            "losses": 10,
            "winPercentage": 66
          }, {
            "id": "p-024",
            "name": "Avery Turner",
            "age": 23,
            "code": "hr",
            "wins": 12,
            "losses": 17,
            "winPercentage": 41
          }, {
            "id": "p-025",
            "name": "Harper Harris",
            "age": 26,
            "code": "tr",
            "wins": 18,
            "losses": 12,
            "winPercentage": 60
          }, {
            "id": "p-026",
            "name": "Sebastian King",
            "age": 29,
            "code": "rs",
            "wins": 15,
            "losses": 15,
            "winPercentage": 50
          }, {
            "id": "p-027",
            "name": "Aria Morgan",
            "age": 24,
            "code": "si",
            "wins": 11,
            "losses": 18,
            "winPercentage": 37
          }, {
            "id": "p-028",
            "name": "Carter Cook",
            "age": 28,
            "code": "cy",
            "wins": 19,
            "losses": 11,
            "winPercentage": 63
          }, {
            "id": "p-029",
            "name": "Leo Adams",
            "age": 31,
            "code": "sk",
            "wins": 16,
            "losses": 14,
            "winPercentage": 53
          }, {
            "id": "p-030",
            "name": "Grace Parker",
            "age": 22,
            "code": "ee",
            "wins": 13,
            "losses": 16,
            "winPercentage": 45
          }, {
            "id": "p-031",
            "name": "Jackson Turner",
            "age": 25,
            "code": "lv",
            "wins": 19,
            "losses": 10,
            "winPercentage": 65
          }, {
            "id": "p-032",
            "name": "Luna Powell",
            "age": 27,
            "code": "lt",
            "wins": 15,
            "losses": 14,
            "winPercentage": 52
          }]
        }
      }
      if (!localStorage.getItem('tournaments')) {
        localStorage.setItem('tournaments', JSON.stringify(obj))
      }
    },
    setIsLoggedInUser() {
      const access_token = localStorage.getItem('access_token');
      this.isLoggedInUser = access_token ? Boolean(jwtDecode(access_token)?.first_name && jwtDecode(access_token)?.last_name) : false;
    },
    openSigninComponent: function () {
      this.isSignUpVisible = false;
      this.isSignInVisible = true;
    },
    openSignupComponent: function () {
      this.isSignUpVisible = true;
      this.isSignInVisible = false;
    },

    openHostTournamentComponent: function () {
      if (this.isLoggedInUser) {
        this.$router.push("/dashboard")
      } else {
        this.openSigninComponent();
      }
    }
  },
  mounted() {
    this.setTournaments();
    this.setIsLoggedInUser();
  }
}
</script>

<style>

@media (min-width: 768px) {
  .image-media {
    clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%);
  }
}
</style>
