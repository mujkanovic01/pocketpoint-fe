<template>
  <div class="layout">
    <div class="sidebar">
      <ul class="sidebar-menu flex flex-column justify-content-between">
        <div>
          <img alt="logo" style="filter: invert(100%);" src="../assets/logo-nobg.png" height="65"
               class="mr-2 logo-image"
               @click="redirectToHome"/>
          <Divider/>
          <li @click="() => {this.$router.push('/dashboard')}">
            <i class="pi pi-box"/>
            <span>Create a tournament</span>
          </li>
          <Divider/>
          <li style="cursor: default; color:gray">
            <i class="pi pi-sitemap"/>
            <span>Manage leagues</span>
          </li>
          <Divider/>
          <li style="cursor: default; color:gray">
            <i class="pi pi-chart-bar"/>
            <span>Manage teams</span>
          </li>
          <Divider/>
        </div>
        <div>
          <Divider/>
          <li class="sidebar-menu-bottom" @click="redirectToProfilePage">
            <i class="pi pi-user"/>
            <span v-if="this.user">{{ this.user.name }}</span>
          </li>
        </div>
      </ul>
    </div>
    <div class="main">
      <ProfilePage/>
    </div>
  </div>
</template>

<script>
import ProfilePageComponent from "@/components/ProfilePageComponent.vue";
import jwtDecode from "jwt-decode";
import ProfilePage from "@/components/ProfilePageComponent.vue";

export default {
  name: 'DashboardPage',
  components: {
    ProfilePage,
    ProfilePageComponent
  },
  data: function () {
    return {
      user: null,
    }
  },
  methods: {
    redirectToHome: function () {
      this.$router.push("/");
    },
    redirectToProfilePage: function () {
      this.$router.push("/profile");
    }
  },
  mounted: function () {
    const access_token = localStorage.getItem('access_token');

    if (!access_token) return;
    const decodedToken = jwtDecode(access_token);

    if (decodedToken && decodedToken.first_name && decodedToken.last_name) {
      this.user = {
        'name': decodedToken.first_name + ' ' + decodedToken.last_name,
      }
    }
  }
};
</script>

<style scoped>
.layout {
  display: flex;
}

.sidebar {
  overflow: auto;
  position: fixed;
  width: 235px;
  z-index: 99;
  height: 100%;
  background-color: #ffffff;
  border-right: 1px solid var(--surface-border);
  transition: margin-left 0.3s;
}

.sidebar-menu {
  list-style-type: none;
  padding: 0;
  margin-top: 7%;
  height: calc(100% - 40px);
}

.sidebar-menu li {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
}

.sidebar-menu i {
  margin-right: 8px;
}

.sidebar-menu-bottom {
  margin-top: auto;
}

.main {
  flex: 1;
  padding: 20px;
  margin-left: 235px;
}

</style>
