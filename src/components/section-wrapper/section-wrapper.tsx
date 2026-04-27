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
                            w-full h-full flex flex-row items-center justify-center px-3 sm:px-5
                        `}>
                        <div className='
                            flex flex-col 
                            gap-3 sm:gap-5
                            p-4 sm:p-5
                            rounded-lg
                            items-center justify-center 
                            md:w-2/4 w-full max-w-[680px]
                        '>
                            <h2 className='text-center text-[#3367b0] text-xl sm:text-2xl'>{section}</h2>
                            <p className={`${styles.descriptionText} text-left text-white font-light text-xs sm:text-sm`}>
                                {description}
                            </p>
                            <Link href={Routes.ROTOMDLE} className="
                                h-12 w-40
                                px-4 
                                inline-flex items-center justify-center
                                rounded-md 
                                bg-[#3367b0] 
                                text-sm sm:text-base text-white transition-colors hover:bg-[#2b5796]
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