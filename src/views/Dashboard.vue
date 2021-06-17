<style scoped>
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
    .container{
        width: 100%;
        max-width: 1600px;
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
    .blackboard {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #0072ff91;
        top: 0;
        right: 0;
        z-index: -1;
    }
    .description {
        width: 96%;
        display: block;
        margin: 0px auto;
        background: #fff;
        margin-top: 50px;
        border-radius: 30px;
        position: relative;
        text-align: left;
    }
    .sidebar {
        height: 430px;
        width: 20%;
        position: relative;
        z-index: 15;
        background-color: #020082;
        border-radius: 30px;
        padding: 50px 5px 50px 5px;
        float: left;
    }

    .Dashboard{

        width: 80%;
        position: relative;
        z-index: 15;
        background-color: #fff;
        border-radius: 30px;
        padding: 50px 5px 50px 5px;
        float: right;
    }

    .sidebar a {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        margin-right:  20%;
        font-size: 20px;
        color: black;
        display: block;
    }

    .sidebar a:hover {
        color: #f1f1f1;
    }
    .profile-img{
        text-align: center;
        width: 100%;
        max-width: 200px;
        max-height: 200px;
        height: 100%;
    }
    .profile-img img{
        border-radius: 100%;
        width: 70%;
        height: 100%;
    }
    .profile-tab label{
        font-weight: 600;
    }
    .profile-tab p{
        font-weight: 600;
        color: #0062cc;
    }
    .panel-content{
        margin-top: 20px;
        text-align: center !important;
    }
    .buttons-Nima{
        padding-right: calc(68% - 420px);
    }
    .button-Nima {
        width: 200px;
        border-radius: 5px !important;
        margin: 0 5px !important;
    }

</style>


<template>
    <div>

        <b-form-group class="buttons-Nima">
            <b-form-radio-group v-model="User"
                                buttons
                                button-variant="outline-primary"
                                required>
                <b-form-radio  class="button-Nima" name="some-radios" value="A">مغازه دار</b-form-radio>
                <b-form-radio  class="button-Nima" name="some-radios" value="B">مشتری</b-form-radio>
            </b-form-radio-group>
        </b-form-group>


        <div v-if="User=='B'">

            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Chap Inja</title>


            <div class="container">
                <Header></Header>
                <div class="blackboard"></div>
                <div class="description">
                    <div class="sidebar" id="Left_panel">
                        <a href="#">{{users.id}}</a>
                        <a href="#">{{users.name}}</a>
                        <a href="#">{{users.email}}</a>
                        <div class="clearfix"></div>
                    </div>
                    <div class="Dashboard" id="Right_panel">
                        <b-form-group class="buttons-Nima">
                            <b-form-radio-group v-model="selected"
                                                buttons
                                                button-variant="outline-primary"
                                                required>
                                <b-form-radio  class="button-Nima" name="some-radios" value="A">سفارش جدید</b-form-radio>
                                <b-form-radio  class="button-Nima" name="some-radios" value="B">لیست سفارشات</b-form-radio>
                            </b-form-radio-group>
                        </b-form-group>
                        <div v-if="selected=='A'">
                            <b-form-group id="input-group-1" label="آی دی کافی نت چی و فایل برای چاپ:" label-for="input-1">
                                <b-form-input
                                        class="inputs"
                                        id="input-1"
                                        v-model="seller_id"
                                        required
                                        placeholder="لطفا آی دی را وارد کنید"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-file
                                    class="input_file"
                                    v-model="file"
                                    :state="Boolean(file)"
                                    placeholder="فایلی را انتخاب کنید یا اینجا رها کنید"
                                    drop-placeholder="فایل را اینجا رها کنید"
                            ></b-form-file>
                            <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
                            <b-button @click="onSubmit" variant="primary">Submit</b-button>

                        </div>
                        <div v-else>
                            <b-list-group >
                                <b-list-group-item
                                        href="#"
                                        class="flex-column align-items-start"
                                        v-for="result in post"
                                        v-bind:key="result.userId"
                                >
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-1">{{ result.title }}</h6>
                                        <small>{{ result.id }}</small>
                                    </div>

                                    <p class="mb-1">{{ result.body }}</p>

                                </b-list-group-item>
                            </b-list-group>

                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
            <router-view></router-view>
        </div>








        <div v-else-if="User=='A'">
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Chap Inja</title>


            <div class="container">
                <Header></Header>
                <div class="blackboard"></div>
                <div class="description">
                    <div class="sidebar" >
                        <a href="#">{{users.id}}</a>
                        <a href="#">{{users.name}}</a>
                        <a href="#">{{users.email}}</a>
                        <div class="clearfix"></div>
                    </div>
                    <div class="Dashboard">
                        <b-form-group class="buttons-Nima">
                            <b-form-radio-group v-model="selected"
                                                buttons
                                                button-variant="outline-primary"
                                                required>
                                <b-form-radio  class="button-Nima" name="some-radios" value="A">دریافت سفارش</b-form-radio>
                                <b-form-radio  class="button-Nima" name="some-radios" value="B">لیست سفارشات</b-form-radio>
                            </b-form-radio-group>
                        </b-form-group>
                        <div v-if="selected=='A'">
                            <label>دریافت آخرین سفارش: </label>
                            <b-button @click="ondownload" variant="primary">download</b-button>

                        </div>
                        <div v-else>
                            <b-list-group >
                                <b-list-group-item
                                        href="#"
                                        class="flex-column align-items-start"
                                        v-for="result in post"
                                        v-bind:key="result.userId"
                                >
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-1">{{ result.title }}</h6>
                                        <small>{{ result.id }}</small>
                                    </div>

                                    <p class="mb-1">{{ result.body }}</p>

                                </b-list-group-item>
                            </b-list-group>

                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    import axios from "axios";
    export default {
        name: "Dashboard",

        components:{
            Header,
            Footer
        },
        data() {
            return {
                selected: '',
                User:'B',
                seller_id:'',
                file: null,
                users:{
                    id:'1',
                    name : '2',
                    email: '3'
                },
                orders: [
                    { filename: 'Foo Bar', sellername: 'foo@bar.com' },
                    { filename: 'John Doh', sellername: 'john@doh.com' }
                ],
                loading: false,
                post: null,
                error: ""
            }
        },
        created: function() {
            this.loading = true;
            axios
                .get("https://jsonplaceholder.typicode.com/posts")
                .then(res => {
                    this.loading = false;
                    this.post = res.data;
                })
                .catch(err => {
                    this.loading = false;
                    this.error = err;
                });
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.seller_id))
            },
            onDownload(evt2){
                evt2.preventDefault()
                alert(JSON.stringify(this.seller_id))
            }
        }
    }
</script>
