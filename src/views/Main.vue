<template lang="pug">
  .account
    .doctor
      .doctor-card
        img(src="../assets/nurse.svg")
        .doctor-info
          .doctor-name Мария
          .doctor-family Спиридонова
        
    .sicks
      el-row
        h1 Пациенты
      el-row
        el-col(
          :xs='24', 
          :sm='12', 
          :md='8', 
          :lg='6', 
          :xl='3',
          v-for="(item, index) in getSicks", 
          :key="'sick-key' + index")
          .sick-card
            div {{item.name + " | " + item.age}}
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getSicks: "sick/getSicks",
    }),
  },
  methods: {
    ...mapActions({
      fetchListSick: "sick/fetchListSick"
    }),
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
    background: #D0E8EA;
    .doctor-card
      display flex
      flex-direction row
      justify-content center
      align-items center
      background #35B4B7
      border-radius: 29px;
      margin 20px 10px
      .doctor-info
        display flex
        flex-direction column
        justify-content flex-start
        align-items center
        
  .sicks
    // width 70%
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
    .sick-card
      width 200px
      height 190px
      background: #D0E8EA;
      border-radius: 29px;
      display flex
      flex-direction row
      justify-content center
      align-items center
      margin 20px 10px
</style>

