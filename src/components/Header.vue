<template>
    <div class="header">
        <b-nav pills justified>
            <b-nav-item to="/" exact exact-active-class="active">صفحه اصلی</b-nav-item>
            <b-nav-item to="/SignIn" exact exact-active-class="active">ورود</b-nav-item>
            <b-nav-item to="/SignUp" exact exact-active-class="active">ثبت نام</b-nav-item>
            <b-nav-item v-if="logged_in==true" to="/Dashboard" exact exact-active-class="active" >داشبورد</b-nav-item>
       </b-nav>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                logged_in:'false',
            }
        },
        created () {
            const loggedIn = localStorage.getItem('user');

            if (loggedIn) {
                this.logged_in=true;
            }
        }
    }
</script>

<style scoped>
    .header{
        font-size: 24px;
    }
</style>