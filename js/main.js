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
            isActive: true,
            chat: [
               {
               msg: 'Ciao, sono Michele',
               dataMsg: '10/02/2020 16:24:02',
               status: 'received'
               },
               {
               msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
               dataMsg: '11/02/2020 16:24:02',
               status: 'sent'
               }
            ],
         },
         {
            avatar: 'img/avatar_2.jpg',
            name: 'Fabio',
            lastAccess: '',
            isActive: false,
            chat: [],
         },
         {
            avatar: 'img/avatar_3.jpg',
            name: 'Samuele',
            lastAccess: '',
            isActive: false,
            chat: [
               {
               msg: 'Ciao, sono Samuele!',
               dataMsg: '10/02/2020 18:24:02',
               status: 'received'
               },
               {
               msg: 'O rly?',
               dataMsg: '10/02/2020 19:24:02',
               status: 'sent'
               }
            ],
         },
         {
            avatar: 'img/avatar_4.jpg',
            name: 'Luisa',
            lastAccess: '',
            isActive: false,
            chat: [],
         }
      ]
   },
   methods:{
      write: function(){
         let date = new Date();
         let myDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
         this.contactsArray[this.activeContact].chat.push(
           {msg: this.actualMsg, dataMsg: myDate, status: 'sent'}
         );
         this.actualMsg = '';
         this.respond(myDate,this.contactsArray,this.activeContact)
      },
      pickActive: function(index){
         this.activeContact = index;
         this.contactsArray.forEach(e => e.isActive = false);
         this.contactsArray[this.activeContact].isActive = true;
      },
      show: function(){
         if(this.contactsArray[this.activeContact].chat.length != 0){
            return true;
         }
      },
      respond: function(data,array,active){
         setTimeout(function(){
            array[active].chat.push(
           {msg: 'Ok', dataMsg: data, status: 'received'}
        )},3000)
     },
   }
})
