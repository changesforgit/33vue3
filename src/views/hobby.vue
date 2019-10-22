<template>
    <div>
        <h2>问卷调查填写</h2>
        {{this.$store.state.sex}}
        <p>请选择您的兴趣爱好</p>
        <div class="options" v-for="(item,index) in hobbies">
            <input type="checkbox" name="hobbies" :value="item.name" @change="checkboxChange($event,index)" :checked="item.checked">{{item.name}}
        </div>
        <button @click="handleClick()">下一步</button>
        <button @click="lastClick()">上一步</button>
        <button @click="reset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "hobby",
        data(){
            return{
                hobbies: [
                    {name:'看书',checked:false},
                    {name:'游泳',checked:false},
                    {name:'跑步',checked:false},
                    {name:'看电影',checked:false},
                    {name:'听音乐',checked:false},
                    {name:'动漫',checked:false}
                ]
            }
        },
        methods:{
            checkboxChange(el,index){
                var boxvalue = el.target.checked;
                var a=[];
                if( boxvalue == true ){
                    this.hobbies[index].checked = true;
                }else{
                    this.hobbies[index].checked = false;
                }
                this.hobbies.forEach(function (item) {
                    if( item.checked == true ){
                        a.push(item.name)
                    }
                });
                this.$store.commit("addhobby",a);
            },
            handleClick(){
                this.$router.push('/Introduction')
            },
            reset(){
                this.hobbies.forEach(function (item) {
                       item.checked = false;
                });
                this.$store.commit("addhobby","");
            },
            lastClick(){
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>