<template>
    <div class="header">
        <b-nav pills justified>
            <b-nav-item to="/" exact exact-active-class="active">صفحه اصلی</b-nav-item>
            <b-nav-item to="/SignIn" exact exact-active-class="active">ورود</b-nav-item>
            <b-nav-item to="/SignUp" exact exact-active-class="active">ثبت نام</b-nav-item>
            <b-nav-item to="/WhyChapinja" exact exact-active-class="active">چرا چاپ اینجا؟</b-nav-item>
            <b-nav-item to="/Dashboard" exact exact-active-class="active" >داشبورد</b-nav-item>
            <b-nav-item to="/AboutUs" exact exact-active-class="active">تیم ما</b-nav-item>
        </b-nav>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header{
        font-size: 24px;
    }
</style>