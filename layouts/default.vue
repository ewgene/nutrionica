<template>
    <div :class="[$style.Layout]">
        <slot />
    </div>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.Layout {
    width: 100%;
    height: 100%;
}
</style>
