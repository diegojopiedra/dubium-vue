<template>
  <v-app>
    <!-- <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar
      app
      :clipped-left="clipped"
      color="primary"
      dark
      dense
    >

      <v-btn icon @click.stop="rightDrawer = !rightDrawer" class="hidden-md-and-up">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>

      <div class="hidden-sm-and-down">
        <v-btn flat to="/">
          <v-icon>home</v-icon> {{ $t('menu.home') }}
        </v-btn>
        <v-btn flat>
          <v-icon>insert_drive_file</v-icon> {{ $t('menu.jobs') }}
        </v-btn>
        <v-btn flat>
          <v-icon>people</v-icon> {{ $t('menu.authors') }}
        </v-btn>
        <v-btn flat>
          <v-icon>insert_chart</v-icon> {{ $t('menu.statistics') }}
        </v-btn>
        <v-btn flat>
          <v-icon>dashboard</v-icon> {{ $t('menu.dashboard') }}
        </v-btn>
      </div>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="false"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
             {{ $t('menu.home') }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>insert_drive_file</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
             {{ $t('menu.jobs') }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
             {{ $t('menu.authors') }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>insert_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
             {{ $t('menu.statistics') }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
             {{ $t('menu.dashboard') }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>
        {{ $t('footer.main') }}
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      rightDrawer: false,
      title: 'Thesis metric'
    }
  },
  name: 'App'
}
</script>
