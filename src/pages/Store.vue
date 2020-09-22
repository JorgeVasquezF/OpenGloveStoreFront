<template>
	<div>
		<div class="row q-col-gutter-lg q-pa-md">
      <div class="col-xs-12 col-sm-4 offset-sm-4">
        <!-- Buscador !-->
          <div class="text-center ">{{$t('search')}}</div>
          <multiselect style="max-width: 600px" v-model="selectedApps" id="ajax2" label="name" 
          track-by="code" :placeholder="$t('typeToSearch')" selectLabel="" open-direction="bottom" :options="appsFind" :multiple="true" 
          :searchable="true" :loading="isLoading" :internal-search="false" :clear-on-select="true" :close-on-select="false" 
          :options-limit="300" :limit="3" :limit-text="limitText" :max-height="150" :show-no-results="false" :hide-selected="true" 
          @search-change="asyncFind" @select="onSelectSearch" @remove="remove">             
            <template slot="clear" slot-scope="props">
              <div class="multiselect__clear" v-if="selectedApps.length" @mousedown.prevent.stop="clearAll(props.search)"></div>
            </template><span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
          </multiselect>
      </div>
    </div>
    <div class="row q-col-gutter-lg q-pa-md lt-sm">
      <div class="col-xs-12 text-center col-sm-6 col-md-4 col-lg-3 col-xl-4 offset-xl-4">
	      <div class="q-pa-md">
          <div class="q-gutter-md">
            <q-btn color="primary" label="Categorías">
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section @click="busqueda = 0">Todas</q-item-section>
                  </q-item>
                  <q-item clickable v-for="(tag, $index) in autocompleteItems" :key="$index" v-close-popup>
                    <q-item-section @click="onSelect(tag)">{{tag}}</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
			  </div>
	    </div>    
    </div>
    <div class="row q-col-gutter-lg q-pa-md gt-xs">
      <div class="col-xs-12 text-center col-sm-12">
	      <div class="q-pa-md">
          <div class="q-gutter-md">
            <q-tabs
              dense
              active-color="black"
              class="bg-primary text-white shadow-2"
            >

              <q-tab @click="busqueda = 0" label="Todas" />
              <div v-for="(tag, $index) in autocompleteItems" :key="$index">
                <q-tab @click="onSelect(tag)" v-bind:label="tag" > </q-tab>
              </div>
              
              
            </q-tabs>
          </div>
			  </div>
	    </div>    
    </div>    
    <div class="row q-col-gutter-lg q-pa-md" v-if="busqueda == 1">
			<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" v-for="(app, $index) in appsfilter" :key="$index">
				<a v-bind:href="'#/aplication/'+ app.id">
	        <q-img v-if="app.image_url !== ''"
          	  :ratio="16/9"
	          v-bind:src="app.image_url"
	          style="width: 100%"
	          class="zoom"
	        >
	          <div class="absolute-bottom text-subtitle1 text-center text-white q-pa-xs" style="background-color: rgba(0, 0, 0, 0.79);">
	            <a v-bind:href="'#/aplication/'+ app.id" style="color: #ffffff; text-decoration: none;"> {{app.name}} </a>
	          </div>
			  <div v-if="app.published == false">
	            <q-badge color="red">
	              {{$t('unverified')}} <q-icon name="warning" color="white" class="q-ml-xs" />
	            </q-badge>
	          </div>
	          <div v-else-if="app.published == true">
	            <q-badge color="green">
	              {{$t('verified')}} <q-icon name="check" color="white" class="q-ml-xs" />
	            </q-badge>
	          </div>
	        </q-img>
			<q-img v-else
          	  :ratio="16/9"
	          src="../assets/header-glove.jpg"
	          style="width: 100%"
	          class="zoom"
	        >
	          <div class="absolute-bottom text-subtitle1 text-center text-white q-pa-xs" style="background-color: rgba(0, 0, 0, 0.79);">
	            <a v-bind:href="'#/aplication/'+ app.id" style="color: #ffffff; text-decoration: none;"> {{app.name}} </a>
	          </div>
			  <div v-if="app.published == false">
	            <q-badge color="red">
	              {{$t('unverified')}} <q-icon name="warning" color="white" class="q-ml-xs" />
	            </q-badge>
	          </div>
	          <div v-else-if="app.published == true">
	            <q-badge color="green">
	              {{$t('verified')}} <q-icon name="check" color="white" class="q-ml-xs" />
	            </q-badge>
	          </div>
	        </q-img>
	        </a>
	        <div class="q-mt-sm" >
	        	<q-chip outline size="md" color="primary" text-color="white">
		        	{{currentTag}}
		      	</q-chip>
	        </div> 
			</div>
		</div>
		<div class="row q-col-gutter-lg q-pa-md" v-if="busqueda == 0">
			<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" v-for="(app, $index) in aplications" :key="$index">
				<a v-bind:href="'#/aplication/'+ app.id">
	        <q-img v-if="app.image_url !== ''"
	          :ratio="16/9"
	          v-bind:src="app.image_url"
	          style="width: 100%"
	          class="zoom"
	        >
	          <div class="absolute-bottom text-subtitle1 text-center text-white q-pa-xs" style="background-color: rgba(0, 0, 0, 0.79);">
	            <a v-bind:href="'#/aplication/'+ app.id" style="color: #ffffff; text-decoration: none;"> {{app.name}} </a>
	          </div>
	          <div v-if="app.published == false">
	            <q-badge color="red">
	              {{$t('unverified')}} <q-icon name="warning" color="white" class="q-ml-xs" />
	            </q-badge>
	          </div>
	          <div v-else-if="app.published == true">
	            <q-badge color="green">
	              {{$t('verified')}} <q-icon name="check" color="white" class="q-ml-xs" />
	            </q-badge>
	          </div>
	        </q-img>
			<q-img v-else
	          :ratio="16/9"
	          src="../assets/header-glove.jpg"
	          style="width: 100%"
	          class="zoom"
	        >
	          <div class="absolute-bottom text-subtitle1 text-center text-white q-pa-xs" style="background-color: rgba(0, 0, 0, 0.79);">
	            <a v-bind:href="'#/aplication/'+ app.id" style="color: #ffffff; text-decoration: none;"> {{app.name}} </a>
	          </div>
	          <div v-if="app.published == false">
	            <q-badge color="red">
	              {{$t('unverified')}} <q-icon name="warning" color="white" class="q-ml-xs" />
	            </q-badge>
	          </div>
	          <div v-else-if="app.published == true">
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
        {{$t('thearenotapp')}}
      </span>
    </infinite-loading>
		<!--<h5>Acción</h5>
		<div class="row q-col-gutter-lg">
			<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" v-for="(app, $index) in accion" :key="$index">
				<a v-bind:href="'#/aplication/'+ app.id">
	        <q-img
	          v-bind:src="app.image_url"
	          style="width: 100%"
	          class="zoom"
	        >
	          <div class="absolute-bottom text-subtitle1 text-center text-white q-pa-xs">
	            <a v-bind:href="'#/aplication/'+ app.id" style="color: #00d999; text-decoration: none;"> {{app.name}} </a>
	          </div>
	        </q-img>
	        </a>
			</div>
		</div>
		<h5>Deportes</h5>
		<div class="row q-col-gutter-lg">
			<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" v-for="(app, $index) in sports" :key="$index">
				<a v-bind:href="'#/aplication/'+ app.id">
	        <q-img
	          v-bind:src="app.image_url"
	          style="width: 100%"
	          class="zoom"
	        >
	          <div class="absolute-bottom text-subtitle1 text-center text-white q-pa-xs">
	            <a v-bind:href="'#/aplication/'+ app.id" style="color: #00d999; text-decoration: none;"> {{app.name}} </a>
	          </div>
	        </q-img>
	        </a>
			</div>
		</div>
		<h5>Estrategia</h5>
		<div class="row q-col-gutter-lg">
			<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" v-for="(app, $index) in strategy" :key="$index">
				<a v-bind:href="'#/aplication/'+ app.id">
	        <q-img
	          v-bind:src="app.image_url"
	          style="width: 100%"
	          class="zoom"
	        >
	          <div class="absolute-bottom text-subtitle1 text-center text-white q-pa-xs">
	            <a v-bind:href="'#/aplication/'+ app.id" style="color: #00d999; text-decoration: none;"> {{app.name}} </a>
	          </div>
	        </q-img>
	        </a>
			</div>
		</div> !-->
	</div>

	
