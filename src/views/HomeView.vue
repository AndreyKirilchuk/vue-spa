<script setup>
import { RouterLink } from 'vue-router'
import {ref} from "vue";

// modal
const modal = ref(false);

// paginate
const totalPage = ref(5);
const thisPage = ref(1)

// slider
const fade = ref(false);
const index = ref(0);
const maxSlide = 5;

function animate() {
    fade.value = true;

    setTimeout(() => fade.value = false, 500);
}
function next() {
    index.value = (index.value + 1) % maxSlide;
    animate();
}

function back() {
    index.value = (index.value - 1 + maxSlide) % maxSlide;
    animate();
}

</script>

<template>
    <!--    header-->
    <div class="header_conatiner">
        <div class="container">
            <header>
                <router-link to="/">
                    <h1 class="logo">Logo</h1>
                </router-link>

                <nav>
                    <router-link to="/">Переход</router-link>
                    <button @click="modal = true">
                        Открыть
                    </button>
                    <button class="btn-red">
                        Выйти
                    </button>
                </nav>
            </header>
        </div>
    </div>

    <main class="container">
        <!--    slider-->
        <div class="slider">
            <button class="btn-nav btn-back" @click="back">
                &lt;
            </button>

            <div :class="{fade: fade}">
                Контент
            </div>

            <button class="btn-nav btn-next" @click="next">
                >
            </button>
        </div>

        <!--    paginate-->
        <nav>
            <button class="btn-nav" :class="{active: page == thisPage}" v-for="page in totalPage">
                {{page}}
            </button>
        </nav>

        <div class="cards">
            <div class="card">
                <img src="/img.jpg" alt="img" width="100px">

                <h3>Название</h3>
                <p><span>Цена:</span> 123</p>
                <p><span>Категория:</span> Достойная</p>
                <p><span>Описание:</span> 123</p>
            </div>
        </div>


        <!--        form-->
        <form action="">
            <div class="title">
                Авторизация
            </div>
            <label for="">
                Логин
                <input type="text" placeholder="login">
            </label>

            <button>
                Войти
            </button>
        </form>
    </main>

    <!--    modal-->
    <form class="modal form" :class="{active: modal}">
        <div class="title">
            Авторизация
        </div>
        <label for="">
            Логин
            <input type="text" placeholder="login">
        </label>

        <button>
            Войти
        </button>
    </form>
    <div class="modal_container" :class="{active: modal}" @click="modal = false" />


</template>

<style scoped>

</style>
