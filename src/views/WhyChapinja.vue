<style scoped>
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
    body {
        direction: rtl;
        text-align: right;
        font-family: 'ambedYekan';
        font-size: 14px;
        margin: 0px;
        padding: 0px;
    }
    body, html {
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
    .container {
        width: 100%;
        max-width: 100%; /* changend*/
        min-height: 100%;
        margin: 0px auto;
        display: block; /* inline or block */
        background-image: url('/src/components/img/background.png');
        background-size: contain; /* changend*/
        background-repeat: no-repeat;
        position: relative;
        padding-bottom: 30px;
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
    .chapInjaLogo {
        width: 50%;
        display: block;
        margin: 0px auto;
        position: relative;
        height: 10px;
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
        margin-top: 15px;
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
        border: 0px solid #0072ff91;
        padding: 6px 20px;
        border-radius: 100px;
        background: #0072ff91;
        color: #fff;
        font-size: 25px;
        transition-duration: 300ms ;
    }

    .descriptionButton a:hover {

        color: white;
        transition-duration: 300ms;
    }
</style>

<template>
    <div>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>چرا چاپ اینجا؟</title>
        <!-- <link rel="icon" type="img/jpg"  href="../img/smallLogo.png" size="16*16" /> -->

        <div class="container">
            <Header></Header>
            <div class="blackboard"></div>
            <!-- <img class="backImg" src="img/background.png" alt="background img"> -->

            <div class="chapInjaLogo">

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
                    <p class="descriptionProblem-text" style="text-align: justify;">ما به عنوان یک واسطه، به شما کمک میکنیم تا بتونید از یک جای دیگه ای، سند یا اسنادی رو که میخواید با شرایطی که شما داشته باشید ، مثل تعداد صفحات یا رنگی یا سیاه و سفید بودن و نوع کاغذ، به عنوان یک سفارش ثبت کنید تا در اسرع وقت انجام بشه که بدون هیچ هدر رفتن زمانی بتونید اون رو تحیول بگیرید. شما با عضویت در سایت ما میتونید هر زمان ، به هر مغازه ای که بخواید اسناد خودتون رو برای چاپ بفرسیتد و منتظر بمونید تا به شما اعلام بشه که برید و تحویل بگیرید
                    </p>

                </div>

            </div>
            <Footer></Footer>
        </div>

    </div>

</template>

<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";

    export default {
        name: "WhyChapinja",

        components:{
            Header,
            Footer
        }

    }
</script>