</template>

<script>
  import Multiselect from 'vue-multiselect'
  import InfiniteLoading from 'vue-infinite-loading'
	export default {
		components: {
      Multiselect,
      InfiniteLoading,
    },
		data () {
			return {
				accion: null,
				sports: null,
        strategy: null,
        page: 0,
				autocompleteItems: [],
				value: [],
				isDisabled: false,
				appsfilter: [],
				aplications: [],
				appsByTag: [],
				busqueda: 0,
        appsFind: [],
        selectedApps: [],
        isLoading: false,
        currentTag: '',

			}
			
		},
		created() {
			this.$axios.post("/api/v1/tags/apps")
        .then(response => { this.autocompleteItems = response.data.map(a => {
          return a.name
        });
        }).catch(() => { alert('Error carga de apps') 

      	})
      /*this.$axios.get("/api/v1/apps")
        .then(request => { this.aplications = request.data
          })*/
    },
		methods: {
      infiniteHandler($state) {
        this.page++
        let url = "/api/v1/apps/?page="+this.page
        this.$axios.get(url)
        .then(request  => {
          let apps = request.data
          if (apps.length) {
            this.aplications = this.aplications.concat(apps)
            $state.loaded();
          } else {
            $state.complete();
          }
        });
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
      limitText (count) {
      return `and ${count} other apps`
    },
			onSelect (option) {
      this.busqueda = 1
      var data = {"name": option}
      var json = JSON.stringify(data);
      this.$axios.post("/api/v1/apps/filter",json)
          .then(response => { 
          this.appsfilter = response.data
          this.currentTag = option 
          })
          .catch(error => {
            console.log("error")
          })
    	},
    	remove () {
      	this.busqueda = 0
      },
      onChange (value) {
	      this.value = value
	      if (value.indexOf('Reset me!') !== -1) this.value = []
	    },
		  onTouch () {
	      this.isTouched = true
	    },
		}
}
</script>
