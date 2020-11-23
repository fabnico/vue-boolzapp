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
            chat: [
               {
               msg: 'Ciao, sono Michele',
               dataMsg: '00.00'
               },
               {
               msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
               dataMsg: '00.05'
               }
            ],
         },
         {
            avatar: 'img/avatar_2.jpg',
            name: 'Fabio',
            lastAccess: '',
            chat: [
               {
               msg: '',
               dataMsg: ''
               }
            ],
         },
         {
            avatar: 'img/avatar_3.jpg',
            name: 'Samuele',
            lastAccess: '',
            chat: [
               {
               msg: 'Ciao, sono Samuele!',
               dataMsg: '00.08'
               }
            ],
         },
         {
            avatar: 'img/avatar_4.jpg',
            name: 'Luisa',
            lastAccess: '',
            chat: [
               {
               msg: '',
               dataMsg: ''
               }
            ],
         }
      ]
   },
   methods:{
      write: function(){
         this.contactsArray[this.activeContact].chat.push(this.actualMsg);
         this.actualMsg = '';
      },
      pickActive: function(index){
         return this.activeContact = index;
      },
      show: function(){
         if(this.contactsArray[this.activeContact].chat[0].msg != ''){
            return true;
         }
      },
   }
})
