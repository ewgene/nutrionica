<template>
    <div :class="[$style.Hello]">
        <div :class="[$style.sidebar]">
            <div :class="[$style.logo]">                
            </div>
            <ul class="nav">
                <li>
                    <div :class="[$style.icon]"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :class="[$style.pic]" d="M10.175 7.825L12.3333 5.66667M4.83333 9C4.83333 7.89493 5.27232 6.83512 6.05372 6.05372C6.83512 5.27232 7.89493 4.83333 9 4.83333M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9ZM9.83333 9C9.83333 9.46024 9.46024 9.83333 9 9.83333C8.53976 9.83333 8.16667 9.46024 8.16667 9C8.16667 8.53976 8.53976 8.16667 9 8.16667C9.46024 8.16667 9.83333 8.53976 9.83333 9Z" stroke="#C4C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> Пульс
                </li>
                <li>
                    <div :class="[$style.icon]"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :class="[$style.pic]" d="M4.13433 13.1742L14.0002 13.1667M9.00017 1.5C10.5985 1.5 11.9335 2.625 12.2585 4.12583C13.1119 3.89487 14.0222 4.0124 14.789 4.45257C15.5558 4.89273 16.1163 5.61947 16.3473 6.47292C16.5782 7.32636 16.4607 8.2366 16.0205 9.00339C15.5804 9.77018 14.8536 10.3307 14.0002 10.5617V16.5H4.00017V10.5617C3.56758 10.4564 3.16044 10.2656 2.80276 10.0005C2.44508 9.73539 2.1441 9.40135 1.91757 9.01807C1.69104 8.63479 1.54355 8.21004 1.48379 7.76885C1.42403 7.32766 1.45322 6.87898 1.56962 6.44925C1.68603 6.01952 1.8873 5.61745 2.16156 5.26674C2.43583 4.91604 2.77754 4.6238 3.16655 4.40725C3.55555 4.19071 3.98398 4.05425 4.42656 4.00592C4.86915 3.95758 5.31693 3.99836 5.7435 4.12583C5.90489 3.38207 6.316 2.71595 6.90848 2.23824C7.50095 1.76053 8.2391 1.50001 9.00017 1.5Z" stroke="#C4C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> Кухня
                </li>
                <li>
                    <div :class="[$style.icon]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :class="[$style.pic]" d="M2.5 17.5V15.8333C2.5 14.9493 2.85119 14.1014 3.47631 13.4763C4.10143 12.8512 4.94928 12.5 5.83333 12.5H9.16667C10.0507 12.5 10.8986 12.8512 11.5237 13.4763C12.1488 14.1014 12.5 14.9493 12.5 15.8333V17.5M13.3333 2.60834C14.0503 2.79192 14.6859 3.20892 15.1397 3.7936C15.5935 4.37827 15.8399 5.09736 15.8399 5.8375C15.8399 6.57765 15.5935 7.29674 15.1397 7.88141C14.6859 8.46609 14.0503 8.88309 13.3333 9.06667M17.5 17.5V15.8334C17.4958 15.0977 17.2483 14.384 16.7961 13.8037C16.3439 13.2234 15.7124 12.8089 15 12.625M10.8333 5.83333C10.8333 7.67428 9.34095 9.16667 7.5 9.16667C5.65905 9.16667 4.16667 7.67428 4.16667 5.83333C4.16667 3.99238 5.65905 2.5 7.5 2.5C9.34095 2.5 10.8333 3.99238 10.8333 5.83333Z" stroke="#C4C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> Сотрудники
                </li>
                <li>
                    <div :class="[$style.icon]"><svg width="14" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :class="[$style.pic]" d="M12.8334 11.5V1.5C8.82002 5.32833 8.64752 8.4325 8.66669 11.5H12.8334ZM12.8334 11.5V16.5H12V14L12.8334 11.5ZM3.66669 2.33333V16.5M1.16669 2.33333V4.83333C1.16669 5.49637 1.43008 6.13226 1.89892 6.6011C2.36776 7.06994 3.00365 7.33333 3.66669 7.33333C4.32973 7.33333 4.96561 7.06994 5.43445 6.6011C5.9033 6.13226 6.16669 5.49637 6.16669 4.83333V2.33333" stroke="#C4C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> Клиенты
                </li>
                <li>
                    <div :class="[$style.icon]"><svg width="20" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :class="[$style.pic]" d="M18.3334 4.50001L10 1.16667L1.66669 4.50001L10 7.83334L18.3334 4.50001ZM18.3334 4.50001V9.50001M5.00002 5.83342V10.3334C5.00002 10.9965 5.5268 11.6323 6.46449 12.1012C7.40217 12.57 8.67394 12.8334 10 12.8334C11.3261 12.8334 12.5979 12.57 13.5356 12.1012C14.4732 11.6323 15 10.9965 15 10.3334V5.83342" stroke="#C4C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> Обучение
                </li>
                <li>
                    <div :class="[$style.icon]"><svg width="19" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :class="[$style.pic]" d="M7.50002 11.1667C7.50002 12.0871 6.75383 12.8333 5.83335 12.8333C4.91288 12.8333 4.16669 12.0871 4.16669 11.1667M7.50002 11.1667C7.50002 10.2462 6.75383 9.5 5.83335 9.5C4.91288 9.5 4.16669 10.2462 4.16669 11.1667M7.50002 11.1667H12.5M4.16669 11.1667H2.50002V7.83333M15.8334 11.1667C15.8334 12.0871 15.0872 12.8333 14.1667 12.8333C13.2462 12.8333 12.5 12.0871 12.5 11.1667M15.8334 11.1667C15.8334 10.2462 15.0872 9.5 14.1667 9.5C13.2462 9.5 12.5 10.2462 12.5 11.1667M15.8334 11.1667H17.5V6.16666M1.66669 1.16666H10.8334V11.1667M17.5 6.16666H10.8334M17.5 6.16666L15 2H10.8334M2.50002 4.5H5.83335" stroke="#C4C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> Логистика
                </li>
                <li>
                    <div :class="[$style.icon]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :class="[$style.pic]" d="M3.33331 10L5.83331 6.66668L9.16665 8.33334L13.3333 3.33334L16.6666 6.66668M3.33331 15.8333L6.66665 10.8333L9.99998 12.5L13.3333 8.33334L16.6666 11.6667V15.8333H3.33331Z" stroke="#C4C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> Продажи
                </li>
                <li>
                    <div :class="[$style.icon]"><svg width="18" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :class="[$style.pic]" d="M14 4.66667C14.663 4.66667 15.2989 4.93006 15.7678 5.3989C16.2366 5.86774 16.5 6.50363 16.5 7.16667C16.5 7.82971 16.2366 8.46559 15.7678 8.93443C15.2989 9.40328 14.663 9.66667 14 9.66667M7.33333 4.66667V13.8333C7.33333 14.0543 7.24554 14.2663 7.08926 14.4226C6.93298 14.5789 6.72101 14.6667 6.5 14.6667H5.66667C5.44565 14.6667 5.23369 14.5789 5.07741 14.4226C4.92113 14.2663 4.83333 14.0543 4.83333 13.8333V9.66667M9 4.66662L12.77 1.52496C12.8795 1.43371 13.0128 1.37558 13.1542 1.35738C13.2956 1.33917 13.4393 1.36165 13.5684 1.42217C13.6975 1.48269 13.8066 1.57874 13.8831 1.69908C13.9595 1.81942 14.0001 1.95906 14 2.10162V12.2316C14.0001 12.3742 13.9595 12.5138 13.8831 12.6342C13.8066 12.7545 13.6975 12.8506 13.5684 12.9111C13.4393 12.9716 13.2956 12.9941 13.1542 12.9759C13.0128 12.9577 12.8795 12.8995 12.77 12.8083L9 9.66662H2.33333C2.11232 9.66662 1.90036 9.57883 1.74408 9.42255C1.5878 9.26626 1.5 9.0543 1.5 8.83329V5.49996C1.5 5.27894 1.5878 5.06698 1.74408 4.9107C1.90036 4.75442 2.11232 4.66662 2.33333 4.66662H9Z" stroke="#C4C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>  Маркетинг
                </li>
                <li>
                    <div :class="[$style.icon]"><svg width="14" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :class="[$style.pic]" d="M8.66669 1.5V4.83333C8.66669 5.05435 8.75448 5.26631 8.91077 5.42259C9.06705 5.57887 9.27901 5.66667 9.50002 5.66667H12.8334M8.66669 1.5H2.83335C2.39133 1.5 1.9674 1.67559 1.65484 1.98816C1.34228 2.30072 1.16669 2.72464 1.16669 3.16667V14.8333C1.16669 15.2754 1.34228 15.6993 1.65484 16.0118C1.9674 16.3244 2.39133 16.5 2.83335 16.5H11.1667C11.6087 16.5 12.0326 16.3244 12.3452 16.0118C12.6578 15.6993 12.8334 15.2754 12.8334 14.8333V5.66667M8.66669 1.5L12.8334 5.66667M4.50002 6.5H5.33335M4.50002 9.83333H9.50002M4.50002 13.1667H9.50002" stroke="#C4C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> Документы
                </li>
                <li>
                    <div :class="[$style.icon]"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :class="[$style.pic]" d="M11.3333 3C11.3333 3.92048 10.5871 4.66667 9.66665 4.66667C8.74617 4.66667 7.99998 3.92048 7.99998 3M11.3333 3C11.3333 2.07953 10.5871 1.33334 9.66665 1.33334C8.74617 1.33334 7.99998 2.07953 7.99998 3M11.3333 3H14.6666M7.99998 3H1.33331M6.33331 8C6.33331 8.92048 5.58712 9.66667 4.66665 9.66667C3.74617 9.66667 2.99998 8.92048 2.99998 8M6.33331 8C6.33331 7.07953 5.58712 6.33334 4.66665 6.33334C3.74617 6.33334 2.99998 7.07953 2.99998 8M6.33331 8H14.6666M2.99998 8H1.33331M13.8333 13C13.8333 13.9205 13.0871 14.6667 12.1666 14.6667C11.2462 14.6667 10.5 13.9205 10.5 13M13.8333 13C13.8333 12.0795 13.0871 11.3333 12.1666 11.3333C11.2462 11.3333 10.5 12.0795 10.5 13M13.8333 13H14.6666M10.5 13H1.33331" stroke="#C4C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> Настройки
                </li>
            </ul>
        </div>
        <div :class="[$style.wrapper]">
        
        </div>
    </div>
