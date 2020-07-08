<template>
    <div>
      <div class="text-h3 text-center" style="color: #00d999">
        {{data}}
      </div>
    </div>
</template>

<script>
export default {

  data () {
    return {
      data: null
    }
  },

  created () {
    
  this.$axios.get("/api/v1/"+this.$route.params.token+"/confirm_email")
    .then(request => { 
      this.data = request.data.status
      
    })
    .catch(error => {
      this.data = 'Error al procesar la solicitud'
    })
}
}


</script>