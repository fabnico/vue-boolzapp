const myApp = new Vue({
   el: '#root',
   data:{
      mainUser: [
         {
            avatar: 'img/avatar_io.jpg',
            name: 'Fabrizio'
         }
      ],
      contactsArray: [
         {
            avatar: 'img/avatar_1.jpg',
            name: 'Michele',
            lastAccess: ''
         },
         {
            avatar: 'img/avatar_2.jpg',
            name: 'Fabio',
            lastAccess: ''
         },
         {
            avatar: 'img/avatar_3.jpg',
            name: 'Samuele',
            lastAccess: ''
         },
         {
            avatar: 'img/avatar_4.jpg',
            name: 'Luisa',
            lastAccess: ''
         }
      ]
   },
   methods:{

   }
})
