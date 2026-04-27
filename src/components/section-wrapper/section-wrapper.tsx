'use client'

import Link from 'next/link'
import styles from './section-wrapper.module.css'
import { Routes } from '@/enums/routes.enum'

type SectionWrapperProps = {
    section: string
    image: string
    className?: string
    description?: string
}

export default function SectionWrapper(props: SectionWrapperProps) {
    const { section, className = "", description = "", image } = props
    const variantClassName: string = className && className in styles ? styles[className as keyof typeof styles] : ""
    return (
        <section data-gsap-panel className={`${styles.section} ${variantClassName} w-full`}>
            <div className={styles.sectionContent}>
                <div data-gsap-inner className={styles.sectionInner}>
                    <div style={{ backgroundImage: `url(${image})` }} 
                         className={`
                            ${styles.backgroundRow} 
                            w-full h-full flex flex-row items-center justify-center
                        `}>
                        <div className='
                            flex flex-col 
                            gap-5 
                            bg-black/80
                            p-5
                            rounded-lg
                            items-center justify-center 
                            w-2/4
                        '>
                            <h2 className='text-center text-[#3367b0]'>{section}</h2>
                            <p className={`${styles.descriptionText} text-left text-white font-light`}>
                                {description}
                            </p>
                            <Link href={Routes.ROTOMDLE} className="
                                h-12 w-1/3
                                px-4 
                                inline-flex items-center justify-center
                                rounded-md 
                                bg-[#3367b0] 
                                text-white transition-colors hover:bg-[#2b5796]
                            ">
                                Jugar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}