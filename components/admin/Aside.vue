<template>
  <el-menu
    router
    :style="{height: '100%'}"
    :default-active="$route.path"
  >

    <el-menu-item index="/admin">
        <i class="el-icon-s-data"></i>
        <span>Аналитика</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
        <i class="el-icon-edit"></i>
        <span>Создать</span>
    </el-menu-item>
    <el-menu-item index="/admin/list">
        <i class="el-icon-s-promotion"></i>
        <span>Посты</span>
    </el-menu-item>
    <el-menu-item index="/admin/user">
        <i class="el-icon-s-custom"></i>
        <span>Пользователи</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
        <i class="el-icon-switch-button"></i>
        <span>Выйти</span>
    </el-menu-item>
  </el-menu>
</template>

