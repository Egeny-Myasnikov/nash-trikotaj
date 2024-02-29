import { create } from 'zustand'
import { strToPath } from '../helper'
import { devtools } from 'zustand/middleware'


export const useCatalogStore = create(devtools((set, get) => ({

    cat: [],

    // catalog: [
    //     {
    //         id: uuidv4(),
    //         title: 'Мужская одежда',
    //         imgCover: `${imgPath}06-02-24/tolstovka-haki-men.jpg`,
    //         cloth: [
    //             {
    //                 id: uuidv4(),
    //                 title: 'Мужские футболки',
    //                 imgCover: `${imgPath}06-02-24/futbolri-mens.jpg`,
    //                 model: [
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Футболка ',
    //                         imgCover: `${imgPath}06-02-24/futbolka-men-48-56.jpg`,
    //                         size: ['48', '50', '52', '54', '56'],
    //                         color: [
    //                             { color: '#4C4B27', img: `${imgPath}06-02-24/futbolka-men-48-56.jpg` },
    //                         ],
    //                     },
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Футболки',
    //                         imgCover: `${imgPath}06-02-24/futbolri-mens.jpg`,
    //                         size: ['48', '50', '52', '54', '56'],
    //                         color: [
    //                             { color: '#12B1A0', img: `${imgPath}06-02-24/futbolri-mens.jpg` },
    //                             { color: '#0E758D', img: `${imgPath}06-02-24/futbolri-mens.jpg` },
    //                         ],
    //                     },
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Тельняшка с начесом',
    //                         imgCover: `${imgPath}06-02-24/telnyashka-naches-48-56-men.jpg`,
    //                         size: ['48', '50', '52', '54', '56'],
    //                         color: [
    //                             { color: '#333249', img: `${imgPath}06-02-24/telnyashka-naches-48-56-men.jpg` },
    //                             { color: '#223685', img: `${imgPath}06-02-24/telnyashka-naches-48-56-men.jpg` },

    //                         ],
    //                     },
    //                 ],
    //             },
    //             {
    //                 id: uuidv4(),
    //                 title: 'Мужские толстовки',
    //                 imgCover: `${imgPath}06-02-24/tolstovka-haki-men.jpg`,
    //                 model: [
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Толстовка',
    //                         imgCover: `${imgPath}06-02-24/tolstovka-blue-men.jpg`,
    //                         size: [],
    //                         color: [
    //                             { color: '#193E71', img: `${imgPath}06-02-24/tolstovka-blue-men.jpg` },
    //                         ],
    //                     },
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Толстовка "Хакки"',
    //                         imgCover: `${imgPath}06-02-24/tolstovka-haki-men.jpg`,
    //                         size: [],
    //                         color: [
    //                             { color: '#524E30', img: `${imgPath}06-02-24/tolstovka-haki-men.jpg` },
    //                         ],
    //                     },
    //                 ],
    //             },

    //         ],
    //     },
    //     {
    //         id: uuidv4(),
    //         title: 'Женская одежда',
    //         imgCover: `${imgPath}06-02-24/platie-women-blue.jpg`,
    //         cloth: [
    //             {
    //                 id: uuidv4(),
    //                 title: 'Футболки',
    //                 imgCover: `${imgPath}06-02-24/futbolka-women-blue.jpg`,
    //                 model: [
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Футболка',
    //                         imgCover: `${imgPath}06-02-24/futbolka-women-blue.jpg`,
    //                         size: [],
    //                         color: [
    //                             { color: '#30384E', img: `${imgPath}06-02-24/futbolka-women-blue.jpg` },
    //                         ],
    //                     },
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Футболка "cats"',
    //                         imgCover: `${imgPath}06-02-24/futbolka-women-123.jpg`,
    //                         size: [],
    //                         color: [
    //                             { color: '#E6E3E8', img: `${imgPath}06-02-24/futbolka-women-123.jpg` },
    //                         ],
    //                     },
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Футболка в полоску',
    //                         imgCover: `${imgPath}06-02-24/futbolka-women-pink.jpg`,
    //                         size: [],
    //                         color: [
    //                             { color: '#B94084', img: `${imgPath}06-02-24/futbolka-women-pink.jpg` },
    //                         ],
    //                     },
    //                 ],
    //             },
    //             {
    //                 id: uuidv4(),
    //                 title: 'Халаты',
    //                 imgCover: `${imgPath}06-02-24/halat-Angorka-48-56-blue-women.jpg`,
    //                 model: [
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Халат "Ангорка"',
    //                         imgCover: `${imgPath}06-02-24/halat-Angorka-48-56-blue-women.jpg`,
    //                         size: ['48', '50', '52', '54', '56'],
    //                         color: [
    //                             { color: '#445471', img: `${imgPath}06-02-24/halat-Angorka-48-56-blue-women.jpg` },
    //                         ],
    //                     },
    //                 ],
    //             },
    //             {
    //                 id: uuidv4(),
    //                 title: 'Верхняя одежда',
    //                 imgCover: `${imgPath}06-02-24/kurtka-black-white-women.jpg`,
    //                 model: [
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Куртка',
    //                         imgCover: `${imgPath}06-02-24/kurtka-black-white-women.jpg`,
    //                         size: [],
    //                         color: [
    //                             { color: '#080A15', img: `${imgPath}06-02-24/kurtka-black-white-women.jpg` },
    //                         ],
    //                     },
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Плащь',
    //                         imgCover: `${imgPath}06-02-24/kurtka-black-white-women.jpg`,
    //                         size: [],
    //                         color: [
    //                             { color: '#080A15', img: `${imgPath}06-02-24/kurtka-black-white-women.jpg` },
    //                         ],
    //                     },
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Пиджаки',
    //                         imgCover: `${imgPath}06-02-24/kurtka-black-white-women.jpg`,
    //                         size: [],
    //                         color: [
    //                             { color: '#080A15', img: `${imgPath}06-02-24/kurtka-black-white-women.jpg` },
    //                         ],
    //                     },
    //                 ],
    //             },
    //             {
    //                 id: uuidv4(),
    //                 title: 'Платья',
    //                 imgCover: `${imgPath}06-02-24/platie-women-blue.jpg`,
    //                 model: [
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Платье черное',
    //                         imgCover: `${imgPath}06-02-24/platie-women-black.jpg`,
    //                         size: [],
    //                         color: [
    //                             { color: '#0A0003', img: `${imgPath}06-02-24/platie-women-black.jpg` },
    //                         ],
    //                     },
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Платье бирюзовое',
    //                         imgCover: `${imgPath}06-02-24/platie-women-blue.jpg`,
    //                         size: [],
    //                         color: [
    //                             { color: '#0B4765', img: `${imgPath}06-02-24/platie-women-blue.jpg` },
    //                         ],
    //                     },
    //                 ],
    //             },
    //             {
    //                 id: uuidv4(),
    //                 title: 'Сорочки',
    //                 imgCover: `${imgPath}06-02-24/sorochka-women-blue.jpg`,
    //                 model: [
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Сорочка синяя',
    //                         imgCover: `${imgPath}06-02-24/sorochka-women-blue.jpg`,
    //                         size: [],
    //                         color: [
    //                             { color: '#537FC0', img: `${imgPath}06-02-24/sorochka-women-blue.jpg` },
    //                         ],
    //                     },
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Сорочка с начесом',
    //                         imgCover: `${imgPath}06-02-24/sorochka-women-50-60.jpg`,
    //                         size: ['50', '52', '54', '56'],
    //                         color: [
    //                             { color: '#E8EBF1', img: `${imgPath}06-02-24/sorochka-women-50-60.jpg` },
    //                         ],
    //                     },
    //                 ],
    //             },
    //             {
    //                 id: uuidv4(),
    //                 title: 'Трико',
    //                 imgCover: `${imgPath}06-02-24/triko-women.jpg`,
    //                 model: [
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Трико бирюзовое',
    //                         imgCover: `${imgPath}06-02-24/triko-women.jpg`,
    //                         size: [],
    //                         color: [
    //                             { color: '#30625F', img: `${imgPath}06-02-24/triko-women.jpg` },
    //                         ],
    //                     },
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Трико',
    //                         imgCover: `${imgPath}06-02-24/triko-womens.jpg`,
    //                         size: [],
    //                         color: [
    //                             { color: '#2F3A56', img: `${imgPath}06-02-24/triko-womens.jpg` },
    //                         ],
    //                     },
    //                 ],
    //             },
    //             {
    //                 id: uuidv4(),
    //                 title: 'Туника',
    //                 imgCover: `${imgPath}06-02-24/tunika-Angorka-50-60-women.jpg`,
    //                 model: [
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Туника "Ангорка"',
    //                         imgCover: `${imgPath}06-02-24/tunika-Angorka-50-60-women.jpg`,
    //                         size: ['50', '52', '54', '56', '58', '60'],
    //                         color: [
    //                             { color: '#916B76', img: `${imgPath}06-02-24/tunika-Angorka-50-60-women.jpg` },
    //                         ],
    //                     },
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Туника темная',
    //                         imgCover: `${imgPath}06-02-24/tunika-black-women.jpg` ?? `/imgs/no-photo.png`,
    //                         size: [],
    //                         color: [
    //                             { color: '#20202F', img: `${imgPath}06-02-24/tunika-black-women.jpg` },
    //                         ],
    //                     },
    //                     {
    //                         id: uuidv4(),
    //                         title: 'Туника',
    //                         imgCover: `${imgPath}06-02-24/tunika-blue-women.jpg`,
    //                         size: [],
    //                         color: [
    //                             { color: '#183C4B', img: `${imgPath}06-02-24/tunika-blue-women.jpg` },
    //                         ],
    //                     },
    //                 ],
    //             },
    //         ],
    //     },

    // ],


    fetchCatalog: async () => {
        try {
            const res = await fetch('http://localhost:3000/api')
            set({ cat: await res.json() })

        } catch (error) {
            console.log(error.message)
        }
    },

    getCatalogData: () => {
        let arr = []
        const cat = get().cat
        cat.length !== 0 && cat.forEach((el) => arr.push({ title: el.title, imgCover: el.imgCover, id: el.id }))
        return arr
    },

    getClothData: (path) => {
        let arr = []
        const cat = get().cat
        cat.length !== 0 && cat.forEach((el) => {
            if (path === strToPath(el.title)) {
                arr.push({ title: el.title, cloth: el.cloth })
            }
        })
        return arr
    },

    getModelData: (pathCloth, pathModel) => {
        let arr = []
        const cat = get().cat
        cat.length !== 0 && cat.forEach((el) => {
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
        const cat = get().cat
        cat.length !== 0 && cat.forEach((el) => {
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
        get().cat.forEach((el) => {
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
