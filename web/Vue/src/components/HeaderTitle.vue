<template>
    <div class="headerTitle">
        <img class="headerLogo" src="../assets/images/logo.png" alt="图片无法加载。。。">
        <ul class="header-ul">
            <li class="header-unti">首页</li>
            <li class="header-unti left-110">公司介绍</li>
            <li class="header-unti left-220">产品介绍</li>
            <li class="header-unti left-330">正在招聘</li>
            <li class="header-unti left-440">公司环境</li>
            <li class="header-unti left-550">联系我们</li>
            <li class="RouterAnimation">
                <img class="RouterAnimation-size" src="../assets/images/RouterAnimation.png">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HeaderTitle',
}
</script>

<!-- 添加“scoped”将css限制在此组件之中 -->
<style scoped>
    .headerTitle{
        width: 780px;
        height: 75px;
        padding-top: 15px;
        margin: 0 auto;
        border-bottom: 2px solid #fff;
    }
    .headerLogo{
        float: left;
        width: 100px;
        height: 60px;
        margin-right: 20px;
    }
    .header-ul{
        display: inline-block;
        position: relative;
        width: 660px;
        height: 60px;
        line-height: 60px;
    }
    .header-unti{
        float: left;
        font-size: 16px;
        width: 110px;
        height: 60px;
        text-align: center;
    }
    .RouterAnimation{
        position: absolute;
        z-index: -1;
        width: 110px;
        height: 60px;
        left: 0;
        transform: translateX(0);
        /* transition: left 1s; */
        transition: transform 1s;
    }
    .left-110:hover ~ .RouterAnimation{
        /* left: 111px; */
        transform: translateX(111px);
    }
    .left-220:hover ~ .RouterAnimation{
        /* left: 221px; */
        transform: translateX(221px);
    }
    .left-330:hover ~ .RouterAnimation{
        /* left: 331px; */
        transform: translateX(331px);
    }
    .left-440:hover ~ .RouterAnimation{
        /* left: 441px; */
        transform: translateX(441px);
    }
    .left-550:hover ~ .RouterAnimation{
        /* left: 551px; */
        transform: translateX(551px);
    }
    .RouterAnimation-size{
        width: 100%;
        height: 100%;
    }
</style>
