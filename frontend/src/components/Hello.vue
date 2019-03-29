<template>
    <div class="hello">
        <img src="./../assets/spring-boot-vuejs-logo.png">
        <h1>{{ hellomsg }}</h1>
        <ul>
            <h3>{{ response }}</h3>
        </ul>

        <q-btn icon="card_giftcard" @click="callRestService()">Aqui está um Exemplo de Requisição Rest com SpringBoot Vue</q-btn>


    </div>

</template>

<script>
    import {AXIOS} from './http-common'
    import QBtn from "quasar-framework/src/components/btn/QBtn";
    export default {
        name: 'hello',
        components: {QBtn},
        props: {hellomsg: {type: String, required: true}},

        data() {
            return {
                response: [],
                errors: []
            }
        },
        methods: {
            // Fetches posts when the component is created.
            callRestService: function () {
                AXIOS.get(`hello`)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.response = response.data;
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }

    </style>