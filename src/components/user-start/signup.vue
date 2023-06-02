<template>
    <div class="signup-container">
        <div class="logo-container">
            <img class="logo" src="./../../../public/1.png" alt="kind coins logo"/>
        </div>
            <p style="grid-column: 2/3; text-align: center; color: #0597A6; font-weight: 500;">Cuenta nueva</p>
            <div class="flex flex-column gap-2" style="grid-column: 2/3">
                <div class="flex gap-2" style="margin-top: 15px">
                <span class="p-float-label">
                    <pv-input-text 
                    type="text"
                    id="name" 
                    v-model.trim="user.name" 
                    required="true"
                    autofocus
                    :class="{'p-invalid': submitted && !user.name}"
                    style="width: 33.3vh" 
                    />
                    <label for="name" style="font-family: 'Roboto'; color: #515151">Ingresa tus nombres</label>
                    <small class="p-error" v-if="submitted && !user.name">
                        El nombre es requerido.
                    </small>
                </span>
                <span class="p-float-label">
                    <pv-input-text
                    type="text" 
                    id="lastname" 
                    v-model.trim="user.lastname" 
                    required="true"
                    autofocus
                    :class="{'p-invalid': submitted && !user.lastname}"
                    style="width: 33.3vh" />
                    <label for="lastname" style="font-family: 'Roboto'; color: #515151">Ingresa tus apellidos</label>
                    <small class="p-error" v-if="submitted && !user.lastname">
                        El apellido es requerido.
                    </small>
                </span>
                </div>
                <div class="flex gap-2" style="margin-top: 15px">
                    <span class="p-float-label">
                        <pv-input-text
                        type="text"
                        id="dni"
                        v-model.trim="user.dni"
                        required="true"
                        autofocus
                        :class="{'p-invalid': submitted && !user.dni}"
                        style="width: 33.3vh" />
                        <label for="dni" style="font-family: 'Roboto'; color: #515151">Ingresa tu DNI</label>
                        <small class="p-error" v-if="submitted && !user.dni">
                            El DNI es requerido.
                        </small>
                    </span>
                    <span class="p-float-label">
                        <pv-input-text 
                        type="text"
                        id="phone" 
                        v-model.trim="user.phone" 
                        required="true"
                        autofocus
                        :class="{'p-invalid': submitted && !user.phone}"
                        style="width: 33.3vh" />
                        <label for="phone" style="font-family: 'Roboto'; color: #515151">Ingresa tu teléfono</label>
                        <small class="p-error" v-if="submitted && !user.phone">
                        El número de celular es requerido.
                        </small>
                    </span>
                </div>
                <span class="p-float-label" style="margin-top: 15px">
                    <pv-input-text 
                    type="text"
                    id="email"
                    v-model.trim="user.email" 
                    required="true"
                    autofocus
                    :class="{'p-invalid': submitted && !user.email}"
                    style="width: 67.5vh" />
                    <label for="email" style="font-family: 'Roboto'; color: #515151">Ingresa tu correo electrónico</label>
                    <small class="p-error" v-if="submitted && !user.email">
                        El correo es requerido.
                    </small>
                </span>
                <span class="p-float-label" style="margin-top: 15px">
                    <pv-input-text
                    type="text"
                    id="password" 
                    v-model.trim="user.password" 
                    required="true"
                    autofocus
                    :class="{'p-invalid': submitted && !user.password}"
                    style="width: 67.5vh" />
                    <label for="password" style="font-family: 'Roboto'; color: #515151">Ingresa tu contraseña</label>
                    <small class="p-error" v-if="submitted && !user.password">
                        La contraseña es requerida.
                    </small>
                </span>
                <span class="p-float-label" style="margin-top: 15px">
                    <pv-input-text 
                    type="text"
                    id="password2"
                    v-model="confirmpassword"
                    required="true"
                    style="width: 67.5vh" />
                    <label for="password2" style="font-family: 'Roboto'; color: #515151">Confirma tu contraseña</label>
                </span>
            </div>
            <div class="terms">
            <pv-checkbox v-model="checked" :binary="true" style="grid-column: 2/3;"/>
            <p style="grid-column: 2/3;">Acepto los Términos y condiciones</p>
            </div>
                <pv-button class="create-btn" @click="saveUserData" label="Crear mi cuenta" :disabled="!checked"/>
        </div>
</template>

<script>
import { KindCoinsService } from '../../services/kindcoins-api.service';
export default{
    name: 'SignUp',
    data()
    {
       return{
        user: {},
        checked: false,
        kindcoinsService: null,
        submitted: false,
        confirmpassword:''
       };
    },
    created(){
        this.kindcoinsService = new KindCoinsService();
    },
    methods:{
        getStorableUserData(data){
            return{
                id: data.id,
                name: data.name,
                lastname: data.lastname,
                dni: data.dni,
                phone: data.phone,
                email: data.email,
                password: data.password
            };
        },
        openNew(){
            this.user = {};
            this.submitted=false;
        },
        saveUserData(){
            this.submitted=true;
            if(this.user.name.trim()){
                if(this.user.password !== this.confirmpassword){
                    console.log("Las contraseñas no coinciden");
                    return;
                }
                this.user.id=0;
                console.log(this.user);
                this.user=this.getStorableUserData(this.user);
                this.kindcoinsService.createUser(this.user);
            }
            this.user={};
        }
    }
}
</script>

<style>
.logo{
    width: 100px;
    height: 100px;
    border-radius: 100px;
    box-shadow: 0 3px 4px rgba(75, 75, 75, 0.5);
}

.signup-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin-top: 10px;
}

.logo-container{
    grid-column: 2/3;
}
.terms{
    display: flex;
  align-items: center;
  grid-column: 2/3;
  margin-top: 20px;
  margin-bottom: 20px;
}
.terms p{
    margin: 0 0 0 10px;
}
.signup-container .create-btn{
    color:white;
    background-color:#ffcc00;
    grid-column: 2/3;
    margin-bottom: 20px;
}
</style>