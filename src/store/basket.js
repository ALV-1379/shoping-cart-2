import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useBasket = create(
    persist(
        (set, get) => ({

            items: [],
            invoice: {
                totalPrice: 0,
            },

            actions: {
                addBasketItem: ((item) => {
                    const alreadyExist = get().items.some((_item) => _item.id === item.id)
                    if (alreadyExist) {
                        return set((oldBasket) => ({
                            invoice: {
                                totalPrice: oldBasket.invoice.totalPrice + item.price
                            },
                            items: oldBasket.items.map((_item) => {
                                if (_item.id === item.id) {
                                    return {
                                        ...item,
                                        quantity: _item.quantity + 1
                                    }
                                }
                                return _item
                            })

                        }))
                    }

                    set((oldBasket) => ({
                        invoice: {
                            totalPrice: oldBasket.invoice.totalPrice + item.price
                        },
                        items: [...oldBasket.items, { ...item, quantity: 1 }]

                    }))

                }),
                removeBasketItem: ((item) => {

                    const shouldRemove = item.quantity === 1
                    if (shouldRemove) {
                        return set((oldBasket) => ({
                            invoice: {
                                totalPrice: oldBasket.invoice.totalPrice - item.price
                            },
                            items: oldBasket.items.filter((_item) => _item.id !== item.id)
                        }))
                    }
                    set((oldBasket) => ({
                        invoice: {
                            totalPrice: oldBasket.invoice.totalPrice - item.price
                        },
                        items: oldBasket.items.map((_item) => {
                            if (_item.id === item.id) {
                                return {
                                    ..._item,
                                    quantity: _item.quantity - 1
                                }
                            }
                            return _item
                        })
                    }))

                }),
                clearall:()=>{
                    set({
                        items : [],
                        invoice :{
                            totalPrice : 0
                        }
                    })
                }
            }
        }),
        {
            name: 'basket_items',
            partialize: (state) =>
                Object.fromEntries(
                    Object.entries(state).filter(([key]) => !['actions'].includes(key)),
                ),
        }
    ))