<template lang="pug">
    .add-sick
        img(src="../assets/sick-edit.svg")
        .form
            el-breadcrumb(separator='/')
              el-breadcrumb-item(:to="{ path: '/sick' }") ФИО
              el-breadcrumb-item(:to="{ path: '/sick/diagnosis' }") Диагноз
              el-breadcrumb-item(:to="{ path: '/sick/simulatormode' }") Режимы тренажеров
              el-breadcrumb-item(:to="{ path: '/charts' }") Графики
            transition(name="fade", mode="out-in", :css="true")
              router-view
</template>

<script>

</script>

<style lang="stylus">
$time-description = .25s

$fade-right-width = -500px
$fade-left-width = 500px

.add-sick
  width 100%
  height 100%
  display flex
  flex-direction row
  justify-content center
  align-items center
  background: #E6F1F3;
  img 
    width 400px
  .form
    width 560px
    background: #D4E7E9;
    margin-left 50px
    border-radius: 29px;
    padding 50px
    .el-breadcrumb
      margin-bottom 50px


.fade-enter {
  -webkit-transform: translateX($fade-left-width);
    transform: translateX($fade-left-width);
    opacity: 0;
}
.fade-enter-to {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
}
.fade-leave {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
}
.fade-leave-to {
  -webkit-transform: translateX($fade-right-width);
  transform: translateX($fade-right-width);
  opacity: 0;
}
.fade-enter-active {
  transition: opacity $time-description, transform $time-description;
}
.fade-leave-active {
  transition: opacity $time-description, transform $time-description;
}
</style>
