<template>
<el-form 
    :model="controls" 
    :rules="rules" 
    ref="form"
    @submit.native.prevent="onSubmit"


>
    <h1>Добавить комаментарий</h1>
    <el-form-item label="Ваше имя" prop="name">
        <el-input v-model.trim="controls.name"/>
    </el-form-item>
    
    <el-form-item label="Текст комментария" prop="text">
        <el-input 
        type="textarea"
        v-model.trim="controls.text"
        resize="none"
        :rows="2"
        />
    </el-form-item>


    <el-form-item>
        <el-button 
            type="success"
            native-type="Submit" 
            round
            :loading="loading"
        >
            Добавить комаментарий

        </el-button>
    </el-form-item>
</el-form>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            controls: {
                name: '',
                text: ''
            },
            rules: {
                name: [
                    { required: true, message: 'Имя не должно быть пустым', trigger: 'blur' },
                ],
                text: [
                    { required: true, message: 'Введите ваш комаментарий', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate((valid) => {
            if (valid) {
                this.loading = true

                const formData = {
                    name: this.controls.name,
                    text: this.controls.text,
                    postID: ''
                }
                try {
                    setTimeout(() => {
                        this.$message.success('Комментарий добавлен')
                        this.$emit("created")

                    }, 2000)

                } catch (e) {
                    this.loading = false
                }
            
            }
            });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>