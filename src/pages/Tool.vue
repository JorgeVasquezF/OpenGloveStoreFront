<template>
  <div>
    <div class="row">
      <div class="col-md-5 offset-xl-1 offset-md-1 q-pa-md q-gutter-md">
        <q-card class="my-card">
          <img src="../assets/sdkwindows.png" style="max-height: 400px">
          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="code" />
              </q-item-section>
              <q-item-section>
                <q-item-label >SDK </q-item-label>
                <q-item-label caption>Windows</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="perm_identity" />
              </q-item-section>
              <q-item-section>
                <q-item-label >{{$t('contributors')}}</q-item-label>
                <q-item-label caption>Sebastián Andrés Meneses Núñez</q-item-label>
                <q-item-label caption>Rodrigo Andrés Cerda Ponce</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="calendar_today" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('year')}}</q-item-label>
                <q-item-label caption>2016-2017</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <q-tabs v-model="tab" class="text-teal">
            <q-tab :label="$t('code')" name="one" />
            <q-tab :label="$t('documentation')" name="two" />
          </q-tabs>
          <q-separator/>
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="one" >
              https://github.com/Open-Glove/SDK-OpenGlove
            </q-tab-panel>
            
            <q-tab-panel name="two" >
              SDK para facilitar el desarrollo de aplicaciones para OpenGlove
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
      <div class="col-md-5 q-pa-md q-gutter-md">
        <q-card class="my-card">
          <img src="../assets/sdkandroid.png" style="max-height: 400px">
          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="code" />
              </q-item-section>

              <q-item-section>
                <q-item-label >SDK </q-item-label>
                <q-item-label caption>Android</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="perm_identity" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('contributors')}}</q-item-label>
                <q-item-label caption>Israel Gedeón Elías Matínez Montenegro</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="calendar_today" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('year')}}</q-item-label>
                <q-item-label caption>2018</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <q-tabs v-model="tabAndroid" class="text-teal">
            <q-tab :label="$t('code')" name="oneAndroid" />
            <q-tab :label="$t('documentation')" name="twoAndroid" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="tabAndroid" animated>
            <q-tab-panel name="oneAndroid">
              https://github.com/Open-Glove/OpenGloveApp
            </q-tab-panel>
            <q-tab-panel name="twoAndroid">
              SDK para facilitar el desarrollo de aplicaciones para el sistema operativo Android
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  <div class="row">
    <div class="col-xs-12 col-sm-10 col-md-8 col-lg-8 offset-lg-2 offset-md-2 offset-sm-1">
      <h4 class="text-center"> {{$t('apiHL')}}</h4>
    </div>
  </div>
  <div class="row">
    <!-- API C# HL !-->
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 offset-lg-2">
      <div class="q-pa-md q-gutter-md">
        <q-card class="my-card">
          <img src="../assets/apicsharp.png">
          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="code" />
              </q-item-section>

              <q-item-section>
                <q-item-label >API Alto nivel </q-item-label>
                <q-item-label caption>C#</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="perm_identity" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('contributors')}}</q-item-label>
                <q-item-label caption>Sebastián Andrés Meneses Núñez</q-item-label>
                <q-item-label caption>Rodrigo Andrés Cerda Ponce</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="calendar_today" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('year')}}</q-item-label>
                <q-item-label caption>2016-2017</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <div class="q-pa-sm" style="max-width: 600px; padding-top: 0px;  margin-top: 0px">
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              expand-separator
              icon="code"
              :label="$t('code')"
              caption="Github"
            >
              <q-card>
                <q-card-section>
                  <a style="color: #ff9800; text-decoration:none" href="https://github.com/Open-Glove/OpenGlove-API-C-Sharp-HL">https://github.com/Open-Glove/OpenGlove-API-C-Sharp-HL</a>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="library_books"
              :label="$t('documentation')"
              header-class="text-primary"
              caption="PDF"

            >
              <q-card>
                <q-card-section>
                  
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div>
    <!-- API JAVA HL !-->
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
      <div class="q-pa-md q-gutter-md">
        <q-card class="my-card">
          <img src="../assets/apijava.png">
          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="code" />
              </q-item-section>

              <q-item-section>
                <q-item-label>API Alto nivel </q-item-label>
                <q-item-label caption>Java</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="perm_identity" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('contributors')}}</q-item-label>
                <q-item-label caption>Sebastián Andrés Meneses Núñez</q-item-label>
                <q-item-label caption>Rodrigo Andrés Cerda Ponce</q-item-label>             
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="calendar_today" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('year')}}</q-item-label>
                <q-item-label caption>2016-2017</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <div class="q-pa-sm" style="max-width: 600px; padding-top: 0px;  margin-top: 0px">
          <q-list bordered class="rounded-borders" >
            <q-expansion-item
              expand-separator
              icon="code"
              :label="$t('code')"
              caption="Github"
            >
              <q-card>
                <q-card-section>
                   <a style="color: #ff9800; text-decoration:none" href=https://github.com/Open-Glove/OpenGlove-Java-API-HL>https://github.com/Open-Glove/OpenGlove-Java-API-HL</a>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="library_books"
              :label="$t('documentation')"
              header-class="text-primary"
              caption="PDF"
            >
              <q-card>
                <q-card-section>
                  
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div>
    <!-- API JS HL !-->
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
      <div class="q-pa-md q-gutter-md">
        <q-card class="my-card">
          <img src="../assets/apijs.png">
          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="code" />
              </q-item-section>

              <q-item-section>
                <q-item-label >API Alto nivel </q-item-label>
                <q-item-label caption>JavaScript</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="perm_identity" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('contributors')}}</q-item-label>
                <q-item-label caption>Sebastián Andrés Meneses Núñez</q-item-label>
                <q-item-label caption>Rodrigo Andrés Cerda Ponce</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="calendar_today" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('year')}}</q-item-label>
                <q-item-label caption>2016-2017</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <div class="q-pa-sm" style="max-width: 600px; padding-top: 0px;  margin-top: 0px">
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              expand-separator
              icon="code"
              :label="$t('code')"
              caption="Github"
            >
              <q-card>
                <q-card-section>
                  <a style="color: #ff9800; text-decoration:none" href=https://github.com/Open-Glove/OpenGlove-API-JavaScript-HL>https://github.com/Open-Glove/OpenGlove-API-JavaScript-HL</a>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="library_books"
              :label="$t('documentation')"
              header-class="text-primary"
              caption="PDF"

            >
              <q-card>
                <q-card-section>
                 
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div>
    <!-- API C++ HL !-->
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
      <div class="q-pa-md q-gutter-md">
        <q-card class="my-card">
          <img src="../assets/apiC++.png">
          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="code" />
              </q-item-section>

              <q-item-section>
                <q-item-label >API Alto nivel </q-item-label>
                <q-item-label caption>C++</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="perm_identity" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('contributors')}}</q-item-label>
                <q-item-label caption>Sebastián Andrés Meneses Núñez</q-item-label>
                <q-item-label caption>Rodrigo Andrés Cerda Ponce</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="calendar_today" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('year')}}</q-item-label>
                <q-item-label caption>2016-2017</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <div class="q-pa-sm" style="max-width: 600px; padding-top: 0px;  margin-top: 0px">
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              expand-separator
              icon="code"
              :label="$t('code')"
              caption="Github"
            >
              <q-card>
                <q-card-section>
                  <a style="color: #ff9800; text-decoration:none" href=https://github.com/Open-Glove/OpenGlove-API-Cpp-HL>https://github.com/Open-Glove/OpenGlove-API-Cpp-HL</a>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="library_books"
              :label="$t('documentation')"
              header-class="text-primary"
              caption="PDF"

            >
              <q-card>
                <q-card-section>
                 
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-sm-10 col-md-8 col-lg-8 offset-lg-2 offset-md-2 offset-sm-1">
      <h4 class="text-center"> {{$t('apiLL')}}</h4>
    </div>
  </div>
  <div class="row">
    <!-- API C# !-->
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 offset-lg-2">
      <div class="q-pa-md q-gutter-md">
        <q-card class="my-card">
          <img src="../assets/apicsharp.png">
          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="code" />
              </q-item-section>

              <q-item-section>
                <q-item-label >API Bajo nivel </q-item-label>
                <q-item-label caption>C#</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="perm_identity" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('contributors')}}</q-item-label>
                <q-item-label caption>Rodrigo Andrés Monsalve Lagos</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="calendar_today" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('year')}}</q-item-label>
                <q-item-label caption>2015</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <div class="q-pa-sm" style="max-width: 600px; padding-top: 0px;  margin-top: 0px">
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              expand-separator
              icon="code"
              :label="$t('code')"
              caption="Github"
            >
              <q-card>
                <q-card-section>
                  <a style="color: #ff9800; text-decoration:none" href="https://github.com/Open-Glove/OpenGlove-API-C-Sharp">https://github.com/Open-Glove/OpenGlove-API-C-Sharp</a>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="library_books"
              :label="$t('documentation')"
              header-class="text-primary"
              caption="PDF"

            >
              <q-card>
                <q-card-section>
                  
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div>
    <!-- API JAVA !-->
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
      <div class="q-pa-md q-gutter-md">
        <q-card class="my-card">
          <img src="../assets/apijava.png">
          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="code" />
              </q-item-section>

              <q-item-section>
                <q-item-label>API Bajo nivel </q-item-label>
                <q-item-label caption>Java</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="perm_identity" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('contributors')}}</q-item-label>
                <q-item-label caption>Rodrigo Andrés Monsalve Lagos</q-item-label>           
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="calendar_today" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('year')}}</q-item-label>
                <q-item-label caption>2015</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <div class="q-pa-sm" style="max-width: 600px; padding-top: 0px;  margin-top: 0px">
          <q-list bordered class="rounded-borders" >
            <q-expansion-item
              expand-separator
              icon="code"
              :label="$t('code')"
              caption="Github"
            >
              <q-card>
                <q-card-section>
                   <a style="color: #ff9800; text-decoration:none" href=https://github.com/Open-Glove/OpenGlove-API-JAVA>https://github.com/Open-Glove/OpenGlove-API-JAVA</a>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="library_books"
              :label="$t('documentation')"
              header-class="text-primary"
              caption="PDF"
            >
              <q-card>
                <q-card-section>
                  
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div>
    <!-- API JS !-->
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
      <div class="q-pa-md q-gutter-md">
        <q-card class="my-card">
          <img src="../assets/apijs.png">
          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="code" />
              </q-item-section>

              <q-item-section>
                <q-item-label >API bajo nivel </q-item-label>
                <q-item-label caption>JavaScript</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="perm_identity" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('contributors')}}</q-item-label>
                <q-item-label caption>Rodrigo Andrés Monsalve Lagos</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="calendar_today" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('year')}}</q-item-label>
                <q-item-label caption>2015</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <div class="q-pa-sm" style="max-width: 600px; padding-top: 0px;  margin-top: 0px">
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              expand-separator
              icon="code"
              :label="$t('code')"
              caption="Github"
            >
              <q-card>
                <q-card-section>
                  <a style="color: #ff9800; text-decoration:none" href=https://github.com/Open-Glove/OpenGlove-API-JavaScript>https://github.com/Open-Glove/OpenGlove-API-JavaScript</a>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="library_books"
              :label="$t('documentation')"
              header-class="text-primary"
              caption="PDF"

            >
              <q-card>
                <q-card-section>
                 
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div>
    <!-- API Arduino !-->
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 ">
      <div class="q-pa-md q-gutter-md">
        <q-card class="my-card">
          <img src="../assets/apiArduino.png">
          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="code" />
              </q-item-section>

              <q-item-section>
                <q-item-label >Arduino </q-item-label>
                <q-item-label caption>C++</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="perm_identity" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('contributors')}}</q-item-label>
                <q-item-label caption>Rodrigo Andrés Monsalve Lagos</q-item-label>
                <q-item-label caption>Sebastián Andrés Meneses Núñez</q-item-label>
                <q-item-label caption>Rodrigo Andrés Cerda Ponce</q-item-label>
                <q-item-label caption>Israel Gedeón Elías Matínez Montenegro</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="calendar_today" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('year')}}</q-item-label>
                <q-item-label caption>2015-2018</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <div class="q-pa-sm" style="max-width: 600px; padding-top: 0px;  margin-top: 0px">
          <q-list bordered class="rounded-borders" >
            <q-expansion-item
              expand-separator
              icon="code"
              :label="$t('code')"
              caption="Github"
            >
              <q-card>
                <q-card-section>
                  <a href=https://github.com/Open-Glove/OpenGlove3-Arduino-Mobile>Arduino Mobile - 2018</a>
                </q-card-section>
                <q-card-section>
                  <a href=https://github.com/Open-Glove/OpenGlove2-Arduino>Segunda versión - 2017</a>
                </q-card-section>
                <q-card-section>
                  <a href=https://github.com/Open-Glove/OpenGlove-Arduino>Primera versión - 2015</a>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="library_books"
              :label="$t('documentation')"
              header-class="text-primary"
              caption="PDF"

            >
              <q-card>
                <q-card-section>
        
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div> 
  </div>
  <div class="row">
    <div class="col-xs-12 col-sm-10 col-md-8 col-lg-8 offset-lg-2 offset-md-2 offset-sm-1">
      <h4 class="text-center">Assets</h4>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 offset-lg-4">
      <div class="q-pa-md q-gutter-md">
        <q-card class="my-card">
          <img src="../assets/unityComing.png">
          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="code" />
              </q-item-section>

              <q-item-section>
                <q-item-label >Assets Unity </q-item-label>
                <q-item-label caption>C# Unity</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="perm_identity" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('contributors')}}</q-item-label>
                <q-item-label caption>Claudio Urrutia</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="calendar_today" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('year')}}</q-item-label>
                <q-item-label caption>2020</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <div class="q-pa-sm" style="max-width: 600px; padding-top: 0px;  margin-top: 0px">
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              expand-separator
              icon="code"
              :label="$t('code')"
              caption="Github"
            >
              <q-card>
                <q-card-section>
                  <a style="color: #ff9800; text-decoration:none" >Próximamente</a>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="library_books"
              :label="$t('documentation')"
              header-class="text-primary"
              caption="PDF"

            >
              <q-card>
                <q-card-section>
                 
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
      <div class="q-pa-md q-gutter-md">
        <q-card class="my-card">
          <img src="../assets/unrealComing.png">
          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="code" />
              </q-item-section>

              <q-item-section>
                <q-item-label >Assets Unreal Engine</q-item-label>
                <q-item-label caption>C++ Unreal Engine</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="perm_identity" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('contributors')}}</q-item-label>
                <q-item-label caption>Claudio Urrutia</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="calendar_today" />
              </q-item-section>

              <q-item-section>
                <q-item-label >{{$t('year')}}</q-item-label>
                <q-item-label caption>2020</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <div class="q-pa-sm" style="max-width: 600px; padding-top: 0px;  margin-top: 0px">
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              expand-separator
              icon="code"
              :label="$t('code')"
              caption="Github"
            >
              <q-card>
                <q-card-section>
                  <a style="color: #ff9800; text-decoration:none" >Próximamente</a>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="library_books"
              :label="$t('documentation')"
              header-class="text-primary"
              caption="PDF"

            >
              <q-card>
                <q-card-section>
                 
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div>
  </div> 
</div>
</template>

<script>
export default {
  data () {
    return {
      stars: 4,
      slide: 'first',
      tab: 'one',
      tabAndroid: 'oneAndroid'
    }
  }
}
</script>

<style type="text/css">
  .custom-caption{
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3);}

</style>