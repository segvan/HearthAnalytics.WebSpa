export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'matches',
        data: {
          menu: {
            title: 'Matches',
            icon: 'ion-ios-game-controller-b-outline',
            selected: false,
            expanded: false,
            order: 10,
          }
        }
      },
      {
        path: 'decks',
        data: {
          menu: {
            title: 'Decks',
            icon: 'ion-social-buffer-outline',
            selected: false,
            expanded: true,
            order: 20,
          }
        },
         children: [
          {
            path: 'metaDecks',
            data: {
              menu: {
                title: 'Meta',
              }
            }
          },
          {
            path: 'archiveDecks',
            data: {
              menu: {
                title: 'Archive',
              }
            }
          }
        ]
      },
      {
        path: 'archytypes',
        data: {
          menu: {
            title: 'Archytypes',
            icon: 'ion-social-reddit-outline',
            selected: false,
            expanded: false,
            order: 30,
          }
        },
        children: [
          {
            path: 'metaArchytypes',
            data: {
              menu: {
                title: 'Meta',
              }
            }
          },
          {
            path: 'archiveArchytypes',
            data: {
              menu: {
                title: 'Archive', 
              }
            }
          }
        ]
      },
      {
        path: 'statistics',
        data: {
          menu: {
            title: 'Statistics',
            icon: 'ion-arrow-graph-up-right',
            selected: false,
            expanded: false,
            order: 40,
          }
        }
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'Login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'Register'
              }
            }
          }
        ]
      }
    ]
  }
];
