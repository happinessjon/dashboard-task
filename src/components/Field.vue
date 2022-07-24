<script setup>
import { defineProps } from 'vue';
import { Field, ErrorMessage } from "vee-validate";
const props = defineProps({
    data: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <label class="font-medium" :for="props.data.label">{{ props.data.label }}</label>
    <input 
        class="border rounded-md border-gray-300 py-2 px-3  focus:outline-blue-400 placeholder-darkgray"
        :name="props.data.name" 
        :type="props.data.field_type"
        :id="props.data.label"
        :placeholder="props.data.placeholder"
        :required="props.data.required"
    />
    <ErrorMessage />
</template>