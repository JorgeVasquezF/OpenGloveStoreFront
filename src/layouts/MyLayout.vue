<template>
  <div class="my-font">
    <q-layout view="hHh lpR fFf" class="bg-twitch text-white">
      <q-header elevated class="bg-primary text-white q-gutter-y-md" height-hint="98">
        <q-toolbar>
          <q-toolbar-title >
            <q-avatar>
              <img src="https://i.imgur.com/20FU3lI.png">
            </q-avatar>
            <a class="home" href="/"> OpenGlove </a>       
          </q-toolbar-title>
          <!-- Buscador !-->
          <multiselect class="gt-sm" style="max-width: 400px" v-model="selectedApps" id="ajax2" label="name" 
          track-by="code" placeholder="Tipea para buscar" selectLabel="" open-direction="bottom" :options="appsFind" :multiple="true" 
          :searchable="true" :loading="isLoading" :internal-search="false" :clear-on-select="true" :close-on-select="false" 
          :options-limit="300" :limit="3" :limit-text="limitText" :max-height="600" :show-no-results="false" :hide-selected="true" 
          @search-change="asyncFind" @select="onSelectSearch" @remove="remove">             
            <template slot="clear" slot-scope="props">
              <div class="multiselect__clear" v-if="selectedApps.length" @mousedown.prevent.stop="clearAll(props.search)"></div>
            </template><span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
          </multiselect>
          <!-- MENU DE BARRA PARA ESCRITORIO !-->
          <q-tabs align="center" class="gt-xs">
            <q-route-tab to="/" label="Home" icon="home" />
            <q-route-tab to="/store" label="Store" icon="store" />
            <q-route-tab to="/tool" label="Tools" icon="build"/>
            <q-route-tab class="text-black" v-if="currentUser" to="/upload" label="Up App" icon="cloud_upload"/>
          </q-tabs>
          <!-- BOTONES DE MENU PARA ESCRITORIO !--> 
            <div class="q-pa-md q-gutter-sm gt-xs">
              <template v-if="!currentUser">
                <q-btn style="background: #424242 ; color: white" label="Iniciar Sesión" @click="login = true"/>
                <q-btn style="color: white" color="deep-orange" label="Registarse" @click="register = true"/>
              </template>
              <template v-if="currentUser">
                <q-btn style="color: white" color="deep-orange" label="Salir" @click="logout()"/>
              </template>
            </div>
          <!-- BOTONES DE MENU PARA MOBILE !-->   
          <div class="q-pa-md q-gutter-sm lt-sm" >
            <template v-if="!currentUser">
              <q-btn id="login"
                round
                dense
                color=#0f0e11
                size=sm
                icon="input"
                @click="login = true"
              />
              <q-btn dense size=sm style="color: white" color="deep-orange" label="Registrarse" @click="register = true"/>
            </template>
            <template v-if="currentUser">
                <q-btn style="color: white" color="deep-orange" label="Salir" @click="logout()"/>
            </template>
          </div>
        </q-toolbar>
        <!-- MENU DE BARRA PARA MOBILE !-->
        <q-tabs  align="center" class="lt-sm" style="margin-top: 0px;">
            <q-route-tab to="/" label="Home" icon="home"/>
            <q-route-tab to="/store" label="Store" icon="store"/>
            <q-route-tab to="/tool" label="Tools" icon="build"/>
            <q-route-tab v-if="currentUser" class="text-black" to="/upload" label="Up App" icon="cloud_upload"/>
        </q-tabs>
        
          <multiselect class="lt-md center" style="max-width: 400px; margin-bottom: 5px;" 
          v-model="selectedApps" id="ajax" label="name" selectLabel="" track-by="code" placeholder="Tipea para buscar" 
          open-direction="bottom" :options="appsFind" :multiple="true" :searchable="true" :loading="isLoading" 
          :internal-search="false" :clear-on-select="false" :close-on-select="true" :options-limit="300" 
          :limit="3" :limit-text="limitText" :max-height="600" :show-no-results="false" :hide-selected="true" 
          @search-change="asyncFind" @select="onSelectSearch" @remove="remove">            
            <template slot="clear" slot-scope="props">
              <div class="multiselect__clear" v-if="selectedApps.length" @mousedown.prevent.stop="clearAll(props.search)"></div>
            </template><span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
          </multiselect>
      
      </q-header>
      <q-drawer v-model="left" side="left" overlay behavior="desktop" elevated>
        <!-- drawer content -->
      </q-drawer>
      <!-- DIALOG FORGOT PASSWORD -->
      <q-dialog v-model="forgotPassword">
         <q-card style="width: 700px; max-width: 80vw; color: #00d999" class="bg-twitch my-font">
           <q-card-section>
            <div class="text-h6 text-center">Recuperar password</div>
            <div class="text-subtitle2 text-white">Ingresa tu email, recibiras un código que luego tendras que ingresar aquí.</div>
          </q-card-section>
          <q-card-section>
            <q-form
              @submit="recoveryPassword"
              class="q-gutter-md"
            >
              <q-input
                dark
                filled
                type="email"
                v-model="recoveryEmail"
                label="Email *"
                hint="example@example.com"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Por favor escribe un email']"
              >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
              </q-input>
              <q-card-actions align="center">
            <q-btn flat label="Tengo el código" color="primary" @click="resetPassword = true, forgotPassword = false"/>
          </q-card-actions>
              <div>
                <q-btn label="Solicitar código" type="submit" color="primary"/>
              </div> 
            </q-form>     
          </q-card-section>
         </q-card>
      </q-dialog>
      <!-- DIALOG RESET PASSWORD -->
      <q-dialog v-model="resetPassword">
         <q-card style="width: 700px; max-width: 80vw; color: #00d999" class="bg-twitch my-font">
           <q-card-section>
            <div class="text-h6 text-center">Cambiar password</div>
            <div class="text-subtitle2 text-white">Ingresa el código y la nueva password.</div>
          </q-card-section>
          <q-card-section>
            <q-form
              @submit="changePassword"
              class="q-gutter-md"
            >
              <q-input
                dark
                filled
                v-model="coding"
                label="Código *"
                hint="7891das20978cv"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Por favor escribe el código que recibiste']"
              >
                <template v-slot:prepend>
                  <q-icon name="power_input" />
                </template>
              </q-input>
              <q-input
                dark
                filled
                :type="!isPwd ? 'password' : 'text'"
                v-model="newPassword"
                label="Nueva Password *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Por favor escribe una nueva password']"
              >
              <template v-slot:prepend>
                <q-icon name="vpn_key" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility' : 'visibility_off'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
              </q-input>
              <q-card-actions align="center">
                <q-btn flat label="Solicitar Código" color="primary" @click="resetPassword = false, forgotPassword = true"/>
              </q-card-actions>
              <div>
                <q-btn label="Cambiar password" type="submit" color="primary"/>
              </div> 
            </q-form>     
          </q-card-section>
         </q-card>
      </q-dialog>
      <!-- DIALOG LOGIN -->
      <q-dialog v-model="login" persistent>
        <q-card style="width: 700px; max-width: 80vw; color: #00d999" class="bg-twitch my-font">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Inicia sesión</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup @click="password = '', email= ''"/>
          </q-card-section>
          <q-card-section>
            <q-form
              @submit="loginUser"
              class="q-gutter-md"
            >
              <q-input
                dark
                filled
                type="email"
                v-model="email"
                label="Email *"
                hint="example@example.com"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Por favor escribe un email']"
              >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
              </q-input>
              <q-input
                dark
                filled
                :type="!isPwd ? 'password' : 'text'"
                v-model="password"
                label="Password *"
                lazy-rules
                :rules="[
                  val => val !== null && val !== '' || 'Por favor escribe una password'
                
                ]"
              >
              <template v-slot:prepend>
                <q-icon name="vpn_key" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility' : 'visibility_off'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
              </q-input>
              <div>
                <q-btn label="Ingresar" type="submit" color="primary"/>
              </div> 
            </q-form>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Olvide la password" color="primary" @click="login = false, forgotPassword=true" />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <!-- DIALOG REGISTER -->
      <q-dialog v-model="register" persistent>
        <q-card style="width: 700px; max-width: 80vw; color: #00d999" class="bg-twitch my-font">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Registarse</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup @click="passwordRegister = '', emailRegister= '', username= '' "/>
          </q-card-section>
          <q-card-section>
            <q-form
              @submit="registerUser"
              class="q-gutter-md"
            >
              <q-input
                dark
                filled
                type="username"
                v-model="username"
                label="Username *"
                hint="user12  "
                lazy-rules
                :rules="[ val => val && val.length > 3 || 'Por favor escribe un username']"
              >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
              </q-input>
              <q-input
                dark
                filled
                type="email"
                v-model="emailRegister"
                label="Email *"
                hint="example@example.com"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Por favor escribe un email']"
              >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
              </q-input>
              <q-input
                dark
                filled
                :type="!isPwd ? 'password' : 'text'"
                v-model="passwordRegister"
                label="Password *"
                lazy-rules
                :rules="[
                  val => val !== null && val !== '' || 'Por favor escribe una password'
                
                ]"
              >
              <template v-slot:prepend>
                <q-icon name="vpn_key" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility' : 'visibility_off'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
              </q-input>
              <div>
                <q-btn label="Registrar" type="submit" color="primary"/>
            
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="registerComplete">
        <q-card style="width: 700px; max-width: 80vw; color: #00d999" class="bg-twitch">
          <q-card-section>
            <div class="text-h6 text-center">Registro completo</div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Ok" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>  
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { mapGetters } from 'vuex'
import { required, minLength, between, email, sameAs } from 'vuelidate/lib/validators'  
export default {
  data () {
    return {
      position: 'top',
      left: false,
      registerComplete: false,
      username: '',
      code: false,
      coding: '',
      emailRegister: '',
      passwordRegister: '',
      isPwdRegister: '',
      newPassword: '',
      resetPassword: false,
      forgotPassword: false,
      email: null,
      recoveryEmail: '',
      password: null,
      isPwd: '',
      login: false,
      register: false,
      busqueda: 0,
      appsFind: [],
      selectedApps: [],
      isLoading: false,
    }
  },
  components: {
    Multiselect
  },
  validations: {
    username: {
      required,
      minLength: minLength(4)
    },
    emailRegister: {
      required,
      email
    }
  },
  computed: {
    ...mapGetters({ currentUser: 'currentUser' })
  },
  methods: {
    loginUser () {
      this.$axios.post('/api/v1/auth', { user: this.email, password: this.password })
      .then(response => {
        this.loginSuccessful(response)
        this.notifyMessage("Ingresando","top",'positive')})
      .catch((e) => { 
        if(e.response.status === 401){
          this.notifyMessage(e.response.data.error.base[0],"bottom",'negative')
        }
        this.loginFailed()
        })  
    },
    registerUser () {
      this.$axios.post('/api/v1/users', { username: this.username, email: this.emailRegister, password: this.passwordRegister })
      .then(response => {
        this.register = false
        this.notifyMessage('Registro completado revisa tu email para confirmar el registro !',"center",'positive')
      })
      .catch(e => {
        if(e.response.status === 422){
          this.notifyMessage('Username o email ya registrados.',"bottom",'negative')
        }
      })
      
    },
    loginSuccessful (req) {
      if (!req.data.token) {
        this.loginFailed()
        return
      }
      this.error = false
      localStorage.token = req.data.token
      this.$router.push({ name: 'tool' });
      location.reload(true)
      
    },
    loginFailed () {
      this.error = 'Login failed!'
      delete localStorage.token
    },
    recoveryPassword () {
      this.$axios.post('/api/v1/password/forgot', { email: this.recoveryEmail })
      .then(response => {
        this.notifyMessage(response.data.status,"bottom",'positive')
      })
      .catch(e => {
          if(e.response.status === 404){ 
            this.notifyMessage(e.response.data.error,"bottom",'warning')
          }
      })  
    },
    changePassword () {
      this.$axios.post('/api/v1/password/reset', { email: this.recoveryEmail, token: this.coding, password: this.newPassword })
      .then(response => {
        this.notifyMessage(response.data.status,"bottom",'positive')
      })
      .catch(e => {
          if(e.response.status === 404){
            this.notifyMessage(e.response.data.error,"bottom",'negative')
          }
      })  
    },
    logout () {
      delete localStorage.token
      location.reload(true)
    },
    asyncFind (query) {
      this.isLoading = true
      var data = {"name": query}
      var json = JSON.stringify(data);
      this.$axios.post("/api/v1/apps/search",json)
      .then(response => {
        this.appsFind = Object.values(response.data)
        this.isLoading = false
      })
      .catch(() => { alert('Error carga busqueda') })
    },
    onSelectSearch (option) {
      this.$router.push({ path: `/aplication/${option.id}` });
    },
    notifyMessage (message, position, type) {
      this.$q.notify({
        type: type,
        message: message,
        position,
        progress: true,
      })
    },   
    remove () {
      this.busqueda = 0
    },
    limitText (count) {
      return `and ${count} other apps`
    },
  }
}
</script>

<style>
.bg-twitch {
    background: #0f0e11 !important;
}
#login {
  background: #0f0e11;
}

.center {
    margin: auto;
    width: 90%;
    padding-top: 4px;
  }

</style>

<style scoped>

.q-icon {
  color: #00d999;
}
.q-field__label {
  color: #00d999;
  }

.my-font {
  font-family: 'Sriracha-Regular';
}
.home{
    color: white;
    text-decoration:none;
}
  
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css">

</style>