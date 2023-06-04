<template>
  <img :alt="code" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${code.toLowerCase()}`" style="width: 18px"/>
</template>

<script>

export default {
  name: 'Flag',
  props: { code: String },
  data: function () {
    return {}
  }
}
</script>
