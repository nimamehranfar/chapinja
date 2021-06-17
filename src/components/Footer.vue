<style scoped>
    @font-face {
        font-family: 'ambedYekan';
        src: url('fonts/Yekan.eot'); /* IE9 Compat Modes */
        src: url('fonts/Yekan.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            /*url('fonts/Yekan.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/Yekan.woff') format('woff'), /* Pretty Modern Browsers */
        url('fonts/Yekan.ttf')  format('truetype'), /* Safari, Android, iOS */
        url('fonts/Yekan.svg#svgFontName') format('svg'); /* Legacy iOS */
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
        text-align: right !important;
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
        max-width: 1600px;
        margin: 0px auto;
        display: block;
        background-image: url('img/background.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed; /* eslah */
        position: relative;
        overflow: hidden; /* eslah */
    }
    .clearfix { /* for solving float problem */
        width: 100%;
        clear: both;
    }
    .footer {
        width: 98%;
        display: block;
        margin: 0px auto !important;
        padding: 0px 10% !important;
        border-radius: 30px;
        background: #020082;
        text-align: right !important;

    }
    .col2 {
        display: block;
        float: right;
    }
    .col3 {
        display: block;
        float: right;
        width: 33.333333%;
    }
    .col4 {
        display: block;
        float: right;
        width: 25%;
    }
    .subFooter ul {
        list-style: none;
    }
    .socialLogo img {
        width: 25px;
    }
    .subLinks a {
        color: #fff;
    }
    .subFooter p {
        color: #c4c4c4;
    }
    .subFooter3 img {
        width: 75%;
    }
    .col4Logo {
        margin-bottom: 10px;
    }
    .contactUsNumber a {
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
    }
    .contactUsNumber {
        margin-top: 5%;
    }
    .socialLogo {
        margin: 0px 5px;
    }



</style>


<template>
    <div class="container">
    <footer class="footer">
        <div class="col4 subFooter subFooter1">
            <div class="col1Title">
                <p class="col1Text">لینک های شخصی</p>
            </div>
            <div class="col1Links">
                <ul class="subLinks subLinks1">
                    <li>
                        <router-link to="/">داشبورد</router-link>
                    </li>
                    <li>
                        <router-link to="/">ثبت سفارش جدید</router-link>
                    </li>
                    <li>
                        <router-link to="/">تغییر اطلاعات کاربری</router-link>
                    </li>

                </ul>
            </div>
        </div>

        <div class="col4 subFooter subFooter2">
            <div class="col2Title">
                <p class="col2Text">دسترسی سریع</p>
            </div>
            <div class="col2Links">
                <ul class="subLinks subLinks2">
                    <li>
                        <router-link to="/">صفحه اصلی</router-link>
                    </li>
                    <li>
                        <router-link to="/SignIn">ورود</router-link>
                    </li>
                    <li>
                        <router-link to="/SignUp">ثبت نام</router-link>
                    </li>
                    <li>
                        <router-link to="/AboutUs">درباره ما</router-link>
                    </li>
                </ul>
            </div>

        </div>

        <div class="col4 subFooter subFooter3">
            <img :src="require('../components/img/chapinja.png')" alt="">
        </div>

        <div class="col4 subFooter subFooter4">
            <div class="col4Logo">
                <p>ما را در شبکه های اجتماعی دنبال کنید</p>
            </div>
            <div class="socialMedia">
                <div class="socialLogoWrapper">
                        <span class="socialLogo col2">
                            <a href="https://instagram.com/N._mehranfar">
                                <img :src="require('../components/img/instagramLogo.png')" alt="instagram logo">
                            </a>
                        </span>
                    <span class="socialLogo col2">
                            <a href="https://t.me/porsesh37">
                                <img :src="require('../components/img/telegramLogo.png')" alt="telegram logo">
                            </a>
                        </span>
                    <div class="clearfix"></div>
                </div>
                <hr class="socialMediaSep">
                <div class="contactUsNumber">
                    <p>شماره تماس: <a href="tel: 09382706214">۰۹۳۸۲۷۰۶۲۱۴</a></p>
                </div>

            </div>

        </div>
        <div class="clearfix"></div>
    </footer>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>