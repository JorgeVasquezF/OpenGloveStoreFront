<template>
	<div>
  	<div class="row">
      <div class="col-xs-12 col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
        <div class="q-pa-md">
          <q-carousel
            arrows           
            animated      
            v-model="slide"
            height="700px"
            class="gt-xs"
            infinite
            swipeable
            autoplay
          >
            <q-carousel-slide v-for="(app, $index) in aplications" :key="$index" v-if="$index < 3"
            v-bind:name="$index + 1">
              <a v-bind:href="'#/aplication/'+ app.id">
              <q-img v-if="app.image_url !== ''" 
                :ratio="16/9"
                class="absolute-full" 
                v-bind:src="app.image_url" />
              <q-img v-else
                :ratio="16/9"
                class="absolute-full" 
                src="../assets/header-glove.jpg" />
              <div class="absolute-bottom custom-caption" style="background-color: rgba(0, 0, 0, 0.79);">
                <div class="text-h6">{{ app.name }}</div>          
              </div>
              </a>
              <div v-if="app.published == false">
                <q-badge color="red" style="position: absolute;">
                  {{$t('unverified')}} <q-icon name="warning" color="white" class="q-ml-xs" />
                </q-badge>
              </div>
              <div v-else-if="app.published == true">
                <q-badge color="green" style="position: absolute;">
                  {{$t('verified')}} <q-icon name="check" color="white" class="q-ml-xs" />
                </q-badge>
              </div>
            </q-carousel-slide>
          </q-carousel>
          <q-carousel  
            arrows
            animated
            v-model="slide"
            height="200px"
            class="lt-sm"
            infinite
            autoplay     
            swipeable
          >
            <q-carousel-slide v-for="(app, $index) in aplications" :key="$index" v-if="$index < 3"
            v-bind:name="$index +1">
              <a v-bind:href="'#/aplication/'+ app.id">
              <q-img v-if="app.image_url !== ''" 
                :ratio="16/9"
                class="absolute-full" 
                v-bind:src="app.image_url" />
              <q-img v-else
                :ratio="16/9"
                class="absolute-full" 
                src="../assets/header-glove.jpg" />
              <div class="absolute-bottom custom-caption" style="background-color: rgba(0, 0, 0, 0.79);">
                <div class="text-h6">{{ app.name }}</div>
              </div>
              </a>
              <div v-if="app.published == false">
                <q-badge color="red" style="position: absolute;">
                  {{$t('unverified')}} <q-icon name="warning" color="white" class="q-ml-xs" />
                </q-badge>
              </div>
              <div v-else-if="app.published == true">
                <q-badge color="green" style="position: absolute;">
                  {{$t('verified')}} <q-icon name="check" color="white" class="q-ml-xs" />
                </q-badge>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
    <div class="row" id="what_is">
      <div class="q-ma-md col-sm-6 offset-sm-3">
        <div class="text-h3 text-center" > {{$t('introduce')}}

          <span class="text-primary"> OpenGlove  </span> 
        </div>
        <q-separator class="q-ma-md" color="primary" inset />
      </div>
      <div class="q-pa-md q-mb-md col-xl-6 offset-xl-3">
        <div class="text-body1 text-center"> {{$t('whatisopenglove')}}</div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-4 offset-sm-2 col-md-4 offset-md-2 col-lg-2 offset-lg-2">
        <div class="q-pa-md">
          <div class="q-gutter-md row" style="place-content: center;">
            <q-card style="max-width: 250px">
              <q-card-section class="text-center">
                <q-icon name="settings" style="color: #00d999; font-size: 4.4em;" />
                <div class="text-h6">{{$t('constructiontitle')}}</div>
                
              </q-card-section>
              <q-separator inset />
              <q-card-section>
                <div class="text-body1">{{$t('constructiontext')}}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-4 col-md-4 offset-md-0 col-lg-2">
        <div class="q-pa-md">
          <div class="q-gutter-md row" style="place-content: center;">
            <q-card style="max-width: 250px">
              <q-card-section class="text-center">
                <q-icon name="fas fa-chart-line" style="color: #00d999; font-size: 4.4em;" />
                <div class="text-h6">{{$t('designflex')}}</div>
              </q-card-section>
              <q-separator inset />
              <q-card-section>
                <div class="text-body1">{{$t('designflextext')}}</div>
                
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-4 col-sm-4 offset-sm-2 offset-md-2 col-lg-2 offset-lg-0">
        <div class="q-pa-md">
          <div class="q-gutter-md row" style="place-content: center;">
            <q-card style="max-width: 250px">
              <q-card-section class="text-center">
                <q-icon name="fas fa-gamepad" style="color: #00d999; font-size: 4.4em;" />
                <div class="text-h6">{{$t('readyintegration')}}</div>
              </q-card-section>
              <q-separator inset />
              <q-card-section>
                <div class="text-body1">{{$t('readyintegrationtext')}}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-4 col-sm-4 offset-md-0 col-lg-2">
        <div class="q-pa-md">
          <div class="q-gutter-md row" style="place-content: center;">
            <q-card style="max-width: 250px">
              <q-card-section class="text-center">
                <q-icon name="fab fa-github" style="color: #00d999; font-size: 4.4em;" />
                <div class="text-h6">{{$t('multipletools')}}</div>
              </q-card-section>
              <q-separator inset />
              <q-card-section>
                <div class="text-body1">{{$t('multipletoolstext')}}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-lg-4 offset-lg-2 q-pa-xl">
        <q-img
          src="../assets/about-glove.jpg"
          :ratio="1"
          style="max-width: 800px; height: 490px;"
          
        />
      </div>
      <div class="col-xs-12 col-lg-4 q-pa-xl">
        <div v-if="this.$q.lang.isoName == 'en-us'" class="text-h3 text-center"> 
          <span  class="col-xs-12 text-primary"> OpenGlove  </span> 
          purpose
        </div>
        <div v-if="this.$q.lang.isoName == 'es'" class="text-h3 text-center">
          Propósito de
          <span  class="col-xs-12 text-primary"> OpenGlove  </span> 
          
        </div>
        <q-separator class="q-ma-md" color="primary" inset />
        <div class="text-body1" v-html="$t('purpose')"></div>
      </div>
    </div>
    <div class="row justify-center" id="team">
      <div class="col-12 col-md-6">
        <div class="text-h3 text-center q-pt-lg">
          {{$t('MeetOurTeam')}}
        </div>
        <q-separator class="q-ma-md" color="primary" inset />
        <div class="text-subtitle1 text-center">
          {{$t('TeamDefinition')}}
        </div>
      </div>
      
    </div>
    <div class="row justify-center">
      <div class="col-12 col-md-2 q-pa-md text-center">
        <q-avatar  size="150px" font-size="100px" color="black" text-color="white" icon="fas fa-user-tie" /> 
        <div class="text-h6">
          Roberto González-Ibanez
        </div>
        <div class="text-subtitle1">
          {{$t('projectDirect')}}
        </div>       
      </div> 
      <div class="col-12 col-md-2 q-pa-md text-center">
        <q-avatar size="150px" font-size="100px" color="primary" text-color="white" icon="fas fa-user-tie" /> 
        <div class="text-h6 text-center">
          Rodrigo Monsalve
        </div> 
        <div class="text-subtitle1">
          {{$t('developerAPILL')}}
        </div>     
      </div>
      <div class="col-12 col-md-2 q-pa-md text-center">
        <q-avatar size="150px" font-size="100px" color="black" text-color="white" icon="fas fa-user-tie" /> 
        <div class="text-h6 text-center">
          Sebastián Meneses
        </div>
        <div class="text-subtitle1">
          {{$t('developerSDKWindows')}}
        </div>       
      </div>
      <div class="col-12 col-md-2 q-pa-md text-center">
        <q-avatar size="150px" font-size="100px" color="primary" text-color="white" icon="fas fa-user-tie" /> 
        <div class="text-h6 text-center">
          Esteban Gaete
        </div>
        <div class="text-subtitle1">
          {{$t('collaborator')}}
        </div>       
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12 col-md-2 q-pa-md text-center">
        <q-avatar  size="150px" font-size="100px" color="black" text-color="white" icon="fas fa-user-tie" /> 
        <div class="text-h6">
          Rodrigo Cerda
        </div>
        <div class="text-subtitle1">
          Pendiente
        </div>       
      </div> 
      <div class="col-12 col-md-2 q-pa-md text-center">
        <q-avatar size="150px" font-size="100px" color="primary" text-color="white" icon="fas fa-user-tie" /> 
        <div class="text-h6 text-center">
          Israel Martínez
        </div> 
        <div class="text-subtitle1">
          {{$t('developerSDKAndroid')}}
        </div>     
      </div>
      <div class="col-12 col-md-2 q-pa-md text-center">
        <q-avatar size="150px" font-size="100px" color="black" text-color="white" icon="fas fa-user-tie" /> 
        <div class="text-h6 text-center">
          Jorge Vásquez
        </div>
        <div class="text-subtitle1">
          {{$t('storeDeveloper')}}
        </div>       
      </div>
      <div class="col-12 col-md-2 q-pa-md text-center">
        <q-avatar size="150px" font-size="100px" color="primary" text-color="white" icon="fas fa-user-tie" /> 
        <div class="text-h6 text-center">
          Natalia Morales
        </div>
        <div class="text-subtitle1">
          Pendiente
        </div>       
      </div>
    </div>
    <div class="row" id="media">
      <div class="col-xs-12 col-md-6 offset-md-3">
        <div class="q-ma-md col-xl-6 offset-xl-3">
          <div class="text-h3 text-center"> 
            Media  
          </div>
          <q-separator class="q-ma-md" color="primary" inset />
        </div>
        <div class="q-pa-md q-mb-md col-xl-6 offset-xl-3">
          <div class="text-body1 text-center"> {{$t('media')}}</div>
        </div>
        <div class="q-pa-md gt-xs">
          <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            navigation
            padding
            arrows
            height="300px"
            class="shadow-2 rounded-borders"
          >
            <q-carousel-slide :name="1" class="column no-wrap">
              <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img contain class="rounded-borders col-6 full-height" src="../assets/guante-1.jpg" >
                  <div class="absolute-bottom text-subtitle1 text-center">
                    Prototype 1
                  </div>
                </q-img>
                <q-img contain class="rounded-borders col-6 full-height" src="../assets/guante-2.jpg" >
                  <div class="absolute-bottom text-subtitle1 text-center">
                    Prototype 1
                  </div>
                </q-img>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
              <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img contain class="rounded-borders col-6 full-height" src="../assets/guante-3.jpg" >
                  <div class="absolute-bottom text-subtitle1 text-center">
                    Prototype 2
                  </div>
                </q-img>
                <q-img contain class="rounded-borders col-6 full-height" src="../assets/guante-4.jpg" >
                  <div class="absolute-bottom text-subtitle1 text-center">
                    Prototype 2
                  </div>
                </q-img>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap">
              <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img contain class="rounded-borders col-6 full-height" src="../assets/guante-5.jpg" >
                  <div class="absolute-bottom text-subtitle1 text-center">
                    Prototype 3
                  </div>
                </q-img>
                <q-img contain class="rounded-borders col-6 full-height" src="../assets/guante-6.jpg" >
                  <div class="absolute-bottom text-subtitle1 text-center">
                    Prototype 3
                  </div>
                </q-img>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="4" class="column no-wrap">
              <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img contain class="rounded-borders col-6 full-height" src="../assets/guante-7.jpg" >
                  <div class="absolute-bottom text-subtitle1 text-center">
                    Final Prototype
                  </div>
                </q-img>
                <q-img contain class="rounded-borders col-6 full-height" src="../assets/guante-8.jpg" >
                  <div class="absolute-bottom text-subtitle1 text-center">
                    Final Prototype
                  </div>
                </q-img>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <div class="q-pa-md lt-sm">
          <div class="q-col-gutter-md row items-start">
            <div class="col-xs-12">
              <q-img
                src="../assets/guante-1.jpg"
                style="width: 100%"
              >
                <div class="absolute-bottom text-subtitle1 text-center">
                  Prototype 1
                </div>
              </q-img>
            </div>
            <div class="col-xs-12">
              <q-img
                src="../assets/guante-2.jpg"
                style="width: 100%"
              >
                <div class="absolute-bottom text-subtitle1 text-center">
                  Prototype 1
                </div>
              </q-img>
            </div>
            <div class="col-xs-12">
              <q-img
                src="../assets/guante-3.jpg"
                style="width: 100%"
              >
                <div class="absolute-bottom text-subtitle1 text-center">
                  Prototype 2
                </div>
              </q-img>
            </div>
            <div class="col-xs-12">
              <q-img
                src="../assets/guante-4.jpg"
                style="width: 100%"
              >
                <div class="absolute-bottom text-subtitle1 text-center">
                  Prototype 2
                </div>
              </q-img>
            </div>
            <div class="col-xs-12">
              <q-img
                src="../assets/guante-5.jpg"
                style="width: 100%"
              >
                <div class="absolute-bottom text-subtitle1 text-center">
                  Prototype 3
                </div>
              </q-img>
            </div>
            <div class="col-xs-12">
              <q-img
                src="../assets/guante-6.jpg"
                style="width: 100%"
              >
                <div class="absolute-bottom text-subtitle1 text-center">
                  Prototype 3
                </div>
              </q-img>
            </div>
            <div class="col-xs-12">
              <q-img
                src="../assets/guante-7.jpg"
                style="width: 100%"
              >
                <div class="absolute-bottom text-subtitle1 text-center">
                  Final Prototype
                </div>
              </q-img>
            </div>
            <div class="col-xs-12">
              <q-img
                src="../assets/guante-8.jpg"
                style="width: 100%"
              >
                <div class="absolute-bottom text-subtitle1 text-center">
                  Final Prototype
                </div>
              </q-img>
            </div>  
          </div>
        </div>
      </div>
    </div>
    <div class="row" id="publications">
      <div class="col-xs-12 col-md-8 offset-md-2">
        <div class="q-px-lg q-pb-md">
          <q-timeline color="primary">
            <q-timeline-entry class="text-center" heading>
              Publications
            </q-timeline-entry>

            <q-timeline-entry
              title="Theses and Dissertations"
              subtitle="2018"
              icon="fas fa-bookmark"
            >
              <div>
                Martínez, I. (In Progress). OpenGlove SDK for Android Devices. Undergraduate Thesis. 
                Supervised by González-Ibáñez, R. Departamento de Ingenieria Informatica, Universidad de Santiago de Chile.
              </div>
            </q-timeline-entry>
            <q-timeline-entry
              title="Theses and Dissertations"
              subtitle="2017"
              icon="fas fa-bookmark"
            >
              <div>
                Cerda, R. (2017). OpenGlove Extensions to Capture Hand Movements Through 9-axis IMU and 
                Flex Sensors. Undergraduate Thesis. Supervised by González-Ibáñez, R. Departamento de Ingenieria Informatica, 
                Universidad de Santiago de Chile.
              </div>
            </q-timeline-entry>
            <q-timeline-entry
              title="Theses and Dissertations"
              subtitle="2016"
              icon="fas fa-bookmark"
            >
              <div>
                Meneses, S. (2016). OpenGlove SDK. Supervised by González-Ibáñez, R. Departamento de Ingenieria Informatica, 
                Universidad de Santiago de Chile.
              </div>
            </q-timeline-entry>
            <q-timeline-entry
              title="Theses and Dissertations"
              subtitle="2015"
              icon="fas fa-bookmark"
            >
              <div>
                Monsalve, R. (2015). OpenGlove: A Haptics Device for Human-Information Interaction. Undergraduate Thesis. 
                Supervised by González-Ibáñez, R. Departamento de Ingenieria Informatica, Universidad de Santiago de Chile.
              </div>
            </q-timeline-entry> 
          </q-timeline>
        </div>
      </div>
    </div>
   <!-- <div class="row q-col-gutter-lg q-ml-xs q-ml-xs q-mr-lg">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 q-mb-md" v-for="(app, $index) in apps" :key="$index">
        <a v-bind:href="'#/aplication/'+ app.id">
        <q-img v-if="app.image_url !== ''"
          :ratio="16/9"
          v-bind:src="app.image_url"
          style="width: 100%"
          class="zoom"
        >
        
          <div class="absolute-bottom text-subtitle1 text-center text-white q-pa-xs gt-sm" style="background-color: rgba(0, 0, 0, 0.79);">
            <a v-bind:href="'#/aplication/'+ app.id" style="color: #ffffff; text-decoration: none;"> {{app.name}} </a>
          </div>
          <div class="absolute-bottom text-subtitle1 text-center text-white q-pa-xs lt-md" style="background-color: rgba(0, 0, 0, 0.79); padding-top: 0px;padding-bottom: 0px;">
            <a v-bind:href="'#/aplication/'+ app.id" style="color: #ffffff; text-decoration: none;"> {{app.name}} </a>
          </div>
          <div v-if="app.published == false" style="background-color: rgba(255, 255, 255, 0);">
            <q-badge color="red">
              {{$t('unverified')}} <q-icon name="warning" color="white" class="q-ml-xs" />
            </q-badge>
          </div>
          <div v-else-if="app.published == true" style="background-color: rgba(255, 255, 255, 0);">
            <q-badge color="green">
              {{$t('verified')}} <q-icon name="check" color="white" class="q-ml-xs" />
            </q-badge>
          </div>
        </q-img>
        <q-img v-if="app.image_url == ''"
          :ratio="16/9"
          src="../assets/header-glove.jpg"
          style="width: 100%"
          class="zoom"
        >
        
          <div class="absolute-bottom text-subtitle1 text-center text-white q-pa-xs gt-sm" style="background-color: rgba(0, 0, 0, 0.79);">
            <a v-bind:href="'#/aplication/'+ app.id" style="color: #ffffff; text-decoration: none;"> {{app.name}} </a>
          </div>
          <div class="absolute-bottom text-subtitle1 text-center text-white q-pa-xs lt-md" style="background-color: rgba(0, 0, 0, 0.79); padding-top: 0px;padding-bottom: 0px;">
            <a v-bind:href="'#/aplication/'+ app.id" style="color: #ffffff; text-decoration: none;"> {{app.name}} </a>
          </div>
          <div v-if="app.published == false" style="background-color: rgba(255, 255, 255, 0);">
            <q-badge color="red">
              {{$t('unverified')}} <q-icon name="warning" color="white" class="q-ml-xs" />
            </q-badge>
          </div>
          <div v-else-if="app.published == true" style="background-color: rgba(255, 255, 255, 0);">
            <q-badge color="green">
              {{$t('verified')}} <q-icon name="check" color="white" class="q-ml-xs" />
            </q-badge>
          </div>
        </q-img>
        
        
        </a>   
      </div>
      
    </div>
    <infinite-loading @infinite="infiniteHandler">
      <span slot="no-more">
        No hay más aplicaciones, realiza tu aporte !
      </span>
    </infinite-loading> !-->
  </div>
</template>

<style>
</style>

<script>

import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'PageIndex',
  components: {
    InfiniteLoading,
  },
  data () {
    return {
      aplications: null,
      model: null,
      slide: 1,
      page: 0,
      apps: [],
    }
  },
  created () {
    console.log(this.$q.lang.isoName)
    this.$axios.get("/api/v1/apps")
    .then(request => { this.aplications = request.data
    })
    .catch(error =>{
      console.log(error)
    })
  },
  methods: {
    infiniteHandler($state) {
      this.page++
      let url = "/api/v1/apps/?page="+this.page
      this.$axios.get(url)
      .then(request  => {
        let apps = request.data
        if (apps.length) {
          this.apps = this.apps.concat(apps)
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
  }
}
</script>


<style>
	.center {
	  margin: auto;
	  width: 80%;
	}
  .custom-caption{
    text-align: center;
    padding: 12px;
    color: white;
    background-color: rgba(0, 0, 0, .3);
  }
  .a{
    color: white;
  }
  .zoom {
  transition: transform .2s;
  }
  .zoom:hover {
    -ms-transform: scale(1.02); /* IE 9 */
    -webkit-transform: scale(1.02); /* Safari 3-8 */
    transform: scale(1.02); 
  }

</style>

