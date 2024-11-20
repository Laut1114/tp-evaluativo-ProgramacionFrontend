<script setup lang="ts">
import LoginComponent from '@/components/auth/LoginComponent.vue';
import RegisterComponent from '@/components/auth/RegisterComponent.vue';
import { useSessionStore } from '@/stores/AuthSessionStore';
</script>

<template>
  <main>
    <div>
      <Transition :name="useSessionStore().page === 'register' ? 'slideL' : 'slideR'" mode="out-in">
        <RegisterComponent v-if="useSessionStore().page === 'register'" />
        <LoginComponent v-else />
      </Transition>
    </div>
  </main>
</template>

<style scoped>
.slideL-enter-active,
.slideL-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slideL-enter,
.slideL-leave-to {
  transform: translateX(-100%);
}

.slideL-enter-to,
.slideL-leave {
  transform: translateX(0);
}

.slideR-enter-active,
.slideR-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slideR-enter,
.slideR-leave-to {
  transform: translateX(100%);
}

.slideR-enter-to,
.slideR-leave {
  transform: translateX(0);
}
</style>
