<template>
    <div>
        <div class="text-text-header flex flex-wrap justify-between mt-20 mb-10">
            <div class="footer-contact w-1/4">
                <img class="mb-4" :src="'/img/logo.png'" width="64" height="64" />
                <v-list lines="three" class="footer-list">
                    <v-list-item v-for="(item, i) in FOOTER_INFO" :key="i" :value="item">
                        <template v-slot:prepend>
                            <v-icon class="m-0" :icon="item.icon"></v-icon>
                        </template>
                        <template v-if="item.type === 'link'"
                            ><a class="text-text-header-active" style="word-break: break-all" :href="item.text">{{
                                item.text
                            }}</a></template
                        >
                        <template v-else>{{ item.text }}</template>
                    </v-list-item>
                </v-list>
            </div>

            <div class="mt-10 w-3/5">
                <span class="text-xl text-bold text-white">Việc làm theo tỉnh thành</span>
                <div class="flex justify-between mt-3">
                    <div v-for="(col, index) in PROVINCE_JOB" :key="index">
                        <ui>
                            <li class="py-2.5 text-[#67c2c3] job-province" v-for="(cell, i) in col" :key="i">
                                <span class="text-white">{{ cell }}</span>
                            </li>
                        </ui>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-bottom mb-10"></div>
        <div class="flex flex-wrap justify-between mb-4 text-[#CBD5E1]">
            <div class="">© Suntory PepsiCo Vietnam Beverage</div>
            <div class="">Phát triển bởi CodiHaus</div>
        </div>
    </div>
</template>

<script setup lang="ts">
const FOOTER_INFO = [
    {
        icon: 'mdi-home',
        text: '0909 465 232',
        type: 'text',
    },
    {
        icon: 'mdi-home',
        text: 'VP Miền Bắc: Tòa nhà Lotte center, 54 Liễu Giai, Ba Đình, Hà Nội',
        type: 'text',
    },
    {
        icon: '',
        text: 'VP Miền Nam: Tòa nhà Opal, số 92 Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, Tp. Hồ Chí Minh',
        type: 'text',
    },
    {
        icon: 'mdi-home',
        text: 'https://www.facebook.com/TuyendungDCR/',
        type: 'link',
    },
    {
        icon: 'mdi-home',
        text: 'zalo.me/227789971463571980',
        type: 'link',
    },
];

const PROVINCE_JOB = [
    [
        'Việc làm tại Hồ Chí Minh',
        'Việc làm tại Hà Nội',
        'Việc làm tại Hải Phòng',
        ' Việc làm tại Đà Nẵng',
        'Việc làm tại Cần Thơ',
    ],
    [
        'Việc làm tại Bình Dương',
        'Việc làm tại An Giang',
        'Việc làm tại Bà Rịa - Vũng Tàu',
        ' Việc làm tại Bắc Giang',
        'Việc làm tại Bắc Kạn',
    ],
    [
        'Việc làm tại Bạc Liêu',
        'Việc làm tại Bắc Ninh',
        'Việc làm tại Bến Tre',
        ' Việc làm tại Bình Định',
        'Việc làm tại Bình Phước',
    ],
];
</script>

<style lang="scss" scoped>
.footer-contact:deep {
    .footer-list {
        background-color: rgb(30 41 59 / var(--tw-bg-opacity));
        color: #fff;
        font-size: 14px;
        gap: 16px;
        display: flex;
        flex-direction: column;
    }
    .v-list-item--density-default.v-list-item--three-line {
        min-height: 0;
        padding-top: 0;
        padding-bottom: 0;
    }

    .job-province::marker {
        color: #67c2c3;
    }
}
.border-bottom {
    border-bottom: 1px solid #fff;
}
</style>
