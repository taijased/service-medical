<template lang="pug">
    .form
        el-form(label-position='left', :model='ruleForm', :rules="rules", status-icon, ref="ruleForm", class="creator-form")
            el-row(:gutter="20")
                el-col(:span="12")
                    el-form-item(prop="modeHand", :class="{'not-empty': ruleForm.firstName !== ''}")
                        el-select(v-model='ruleForm.modeHand', placeholder='Рабочие режимы тренажера кисти')
                            el-option(v-for='item in optionsHand', :key='item.value', :label='item.label', :value='item.value')
            el-row(:gutter="20")
                el-col(:span="12")
                    el-form-item(prop="modeFingers", :class="{'not-empty': ruleForm.firstName !== ''}")
                        el-select(v-model='ruleForm.modeFingers', placeholder='Рабочие режимы тренажера пальцев')
                            el-option(v-for='item in optionsFingers', :key='item.value', :label='item.label', :value='item.value')

        .controls
            router-link(to="/addSick/diagnosis") Назад
            el-button.btn-primary.press(@click="submitForm()", :loading="getSickStatus") Добавить

</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data() {
      
        var validateSelect = (rule, value, callback) => {
            if (value === null || value === "") {
                callback(new Error("Выберите режим"));
            } else {
                console.log(value);
                callback();
            }
        };
        return {
            ruleForm: {
                modeHand: null,
                modeFingers: null
            },
            rules: {
                modeHand: [{ validator: validateSelect, trigger: "blur" }],
                modeFingers: [{ validator: validateSelect, trigger: "blur" }],
            },
            optionsHand: [
                {
                    value: 'Сгибания кисти (вверх-вниз)',
                    label: 'Сгибания кисти (вверх-вниз)'
                },
                {
                    value: 'Сгибания кисти (вправо-влево)',
                    label: 'Сгибания кисти (вправо-влево)'
                },
                {
                    value: 'Фиксации кисти (метод Мышляева/Вахитова)',
                    label: 'Фиксации кисти (метод Мышляева/Вахитова)'
                },
            ],
            optionsFingers: [
                {
                    value: 'Cгибания пальцев',
                    label: 'Cгибания пальцев'
                },
                {
                    value: 'Cгибания пальцев с использованием датчиков давления(поддавки)',
                    label: 'Cгибания пальцев с использованием датчиков давления(поддавки)'
                },
                {
                    value: 'Тренировки пальцев с использованием датчиков давления',
                    label: 'Тренировки пальцев с использованием датчиков давления'
                },
            ]
        };
    },
    computed: {
        ...mapGetters({
            getSickStatus: "sick/getSickStatus"
        })
    },
    methods: {
        ...mapActions({
            createSick: "sick/createSick",
            setSickStatus: "sick/setSickStatus"
        }),
        submitForm() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    // this.setSickStatus(true)
                    // this.createSick(this.ruleForm)
                    console.log(this.ruleForm);
                } else {
                    return false;
                }
            });
        }
    }
};
</script>

<style lang="stylus" scoped>
$container = 5vw
$primary = #2EB14B

$height = 50px
$primary = #2EB14B
$width = 300px
$border-radius = 3px

$time-description = .25s


.form
    width 560px
    background: #D4E7E9;
    margin-left 50px
    border-radius: 29px;
    padding 50px
    padding-top 70px
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
        
.btn-primary {
    background: #1C3A5F;
    border-radius: 15px;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: color 0.3s, background 0.3s;
    font-family 'RobotoRegular'
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
    font-size: 20px;
    letter-spacing: -0.75px;
    width: 300px;
    height: 70px;
    &:hover {
        color: #000;
        background: #fff;
        transition: color 0.3s, background 0.3s;
        cursor: pointer;
    }
}
.el-input {
    input {
        margin: 0;
        border: 0;
        padding-left: 10px;
        padding-bottom: 5px;
        display: inline-block;
        vertical-align: middle;
        white-space: normal;
        background: none;
        line-height: 1;
        color: #1C3A5F;
        border-bottom: 1px solid rgba(255, 255, 255, 0.6);
        transition: color $time-description, border-bottom $time-description;
        height: 50px;
        width: 300px;
        // margin-top: -3px;
        line-height: 21px;
        font-size: 18px;
        border-radius: 0px;
        &:focus,
        &:hover {
        outline: 0;
        border-bottom: 1px solid rgba(255, 255, 255, 1);
        }
    }
    &__suffix {
        right: 0;
    }
}
.el-form-item {
    margin-bottom: 40px;
    font-family 'RobotoMedium'
    font-style: normal;
    font-weight: normal;
    color: #fff;
    textarea {
        resize: none;
        background: #000;
        border-top: none;
        border-left: none;
        border-right: none;
        height: 150px;
        width: 300px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 0px;
        color: #fff;
        padding-top: 15px;
        font-size: 18px;
        &:focus,
        &:hover {
        border-bottom: 1px solid rgba(255, 255, 255, 1);
        }
    }
    &:focus-within,
    &:hover {
        .label {
        color: #1C3A5F;

        font-size: 14px;
        top: -15px;
        left: 0;
        transition: color $time-description, top $time-description,
            left $time-description, font-size $time-description;
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        }
    }
    .label {
        height: 15px;
        position: absolute;
        top: 50%;
        left: 15px;
        font-family 'RobotoRegular'
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        line-height: normal;
        color: rgba(0,0,0,0.25)
        transition: color $time-description, top $time-description,
        left $time-description, font-size $time-description;
        z-index: 2;
        transform: translate(0, -50%);
    }
    &__error {
        font-family 'RobotoRegular'
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        color: #9a0f20;
    }
    &__content {
        .is-checked {
        .el-checkbox__inner {
            background-color: #7dbf4f;
            border-color: #7dbf4f;
            &:hover {
            border-color: #7dbf4f;
            }
        }
        .el-checkbox__label {
            color: #7dbf4f;
        }
        }
        .is-focus {
        .el-checkbox__inner {
            border-color: #7dbf4f;
            &:hover {
            border-color: #7dbf4f;
            }
        }
        }
    }
    .el-checkbox__label {
        font-family 'RobotoRegular'
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        color: #fff;
    }
}
.not-empty {
    .label {
        color: #1C3A5F;

        font-size: 14px;
        top: -15px;
        left: 0;
        transition: color $time-description, top $time-description,
        left $time-description, font-size $time-description;
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}
.is-error {
    .el-input__inner {
        border-color: #9a0f20 !important;
    }
    .el-input__icon {
        color: #9a0f20 !important;
    }
}
.disabled-btn {
  user-select: none;
  pointer-events: none;
  opacity: 0.7;
}



.el-select
    width 420px


</style>