</template>

<script setup lang="ts">
    defineOptions({
        name: 'Hello'
    });
</script>

<style module lang="scss">
@font-face {
    font-family: Inter;
    font-weight: 400;
    font-style: normal;
    src: local('Inter-Regular'), url('~/assets/fonts/inter/Inter-Regular.ttf') format('ttf');
}

@font-face {
    font-family: Inter;
    font-weight: 500;
    font-style: bold;
    src: local('Inter-Bold'), url('~/assets/fonts/inter/Inter-Bold.ttf') format('ttf');
}

.Hello {
    width: 100%;
    height: 100%;

    .sidebar {
        background-color: #F7F8FA;
        width: 240px;

        .logo {
            width: 240px;
            height: 68px;
            background-image: url("../assets/icons/Logo.svg");
            background-position: center center;
            background-repeat: no-repeat;
        }

        ul {
            width: 240px;

            li {
                width: 100%;
                height: 44px;
                text-align: left;
                font-family: Inter, sans-serif;
                font-size: 14px;
                font-weight: 400;
                line-height: 22px;
                cursor: pointer;

                & .icon {
                    display: inline-block;
                    width: 30px;
                    height: 20px;
                    vertical-align: middle;
                }

                &:hover {
                    color: #00B012;

                    & .icon .pic {
                        stroke: #00B012;
                    }
                }

                &::marker {
                    content: url('../assets/icons/bullet.svg');
                    display: inline-block;
                    margin-right: 20px;
                    font-size: 30px;
                    width: 20px;
                    height: 20px;
                    color: transparent;
                }
            }
        }
    }
}
</style>
