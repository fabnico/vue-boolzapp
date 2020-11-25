const myApp = new Vue({
   el: '#root',
   data:{
      activeContact: 0,
      actualMsg: '',
      actualSearch: '',
      mainUser:{
            avatar: 'img/avatar_io.jpg',
            name: 'Nome Utente'
         },
      contactsArray: [
         {
            filt: 'show',
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
            filt: 'show',
            avatar: 'img/avatar_2.jpg',
            name: 'Fabio',
            lastAccess: '',
            isActive: false,
            chat: [],
         },
         {
            filt: 'show',
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
            filt: 'show',
            avatar: 'img/avatar_4.jpg',
            name: 'Luisa',
            lastAccess: '',
            isActive: false,
            chat: [],
         }
      ]
   },
   methods:{
      setDate: function(){
         let a = new Date();
         let b = `${a.getDate()}/${a.getMonth() + 1}/${a.getFullYear()} ${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}`
         return b;
      },
      write: function(){
         this.contactsArray[this.activeContact].chat.push(
           {msg: this.actualMsg, dataMsg: this.setDate(), status: 'sent'}
         );
         this.actualMsg = '';
         this.respond(this.contactsArray,this.activeContact);
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
      respond: function(array,active){
         const that = this;
         setTimeout(function(){
            let myTime = that.setDate();
            array[active].chat.push(
           {msg: 'Ok', dataMsg: myTime, status: 'received'}
        )},3000);
     },
      search: function(){
        const that = this;
        this.contactsArray.forEach(function(e){
           if (!e.name.toLowerCase().includes(that.actualSearch.toLowerCase())){
           e.filt = 'hide'}
           else if (e.name.toLowerCase().includes(that.actualSearch.toLowerCase())){
           e.filt = 'show'}
     })
     },
  }
})
