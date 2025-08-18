<template>
  <Form :form="form">
    <SchemaField :schema="schema" />
    <Submit @submit="onSubmit">提交</Submit>
  </Form>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { action } from '@formily/reactive'
import { Form, FormItem, Select, Submit } from '@formily/element-plus'

const schema = {
  type: 'object',
  properties: {
    linkage: {
      type: 'string',
      title: '选择框',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        style: 'width: 240px;',
        remote: true,
        filterable: true,
        remoteMethod: (value, field, form) => {
          field.value.dataSource = [
            {
              label: 'A选项',
              value: 1,
            },
            {
              label: 'B选项',
              value: 2,
            },
          ]
        },
      },
    },
  },
}

const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Select,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
