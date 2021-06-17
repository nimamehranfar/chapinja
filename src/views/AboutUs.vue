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
        text-align: center;
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
        background-size: cover;; /* changend*/
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

    .descriptionSlider {
        position: relative;
        border:1px solid #c4c4c4;
        border-radius: 15px 15px 5px 5px;
        background: #B0E0E6;
        width: 98.6% !important;
        height: 50px ;
        right: 0.7%;
        left: 0.7%;
        top : 8px;


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
        font-size: 40px;
        text-align: right;
        top: -15%;
        right: calc(2.5% - 5px);

    }
    .descriptionContent {
        display: block;
        width: 86%;
        margin: 0px auto;
    }
    .descriptionContent img {
        width: 50px;
        margin-right: -50px;
        margin-top: -5%;
    }
    .descriptionSolution {
        display: block;
        width: 86%;
        margin: 0px auto;
    }
    .descriptionSolution img {
        width: 50px;
        margin-right: -50px;
        margin-top: -5%;
    }
    .boldText {
        font-weight: 800;
        font-size: 30px;
    }
    .descriptionContent-title{
        font-size: 30px;
        margin-top: 30px ;
    }
    .descriptionContent-text {
        font-size: 20px;
    }
    .descriptionSolution {
        margin-top: 60px;
    }
    .descriptionLogo {
        width: 10%;
        display: block;
        margin: 0px auto;
        position: relative;
        height: 50px;
        color: #fff;
        margin-top: 50px;
        font-size: 30px;
        transition-duration: 300ms ;
    }

    .descriptionLogo a:hover {
        opacity: 0.5;
        transition-duration: 300ms;
    }
    .descriptionLogo1 {
        position: absolute;
        top:15px;
        right: -10px;
        color: #fff;
    }
    .descriptionLogo2 {
        position: absolute;
        top: -15px;
        right: 10px;
    }
</style>


<template>
    <div>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>تیم توسعه دهنده</title>
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
                    <p> این تیم افتخار ماست ...</p>
                </div>
                <div class="descriptionContent">
                    <p class="descriptionContent-title">هدف از این سایت</p>
                    <img src="img/purpose-icon-vector-sign-symbo.png" alt="">
                    <p class="descriptionContent-text" style="text-align: justify;"> شده تا حالا بری یه مغازه برای چاپ یه کاغذ ، کلی تو صف معطل بشی؟ برا ما که زیاد اتفاق اقتاده
                        از اون جایی که ما میدونیم وقت شما براتون مهمه، تصمیم گرفتیم تا بیایم یه واسطه ای بین شما و مغازه مورد نظرتون بشیم تا شما با خیال راحت از زمان نجات یافته به بهترین شکل استفاده کنید
                    </p>
                </div>
                <div class="descriptionContent">
                    <p class="descriptionContent-title"> تیم ما </p>
                    <img src="img/ID6560543_preview.png" alt="">
                    <p class="descriptionContent-text" style="text-align: justify;"> تیم ما از سه عضو تشکیل شده
                        مسیح مجیدی ، که برنامه نویسی بک سایت رو انجام داده
                        علی طبسی ، که طراحی و دیزاین سایت رو به عهده دارن
                        ونیما مهرانفر ، که ایشون هم برنامه نویسی فرانت رو انجام داده و در طراحی و دیزاین صفحات همکاری کردن.
                        همه ی ما موظفیم تا از هدر رفتن زمان شما جلوگیری کنیم . خوشحال میشیم اگه تو این راه ما رو از نظرات و انتقاداتتون باخبر کنین . راه های ارتباطی ما رو میتونید پایین سایت ببینید </p>

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
        name: "AboutUs",

        components:{
            Header,
            Footer
        }

    }
</script>
