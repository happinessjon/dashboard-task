<script setup>
import { reactive } from "vue";
import { Form } from 'vee-validate';
import Field from "./Field.vue";

function onSubmit(values) {
    console.log(values);
}
const formData = reactive([
  {
    name: "image",
    field_type: "file",
    title: "Image",
    label: "Image to display",
  },
  {
    name: "full_name",
    field_type: "text",
    label: "Full Name",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    name: "passport_number",
    field_type: "password",
    label: "Passport Number",
    placeholder: "Enter your passport number",
    required: true,
  },
  {
    name: "email",
    field_type: "email",
    label: "Email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    name: "phone",
    field_type: "tel",
    label: "Phone",
    placeholder: "Enter your phone number",
    required: true,
  },
]);
</script>

<template>
    <Form @submit="onSubmit" class=" rounded-lg font-open max-w-[400px] grid grid-cols-1 gap-y-3 shadow-lg z-10 bg-white p-8 w-full" >
      <Field v-for="field in formData" :key="field.label" :data="field" />
      <button class="bg-blue-400 py-2 px-5 mt-3 rounded-md text-white hover:bg-blue-500">Submit</button>
    </Form>
</template>