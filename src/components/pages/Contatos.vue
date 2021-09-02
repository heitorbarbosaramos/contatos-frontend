<template>
    <main>
        <section class="container">
            <div v-for="endereco in enderecos" :key="endereco.id" class="meuCard">
                <div class="card-body">
                
                <div class="row">
                   
                        <div class="form-group col-md-5">
                            <small for="bairro">Bairro</small>
                            <input type="text" class="form-control" id="bairro" :value="endereco.bairro" disabled>
                        </div>
                        <div class="form-group col-md-5">
                            <small for="localidade">Municipio</small>
                            <input type="text" class="form-control" id="localidade" :value="endereco.localidade" disabled>
                        </div>
                        <div class="form-group col-md-2">
                            <small for="uf">UF</small>
                            <input type="text" class="form-control" id="uf" :value="endereco.uf" disabled>
                        </div>
                   
                </div>
                 <div class="row">
                    <div class="form-group col-md-5">
                        <small for="logradouro">Logradouro</small>
                        <input type="text" class="form-control" id="logradouro" :value="endereco.logradouro" disabled>
                    </div>
                    <div class="form-group col-md-2">
                        <small for="logradouro">Editar</small>
                        <a :href="'/editar?id=' + endereco.id" class=" form-control btn btn-success">Editar</a>
                    </div>
                     <div class="form-group col-md-2">
                        <small for="logradouro">Excluir</small>
                        <a v-on:click="excluir(endereco.id)" class=" form-control btn btn-danger">Excluir</a>
                    </div>
                 </div>
                </div>
            </div>

        </section>

   </main>
</template>

<script>
import api from '@/services/ap.js';

export default {
    name:'Contatos',
    data(){
        return{
            enderecos:[]
        }
    },
    methods:{
        excluir(id){
            console.log("EXCLUINDO ENDERECO ID: " + id);
            api.delete("/"+id).then(response =>{
                console.log("ENDERECO EXCLUIDO  " + response.status);
                alert("Endereco excluido");
                location.reload();
            }).catch(err =>{
                err.message || "Erro ao excluir endereco";
                alert("Erro ao excluir endereco");
            })
           
        }
    },
    mounted(){
        api.get('/').then(response => {
            console.log(response.data);
            this.enderecos = response.data;
        }).catch(err =>{
            err.message || " Ocorreu um erro ao recuperar a lista, possivelmente o servidor esteja desligado";
            alert(" Ocorreu um erro ao recuperar a lista, possivelmente o servidor esteja desligado");       
        })
    }
}
</script>

<style scoped>

.meuCard{
    margin-top: 10px;
    margin-bottom: 10px;
    color: #636464;
    background-color: #fefefe;
    border-color: 1px solid #01011d;
    border-radius: 10px;

}

</style>
