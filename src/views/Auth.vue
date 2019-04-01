<template lang="pug">
    .auth
        .content
            .content-title Вход
            form
                .error(v-if='getError') Не верный логин или пароль
                .label Адрес электронной почты
                input(v-model='email', type='email')
                .label Пароль
                input(v-model='password', type='password')
            .btn-primary.press(@click='toLogin') Продолжить

       

</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data () {
        return {
            email: 'taijased@gmail.ru',
            password: 'taijased'
        }
    },
    computed: {
        ...mapGetters({
            getLogin: "auth/getLogin",
            getPassword: "auth/getPassword",
            getError: "auth/getError"
        }),
    },
    methods: {
        ...mapActions({
            signin: "auth/signin"
        }),
        toLogin () {
            const payload = {
                email: this.email,
                password: this.password
            };
            this.signin(payload)
        }
    },
    created () {
        // this.email = this.getLogin
        // this.password = this.getPassword
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
    flex-direction column
    justify-content center
    align-items center
    .content
        display flex
        flex-direction column
        justify-content center
        align-items center
        .content-title 
            font-family 'RobotoBold'
            font-style normal
            font-weight 500
            line-height 21px
            font-size 28px
            color rgba(0, 0, 0, 0.9)
        form 
            width $width
            display flex
            flex-direction column
            justify-content center
            align-items flex-start
            font-family 'RobotoRegular'
            font-style normal
            font-weight normal
            margin 20px 0
            .label 
                margin-top 8px
                font-size 16px
            .error 
                margin-top 8px
                animation shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both
                font-size 16px
                color #E4746F

            input
                height $height
                width 100%
                margin 12px 0
                // padding-left 12px
                border: 1px solid rgba(0,0,0,0.3)
                border-radius $border-radius
                font-size 14px
        .btn-primary
            width 150px
            height $height
            background $primary
            border-radius $border-radius
            display flex
            flex-direction row
            justify-content center
            align-items center
            font-family 'RobotoBold'
            font-style normal
            font-weight 500
            line-height 21px
            font-size 16px
            color white
            user-select none
        .press 
            transform scale(1)
            transition transform .25s
            user-select none
            &:active 
                transform scale(0.9)
                transition transform .25s
</style>
