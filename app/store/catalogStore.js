import { create } from 'zustand'
import { strToPath } from '../helper'
import { devtools } from 'zustand/middleware'


const imgPath = '/imgs/'


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
            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
            cloth: [
                {
                    title: 'Мужские футболки',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Футболка "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        },
                        {
                            title: 'Футболка с длинным рукавом',
                            imgCover: `${imgPath}futbolka_bogatyr_red.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        },
                    ],
                },
                {
                    title: 'Мужские джинсы',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Джинсы "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
                {
                    title: 'Мужские майки',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Майка "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
                {
                    title: 'Мужские носки',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Носки "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
                {
                    title: 'Трико',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Джинсы "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
            ],
        },
        {
            title: 'Женская одежда',
            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
            cloth: [
                {
                    title: 'Футболки',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Футболка "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
                {
                    title: 'Джинсы',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Джинсы "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
                {
                    title: 'Майки',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Майки "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
                {
                    title: 'Носки',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Носки "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
                {
                    title: 'Трико',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Джинсы "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
            ],
        },
        {
            title: 'Для девочек',
            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
            cloth: [
                {
                    title: 'Футболки',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Футболка "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
                {
                    title: 'Джинсы',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Джинсы "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
                {
                    title: 'Майки',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Майки "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
                {
                    title: 'Носки',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Носки "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
                {
                    title: 'Трико',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Джинсы "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
            ],
        },
        {
            title: 'Для мальчиков',
            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
            cloth: [
                {
                    title: 'Футболки',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Футболка "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
                {
                    title: 'Джинсы',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Джинсы "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
                {
                    title: 'Майки',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Майки "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
                {
                    title: 'Носки',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Носки "Богатырь"',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
                {
                    title: 'Трико',
                    imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                    model: [
                        {
                            title: 'Трико Богатырь',
                            imgCover: `${imgPath}futbolka_bogatyr_green.jpg`,
                            size: ['160', '170', '180'],
                            color: [
                                { color: '#00ff00', img: `${imgPath}futbolka_bogatyr_green.jpg` },
                                { color: '#ff0000', img: `${imgPath}futbolka_bogatyr_red.jpg` }
                            ],
                        }
                    ],
                },
            ],
        },
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
