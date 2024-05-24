const Mobiles = [
    {
        name: 'Iphone 13',
        price: 3500,
        id: 1,
        imageSrc: 'https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
        about: "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو"
    },
    {
        name: 's24 Ultra',
        price: 2900,
        id: 2,
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/a8234e915f4f6ed119daac830e39eca031d62c2d_1705751969.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about: "گوشی موبایل سامسونگ مدل Galaxy S24 Ultra دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت - ویتنام"
    },
    {
        name: 'Xiaomi note13',
        price: 2800,
        id: 3,
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/51ca4d6108835c0632fcae34d1f05a76081b8106_1707719127.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about: "گوشی موبایل شیائومی مدل Redmi Note 13 4G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت"
    },
    {
        name: 'Iphone 11',
        price: 25000,
        id: 4,
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/6e25f9b57c920efd55f980d129614b18f83bd451_1670074732.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90 ",
        about: "گوشی موبایل اپل مدل iPhone 11 تک سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت"
    },
    {
        name: 'Honor',
        price: 26000,
        id: 5,
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/41513f36ca8ed31b603737010b4a109c646f7f76_1707811518.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about: "گوشی موبایل آنر مدل X9b دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت"
    },
    {
        name : "Razer 40 ultra",
        price : 28000,
        id : 6,
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/270c6076e397c36a0fb605c799089676e7454f19_1704631246.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about : "گوشی موبایل موتورولا مدل Razr 40 Ultra تک سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت"
    }
]

const cameras = [
    {
        name: "Canon EOS",
        price: 1500,
        id: 7,
        imageSrc:"https://dkstatics-public.digikala.com/digikala-products/114000898.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about : "دوربین دیجیتال کانن مدل EOS 90D به همراه لنز 135-18 میلی متر IS USM"
    },
    {
        name: "canon 2000D",
        price: 1800,
        id: 8,
        imageSrc:"https://dkstatics-public.digikala.com/digikala-products/4031712.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about:"دوربین دیجیتال کانن مدل EOS 2000D به همراه لنز 18-55 میلی متر IS II"
    },
    {
        name: "canon 850D",
        price: 1560,
        id: 9,
        imageSrc:"https://dkstatics-public.digikala.com/digikala-products/6a3f827d63533f8e8e7578b418fa41b4fd253a55_1602403080.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about : "دوربین دیجیتال کانن مدل EOS 850D به همراه لنز 55-18 میلی متر IS STM"
    },
    {
        name: "Sony",
        price: 1200,
        id: 10,
        imageSrc:"https://dkstatics-public.digikala.com/digikala-products/16e65eb21294adf6b83caa7f42766f5f06f23d60_1713255135.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about : "دوربین دیجیتال بدون آینه سونی مدل ZV-E10 به همراه لنز 16-50 میلی متر OSS"
    },
    {
        name: "Sony Alpha",
        price: 1800,
        id: 11,
        imageSrc:"https://dkstatics-public.digikala.com/digikala-products/9e1e99e6dc865229a4e011b92f66f054491a513e_1687781307.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about : "دوربین دیجیتال بدون آینه سونی مدل Alpha a7 III With 28-70mm Lens"
    },
    {
        name: "Sony a7",
        price: 1400,
        id: 12,
        imageSrc:"https://dkstatics-public.digikala.com/digikala-products/bc9a1f333fe53f69f9cd7e4b55d35fc6b8225613_1678709530.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about :"دوربین بدون آینه سونی مدل a7s III"
    },
]

const laptops = [
    {
        name: "Asus TUF",
        price: 5500,
        id: 13,
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/fa5c17d774a9b7b1b4a94e0c8b19a2bda5f1d913_1705752755.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about:"لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5 11400H 16GB 512SSD RTX2050 - کاستوم شده"
    },
    {
        name: "Asus ROG",
        price: 5000,
        id: 14,
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/73c2c10dac44fb5b618206533d2602fed22e0c64_1713552046.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about:"لپ تاپ 18 اینچی ایسوس مدل ROG Strix SCAR 18 G834JYR-N6060-i9 14900HX 64GB 2SSD RTX4090 - کاستوم شده"
    },
    {
        name: "Asus zen",
        price: 4800,
        id: 15,
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/4d097b0bd5b43a5d272c1ae499f6f4df308a64ca_1714475177.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about:"لپ تاپ 15.6 اینچی ایسوس مدل Creator Q Q530VJ-i7 13620H 16GB 512SSD RTX3050"
    },
    {
        name: "Lenovo idiapad",
        price: 2200,
        id: 16,
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/e5dfffed0fe58135b9787887394f4db17be8c5dc_1693397601.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about:"لپ تاپ 15.6 اینچی لنوو مدل Ideapad 1-Celeron N4020 4GB 256SSD"
    },
    {
        name: "Lenovo AMN",
        price: 3800,
        id: 17,
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/f9d556a68cc4a507cc80981935cf68ae2e3d7711_1690028248.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about:"پ تاپ 15.6 اینچی لنوو مدل V15 G4 AMN-Athlon Silver 7120U 8GB 256SSD"
    },
    {
        name: "Lenovo Slim 3",
        price: 4600,
        id: 18,
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/41d43012149f70c0f9bc1f3d9619b6746cc29674_1692203922.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about:"لپ تاپ 15.6 اینچی لنوو مدل IdeaPad Slim 3 15IRU8-i3 1305U 8GB 256SSD"
    },
]

const Televisions = [
    {
        name: "Tv1",
        price: 2500,
        id: 19,
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/c95e63d0dcee0e694b1af29fe168b6569c7889de_1700653896.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about:"تلویزیون ال ای دی شهاب مدل LED24SH203N1 سایز 24 اینچ"
    },
    {
        name: "Tv2",
        price: 6000,
        id: 20,
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/651371f95be54bd75187faba583f12df81d3d1e5_1685257251.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about:"تلویزیون ال ای دی هوشمند دوو مدل DSL-50SU1720 سایز 50 اینچ"
    },
    {
        name: "Tv3",
        price: 5200,
        id: 21,
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/e0da43c1845f46ed862de4b8137682a6b9120e3e_1688884818.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about:"تلویزیون ال ای دی هوشمند اسنوا مدل SSD-55SK610UD سایز 55 اینچ"
    },
    {
        name: "Tv4",
        price: 4800,
        id: 22,
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/f7a243fa5688df253854a174fb917c53c5aceba3_1704631709.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about:"تلویزیون ال ای دی نکسار مدل NTV-D32E414N سایز 32 اینچ"
    },
    {
        name: "Tv5",
        price: 3900,
        id: 23,
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/32073fac43a3fab1bb68af8634301182764efedc_1709985533.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about:"تلویزیون ال ای دی هوشمند جی پلاس مدل GTV-50RU764S سایز 50 اینچ"
    },
    {
        name: "Tv6",
        price: 9500,
        id: 24,
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/f6f6e6a331c3a4742b35a04aa12b14d337b7f085_1698838355.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        about:"تلویزیون ال ای دی بست مدل 43BN100 سایز 43 اینچ"
    },
]




export { Mobiles, cameras, laptops, Televisions }