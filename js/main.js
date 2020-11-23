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
            contactMsg: ['Ciao, sono Michele'],
            mainUserMsg: ['Ciao Michele!']
         },
         {
            avatar: 'img/avatar_2.jpg',
            name: 'Fabio',
            lastAccess: '',
            contactMsg: ['Ciao, sono Fabio'],
            mainUserMsg: ['Ciao Fabio!']
         },
         {
            avatar: 'img/avatar_3.jpg',
            name: 'Samuele',
            lastAccess: '',
            contactMsg: ['Ciao, sono Samuele'],
            mainUserMsg: ['Ciao Samuele!']
         },
         {
            avatar: 'img/avatar_4.jpg',
            name: 'Luisa',
            lastAccess: '',
            contactMsg: ['Ciao, sono Luisa'],
            mainUserMsg: ['Ciao Luisa!']
         }
      ]
   },
   methods:{
      write: function(){
         this.contactsArray[this.activeContact].mainUserMsg.push(this.actualMsg);
         this.actualMsg = '';
      },
      pickActive: function(index){
         return this.activeContact = index;
      },
   }
})
