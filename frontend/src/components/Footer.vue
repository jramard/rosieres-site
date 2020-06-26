<template>
    <div class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <img class="footer__logo" src="../assets/logo-rosieres.png" alt="Logo Rosières">
                <div class="footer__body">
                    <h2 class="footer__body__title">Mairie de Rosières</h2>
                    <p class="footer__body__content">
                        <span>Place Charles de Gaulle - BP 30118</span>
                        <span>10430 Rosières-près-Troyes</span>
                        <span>Tél : 03 25 82 48 00</span>
                        <span>Fax : 03 25 82 25 01</span>
                        <span>Email : mairie@rosieres10.fr</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
    };
</script>

<style scoped lang="scss">
    .footer {
        margin-top: 35px;
        background-color: #409eff;
        .footer__wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 30px;
            .footer__logo {
                width: 200px;
                height: auto;
            }
            .footer__body {
                margin-top: 30px;
                .footer__body__title {
                    margin-bottom: 10px;
                    color: white;
                    font-weight: 600;
                    text-align: center;
                }
                .footer__body__content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: white;
                }
            }
        }
    }
</style>
