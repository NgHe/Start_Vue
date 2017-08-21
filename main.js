var demo=new Vue({
  
  el:"#demo",
  data: {
          myData:[],
          splitter:'',
          article:'',
          mktname:'',
          url:'', 
          
  },
  methods:{
      add: function(){
        this.myData.push({
          splitter:this.splitter,
          article:this.article,
          mktname:this.mktname,
          url:this.url,
        })
      }
}
  
})



