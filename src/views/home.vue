<style lang="css" scoped>
    @font-face {
        font-family: 'ambedYekan';
        src: url('/src/components/fonts/Yekan.eot'); /* IE9 Compat Modes */
        src: url('/src/components/fonts/Yekan.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            /*url('fonts/Yekan.woff2') format('woff2'), /* Super Modern Browsers */
        url('/src/components/fonts/Yekan.woff') format('woff'), /* Pretty Modern Browsers */
        url('/src/components/fonts/Yekan.ttf')  format('truetype'), /* Safari, Android, iOS */
        url('/src/components/fonts/Yekan.svg#svgFontName') format('svg'); /* Legacy iOS */
    }
    * {
        margin: 0px;
        box-sizing: border-box;
        direction: rtl;
        text-align: right;
        font-family: 'ambedYekan';
        font-size: 14px;
        margin: 0px;
        padding: 0px;

    }
    html {
        height: 100%;
        margin: 0;
    }
    a {
        text-decoration: none;
        font-family: 'ambedYekan';
    }
    a:active {

    }
    a:visited {
        text-decoration: none;
        color: #000;
    }
    img {
        max-width: 100%;
        height: 100%;
    }
    .container{
        width: 100%;
        max-width: 100%;
        margin: 0px auto;
        display: block;
        background-image: url('/src/components/img/background.png');
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        padding-bottom: 30px;
        border-radius: 30px;
    }
    .clearfix { /* for solving float problem */
        width: 100%;
        clear: both;
    }
    .backImg {
        width: 100%;
    }
    .blackboard {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #0072ff91;
        top: 0;
        right: 0;
        z-index: -1;
    }
    .costumerImg img {
        width: 100%;
    }
    .costumerText-subLink img {
        width: 80px;
    }
    .ownerImg img {
        width: 100%;
    }
    .ownerText-subLink img {
        width: 80px;
    }
    .col2 {
        width: 50%;
        float: right;
    }
    .col2-left {
        width: 50%;
        float: left;
    }
    .introSection {
        width: 75%;
        display: block;
        margin: 0 auto;
        border-radius: 13px;
        padding: 10px 10px;
        argin-top: 50px;
    }
    .chapInjaLogo {
        width: 50%;
        display: block;
        margin: 0px auto;
        position: relative;
        height: 200px;
        text-align: center !important;
    }

    .costumer {
        border: 4px solid #c4c4c4;
        border-radius: 80px 10px 30px 10px;
        padding: 8px 10px 2px 0px;
        background: #fff;
        width: 45% !important;
        transition-duration: 300ms;
    }
    .costumerText {
        padding-right: 12px;
        padding-top: 10%;
    }
    .owner {
        border: 4px solid #c4c4c4;
        border-radius: 10px 80px 10px 30px;
        padding: 8px 0px 2px 10px;
        background: #fff;
        width: 45% !important;
        transition-duration: 300ms;
    }
    .ownerText {
        padding-right: 10%;
        padding-top: 10%;
    }
    .costumer:hover {
        transform: scale(1.1);
        transition-duration: 300ms;
        box-shadow: 0px 0px 10px 2px #000;
    }
    .owner:hover {
        transform: scale(1.1);
        transition-duration: 300ms;
        box-shadow: 0px 0px 10px 2px #000;
    }
    .services img {
        width: 80px;
    }
    .subService {
        width: 33.33333%;
        float: right;
        text-align: center;
    }
    p {
        margin-top: 0 !important;
        text-align: center !important;
        margin-bottom: 1rem !important;
    }
    .services {
        width: 73.5%;
        display: block;
        margin: 0px auto;
        background: #fff;
        border-radius: 10px;
        padding: 5px 10px;
        margin-top: 85px;
    }
    .descriptionSlider img {
        width: 100%;
    }
    .descriptionSlider {
        position: relative;
    }
    .description {
        width: 96%;
        display: block;
        margin: 0px auto;
        background: #fff;
        margin-top: 50px;
        border-radius: 30px;
        padding-bottom: 100px;
        position: relative;
    }
    .descriptionSlider p {
        position: absolute;
        font-size: 70px;
        text-align: center;
        top: 27%;
        right: calc(50% - 296px);
        font-family: Arial;
    }
    .descriptionProblem {
        display: block;
        width: 86%;
        margin: 0px auto;
    }
    .descriptionProblem img {
        width: 50px;
        margin-right: calc(30% - 40px);
        margin-top: -50px
    }
    .descriptionSolution {
        display: block;
        width: 86%;
        margin: 0px auto;
    }
    .descriptionSolution img {
        width: 50px;
        margin-right: calc(30% - 40px);
        margin-top: -50px
    }
    .boldText {
        font-weight: 800;
        font-size: 30px;
    }
    .descriptionProblem-text {
        font-size: 20px;
    }
    .descriptionSolution {
        margin-top: 60px;
    }
    .descriptionButton {
        position: absolute;
        left: 2em;
        bottom: 1em;
    }
    .descriptionButton a {
        width: 100%;
        color: #000;
        border: 0px solid #0072ff91;
        padding: 6px 20px;
        border-radius: 100px;
        background: #0072ff91;
        font-size: 25px;
    }



</style>



<template lang="html">
    <div>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chap Inja</title>


        <div class="container">
            <Header></Header>
            <div class="blackboard"></div>
            <div class="chapInjaLogo">
                <img :src="require('../components/img/chapinja.png')" alt="">
                <div class="clearfix"></div>
            </div>
            <div class="introSection">
                <router-link to="/SignUp">
                    <div class="costumer col2 ambedMarginTop">
                        <div class="costumerImg col2">
                            <img class="chapInjalogoImg" :src="require('../components/img/Businessman_relaxing_at_desk.png')" alt="">
                        </div>
                        <div class="costumerText col2">
                            <p class="costumerText-subtext">نسخه چاپی اسنادت رو میخوای؟
                                <br>
                                زمان هم برات مهمه؟
                                <br>
                                به ما سر بزن.</p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </router-link>

                <router-link to="/SignUp">
                    <div class="owner col2-left ambedMarginTop">
                        <div class="ownerImg col2-left">
                            <img :src="require('../components/img/Image_1.png')" alt="">
                        </div>
                        <div class="ownerText col2-left">
                            <p class="ownerText-subtext">میخوای کسب و کارت رو توسعه بدی؟
                                <br/>
                                به ما سر بزن.</p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </router-link>

                <div class="clearfix"></div>
            </div>
            <div class="services">
                <div class="subService service1">
                    <img :src="require('../components/img/prof.png')" alt="">
                    <p>خدمات حرفه ای</p>
                </div>
                <div class="subService service2">
                    <img :src="require('../components/img/freeOrdering.png')" alt="">
                    <p>سفارش آسان</p>
                </div>
                <div class="subService service3">
                    <img :src="require('../components/img/support_bo.png')" alt="">
                    <p>پشتیبانی سریع</p>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="description">
                <div class="descriptionSlider">
                    <img :src="require('../components/img/description.png')" alt="">
                    <p> روزهای ما
                        <br/>
                        بیشتر از ۲۴ ساعت است</p>
                </div>
                <div class="descriptionProblem">
                    <p class="descriptionProblem-title boldText">مشکل اساسی چیه؟</p>
                    <img :src="require('../components/img/mainProblem.png')" alt="">
                    <p class="descriptionProblem-text" style="text-align: justify;"> برای هممون اتفاق افتاده که بخوایم برای چاپ یک برگه یا سند یا مدرک، بخوایم به مغازه ای مراجعه کنیم. اتفاقی که اونجا میوفته اینه که باید مدت زمان طولانی رو صرف کنیم تا سر مغازه دار خلوت بشه و تازه بپرسه از ما که " کارت چیه ؟ ". دیگه معلوم نیست بازم چقدر زمان صرف بشه تا بتونیم با مدرک چاپ شده، از مغازه خارح بشیم و به بقیه زندگی برسیم. ولی طبیعتا باید یک راه حلی باشه تا بتونیم این زمان های مرده رو زنده کنیم.

                    </p>
                </div>
                <div class="descriptionSolution">
                    <p class="descriptionSolution-title boldText">راه حل پیش ماست.</p>
                    <img :src="require('../components/img/solution.png')" alt="">
                </div>
                <div class="descriptionButton">
                    <router-link to="/WhyChapinja">بیشتر بخوانید</router-link>
                </div>

            </div>
            <Footer></Footer>
        </div>
        <router-view></router-view>
    </div>
</template>



<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    export default {
        name: "home",

        components:{
            Header,
            Footer
        }

    }

</script>