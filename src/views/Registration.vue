<template lang="pug">
    .auth
        img(src="../assets/logo-registration.svg")
        .form
            .form__title Регистрация
            form
                .error(v-if='getError') Не верный логин или пароль
                input(v-model='email', type='email', placeholder="Username")
                input(v-model='password', type='password', placeholder="Password")
                input(v-model='checkPass', type='password', placeholder="Reapet password")
                .controls
                    .btn-primary.press(@click='toRegistration') Зарегистрироваться

</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data () {
        return {
            email: 'taijased@gmail.ru',
            password: 'taijased',
            checkPass: ''
        }
    },
    computed: {
        ...mapGetters({
            getError: "auth/getError"
        }),
    },
    methods: {
        ...mapActions({
            signin: "auth/signin"
        }),
        toRegistration () {
            const payload = {
                email: this.email,
                password: this.password
            };
            console.log(payload);
            // this.signin(payload)
        }
    }
}
</script>

<style lang="stylus" scoped>
$container = 5vw
$primary = #2EB14B

$height = 50px
$primary = #2EB14B
$width = 300px
$border-radius = 3px
.auth
    width 100%
    height 100%
    display flex
    flex-direction row
    justify-content center
    align-items center
    background: #E6F1F3;
    .form
        width 441px
        // height 368px
        display flex
        flex-direction column
        justify-content center
        align-items center
        margin-left 120px
        background: #D0E8EA;
        border-radius: 31px;
        padding 31px 0
        &__title
            font-family 'RobotoRegular'
            font-style: normal;
            font-weight: normal;
            font-size: 32px;
            line-height: normal;
            color: #27597A;
            text-align left 
        form 
            width $width
            display flex
            flex-direction column
            justify-content center
            align-items center
            font-family 'RobotoRegular'
            font-style normal
            font-weight normal
            margin 20px 0
            .error 
                margin-top 8px
                animation shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both
                font-size 16px
                color #E4746F

            input
                display: block;
                height 50px
                width 100%
                margin 12px 0
                padding-left 28px
                border: none;
                background: #FFFFFF;
                border-radius: 15px;
                outline:none;
                font-family 'RobotoRegular'
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: normal;
                color: rgba(0,0,0,0.25)
            .controls
                width 100%
                display flex
                flex-direction row
                justify-content space-around
                align-items center
                margin-top 23px
                a
                    font-family 'RobotoRegular'
                    font-style normal
                    line-height 21px
                    font-size 16px
                    color #27597A
                    transform color .2s
                    text-decoration none
                    opacity 1
                    &:hover
                        opacity .8
                        transform opacity .2s
                        text-decoration underline

                .btn-primary
                    width 178px
                    height 42px
                    display flex
                    flex-direction row
                    justify-content center
                    align-items center
                    font-family 'RobotoRegular'
                    font-style normal
                    line-height 21px
                    font-size 16px
                    color white
                    user-select none
                    background: #27597A;
                    border-radius: 15px;
                    opacity 1
                    transform opacity .2s
                    &:hover
                        cursor pointer
                        opacity .8
                        transform opacity .2s
                .press 
                    transform scale(1)
                    transition transform .25s
                    user-select none
                    &:active 
                        transform scale(0.9)
                        transition transform .25s

.form input::-webkit-input-placeholder {
    font-family 'RobotoRegular'
	font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: normal;
    color: rgba(0,0,0,0.25)
}

.form input:-moz-placeholder {
	font-family 'RobotoRegular'
	font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: normal;
    color: rgba(0,0,0,0.25)
}

.form input::-moz-placeholder {
	font-family 'RobotoRegular'
	font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: normal;
    color: rgba(0,0,0,0.25)
}

.form input:-ms-input-placeholder {
	font-family 'RobotoRegular'
	font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: normal;
    color: rgba(0,0,0,0.25)
}
</style>
