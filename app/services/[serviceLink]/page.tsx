import { servicesData } from '@/lib/servicesData'
import React from 'react'

export default function Page({ params }: { params: { serviceLink: string } }) {
    const foundService = servicesData.find(eachService => eachService.link === `/services/${params.serviceLink}`)
    if (!foundService) return <p>Service Not Found</p>

    return (
        <main>

        </main>
    )
}
