<template>
    <div class="page-wrap">
        <el-breadcrumb separator="/" class="mb">
            <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
            <el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
        </el-breadcrumb>

        <el-form 
            :model="controls" 
            :rules="rules" 
            ref="form"
            @submit.native.prevent="onSubmit"
        >
        <!-- <h2>Войти в панель администратора</h2> -->
        
        <el-form-item label="Текст в формате .md или .html" prop="text">
            <el-input 
                type="textarea"
                v-model.trim="controls.text"
                resize ="none"
                :rows = '10'
            
            />
        </el-form-item>

        <div class="mb">
            <small class="mr">
                <i class="el-icon-time"></i>
                <span>
                    {{ new Date(post.date).toLocaleString() }}
                </span>
            </small>
            <small>
                <i class="el-icon-camera"></i>
                <span>
                    {{ post.views }}
                </span>
            </small>
        </div>

        <el-form-item>
            <el-button 
                type="success"
                native-type="Submit" 
                round
                :loading="loading"
            >
                Обновить

            </el-button>
        </el-form-item>
    </el-form>

    </div>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    head() {
        return {
            title:`Пост | ${this.post.title}`
        }
    },
    validate({params}) {
        return Boolean(params.id)
    },
    async asyncData({store, params}) {
        const post = await store.dispatch('post/fetchAdminById', params.id)
        return {post}
    },
    data() {
        return {
            loading: false,
            controls: {
                text: ''
            },
            rules: {
                text: [
                    { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate(async valid => {
                if(valid) {
                    this.loading = true

                    const formData = {
                        text: this.controls.text,
                        id: this.post._id
                    }

                    try {
                        await this.$store.dispatch('post/update', formData)
                        this.$message.success('Пост обновлен')
                        this.loading = false
                    } catch (e) {
                        this.loading = false
                    }

                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .page-wrap {
        width: 600px;
    }

    .mr {
        margin-right: 2rem;
    }
</style>