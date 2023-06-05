<script setup>
const PROVINCE = ['Đà Nẵng', 'Quảng Trị', 'Quảng Nam', 'Gia Lai', 'Đắk Lắk', 'Lâm Đồng'];

const JOB_CARD = [
    {
        title: 'Việc làm hấp dẫn KV Miền Trung',
        image: '/img/image-1.png',
        salary: '12 - 18 triệu',
        phone: '0909.465.232',
        date: '31/05/2023',
        province: ['Đà Nẵng', 'Quảng Trị', 'Quảng Nam', 'Gia Lai', 'Đắk Lắk', 'Lâm Đồng'],
    },
    {
        title: '[Tháng 5] Tuyển nhân viên bán hàng toàn quốc',
        image: '/img/background-footer.png',
        salary: '12 - 17 triệu',
        phone: '0909.465.232',
        date: '31/05/2023',
        province: ['Hồ Chí Minh', 'Hà Nội', 'Quảng Ninh', 'Thái Nguyên'],
    },
    {
        title: 'Tuyển dụng nhân viên bán hàng Pepsi - KV Hà Nội',
        image: '/img/image-3.png',
        salary: '12 - 18 triệu',
        phone: '0909.465.232',
        date: '31/05/2023',
        province: ['Hà Nội'],
    },
    {
        title: 'Việc làm hấp dẫn KV Miền Trung',
        image: '/img/image-1.png',
        salary: '12 - 18 triệu',
        phone: '0909.465.232',
        date: '31/05/2023',
        province: [
            'Đà Nẵng',
            'Quảng Trị',
            'Quảng Nam',
            'Gia Lai',
            'Đắk Lắk',
            'Lâm Đồng',
            'Quảng Nam',
            'Gia Lai',
            'Đắk Lắk',
            'Lâm Đồng',
        ],
    },
    {
        title: 'Việc làm hấp dẫn KV Miền Trung',
        image: '/img/image-1.png',
        salary: '12 - 18 triệu',
        phone: '0909.465.232',
        date: '31/05/2023',
        province: ['Đà Nẵng', 'Quảng Trị', 'Quảng Nam', 'Gia Lai', 'Đắk Lắk', 'Lâm Đồng'],
    },
];
</script>

<template>
    <div class="relative">
        <SwiperLandingPage />
        <div class="absolute z-10 top-full left-1/2 transform-50 w-11/12"><SearchBar /></div>
    </div>
    <div class="mt-36 mb-[100px]">
        <div class="text-center text-3xl font-bold">Nổi bật trong tháng</div>
        <div class="text-center text-[#475569] text-[14px] mt-3 mb-14">
            Tiếp tục duy trì vị trí hàng đầu trong ngành công nghiệp nước giải khát
        </div>
        <div class="flex justify-center"><JobCardSwiper :job_card="JOB_CARD" /></div>
    </div>
    <div class="mb-[100px] px-[135px] py-[100px] bg-[#F8FAFC]">
        <div class="text-center text-3xl font-bold">Các vị trí đang tuyển dụng</div>
        <div class="text-center text-[#475569] text-[14px] mt-3 mb-14">
            Tiếp tục duy trì vị trí hàng đầu trong ngành công nghiệp nước giải khát.
        </div>
        <div class="flex flex-col gap-4">
            <template v-for="(item, index) in JOB_CARD">
                <JobNewsItem
                    :title="item.title"
                    :image="item.image"
                    :salary="item.salary"
                    :phone="item.phone"
                    :date="item.date"
                    :province="item.province"
                />
            </template>
        </div>
        <div class="flex justify-center mt-10">
            <v-btn class="text-white bg-[#F98620]" size="x-large" append-icon="mdi-arrow-right" :rounded="'rounded-lg'"
                >Xem tất cả</v-btn
            >
        </div>
    </div>
    <div class="px-[135px] py-[100px] bg-[#F8FAFC]">
        <div class="text-center text-3xl font-bold">Quy trình tuyển dụng</div>
        <div class="text-center text-[#475569] text-[14px] mt-3 mb-14">
            Tiếp tục duy trì vị trí hàng đầu trong ngành công nghiệp nước giải khát.
        </div>
        <div class="flex flex-col gap-4">
            <template v-for="(item, index) in JOB_CARD">
                <JobNewsItem
                    :title="item.title"
                    :image="item.image"
                    :salary="item.salary"
                    :phone="item.phone"
                    :date="item.date"
                    :province="item.province"
                />
            </template>
        </div>
        <div class="flex justify-center mt-10">
            <v-btn class="text-white bg-[#F98620]" size="x-large" append-icon="mdi-arrow-right" :rounded="'rounded-lg'"
                >Xem tất cả</v-btn
            >
        </div>
    </div>
</template>

<style lang="scss" scoped>
.transform-50 {
    transform: translate(-50%, -50%);
}
.v-btn {
    background-color: #f98620;
}
</style>
