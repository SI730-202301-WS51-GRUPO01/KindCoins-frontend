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
                    id="FirstName" 
                    v-model.trim="user.FirstName" 
                    required="true"
                    autofocus
                    :class="{'p-invalid': submitted && !user.FirstName}"
                    style="width: 33.3vh" 
                    />
                    <label for="FirstName" style="font-family: 'Roboto'; color: #515151">Ingresa tus nombres</label>
                    <small class="p-error" v-if="submitted && !user.FirstName">
                        El nombre es requerido.
                    </small>
                </span>
                <span class="p-float-label">
                    <pv-input-text
                    type="text" 
                    id="LastName" 
                    v-model.trim="user.LastName" 
                    required="true"
                    autofocus
                    :class="{'p-invalid': submitted && !user.LastName}"
                    style="width: 33.3vh" />
                    <label for="LastName" style="font-family: 'Roboto'; color: #515151">Ingresa tus apellidos</label>
                    <small class="p-error" v-if="submitted && !user.LastName">
                        El apellido es requerido.
                    </small>
                </span>
                </div>
                <div class="flex gap-2" style="margin-top: 15px">
                    <span class="p-float-label">
                        <pv-input-text
                        type="text"
                        id="DNI"
                        v-model.trim="user.DNI"
                        required="true"
                        autofocus
                        :class="{'p-invalid': submitted && !user.DNI}"
                        style="width: 33.3vh" />
                        <label for="DNI" style="font-family: 'Roboto'; color: #515151">Ingresa tu DNI</label>
                        <small class="p-error" v-if="submitted && !user.DNI">
                            El DNI es requerido.
                        </small>
                    </span>
                    <span class="p-float-label">
                        <pv-input-text 
                        type="text"
                        id="Phone" 
                        v-model.trim="user.Phone" 
                        required="true"
                        autofocus
                        :class="{'p-invalid': submitted && !user.Phone}"
                        style="width: 33.3vh" />
                        <label for="Phone" style="font-family: 'Roboto'; color: #515151">Ingresa tu teléfono</label>
                        <small class="p-error" v-if="submitted && !user.Phone">
                        El número de celular es requerido.
                        </small>
                    </span>
                </div>
                <span class="p-float-label" style="margin-top: 15px">
                    <pv-input-text 
                    type="text"
                    id="Email"
                    v-model.trim="user.Email" 
                    required="true"
                    autofocus
                    :class="{'p-invalid': submitted && !user.Email}"
                    style="width: 67.5vh" />
                    <label for="Email" style="font-family: 'Roboto'; color: #515151">Ingresa tu correo electrónico</label>
                    <small class="p-error" v-if="submitted && !user.Email">
                        El correo es requerido.
                    </small>
                </span>
                <span class="p-float-label" style="margin-top: 15px">
                    <pv-input-text
                    type="text"
                    id="Password" 
                    v-model.trim="user.Password" 
                    required="true"
                    autofocus
                    :class="{'p-invalid': submitted && !user.Password}"
                    style="width: 67.5vh" />
                    <label for="Password" style="font-family: 'Roboto'; color: #515151">Ingresa tu contraseña</label>
                    <small class="p-error" v-if="submitted && !user.Password">
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
        console.log(this.kindcoinsService.getAllUsers());
    },
    methods:{
        getStorableUserData(data){
            return{
                id: data.id,
                firstName: data.FirstName,
                lastName: data.LastName,
                dni: data.DNI,
                phone: data.Phone,
                email: data.Email,
                password: data.Password,
                suscriptionPlanId: data.SuscriptionPlanId
            };
        },
        openNew(){
            this.user = {};
            this.submitted=false;
        },
        saveUserData(){
            this.submitted=true;
            if(this.user.FirstName.trim()){
                if(this.user.Password !== this.confirmpassword){
                    console.log("Las contraseñas no coinciden");
                    return;
                }
                this.user.id = 0;
                this.user.SuscriptionPlanId = 1;
                console.log(this.user);
                this.user=this.getStorableUserData(this.user);
                this.kindcoinsService.createUser(this.user);
            }
            this.user={};
            this.$router.push('/congratulations');
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