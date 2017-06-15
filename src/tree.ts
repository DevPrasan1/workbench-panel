import Folder from './entities/Folder';

const folders: Array<Folder> = [
  {
    id: 1,
    name: 'app',
    explore: false,
    folders: [
      {
        id: 2,
        name: 'Models',
        explore: false,
        folders: [],
        files: [
          {
            id : 21,
            name: 'User.js',
            data: 'Welcome to User.js',
            explore:false

          },
          {
            id : 22,
            name: 'Role.js',
            data: 'Welcome to role.js',
            explore:false
          },
          {
            id : 23,
            name: 'Branch.js',
            data: 'Welcome to Branch.js',
            explore:false
          },
        ],
      },
      {
        id: 3,
        name: 'Services',
        explore: false,
        folders: [
          {
            id: 4,
            name: 'Zoho',
            explore: false,
            folders: [],
            files: [],
          }
        ],
        files: [
          {
            id : 31,
            name: 'UserManager.js',
            data: 'Welcome to UserManager.js',
            explore: false
          },
          {
            id : 32,
            name: 'RoleManager.js',
            data: "Welcome to RoleManager.js",
            explore : false
          },
          {
            id : 33,
            name: 'BranchManager.js',
            data: 'Welcom to BranchManager.js',
            explore : false
          },
        ],
      }
    ],
    files: [
      {
        id : 11,
        name: 'package.json',
        data: 'Welcome to Package.json file',
        explore:false
      },
      {
        id : 12,
        name: 'App.css',
        data: 'Welcome to app.css',
        explore:false
      }
    ],
  },
];

export default folders;
