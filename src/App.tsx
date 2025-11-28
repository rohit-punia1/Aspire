import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import CardCarousel from './components/CardCarousel'
import AddCardModal from './components/AddCardModal'
import { fetchCards, addCard } from './api/mock'
import { Card } from './types'
import Button from '@mui/material/Button'
import AddIcon from './icons/Add.svg?react'
import CardActions from './components/CardActions'
import RecentTransactions from './components/RecentTransactions'
import MobileNavigation from './components/MobileNavigation'
import MobileDrawer from './components/MobileDrawer'

export default function App() {
    const [cards, setCards] = useState<Card[]>([])
    const [open, setOpen] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(true);

    useEffect(() => {
        (async () => {
            const c = await fetchCards()
            setCards(c)
        })()
    }, [])

    async function handleCreate(name: string) {

        const c = await addCard(name)

        setCards(prev => [...prev, c])
    }

    return (
        <div className={`h-screen overflow-x-hidden overflow-y-auto`}>
            <div className="h-full flex flex-col overflow-auto">
                <div className="h-full flex overflow-x-hidden overflow-y-auto">
                    <div className="shrink-0">
                        <div className={`flex h-full`}>
                            <Sidebar />
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 w-full overflow-x-hidden bg-[#0C365A] md:bg-white ">
                        <main className="h-full overflow-y-visible mx-4 md:mx-8 pb-7 md:pb-0">
                            <div className="2xl:container  lg:mx-auto h-full ">
                                <p className='text-sm mt-10 mb-2 text-white md:text-black'>Available balance</p>
                                <div className="flex justify-between items-center mb-6">
                                    <div className='flex gap-2 '>
                                        <div className='bg-primary text-white px-3 py-1 rounded'>S$</div>

                                        <p className='text-2xl text-white md:text-black '> 3,000</p>
                                    </div>
                                    <Button variant="contained" className='bg-secondary' startIcon={<AddIcon />} onClick={() => setOpen(true)}>New card</Button>
                                </div>
                                <div className='flex flex-wrap gap-11 shadow-[#00000014] md:border-[1px]  md:px-12 pb-12 rounded-lg'>
                                    <div>
                                        <CardCarousel cards={cards} />
                                        <div className='hidden md:block mb-5'>
                                        <CardActions />
                                        </div>
                                    </div>
                                    <div className='hidden md:block'>  
                                    <RecentTransactions />
                                    </div>
                                </div>
                                <AddCardModal open={open} onClose={() => setOpen(false)} onCreate={handleCreate} />

                            </div></main>  {/* MOBILE ONLY DRAWER */}
                        <div className="md:hidden">
                            <MobileDrawer open={drawerOpen} setOpen={setDrawerOpen} />
                        </div>
                        <MobileNavigation />
                    </div>
                </div>
            </div>
        </div>
    )
}
