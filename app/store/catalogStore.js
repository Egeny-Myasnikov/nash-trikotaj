import { create } from 'zustand'
import { strToPath } from '../helper'
import { devtools } from 'zustand/middleware'


const imgPath = '/imgs/catalog/'


export const useCatalogStore = create(devtools((set, get) => ({

    // catalog: {
    //     mens: {
    //         title: 'Мужская одежда',
    //         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //         cloth: [
    //             {
    //                 title: 'Мужские футболки',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Футболка "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     },
    //                     {
    //                         title: 'Футболка с длинным рукавом',
    //                         imgCover: `${imgPath}futbolka_bogatyr_red.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: 'Мужские джинсы',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Джинсы "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //             {
    //                 title: 'Мужские майки',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Майка "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //             {
    //                 title: 'Мужские носки',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Носки "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //             {
    //                 title: 'Трико',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Джинсы "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //         ],
    //     },
    //     womens: {
    //         title: 'Женская одежда',
    //         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //         cloth: [
    //             {
    //                 title: 'Футболки',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Футболка "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //             {
    //                 title: 'Джинсы',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Джинсы "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //             {
    //                 title: 'Майки',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Майки "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //             {
    //                 title: 'Носки',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Носки "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //             {
    //                 title: 'Трико',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Джинсы "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //         ],
    //     },
    //     girls: {
    //         title: 'Для девочек',
    //         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //         cloth: [
    //             {
    //                 title: 'Футболки',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Футболка "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //             {
    //                 title: 'Джинсы',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Джинсы "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //             {
    //                 title: 'Майки',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Майки "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //             {
    //                 title: 'Носки',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Носки "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //             {
    //                 title: 'Трико',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Джинсы "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //         ],
    //     },
    //     boys: {
    //         title: 'Для мальчиков',
    //         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //         cloth: [
    //             {
    //                 title: 'Футболки',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Футболка "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //             {
    //                 title: 'Джинсы',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Джинсы "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //             {
    //                 title: 'Майки',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Майки "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //             {
    //                 title: 'Носки',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Носки "Богатырь"',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //             {
    //                 title: 'Трико',
    //                 imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                 model: [
    //                     {
    //                         title: 'Трико Богатырь',
    //                         imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
    //                         size: ['160', '170', '180'],
    //                         color: [
    //                             { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
    //                             { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
    //                         ],
    //                     }
    //                 ],
    //             },
    //         ],
    //     },
    // },
    catalog: [
        {
            title: 'Мужская одежда',
            imgCover: `${imgPath}06-02-24/tolstovka-haki-men.jpg`,
            cloth: [
                {
                    title: 'Мужские футболки',
                    imgCover: `${imgPath}06-02-24/futbolri-mens.jpg`,
                    model: [
                        {
                            title: 'Футболка ',
                            imgCover: `${imgPath}06-02-24/futbolka-men-48-56.jpg`,
                            size: ['48', '50', '52', '54', '56'],
                            color: [
                                { color: '#4C4B27', img: `${imgPath}06-02-24/futbolka-men-48-56.jpg` },
                            ],
                        },
                        {
                            title: 'Футболки',
                            imgCover: `${imgPath}06-02-24/futbolri-mens.jpg`,
                            size: ['48', '50', '52', '54', '56'],
                            color: [
                                { color: '#12B1A0', img: `${imgPath}06-02-24/futbolri-mens.jpg` },
                                { color: '#0E758D', img: `${imgPath}06-02-24/futbolri-mens.jpg` },
                            ],
                        },
                        {
                            title: 'Тельняшка с начесом',
                            imgCover: `${imgPath}06-02-24/telnyashka-naches-48-56-men.jpg`,
                            size: ['48', '50', '52', '54', '56'],
                            color: [
                                { color: '#333249', img: `${imgPath}06-02-24/telnyashka-naches-48-56-men.jpg` },
                                { color: '#223685', img: `${imgPath}06-02-24/telnyashka-naches-48-56-men.jpg` },

                            ],
                        },
                    ],
                },
                {
                    title: 'Мужские толстовки',
                    imgCover: `${imgPath}06-02-24/tolstovka-haki-men.jpg`,
                    model: [
                        {
                            title: 'Толстовка',
                            imgCover: `${imgPath}06-02-24/tolstovka-blue-men.jpg`,
                            size: [],
                            color: [
                                { color: '#193E71', img: `${imgPath}06-02-24/tolstovka-blue-men.jpg` },
                            ],
                        },
                        {
                            title: 'Толстовка "Хакки"',
                            imgCover: `${imgPath}06-02-24/tolstovka-haki-men.jpg`,
                            size: [],
                            color: [
                                { color: '#524E30', img: `${imgPath}06-02-24/tolstovka-haki-men.jpg` },
                            ],
                        },
                    ],
                },

            ],
        },
        {
            title: 'Женская одежда',
            imgCover: `${imgPath}06-02-24/platie-women-blue.jpg`,
            cloth: [
                {
                    title: 'Футболки',
                    imgCover: `${imgPath}06-02-24/futbolka-women-blue.jpg`,
                    model: [
                        {
                            title: 'Футболка',
                            imgCover: `${imgPath}06-02-24/futbolka-women-blue.jpg`,
                            size: [],
                            color: [
                                { color: '#30384E', img: `${imgPath}06-02-24/futbolka-women-blue.jpg` },
                            ],
                        },
                        {
                            title: 'Футболка "cats"',
                            imgCover: `${imgPath}06-02-24/futbolka-women-123.jpg`,
                            size: [],
                            color: [
                                { color: '#E6E3E8', img: `${imgPath}06-02-24/futbolka-women-123.jpg` },
                            ],
                        },
                        {
                            title: 'Футболка в полоску',
                            imgCover: `${imgPath}06-02-24/futbolka-women-pink.jpg`,
                            size: [],
                            color: [
                                { color: '#B94084', img: `${imgPath}06-02-24/futbolka-women-pink.jpg` },
                            ],
                        },
                    ],
                },
                {
                    title: 'Халаты',
                    imgCover: `${imgPath}06-02-24/halat-Angorka-48-56-blue-women.jpg`,
                    model: [
                        {
                            title: 'Халат "Ангорка"',
                            imgCover: `${imgPath}06-02-24/halat-Angorka-48-56-blue-women.jpg`,
                            size: ['48', '50', '52', '54', '56'],
                            color: [
                                { color: '#445471', img: `${imgPath}06-02-24/halat-Angorka-48-56-blue-women.jpg` },
                            ],
                        },
                    ],
                },
                {
                    title: 'Куртки',
                    imgCover: `${imgPath}06-02-24/kurtka-black-white-women.jpg`,
                    model: [
                        {
                            title: 'Куртка',
                            imgCover: `${imgPath}06-02-24/kurtka-black-white-women.jpg`,
                            size: [],
                            color: [
                                { color: '#080A15', img: `${imgPath}06-02-24/kurtka-black-white-women.jpg` },
                            ],
                        },
                    ],
                },
                {
                    title: 'Платья',
                    imgCover: `${imgPath}06-02-24/platie-women-blue.jpg`,
                    model: [
                        {
                            title: 'Платье черное',
                            imgCover: `${imgPath}06-02-24/platie-women-black.jpg`,
                            size: [],
                            color: [
                                { color: '#0A0003', img: `${imgPath}06-02-24/platie-women-black.jpg` },
                            ],
                        },
                        {
                            title: 'Платье бирюзовое',
                            imgCover: `${imgPath}06-02-24/platie-women-blue.jpg`,
                            size: [],
                            color: [
                                { color: '#0B4765', img: `${imgPath}06-02-24/platie-women-blue.jpg` },
                            ],
                        },
                    ],
                },
                {
                    title: 'Сорочки',
                    imgCover: `${imgPath}06-02-24/sorochka-women-blue.jpg`,
                    model: [
                        {
                            title: 'Сорочка синяя',
                            imgCover: `${imgPath}06-02-24/sorochka-women-blue.jpg`,
                            size: [],
                            color: [
                                { color: '#537FC0', img: `${imgPath}06-02-24/sorochka-women-blue.jpg` },
                            ],
                        },
                        {
                            title: 'Сорочка с начесом',
                            imgCover: `${imgPath}06-02-24/sorochka-women-50-60.jpg`,
                            size: ['50', '52', '54', '56'],
                            color: [
                                { color: '#E8EBF1', img: `${imgPath}06-02-24/sorochka-women-50-60.jpg` },
                            ],
                        },
                    ],
                },
                {
                    title: 'Трико',
                    imgCover: `${imgPath}06-02-24/triko-women.jpg`,
                    model: [
                        {
                            title: 'Трико бирюзовое',
                            imgCover: `${imgPath}06-02-24/triko-women.jpg`,
                            size: [],
                            color: [
                                { color: '#30625F', img: `${imgPath}06-02-24/triko-women.jpg` },
                            ],
                        },
                        {
                            title: 'Трико',
                            imgCover: `${imgPath}06-02-24/triko-womens.jpg`,
                            size: [],
                            color: [
                                { color: '#2F3A56', img: `${imgPath}06-02-24/triko-womens.jpg` },
                            ],
                        },
                    ],
                },
                {
                    title: 'Туника',
                    imgCover: `${imgPath}06-02-24/tunika-Angorka-50-60-women.jpg`,
                    model: [
                        {
                            title: 'Туника "Ангорка"',
                            imgCover: `${imgPath}06-02-24/tunika-Angorka-50-60-women.jpg`,
                            size: ['50', '52', '54', '56', '58', '60'],
                            color: [
                                { color: '#916B76', img: `${imgPath}06-02-24/tunika-Angorka-50-60-women.jpg` },
                            ],
                        },
                        {
                            title: 'Туника темная',
                            imgCover: `${imgPath}06-02-24/tunika-black-women.jpg`,
                            size: [],
                            color: [
                                { color: '#20202F', img: `${imgPath}06-02-24/tunika-black-women.jpg` },
                            ],
                        },
                        {
                            title: 'Туника',
                            imgCover: `${imgPath}06-02-24/tunika-blue-women.jpg`,
                            size: [],
                            color: [
                                { color: '#183C4B', img: `${imgPath}06-02-24/tunika-blue-women.jpg` },
                            ],
                        },
                    ],
                },
            ],
        },
        // {
        //     title: 'Для девочек',
        //     imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //     cloth: [
        //         {
        //             title: 'Футболки',
        //             imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //             model: [
        //                 {
        //                     title: 'Футболка "Богатырь"',
        //                     imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //                     size: ['160', '170', '180'],
        //                     color: [
        //                         { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
        //                         { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
        //                     ],
        //                 }
        //             ],
        //         },
        //         {
        //             title: 'Джинсы',
        //             imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //             model: [
        //                 {
        //                     title: 'Джинсы "Богатырь"',
        //                     imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //                     size: ['160', '170', '180'],
        //                     color: [
        //                         { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
        //                         { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
        //                     ],
        //                 }
        //             ],
        //         },
        //         {
        //             title: 'Майки',
        //             imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //             model: [
        //                 {
        //                     title: 'Майки "Богатырь"',
        //                     imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //                     size: ['160', '170', '180'],
        //                     color: [
        //                         { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
        //                         { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
        //                     ],
        //                 }
        //             ],
        //         },
        //         {
        //             title: 'Носки',
        //             imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //             model: [
        //                 {
        //                     title: 'Носки "Богатырь"',
        //                     imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //                     size: ['160', '170', '180'],
        //                     color: [
        //                         { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
        //                         { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
        //                     ],
        //                 }
        //             ],
        //         },
        //         {
        //             title: 'Трико',
        //             imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //             model: [
        //                 {
        //                     title: 'Джинсы "Богатырь"',
        //                     imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //                     size: ['160', '170', '180'],
        //                     color: [
        //                         { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
        //                         { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
        //                     ],
        //                 }
        //             ],
        //         },
        //     ],
        // },
        // {
        //     title: 'Для мальчиков',
        //     imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //     cloth: [
        //         {
        //             title: 'Футболки',
        //             imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //             model: [
        //                 {
        //                     title: 'Футболка "Богатырь"',
        //                     imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //                     size: ['160', '170', '180'],
        //                     color: [
        //                         { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
        //                         { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
        //                     ],
        //                 }
        //             ],
        //         },
        //         {
        //             title: 'Джинсы',
        //             imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //             model: [
        //                 {
        //                     title: 'Джинсы "Богатырь"',
        //                     imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //                     size: ['160', '170', '180'],
        //                     color: [
        //                         { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
        //                         { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
        //                     ],
        //                 }
        //             ],
        //         },
        //         {
        //             title: 'Майки',
        //             imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //             model: [
        //                 {
        //                     title: 'Майки "Богатырь"',
        //                     imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //                     size: ['160', '170', '180'],
        //                     color: [
        //                         { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
        //                         { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
        //                     ],
        //                 }
        //             ],
        //         },
        //         {
        //             title: 'Носки',
        //             imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //             model: [
        //                 {
        //                     title: 'Носки "Богатырь"',
        //                     imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //                     size: ['160', '170', '180'],
        //                     color: [
        //                         { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
        //                         { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
        //                     ],
        //                 }
        //             ],
        //         },
        //         {
        //             title: 'Трико',
        //             imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //             model: [
        //                 {
        //                     title: 'Трико Богатырь',
        //                     imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
        //                     size: ['160', '170', '180'],
        //                     color: [
        //                         { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
        //                         { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
        //                     ],
        //                 }
        //             ],
        //         },
        //     ],
        // },
    ],


    getCatalogData: () => {
        let arr = []
        const cat = get().catalog
        cat.forEach((el) => arr.push({ title: el.title, imgCover: el.imgCover }))
        return arr
    },

    getClothData: (path) => {
        let arr = []
        const cat = get().catalog
        cat.forEach((el) => {
            if (path === strToPath(el.title)) {
                arr.push({ title: el.title, cloth: el.cloth })
            }
        })
        return arr
    },

    getModelData: (pathCloth, pathModel) => {
        let arr = []
        const cat = get().catalog
        cat.forEach((el) => {
            if (pathCloth === strToPath(el.title)) {
                el.cloth.forEach((cloth) => {
                    if (pathModel === strToPath(cloth.title)) {
                        cloth.model.forEach((obj) => {
                            obj.clothTitle = cloth.title
                            obj.category = el.title
                        })
                        arr.push(cloth)
                    }
                })
            }
        })
        return arr
    },

    getSingleModelData: (pathCloth, pathModel, pathSingleModel) => {
        let arr = []
        const cat = get().catalog
        cat.forEach((el) => {
            if (pathCloth === strToPath(el.title)) {
                el.cloth.forEach((cloth) => {
                    if (pathModel === strToPath(cloth.title)) {
                        cloth.model.forEach((obj) => {
                            obj.clothTitle = cloth.title
                            obj.category = el.title
                            if (pathSingleModel === strToPath(obj.title)) {
                                arr.push(obj)
                            }
                        })
                    }
                })
            }
        })
        return arr
    },

    getSearchData: () => {
        const arrAllTitle = []
        get().catalog.forEach((el) => {
            arrAllTitle.push(el.title)
            el.cloth.forEach((el) => {
                arrAllTitle.push(el.title)
                el.model.forEach((el) => {
                    arrAllTitle.push(el.title)
                })
            })
        })
        return arrAllTitle
    },


    // getTypeProjects: () => {
    //     const typeName = []
    //     const typeDescription = []
    //     for (const key in TYPES) {
    //         typeName.push(TYPES[key].typeName)
    //         typeDescription.push(TYPES[key].typeDescription)
    //     }
    //     return { typeName, typeDescription }
    // },

    // getProjects: ({ quantity, type }) => {

    //     const filteredByType = (type) => {
    //         const newArr = get().listOfProjects.filter(obj => obj.type.typeName === type ? true : false)
    //         return newArr.length === 0 ? get().listOfProjects : newArr
    //     }
    //     if (quantity) {
    //         const slicedArr = filteredByType(type).slice(0, quantity)
    //         return slicedArr
    //     } else {
    //         return filteredByType(type)
    //     }
    // },

    // getSingleProject: id => get().listOfProjects.find(el => el.id === id),

})))
