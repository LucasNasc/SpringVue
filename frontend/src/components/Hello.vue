<template>
    <div class="hello">
        <img src="./../assets/spring-boot-vuejs-logo.png">
        <h1>{{ hellomsg }}</h1>
        <ul>
            <h3>{{ response }}</h3>
        </ul>

        <button class=”Search__button” @click="callRestService()">Aqui está um Exemplo de Requisição Rest com SpringBoot Vue</button>


    </div>

</template>

<script>
    import {AXIOS} from './http-common'
    export default {
        name: 'hello',
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
                        this.response = response.data
                        console.log(response.data)
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