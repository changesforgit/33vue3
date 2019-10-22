<template>
    <div>

        <h2>问卷调查表填写</h2>
        <p>3.请介绍一下自己</p>
        <textarea name="introduction" @blur="checkLength"></textarea>
        <button @click="handleClick()">下一步</button>
        <button @click="lastClick()">上一步</button>
        <button>重置</button>
    </div>
</template>

<script>
    export default {
        name: "Introduction",
        methods:{
            checkLength(el){
                var value = el.target.value;
                this.$store.commit("addtext",value);
            },
            handleClick(){
                this.$router.push('/total')
            },
            lastClick(){
                this.$router.push('/hobby')
            }
        }
    }
</script>

<style scoped>
textarea{width: 500px;height: 200px;}
</style>