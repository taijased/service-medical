<template lang="pug">
    .auth
        img(src="../assets/logo.svg")
        .form
            .form__title Вход в систему
            form
                .error(:class="{'error-true': getError}") Не верный логин или пароль.
                input(v-model='email', type='email', placeholder="Логин")
                input(v-model='password', type='password', placeholder="Пароль")
                .controls
                    router-link(to="/registration") Регистрация
                    .btn-primary.press(@click='toLogin') Войти

</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data () {
        return {
            email: '',
            password: ''
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
        toLogin () {
            const payload = {
                login: this.email,
                pass: this.password
            };
            this.signin(payload)
        }
    }
}
</script>

<style lang="stylus" scoped>
$container = 5vw
$primary = #2EB14B

$height = 50px
$primary = #2EB14B
$width = 340px
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
        height 368px
        display flex
        flex-direction column
        justify-content center
        align-items center
        margin-left 120px
        background: #D0E8EA;
        border-radius: 31px;
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
                font-size 16px
                color #D0E8EA
            .error-true
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
