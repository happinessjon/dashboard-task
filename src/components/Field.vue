<script setup>
import { defineProps, ref } from 'vue';
import { Field } from 'vee-validate';
const props = defineProps({
    data: {
        type: Object,
        required: true,
    }
})
const field = ref("")

</script>

<template>
    <label class="font-medium" :for="props.data.label">{{ props.data.label }}</label>
    <Field 
        class="border rounded-md border-gray-300 py-2 px-3  focus:outline-blue-400 placeholder-darkgray"
        :name="props.data.name" 
        :type="props.data.field_type"
        :id="props.data.label"
        :placeholder="props.data.placeholder"
        :required="props.data.required"
    />
</template>