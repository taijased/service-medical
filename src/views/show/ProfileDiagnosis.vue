<template lang="pug">
    el-form(label-position='left', :model='ruleForm', :rules="rules", status-icon, ref="ruleForm", class="creator-form")
      el-row(:gutter="20")
            el-col(:span="12")
              el-form-item(:class="{'not-empty': ruleForm.diagnosis !== ''}")
                el-input(type="textarea", v-model="ruleForm.diagnosis", maxlength="160")
                .label Диагноз
            el-col(:span="12")
              el-form-item(:class="{'not-empty': ruleForm.message !== ''}")
                el-input(type="textarea", v-model="ruleForm.message", maxlength="160")
                .label Комментарий  
      el-row(:gutter="20").not-empty
            el-col(:span="10")
              el-form-item(prop="dateBorn")
                el-date-picker(v-model='ruleForm.dateBorn', type='date', placeholder='День рождения')
                .label День рождения
            el-col(:span="6")
              el-form-item(prop="gender")
                el-switch(
                    v-model='ruleForm.gender', 
                    active-color='#23395C', 
                    inactive-color='#ff4949', 
                    active-text='М', 
                    inactive-text='Ж')
      el-row(:gutter="20").not-empty                          
            el-col(:span="10")
                el-form-item.not-empty
                  el-date-picker(v-model='ruleForm.dateEntry', type='date', :disabled="true")
                  .label Дата поступлеия
      .controls
        .btn-primary.press(@click="submitForm()") Сохранить
        .btn-primary.btn-success.press(@click="deleteSick()") Выписать


</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    var validateMessage = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Обязательное поле"));
      } else {
        callback();
      }
    };
    var validateDate = (rule, value, callback) => {
      if (value === null) {
        callback(new Error("Обязательное поле"));
      } else {
        console.log(value);
        callback();
      }
    };
    return {
      ruleForm: {
        message: "",
        gender: true,
        diagnosis: "",
        dateBorn: null,
        dateEntry: null
      },
      rules: {
        dateBorn: [{ validator: validateDate, trigger: "blur" }]
      }
    };
  },
  computed: {
    ...mapGetters({
      getSick: "sick/getSick"
    })
  },
  methods: {
    ...mapActions({
      deleteSick: "sick/deleteSick",
      updateSickDiagnosis: "sick/updateSickDiagnosis"
    }),
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.updateSickDiagnosis(this.ruleForm);
        } else {
          return false;
        }
      });
    }
  },
  created() {
    this.$nextTick(() => {
      if (this.getSick) {
        this.ruleForm.dateBorn = this.getSick.birth_date;
        this.ruleForm.gender = this.getSick.gender;
        this.ruleForm.dateEntry = this.getSick.receipt_date;
        this.ruleForm.diagnosis = this.getSick.diagnosis;
        this.ruleForm.message = this.getSick.comments;
      } else {
        this.$router.push('/main')
      }
    });
  }
};
</script>

<style lang="stylus" scoped>
$container = 5vw;
$primary = #2EB14B;
$height = 50px;
$primary = #2EB14B;
$width = 300px;
$border-radius = 3px;
$time-description = 0.25s;

.add-sick {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #E6F1F3;

  img {
    width: 400px;
  }

  .form {
    width: 560px;
    background: #D4E7E9;
    margin-left: 50px;
    border-radius: 29px;
    padding: 50px;

    .controls {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      margin-top: 23px;

      a {
        font-family: 'RobotoRegular';
        font-style: normal;
        line-height: 21px;
        font-size: 16px;
        color: #27597A;
        transform: color 0.2s;
        text-decoration: none;
        opacity: 1;

        &:hover {
          opacity: 0.8;
          transform: opacity 0.2s;
          text-decoration: underline;
        }
      }

      .btn-primary {
        width: 178px;
        height: 42px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-family: 'RobotoRegular';
        font-style: normal;
        line-height: 21px;
        font-size: 16px;
        color: white;
        user-select: none;
        background: #27597A;
        border-radius: 15px;
        opacity: 1;
        transform: opacity 0.2s;

        &:hover {
          cursor: pointer;
          opacity: 0.8;
          transform: opacity 0.2s;
        }
      }

      .press {
        transform: scale(1);
        transition: transform 0.25s;
        user-select: none;

        &:active {
          transform: scale(0.9);
          transition: transform 0.25s;
        }
      }

      .btn-success {
        background: #5DB1B5;
      }
    }
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

    &:focus, &:hover {
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
  font-family: 'RobotoMedium';
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

    &:focus, &:hover {
      border-bottom: 1px solid rgba(255, 255, 255, 1);
    }
  }

  &:focus-within, &:hover {
    .label {
      color: #1C3A5F;
      font-size: 14px;
      top: -15px;
      left: 0;
      transition: color $time-description, top $time-description, left $time-description, font-size $time-description;
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
    font-family: 'RobotoRegular';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    line-height: normal;
    color: rgba(0, 0, 0, 0.25);
    transition: color $time-description, top $time-description, left $time-description, font-size $time-description;
    z-index: 2;
    transform: translate(0, -50%);
  }

  &__error {
    font-family: 'RobotoRegular';
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
    font-family: 'RobotoRegular';
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
    transition: color $time-description, top $time-description, left $time-description, font-size $time-description;
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

.btn-charts {
  width: 178px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'RobotoRegular';
  font-style: normal;
  line-height: 21px;
  font-size: 16px;
  color: white;
  user-select: none;
  background: #E47470;
  border-radius: 15px;
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s, transform 0.25s;
  user-select: none;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.2s;
  }

  &:active {
    transform: scale(0.9);
    transition: transform 0.25s;
  }
}

.el-breadcrumb {
  margin-bottom: 50px;
}
</style>
