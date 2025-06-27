<script setup lang="ts"></script>

<template>
  <div>
    <h1>Мой аккаунт</h1>
    <form class="login-form">
      <div class="login-form__fields">
        <InputField variant="gray" placeholder="Email" />
        <InputField variant="gray" placeholder="Пароль" type="password" />
      </div>
      <div class="login-form__actions">
        <ActionButton>Вход</ActionButton>
        <NuxtLink to="/auth/restore">Забыли пароль?</NuxtLink>
      </div>
    </form>
  </div>
</template>

<style scoped>
.login-form {
  display: flex;
  gap: 70px;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 64px;
}
.login-form__fields {
  display: flex;
  flex-direction: column;
  gap: 46px;
}
.login-form__actions {
  display: flex;
  flex-direction: column;
  gap: 13px;
}
.login-form__actions a {
  text-decoration: none;
  margin: 0 auto;
  color: var(--color-black);
}
.login-form__actions a:hover {
  color: var(--color-black-hover);
}
</style>
