<template>
    <article class="post">
        <header class="post-header">
            <div class="post-title">
                <h1>Post title</h1>
                <nuxt-link to="/">
                    <i class="el-icon-back"></i>
                </nuxt-link>
            </div>
            <div class="post-info">
                <small>
                    <i class="el-icon-date"></i>
                    {{ new Date().toLocaleString() }}
                </small>
                <small>
                    <i class="el-icon-camera"></i>
                    42
                </small>
            </div>
            <div class="post-image">
                <img src="https://www.telegraph.co.uk/content/dam/Travel/2019/November/GettyImages-1057740498.jpg?imwidth=680" alt="post image">
            </div>
        </header>
        <main class="post-content">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque illum, quis debitis repellat nobis ipsa beatae ex expedita eos quo ad iusto. Ipsa perspiciatis neque facere numquam, deleniti accusamus quis.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque illum, quis debitis repellat nobis ipsa beatae ex expedita eos quo ad iusto. Ipsa perspiciatis neque facere numquam, deleniti accusamus quis.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque illum, quis debitis repellat nobis ipsa beatae ex expedita eos quo ad iusto. Ipsa perspiciatis neque facere numquam, deleniti accusamus quis.</p>
        </main>
        <footer>
            <!-- Form -->
            <app-comment-form
                v-if="canAddComment"
                @created="createCommentHandler"
            />

            <div class="comments" v-if="true">
                <app-comment 
                    v-for="comment in 4" 
                    :key="comment" 
                    :comment="comment">
                </app-comment>
            </div>
            <div class="text-center" v-else>Комментариев нет

            </div>
        </footer>
    </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'
export default {
    validate({params}) {
        return Boolean(params.id)
    },
    data() {
        return {
            canAddComment: true
        }
    },
    methods: {
        createCommentHandler() {
            this.canAddComment = false
        }
    },
    components: {
        AppComment,
        AppCommentForm
    },
}
</script>

<style lang="scss" scoped>
    .post {
        max-width: 600px;
        margin: 0 auto;
    }
    .post-title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        align-items: center;
    }
    .post-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: .5rem;
        align-items: center;
    }
    .post-image img{
        width:100%;
        height: auto;
    }
    .post-header {
        margin-bottom: 1.5rem;
    }
    .post-content {
        margin-bottom: 2rem;
    }
</style>