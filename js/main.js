const myApp = new Vue({
   el: '#root',
   data:{
      activeContact: 0,
      actualMsg: '',
      mainUser:{
            avatar: 'img/avatar_io.jpg',
            name: 'Nome Utente'
         },
      contactsArray: [
         {
            avatar: 'img/avatar_1.jpg',
            name: 'Michele',
            lastAccess: '',
            chat: []
         },
         {
            avatar: 'img/avatar_2.jpg',
            name: 'Fabio',
            lastAccess: '',
            chat: []
         },
         {
            avatar: 'img/avatar_3.jpg',
            name: 'Samuele',
            lastAccess: '',
            chat: []
         },
         {
            avatar: 'img/avatar_4.jpg',
            name: 'Luisa',
            lastAccess: '',
            chat: []
         }
      ]
   },
   methods:{
      write: function(){
         this.contactsArray[this.activeContact].chat.push(this.actualMsg);
         this.actualMsg = '';
      },
      pickActive: function(contact,index){
         return this.activeContact = index;
      },
   }
})
