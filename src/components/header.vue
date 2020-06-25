<template>

     <header>

         <nav>
             <div class="nav-brand">
                 <a href="#">
                     <img src="../assets/téléchargement.png" alt="">
                 </a>
             </div>

             <div class="demo"> 
                 <a href="#">Demo</a>
             </div>

             <div @click="slideMenu" class="nav-menu">
                 <span class="first-bar"></span>
                 <span class="second-bar"></span>
                 <span class="third-bar"></span>
             </div>

             <ul class="nav-list" ref="navList">
                 <li class="nav-item">
                     <a href="#" class="nav-link">Products</a>
                 </li>
                 <li class="nav-item">
                     <a href="#" class="nav-link">Why Us ?</a>
                 </li>
                 <li class="nav-item">
                     <a href="#" class="nav-link">Resources</a>
                 </li>
             </ul>

         </nav>

     </header>

</template>  

<script>
export default {
    data(){
        return{
              display_menu :true
        }
    },
    methods :{
        slideMenu(){
             this.$refs.navList.style.display = this.display_menu ? 'flex' : 'none';
             this.display_menu = !this.display_menu;
        }
    }
}
</script>

<style scoped>

     header{
           width: 100%;
           background-color: #fff;
     }
     nav{
         width: 100%;
         min-width: 300px;
         display: grid;
         grid-template-columns: repeat(6,1fr);
         grid-auto-rows: minmax(80px,0%);
         height: 80px;
     }
     .nav-brand{
         grid-column: 1/3;
         width: 165px;
         height: 100%;
     }
     .nav-brand img{
         width:100%;
     }
     .nav-menu{
         display: flex;
         flex-direction: column;
         justify-content: space-around;
         align-items: center;
         height: 28px;
         cursor: pointer;
         margin-top: 23px;
     }
     .nav-menu *{
            display: block;
            width: 22px;
            height: 2px;
            background-color: #333;
     }
     .demo{
         height: 40px;
         width: 100px;
         background-color: purple;
         text-align: center; 
         padding-top: 6px;  
         grid-column: 5/6;
         border-radius: 10px;
         margin-top: 20px;
     }
     .demo a{
         text-decoration: none;
           color: #fff;
           font-size: 20px;
     }
     .nav-list{
           list-style: none;
           background-color: purple;
           display: none;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           height: 100vh;
           grid-column: 1/7;
           z-index: 2;
     }
     .nav-list .nav-item{
           display: block;
           margin-bottom: 30px;
           border-bottom: 1px solid #fff;
           width: 100%;
           text-align: center;
           padding: 10px;
     }
     .nav-list .nav-item .nav-link{
            text-decoration: none;
            color: #fff;
            font-size: 20px;
     } 
</style>