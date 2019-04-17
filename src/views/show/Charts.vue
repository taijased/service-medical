<template lang="pug">
    .charts
        el-container(v-if="getChartsOptions")
            el-header(v-if="getSick")
                img.press(src="../../assets/back.svg", @click="$router.go(-1)")
                .name {{getSick.first_name + " " + getSick.last_name}}
                img(v-if="getSick.gender", src="../../assets/male.svg")
                img(v-else, src="../../assets/female.svg")
            el-main 
                h1 Две кисти позитивное
                #chart
                    apexchart(type="area", height="350", :options="getChartsOptions", :series="getSeriesNegative" )
                h1 Две кисти негативное
                h1 Открытые закрытые руки
                h1 В покое
            
    </div>
            
</template>

<script>
import { mapActions, mapGetters } from "vuex";


export default {
    computed: {
        ...mapGetters({
            getSick: "sick/getSick",
            getChartsOptions: "charts/getChartsOptions",
            getSeriesNegative: "charts/getSeriesNegative"
        }),
    },
    methods: {
        ...mapActions({
            signin: "auth/signin"
        })
    }
}
</script>

<style lang="stylus" scoped>
.charts
    width 100vw
    background: #E6F1F3;
    .el-container
        overflow-y auto
        .el-header
            height 15vh !important
            background #5DB1B5
            display flex
            flex-direction row
            justify-content space-between
            align-items center
            padding 0 8%
            img
                width 90px
            .name
                font-family 'RobotoBold'
                font-style: normal;
                font-weight: bold;
                font-size: 72px;
                line-height: normal;
                color: white;
.press
    transform scale(1)
    transition transform .25s
    user-select none
    &:active 
        transform scale(0.9)
        transition transform .25s
    
</style>
