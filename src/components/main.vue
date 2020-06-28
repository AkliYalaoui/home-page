<template>
    <main>
        <div class="img-container">
            <img src="../assets/bg.jpg" alt="background">
            <div class="card">
            <h1>The #1 Global Cloud Voice Provider</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quos? Architecto inventore ab non dolorem, assumenda quis voluptates</p>
            <a href="#">Learn More</a>
        </div>
        </div>
    </main>
</template>

<script>
export default {
    daat(){
        return{

        }
    }
}
</script>

<style scoped>
      main{
       width: 100%;
       min-width: 300px;
       }
     .img-container{
           min-height: 100vh;
           width: 100%;
           position: relative;
     }
     .img-container img{
         width: 100%;
     }
    .card{
         width: 100%;
         min-width: 300px;
        background-color: purple;
        color: #fff;
        position: absolute;
        top: 40%;
        left: 0;
        border-top-right-radius: 20%;
    }
    .card h1{
        width: 80%;
        margin: 50px auto 10px;
    }
    .card p{
        padding: 10px;
        width: 80%;
        margin: 0 auto 20px;
    }
    .card a{
        padding: 10px;
        text-decoration: none;
        font-size: 20px;
        color: #fff;
        border: 1px solid #fff;
        display: block;
        width: 120px;
        margin: 10px auto 20px;
        border-radius: 10px;
    }
    /* media*/
   @media screen and (min-width: 650px) {
       .card{
            top: 0;
            border-radius: 0;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: rgba(141, 21, 131, 0.6);
            color:rgb(221, 178, 217);
       }
       .card h1{
         font-size: 55px;
        }
        .card p{
           padding: 20px;
           font-size: 23px;
         }
        .card a{
           padding: 20px;
           font-size: 25px;
           color:rgb(221, 178, 217);
         width: 180px;
         }
   } 
</style>
