<template>
    <main>
         <section class="container">
             <form>
               <div class="row">
                   
                        <div class="form-group col-md-2">
                            <small for="cep">CEP</small>
                            <input type="text" class="form-control" placeholder="06725-050" v-model="endereco.cep" v-on:change="buscaEnderecoPorCep"  v-mask="'#####-###'">
                        </div>

                        <div class="form-group col-md-5">
                            <small for="cep">Logradouro</small>
                            <input type="text" class="form-control" v-model="endereco.logradouro">
                        </div>

                        <div class="form-group col-md-5">
                            <small for="bairro">Bairro</small>
                            <input type="text" class="form-control" v-model="endereco.bairro">
                        </div>

               </div>
               <div class="row">
                    <div class="form-group col-md-3">
                        <small for="localidade">Municipio</small>
                        <input type="text" class="form-control" v-model="endereco.localidade">
                    </div>

                    <div class="form-group col-md-1">
                        <small for="uf">UF</small>
                        <input type="text" class="form-control" v-model="endereco.uf" maxlength="2">
                    </div>

                    <div class="form-group col-md-1">
                        <small for="ddd">DDD</small>
                        <input type="text" class="form-control" v-model="endereco.ddd" maxlength="2">
                    </div>

                    <div class="form-group col-md-2">
                        <small for="ibge">IBGE</small>
                        <input type="text" class="form-control" v-model="endereco.ibge" disabled>
                    </div>

                     <div class="form-group col-md-2">
                        <small for="gia">GIA</small>
                        <input type="text" class="form-control" v-model="endereco.gia" disabled >
                    </div>

                     <div class="form-group col-md-2">
                        <small for="siafi">SIAFI</small>
                        <input type="text" class="form-control" v-model="endereco.siafi" disabled >
                    </div>
               </div>

               <div class="marginButtom row">
                   <div class="form-group col-md-1">
                       <small for="cadastrar">Cadastrar</small>
                        <input class="form-control btn btn-primary" v-on:click="salvarEndereco" value="Enviar" >
                   </div>
               </div>

             </form> 
         </section>
    </main>
</template>

<script>
import api from '@/services/ap.js';

export default{
    name:'NovoEndereco',
    data(){
       return{
           endereco:{}
       }
    },
    methods: {
        buscaEnderecoPorCep () {
            console.log("PESQUISANDO PELO CEP: " + this.endereco.cep);
        
            api.get('/buscaporcep/cep/' + this.endereco.cep).then(response => {
            console.log(response.data);
            this.endereco = {
                cep          : response.data.cep,
                logradouro   : response.data.logradouro, 
                complemento  : response.data.complemento,
                bairro       : response.data.bairro,
                ddd          : response.data.ddd,
                gia          : response.data.gia,
                ibge         : response.data.ibge,
                localidade   : response.data.localidade,
                siafi        : response.data.siafi,
                uf           : response.data.uf
            };

            console.log(this.endereco);
           
        })
        },
        salvarEndereco(){

           api.post('/', this.endereco).then(response => {
                console.log(response.data);
            })
            console.log("SALVANDO ENDERECO");
            console.log(this.endereco);
        }
    },
}

</script>

<style scoped>

.marginButtom{
    margin-bottom: 10px;
}

</style>