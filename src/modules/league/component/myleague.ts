import { Component, Vue } from 'vue-property-decorator';

@Component
export default class myleague extends Vue {

    data : any= [
       {items:[
        {rank:'1st', Owner: 'jhon wick', team: 'Dickerson', Points: '300', MaxPoints:'Not yet Implemented' },
        {rank:'1st', Owner: 'jhon wick', team: 'Dickerson', Points: '300', MaxPoints:'Not yet Implemented' },
        {rank:'1st', Owner: 'jhon wick', team: 'Dickerson', Points: '300', MaxPoints:'Not yet Implemented' },
        {rank:'1st', Owner: 'jhon wick', team: 'Dickerson', Points: '300', MaxPoints:'Not yet Implemented' },
        {rank:'1st', Owner: 'jhon wick', team: 'Dickerson', Points: '300', MaxPoints:'Not yet Implemented' },
        {rank:'1st', Owner: 'jhon wick', team: 'Dickerson', Points: '300', MaxPoints:'Not yet Implemented' },
        {rank:'1st', Owner: 'jhon wick', team: 'Dickerson', Points: '300', MaxPoints:'Not yet Implemented' },
        {rank:'1st', Owner: 'jhon wick', team: 'Dickerson', Points: '300', MaxPoints:'Not yet Implemented' },
       ], 
       itemName:'First League',
       count:50  
    },

       {items:[
        { age: 44, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 45, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 46, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 47, first_name: 'Jami', last_name: 'Carney' }
       ], 
       itemName:'Second League',
       count:500     
    },
       {items:[
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
       ], 
       itemName:'Third League', count:350  },
       {items:[
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
       ], 
       itemName:'Fourth League',count:720},
       {items:[
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
       ], 
       itemName:'Fifth League' ,count:1020},
       {items:[
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
       ], 
       itemName:'Sixth League',count:7720}
    ]
     items:any  =  [
      
      ]
    created() {
        this.$store.commit('userLogged', true)
    }

}
