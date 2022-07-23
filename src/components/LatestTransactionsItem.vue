<script setup>
import { defineProps } from "vue";
const props = defineProps({
    data: {
        type: Array,
        required: true,
    }
})
</script>
<template>
    <li>
        <div class="flex">
            <p>{{ props.data.textHistory }}</p>
            <span>{{ props.data.transferAmount }}</span>
        </div>
    </li>
</template>