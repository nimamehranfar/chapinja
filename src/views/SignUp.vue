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
    .discription {
        margin-top: 15%;
        width: 96%;
        display: block;
        margin: 0px auto;
        padding: 5%;
        background: #fff;
        margin-top: 50px;
        border-radius: 30px;
        padding-bottom: 100px;
        position: relative;
    }
    .inputs {
        width: 30%;
    }
    .buttons-Nima{
        padding-right: calc(15% - 115px);
    }
    .button-Nima {
        width: 100px;
        border-radius: 15px !important;
        margin: 0 5px !important;
    }
    h2{
        text-align: center !important;
        font-size: 40px;
    }
    .line {
        position: relative;
        top: 20px;
        border: none;
        height: 6px;
        background: #2c3e50;
        margin-bottom: 50px;
    }


</style>


<template lang="html">
    <div>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sign Up</title>
        <!-- <link rel="icon" type="img/jpg"  href="../img/smallLogo.png" size="16*16" /> -->




        <div class="container">
            <Header></Header>
            <div class="blackboard"></div>
            <div class="discription">
                <div>
                    <h2>عضویت</h2>
                </div>
                <hr class="line">

                <b-form @submit="onSubmit" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            label="ایمیل شما:"
                            label-for="input-1"
                            description="ما هیچوقت ایمیل شما را با کسی به اشتراک نمی گذاریم"
                    >
                        <b-form-input
                                class="inputs"
                                id="input-1"
                                v-model="form.email"
                                type="email"
                                required
                                placeholder="لطفا ایمیل خود را وارد کنید"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="نام شما:" label-for="input-2">
                        <b-form-input
                                class="inputs"
                                id="input-2"
                                v-model="form.name"
                                required
                                placeholder="لطفا اسم خود را وارد کنید"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="پسوورد شما:" label-for="input-3">
                        <b-form-input
                                class="inputs"
                                id="input-3"
                                v-model="form.password"
                                required
                                placeholder="لطفا پسوورد شخصی خود را وارد کنید"
                                type="password"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-4" label="تکرار پسوورد شما:" label-for="input-4">
                        <b-form-input
                                class="inputs"
                                id="input-3"
                                v-model="form.passwordconfirm"
                                required
                                placeholder="لطفا پسوورد شخصی خود را دوباره وارد کنید"
                                type="password"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group>
                        <b-form-radio-group class="buttons-Nima"
                                            v-model="selected"
                                            buttons
                                            button-variant="outline-primary"
                                            size="lg"
                                            required>
                            <b-form-radio  class="button-Nima" name="some-radios" value="true">مغازه دار</b-form-radio>
                            <b-form-radio  class="button-Nima" name="some-radios" value="false">مشتری</b-form-radio>
                        </b-form-radio-group>
                    </b-form-group>
                    <div>
                        <b-form-group id="input-group-6" label="محله" label-for="input-6">
                            <b-form-input
                                    class="inputs"
                                    id="input-6"
                                    v-model="form.region"
                                    required
                                    placeholder="لطفا نام دقیق محله خود را وارد کنید"
                            ></b-form-input>
                        </b-form-group>
                    </div>

                    <b-button type="submit" variant="primary">Submit</b-button>
                </b-form>
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
        name: "SignUp",

        components: {
            Header,
            Footer,
        },
        data() {
            return {
                form: {
                    email: '',
                    name: '',
                    password:'',
                    passwordconfirm:'',
                    selected: '',
                    region:''
                },
                show: true,
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form))
            }
        }
    }
</script>
