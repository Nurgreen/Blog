<template>
    <el-card
        shadow="hover"
        :body-style="{padding: 0}"
        class="post"
    >
        <header slot=header class="post-header">
            <h3>Post Title</h3>

            <small>
                <i class="el-icon-date"></i>
                {{ new Date().toLocaleString() }}
            </small>
        </header>
        <div class="post-body">
            <img 
                src="https://www.telegraph.co.uk/content/dam/Travel/2019/November/GettyImages-1057740498.jpg?imwidth=680" 
                alt="post image" 
                class="post-img"
            >
        </div>
        <footer class="post-footer">
            <el-button round @click="openPost">
                Открыть
            </el-button>

            <span>
                <i class="el-icon-s-comment"></i>

                12
            </span>
        </footer>
    </el-card>
    <!-- <article class="post">

    </article> -->
</template>

<script>
export default {
    methods: {
        openPost() {
            const id = 'test-id'
            this.$router.push(`/post/${id}`)
        }
    }
}
</script>

<style lang="scss" scoped>
    .post {
        // height: 200px;
        // border: 1px solid black;
        margin-bottom: 1.5rem; 
    }

    .post-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    .post-img {
        width: 100%;
        height: auto;
    }
    // .post-body {
    //     // margin-bottom: 1rem;

    // }
    .post-footer {
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;

    }
</style>