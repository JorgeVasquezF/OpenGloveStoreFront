<template>
  <div>
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-primary text-white q-gutter-y-md" height-hint="98">
        <q-toolbar>
          <q-toolbar-title >
            <q-avatar>
              <img src="https://i.imgur.com/20FU3lI.png">
            </q-avatar>
            <a class="home" href="/"> OpenGlove </a>       
          </q-toolbar-title>
          <!-- MENU DE BARRA PARA ESCRITORIO !-->
          <q-tabs dense align="center" class="gt-xs">
            
            <q-route-tab to="/" :label="$t('home')" icon="fas fa-home" />
            <q-route-tab to="/#what_is" :label="$t('whatis')" icon="fas fa-allergies"/>
            <q-route-tab to="/#team" :label="$t('team')"  icon="fas fa-users"/>
            <q-route-tab to="/#media" label="Media" icon="fas fa-images"/>
            <q-route-tab to="/#publications" :label="$t('publications')" icon="fas fa-bookmark"/>
            <q-route-tab to="/store" :label="$t('store')" icon="fas fa-store"/>
            <q-route-tab to="/tool" :label="$t('dev')" icon="fas fa-tools"/>
            <q-route-tab class="text-black" v-if="currentUser" to="/upload" :label="$t('upload')" icon="fas fa-cloud-upload-alt"/>
          </q-tabs>
          <!-- BOTONES DE MENU PARA ESCRITORIO !--> 
            <div class="q-pa-md q-gutter-sm gt-sm">
              <template v-if="!currentUser">
                <q-btn style="background: #424242 ; color: white" :label="$t('signin')" @click="login = true"/>
                <q-btn style="color: white" color="deep-orange" :label="$t('signup')" @click="register = true"/>
              </template>
              <template v-if="currentUser">
                <q-btn style="color: white" color="deep-orange" :label="$t('signout')" @click="logout()"/>
              </template>
              <q-btn flat round
                @click="$q.dark.toggle()"
                :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
              />
              <q-btn-toggle 
                flat
                color="white"
                toggle-color="black"
                v-model="locale"
                @input="setLocale"
                :options="[{ label: 'EN', value: 'en-us'},
                          { label: 'ES', value: 'es'}]" />
            </div>
          <!-- BOTONES DE MENU PARA MOBILE !-->   
          <div class="q-pa-md q-gutter-sm lt-md" >
            <template>
              <q-btn color="deep-orange" label="Account">
                <q-menu class="lt-sm"
                  auto-close
                  anchor="bottom left"
                  self="top left">
                  <div class="row no-wrap q-pa-md">
                    <div class="column">
                      <div class="text-h6 q-mb-md">Settings</div>
                        <q-btn flat round
                          @click="$q.dark.toggle()"
                          :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
                        />
                        <q-btn-toggle 
                          flat
                          toggle-color="red"
                          v-model="locale"
                          @input="setLocale"
                          :options="[{ label: 'EN', value: 'en-us'},
                                    { label: 'ES', value: 'es'}]" />
                    </div>
                    <div class="column items-center">
                      <div v-if="currentUser" class="text-subtitle1 q-mt-md q-mb-xs">{{currentUser.username}}</div> 
                      <q-btn  v-if="currentUser"
                        color="red"
                        label="Logout"
                        push
                        size="sm"
                        v-close-popup
                        @click="logout()"
                      />
                      <template v-if="!currentUser">
                        <q-btn push size="sm"  :label="$t('signin')" @click="login = true"/>
                        <q-btn push size="sm"  :label="$t('signup')" @click="register = true"/>
                      </template>
                    </div>
                  </div>
                </q-menu>
              </q-btn>
            </template>
              <!--<q-btn id="login"
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
            </template>!-->
            
          </div>
        </q-toolbar>
        <!-- MENU DE BARRA PARA MOBILE !-->
        <q-tabs  align="center" class="lt-sm" style="margin-top: 0px;">
            <q-route-tab to="/" :label="$t('home')" icon="home"/>
            <q-route-tab to="/store" :label="$t('store')" icon="store"/>
            <q-route-tab to="/tool" :label="$t('dev')" icon="build"/>
            <q-route-tab v-if="currentUser" class="text-black" to="/upload" :label="$t('upload')" icon="cloud_upload"/>
        </q-tabs>
      </q-header>
      <q-drawer v-model="left" side="left" overlay behavior="desktop" elevated>
        <!-- drawer content -->
      </q-drawer>
      <!-- DIALOG FORGOT PASSWORD -->
      <q-dialog v-model="forgotPassword">
         <q-card style="width: 700px; max-width: 80vw; color: #00d999" class="bg-twitch">
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
         <q-card style="width: 700px; max-width: 80vw; color: #00d999" class="bg-twitch">
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
        <q-card style="width: 700px; max-width: 80vw; color: #00d999">
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
        <q-card style="width: 700px; max-width: 80vw; color: #00d999" class="bg-twitch">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Registrarse</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup @click="passwordRegister = '', emailRegister= '', username= '' "/>
          </q-card-section>
          <q-card-section>
            <q-form
              @submit="registerUser"
              class="q-gutter-md"
            >
              <q-input
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
      <q-footer elevated class="bg-white text-white">
        <div class="row justify-center">
          <div class="col-xs-3 col-sm-3 text-center">
            <q-img
          src="../assets/logoNuevo.png"
          :ratio="16/9"
          style="max-width: 600px; height: 60px;"
          contain
        />
        </div>
        <div class="col-xs-3 col-sm-3 text-center gt-xs">
            <div class="text-h6 text-black"> Contact</div>
            <div class="text-subtitle2 text-black"> contacto@openglove.org</div>   
        </div>
        <div class="col-xs-3 col-sm-3 text-center">
            <q-img
          src="../assets/usach.png"
          :ratio="16/9"
          style="max-width: 600px; height: 60px;"
          contain
        />
        </div>
        <div class="col-xs-12 col-sm-3 text-center lt-sm">
            <div class="text-subtitle2 text-black"> Contact</div>
            <div class="text-caption text-black"> contacto@openglove.org</div>   
        </div>  
        
        </div>
      </q-footer>
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
      locale: this.$q.lang.isoName,
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
    setLocale (locale) {
      console.log(locale)
      // cambiamos Vue-i18n locale 
      this.$i18n.locale = locale
      // Cargar el pack de idioma de Quasar de forma dinámica
      import(`quasar/lang/${locale}`).then(({ default: messages }) => {
        this.$q.lang.set(messages)
      })
    },
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
    notifyMessage (message, position, type) {
      this.$q.notify({
        type: type,
        message: message,
        position,
        progress: true,
      })
    },   
  }
}
</script>

<style>
/*.bg-twitch {
    background: #0f0e11 !important;
}*/
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


.home{
    color: white;
    text-decoration:none;
}
  
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css">

</style>