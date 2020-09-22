<template>
  <div class="q-pa-md">
    <template v-if="checkCurrentLogin()">
      <q-stepper
        v-model="step"
        ref="stepper"
        color="primary"
      >
        <q-step
          :name="1"
          title="Paso 1"
          icon="settings"
          :done="step > 1"
          style="min-height: 200px;"
        >
          <div class="row">
            <div class="col-xs-12 col-sm-4 offset-sm-4 text-center">
              <div class="text-subtitle1 text-weight-bold text-center" >
                {{$t('appname')}}
              </div>
              <q-input outlined bottom-slots v-model="name" type="email" :label="$t('appname')+' *'" hint="Rainbow Six Siege"
              :rules="[ val => val.length >= 3 || $t('mustThree')]" >
                <template v-slot:prepend>
                  <q-icon name="title" />
                </template>
                <template v-slot:append>
                  <q-icon name="close" @click="name = ''" class="cursor-pointer" />
                </template>
              </q-input>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4 offset-sm-4 text-center">
              <div class="text-subtitle1 text-weight-bold text-center" >
                {{$t('appimage')}}
              </div>
              <q-input outlined bottom-slots v-model="image" type="email" label="Link de imagen (Opcional)" hint="https://www.example.com/image.jpg" >
                <template v-slot:prepend>
                  <q-icon name="image" />
                </template>
                <template v-slot:append>
                  <q-icon name="close" @click="image = ''" class="cursor-pointer" />
                </template>
              </q-input>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4 offset-sm-4 text-center">
              <div class="text-subtitle1 text-weight-bold text-center" >
                Video Demo
              </div>
              <q-input outlined bottom-slots v-model="video" type="email" label="Link de video (Opcional)"  hint="https://www.youtube.com/embed/id" >
                <template v-slot:prepend>
                  <q-icon name="video_library" />
                </template>
                <template v-slot:append>
                  <q-icon name="close" @click="video = ''" class="cursor-pointer" />
                </template>
              </q-input>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4 offset-sm-4 text-center">
              <q-stepper-navigation>
                <template v-if="name.length >= 3">
                  <q-btn @click="$refs.stepper.next()" color="primary" :label="$t('continue')" />
                </template>
                <template v-if="name.length < 3">
                  <q-btn  class="bg-red-5 text-white" :label="$t('completeallrequiredfields')" ></q-btn>
                </template>
                <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" :label="$t('back')" class="q-ml-sm" />
              </q-stepper-navigation>
            </div>
          </div>
    	    
        </q-step>

        <q-step
          :name="2"
          title="Paso 2"
          icon="create_new_folder"
          :done="step > 2"
          style="min-height: 200px;"
        >
          <div class="row"> 
            <div class="col-xs-12 col-sm-4 offset-sm-4"> 
              <div class="text-subtitle1 text-weight-bold text-center" >
                {{$t('categories')}}
              </div>
              <q-select
                transition-show="scale"
                transition-hide="scale"
                label="Elige una o más"
                filled
                v-model="selectTags"
                use-chips
                multiple
                input-debounce="0"
                @new-value="createValue"
                :options="filterOptions"
                @filter="filterFn"
               
              />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-6 offset-sm-3 text-center">
              <div class="q-pa-md text-subtitle1 text-weight-bold">
                {{$t('platform')}}
              </div>
                <q-option-group
                  :options="options"
                  label="Notifications"
                  type="checkbox"
                  v-model="group"
                  inline
                />
    			  </div>
          </div> 
          <div class="row">
            <div class="col-xs-12 col-sm-6 offset-sm-3">
              <div class="q-pa-md text-subtitle1 text-weight-bold text-center">
                {{$t('rating')}}
              </div>
              <q-list>
                <!--
                  Rendering a <label> tag (notice tag="label")
                  so QRadios will respond to clicks on QItems to
                  change Toggle state.
                -->
                <q-item  tag="label" v-ripple>
                  <q-item-section avatar>
                    <q-radio v-model="rating" val="e" color="primary" />
                  </q-item-section>
                  <q-item-section avatar>
                    <q-img 
                      src="../assets/e.svg"
                      style="max-width: 30px; height: 30px;"
                      contain
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Todos</q-item-label> 
                    <q-icon name="info" style="font-size: 2em;" class="q-pa-xs lt-md"  @click="alert = true, rating = 'e'"/>
                    <q-item-label class="gt-sm" caption>Por lo general, el contenido es adecuado para todas las edades. Puede contener una cantidad mínima de violencia de caricatura, 
                      de fantasía o ligera, o uso poco frecuente de lenguaje moderado. </q-item-label>
                  </q-item-section>
                </q-item>
                
                <q-item tag="label" v-ripple>
                  <q-item-section avatar>
                    <q-radio v-model="rating" val="e10" color="primary" />
                  </q-item-section>
                  <q-item-section avatar>
                    <q-img 
                      src="../assets/E10plus.svg"
                      style="max-width: 30px; height: 30px;"
                      contain
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label >Todos +10</q-item-label>
                    <q-icon name="info" style="font-size: 2em;" class="q-pa-xs lt-md"  @click="alert = true, rating = 'e10'"/>
                    <q-item-label class="gt-sm" caption>El contenido es generalmente adecuado para mayores de 10 años. 
                      Puede contener más violencia de caricatura, de fantasía o ligera, lenguaje moderado o temas mínimamente provocativos. </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                  <q-item-section avatar>
                    <q-radio v-model="rating" val="teen" color="primary" />
                  </q-item-section>
                  <q-item-section avatar>
                    <q-img 
                      src="../assets/Teen.svg"
                      style="max-width: 30px; height: 30px;"
                      contain
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label >Adolescentes</q-item-label>
                    <q-icon name="info" style="font-size: 2em;" class="q-pa-xs lt-md"  @click="alert = true, rating = 'teen'"/>
                    <q-item-label class="gt-sm" caption>Por lo general, el contenido es adecuado para mayores de 13 años. Puede contener violencia, temas insinuantes, 
                      humor grosero, mínima cantidad de sangre, apuestas simuladas o uso poco frecuente de lenguaje fuerte. </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                  <q-item-section avatar>
                    <q-radio v-model="rating" val="mature" color="primary" />
                  </q-item-section>
                  <q-item-section avatar>
                    <q-img 
                      src="../assets/M.svg"
                      style="max-width: 30px; height: 30px;"
                      contain
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label >Maduro</q-item-label>
                    <q-icon name="info" style="font-size: 2em;" class="q-pa-xs lt-md"  @click="alert = true, rating = 'mature'"/>
                    <q-item-label class="gt-sm" caption>El contenido por lo general es apto para mayores de 17 años. Puede contener 
                      violencia intensa, sangre y derramamiento de sangre, contenido sexual o lenguaje fuerte. </q-item-label>
                  </q-item-section> 
                </q-item>
                <q-item tag="label" v-ripple>
                  <q-item-section avatar>
                    <q-radio v-model="rating" val="ao18" color="primary" />
                  </q-item-section>
                  <q-item-section avatar>
                    <q-img 
                      src="../assets/AO.svg"
                      style="max-width: 30px; height: 30px;"
                      contain
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label >Adultos únicamente</q-item-label>
                    <q-icon name="info" style="font-size: 2em;" class="q-pa-xs lt-md"  @click="alert = true, rating = 'ao18'"/>
                    <q-item-label class="gt-sm" caption>Contenido adecuado solo para adultos mayores de 18 años. Puede incluir escenas 
                      prolongadas de violencia intensa, contenido sexual gráfico o apuestas con moneda real. </q-item-label>
                  </q-item-section>
                </q-item>
                <!--<q-item tag="label" v-ripple>
                  <q-item-section avatar>
                    <q-radio v-model="rating" val="rp" color="primary" />
                  </q-item-section>
                  <q-item-section avatar>
                    <q-img 
                      src="../assets/RP.svg"
                      style="max-width: 30px; height: 30px;"
                      contain
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="gt-sm">Pendiente</q-item-label>
                    <q-icon name="info" style="font-size: 2em;" class="q-pa-xs lt-md"  @click="alert = true, rating = 'rp'"/>
                    <q-item-label class="gt-sm" caption>Si no sabes la calificación de tu aplicación</q-item-label>
                  </q-item-section>
                </q-item>!-->
              </q-list>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-6 offset-sm-3"> 
              <div class="text-subtitle1 text-weight-bold text-center" >
                {{$t('description')}}
              </div>
              <q-input
                v-model="textareaDescription"
                outlined
                type="textarea"
                hint="Escribe una descripción para tu app"
                :rules="[ val => val.length >= 1 || 'Debes escribir algo']" 
              />
              </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-6 offset-sm-3 text-center">
              <q-stepper-navigation>
                <template  v-if="selectTags.length > 0 && group.length != 0 && textareaDescription !== '' && rating !== ''" > 
                  <q-btn @click="$refs.stepper.next()" color="primary" :label="$t('continue')" >
                  </q-btn>
                </template>
                <template  v-if="selectTags.length <= 0 || group.length == 0 || textareaDescription == '' || rating == ''" >
                  <q-btn  class="bg-red-5 text-white" :label="$t('completeallrequiredfields')" ></q-btn>
                </template>
                <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" :label="$t('back')" class="q-ml-sm" />
              </q-stepper-navigation>
            </div> 
          </div>   
        </q-step>
        <q-step
          :name="3"
          title="Paso 3"
          icon="assignment"
          :done="step > 3"
          style="min-height: 200px;"
        >
          <div class="row">
            <div class="col-xs-12 col-sm-4 offset-sm-4 text-center">
              <div class="text-subtitle1 text-weight-bold text-center" >
                {{$t('usernameGit')}}
              </div>
              <q-input outlined bottom-slots v-model="nameGit" type="url" :label="$t('usernameGit')+'*'" hint="JorgeVasquez">
                <template v-slot:prepend>
                  <q-icon name="link" />
                </template>
                <template v-slot:append>
                  <q-icon name="close" @click="nombre = ''" class="cursor-pointer" />
                </template>
              </q-input>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4 offset-sm-4 text-center">
              <div class="text-subtitle1 text-weight-bold text-center" >
                {{$t('Repositoryname')}}
              </div>
              <q-input outlined bottom-slots v-model="repoGit" type="url" :label="$t('Repositoryname')+'*'" hint="APICSharp">
                <template v-slot:prepend>
                  <q-icon name="link" />
                </template>
                <template v-slot:append>
                  <q-icon name="close" @click="nombre = ''" class="cursor-pointer" />
                </template>
              </q-input>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4 offset-sm-4 text-center">
              <div class="text-subtitle1 text-weight-bold text-center" >
                {{$t('documentation')}}
              </div>
              <q-input
                v-model="textareaDocumentation"
                outlined
                type="textarea"
                hint="Escribe la documentación o deja un link de descarga"
                :rules="[ val => val.length >= 1 || 'Debes escribir algo']" 
              />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4 offset-sm-4 text-center">
              <q-stepper-navigation>
                <template  v-if="nameGit !== '' && textareaDocumentation !== '' && repoGit !== ''" >
                  <q-btn @click="$refs.stepper.next()" color="primary" :label="$t('continue')" ></q-btn>
                </template>
                <template  v-if="nameGit == '' || textareaDocumentation == '' || repoGit == ''" >
                    <q-btn  class="bg-red-5 text-white"  :label="$t('completeallrequiredfields')" ></q-btn>
                </template>
                <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" :label="$t('back')" class="q-ml-sm" />
              </q-stepper-navigation>
            </div>
          </div>		      
        </q-step>
        <q-step
          :name="4"
          title="Paso 4"
          icon="add_comment"
          style="min-height: 200px;"
        >
          <div class="text-subtitle1 text-weight-bold text-center" >
            {{$t('appname')}}
            <q-space/>
            <div class="text-subtitle1 text-weight-light text-center" >
              {{name}}
            </div>
          </div>
          <div class="text-subtitle1 text-weight-bold text-center"  >
            {{$t('appimage')}}
            <q-space/>
            <div v-if="image != ''" class="text-subtitle1 text-weight-light text-center"  >
              <q-img
                v-bind:src="image"
                style="width: 300px"
              >
              </q-img>
            </div>
            <div v-if="image == ''" class="text-subtitle1 text-weight-light text-center"  >
              No adjuntaste imagen de portada
            </div>
          </div>
          <div class="text-subtitle1 text-weight-bold text-center" >
            {{$t('categories')}}
            <q-space/>
            <div class="text-subtitle1 text-weight-light text-center" >
              <div v-for="(tag, $index) in selectTags" :key="$index">
                {{tag}}
              </div>
            </div>
          </div>
          <div class="text-subtitle1 text-weight-bold text-center" >
            {{$t('Repositoryname')}}
            <q-space/>
            <div class="text-subtitle1 text-weight-light text-center"  >
              {{nameGit}} {{repoGit}}
            </div>
          </div>
          <div class="text-subtitle1 text-weight-bold text-center"  >
            {{$t('platform')}}
            <q-space/>
            <div class="text-subtitle1 text-weight-light text-center"  >
              <div v-for="(group, $index) in group" :key="$index">
                {{group}}
              </div>
            </div>
          </div>
           <q-stepper-navigation>
            <q-btn @click="upload()"  color="primary" :label="$t('upload')"/>
            <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" :label="$t('back')" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>
        <template v-slot:message>
          <q-banner v-if="step === 1" class="bg-red-5  text-white q-px-lg">
            {{$t('step1text')}}
          </q-banner>
          <q-banner v-else-if="step === 2" class="bg-red-5 text-white q-px-lg">
            {{$t('step2text')}}
          </q-banner>
          <q-banner v-else-if="step === 3" class="bg-red-5 text-white q-px-lg">
            {{$t('step3text')}}
          </q-banner>
          <q-banner v-else-if="step === 4" class="bg-red-5 text-white q-px-lg">
            {{$t('step4text')}}
          </q-banner>
        </template>
      </q-stepper>
    </template>
    <template v-if="!checkCurrentLogin()">
      <h4 class="text-center">Inicia sesión para subir tu aplicación!</h4>
    </template>
    <q-dialog v-model="alert">
      <q-card v-if="rating== 'e'">
        <q-card-section>
          <div class="text-h6"> Todos </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
           Por lo general, el contenido es adecuado para todas las edades. Puede contener una cantidad mínima de violencia de caricatura, 
                      de fantasía o ligera, o uso poco frecuente de lenguaje moderado.
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
      <q-card v-else-if="rating== 'e10'">
        <q-card-section>
          <div class="text-h6"> Todos +10</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
           El contenido es generalmente adecuado para mayores de 10 años. 
                      Puede contener más violencia de caricatura, de fantasía o ligera, lenguaje moderado o temas mínimamente provocativos.
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
      <q-card v-else-if="rating== 'teen'">
        <q-card-section>
          <div class="text-h6"> Adolescentes </div>
        </q-card-section>
        <q-card-section  class="q-pt-none">
           Por lo general, el contenido es adecuado para mayores de 13 años. Puede contener violencia, temas insinuantes, 
                      humor grosero, mínima cantidad de sangre, apuestas simuladas o uso poco frecuente de lenguaje fuerte.
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
      <q-card v-else-if="rating== 'mature'">
        <q-card-section>
          <div class="text-h6"> Maduro </div>
        </q-card-section>
        <q-card-section  class="q-pt-none">
           El contenido por lo general es apto para mayores de 17 años. Puede contener 
                      violencia intensa, sangre y derramamiento de sangre, contenido sexual o lenguaje fuerte.
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
      <q-card v-else-if="rating== 'ao18'">
         <q-card-section>
          <div class="text-h6"> Adultos únicamente </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
           Contenido adecuado solo para adultos mayores de 18 años. Puede incluir escenas 
                      prolongadas de violencia intensa, contenido sexual gráfico o apuestas con moneda real.
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
      <!--<q-card v-else-if="rating== 'rp'">
        <q-card-section>
          <div class="text-h6"> Pendiente </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
           Si no sabes la calificación de tu aplicación.
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card> !-->
        
    </q-dialog>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      step: 1,
      image: '',
      video: '',
      name: '',
      textareaDescription: '',
      textareaDocumentation: '',
      nameGit: '',
      repoGit: '',
      selectTags: [],
      tagsAux: null,
      alert: false,
      tags: [],
      rating: '',
      filterOptions: this.tags,
      group: [],
      idApp: 0,
      options: [
        { label: 'Windows', value: 'Windows', color: 'blue' },
        { label: 'Android', value: 'Android', color: 'green' }
      ]
    }
  },
  computed: {
    ...mapGetters({ currentUser: 'currentUser' }),
  },
  updated () {
    this.checkCurrentLogin()
  },
  created () {
    this.$axios.get("/api/v1/tags/")
      .then(response => { this.tagsAux = response.data
        var i;
        for (i = 0; i < this.tagsAux.length; i++) { 
          this.tags[i]= this.tagsAux[i].name
        }
      }).catch(() => { alert('Something went wrong!') })
    this.checkCurrentLogin()
  },
  methods: {
    checkCurrentLogin () {
      if (!this.currentUser) {
        return false
      }
      else {
        return true
      }
    },
    upload () {
      if (this.currentUser && localStorage.token != null) {
        var github = this.nameGit.concat("/",this.repoGit)
        if (this.group.length > 1) {
          var os = this.group[0].concat(" & ",this.group[1])
        }
        else{
          var os = this.group[0]
        }
        var data = {"name": this.name, "description": this.textareaDescription, "git_url": github, "video_url":this.video, "documentation":this.textareaDocumentation, "image_url": this.image, "os": os,"user_id": this.currentUser.id, "rating_app": this.rating}
        var json = JSON.stringify(data);
        this.$axios.post("/api/v1/apps",json)
        .then(response => {
          if (response.data.status == 102) {
            this.showNotifErrorRepository("bottom")
          }
          else {
            this.showNotif("bottom","primary")
            this.idApp = response.data.id
            for (var i = 0; i < this.selectTags.length; i++) {
              var data = {"name": this.selectTags[i]}
              var json = JSON.stringify(data);
              this.$axios.post("/api/v1/apps/"+this.idApp+"/tags",json)
              .then(response => {       
              })
              .catch(error => {
              }) 
            } 
          }
                  
        })
        .catch(error => {
          this.showNotifError("bottom")
        })
        
      }
      else {
        this.showNotifError("bottom")
      }
      
    },
    createValue (val, done) {
      if (val.length > 2) {
        if (!this.tags.includes(val)) {
          done()
        }
      }
    },
    filterFn (val, update) {
      update(() => {
        if (val === '') {
          this.filterOptions = this.tags
        }
        else {
          const needle = val.toLowerCase()
          this.filterOptions = this.tags.filter(
            v => v.toLowerCase().indexOf(needle) > -1
          )
        }
      })
    },
    showNotif (position,color) {
      this.$q.notify({
        message: 'Gracias por tu aporte, en breve sera publicado !',
        position,
        color
      })
    },
    showNotifError (position) {
      this.$q.notify({
        message: 'No se pudo completar la solicitud.',
        position,
        type: 'negative',
        progress: true,
      })
    },
    showNotifErrorRepository (position) {
      this.$q.notify({
        message: 'Repositorio o release no encontrado.',
        position,
        type: 'negative',
        progress: true,
      })
    },
    
  }
}
</script>
<style type="text/css">
.q-chip {
   
   background: #00d999;
   
}

</style>