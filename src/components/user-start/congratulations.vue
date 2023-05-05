<template>
    <div class="congrats-container">
        <div class="congrats-2">
        <img class="logo" src="./../../../public/1.png" alt="kind coins logo"/>
        </div>
        <p style="grid-column: 2/3">¡Felicitaciones, su cuenta ha sido habilitada!</p>
        <pv-button style="grid-column: 2/3" label="Ir a Kind Coins"/>
    </div>
</template>

<style>
.congrats-2{
    grid-column: 2/3;
}
.logo{
    width: 100px;
    height: 100px;
    border-radius: 100px;
    bottom: 28px;
}
.congrats-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 60px;
    justify-items: center;
}
</style>