<template>
    <div>
        <h2>问卷调查填写</h2>
        <p>1.请问您的性别是：</p>
        <div v-for="(item,index) in sex_list">
            <input :value="item.name" type="radio" name="sexy" :checked="item.checked" @change="radio_change($event,index)" :id="index+1"/>{{item.name}}
        </div>
        <button @click="handleClick()">下一步</button>
        <button @click="reset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "gender",
        data(){
            return{
                sex_list:[
                    {name:'男'},
                    {name:'女'},
                    {name:'保密'}
                ]
            }
        },
        methods:{
            radio_change(el,index){
                var radio_value = el.target.value;
                console.log(radio_value);
                this.$store.commit("addSex",radio_value);
            },
            handleClick(){
                this.$router.push('/hobby')
            },
            reset(){
                document.getElementById("3").checked = true;
                this.$store.commit("addSex","保密");
            }
        }
    }
</script>

<style scoped>

</style>