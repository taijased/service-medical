<template lang="pug">
  .account
    .doctor
      .doctor-card
        img(src="../assets/nurse.svg")
        .doctor-info(v-if="getAuthUser")
          .doctor-name {{getAuthUser.first_name}}
          .doctor-family {{getAuthUser.last_name}}
      router-link(to="/addsick")
        .add-sick
          img(src="../assets/note.svg")
          .add-sick-title Добавить пациента
    .sicks
      el-row
        h1 Научная больница Инженернерного института
        h3 Пациенты
      el-row
        el-col(
          :xs='24', 
          :sm='12', 
          :md='8', 
          :lg='8', 
          v-for="(item, index) in getSicks", 
          :key="'sick-key' + index")
          .sick-card(v-if="item", @click="sickTapped(item)")
            img(v-if="item.gender", src="../assets/male.svg")
            img(v-else, src="../assets/female.svg")
            .sick-info
              .sick-name {{item.first_name}}
              .sick-family {{item.last_name}}
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getSicks: "sick/getSicks",
      getAuthUser: "auth/getAuthUser"
    }),
  },
  methods: {
    ...mapActions({
      fetchListSick: "sick/fetchListSick",
      setSick: "sick/setSick"
    }),
    sickTapped(data) {
      this.setSick(data)
      this.$router.push('/sick')
    }
  },
  created () {
    this.fetchListSick()
  }
}
</script>

<style lang="stylus" scoped>
.account
  width 100%
  height 100%
  display flex
  flex-direction row
  justify-content center
  align-items center
  background: #E6F1F3;
  .doctor 
    width 30%
    height 100%
    // background: #D0E8EA;
    display flex
    flex-direction column
    justify-content space-between
    align-items center
    a 
      color inherit
      text-decoration none
    .add-sick
      display flex
      flex-direction row
      justify-content center
      align-items center
      background #35B4B7
      border-radius: 29px;
      width: 300px;
      height 100px
      margin-bottom 30px
      transform scale(1)
      user-select none
      transition transform .25s

      &:hover
        cursor pointer

      &:active 
        transform scale(0.9)
        transition transform .25s
      img
        width 40px
      .add-sick-title
        font-family 'RobotoMedium'
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: normal;
        color: white;
        margin-left 20px
      
      
    .doctor-card
      margin-top 30px
      display flex
      flex-direction row
      justify-content center
      align-items center
      background #35B4B7
      border-radius: 29px;
      width: 300px;
      height: 200px;
      img
        width 30%
      .doctor-info
        display flex
        flex-direction column
        justify-content flex-start
        align-items center
        font-family 'RobotoBold'
        font-style: normal;
        font-weight: bold;
        font-size: 26px;
        line-height: normal;
        color: white;
        margin-left 20px
        .doctor-name 
          width 100%
          text-align left
        .doctor-family
          width 100%
          text-align left

          
  .sicks
    width 70%
    height 100%
    overflow-y auto
    h1 
      font-family 'RobotoBold'
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: normal;
      color: #27597A;
      text-align left
      margin-left 10px
    h3 
      font-family 'RobotoRegular'
      font-style: normal;
      font-size: 28px;
      line-height: normal;
      color: rgba(0,0,0,0.7);
      text-align left
      margin-left 10px

    .sick-card
      width 250px
      height 190px
      background: #D0E8EA;
      border-radius: 29px;
      margin 20px 10px
      margin-top 30px
      display flex
      flex-direction row
      justify-content center
      align-items center
      &:hover
        cursor pointer
      img
        width 30%
      .sick-info
        display flex
        flex-direction column
        justify-content flex-start
        align-items center
        font-family 'RobotoBold'
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: normal;
        margin-left 20px
        color: #27597A;
        .sick-name 
          width 100%
          text-align left
        .sick-family
          width 100%
          text-align left
</style>

