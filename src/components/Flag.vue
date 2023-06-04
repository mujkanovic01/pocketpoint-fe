<template>
  <img :alt="code" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${code.toLowerCase()}`" :style="styleProp"/>
</template>

<script>

export default {
  name: 'Flag',
  props: { code: String, styleProp: {type: String, default: "width: 18px"} },
  data: function () {
    return {}
  }
}
</script>
