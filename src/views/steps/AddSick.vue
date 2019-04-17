<template lang="pug">
    .add-sick
        img(src="../../assets/new.svg")
        .steps
            el-steps(:space='100', :active='getSteps', simple='', finish-status="success")
                el-step(title='ФИО', icon='el-icon-edit')
                el-step(title='Диагноз', icon='el-icon-document')
                el-step(title='Тренажер', icon='el-icon-setting')
            transition(name="fade", mode="out-in", :css="true")
                router-view
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            getSteps: "sick/getSteps"
        })
    },
    methods: {
        ...mapActions({
            setSteps: "sick/setSteps"
        })
    },
    created() {
        this.setSteps(0)
        this.$router.push('/addSick')
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
.steps 
    display flex
    flex-direction column
    justify-content center
    align-items center
    .el-steps
        margin-bottom 25px
        width 500px
        background rgba(0,0,0,0)

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
