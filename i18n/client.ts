'use client'

import i18next from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getOptions, languages } from './settings'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

const runsOnServerSide = typeof window === 'undefined'

// Initialize i18next for the client
i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(resourcesToBackend((language: string, namespace: string) => import(`../public/locales/${language}/${namespace}.json`)))
    .init({
        ...getOptions(),
        lng: undefined, // let detect the language on client side
        detection: {
            order: ['htmlTag', 'cookie', 'navigator'],
        },
        preload: runsOnServerSide ? languages : [],
    })

export function useTranslation(ns: string, options?: any) {
    const ret = useTranslationOrg(ns, options)
    const { i18n } = ret
    const { lang } = useParams()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (runsOnServerSide && lang && i18n.resolvedLanguage !== lang) {
        i18n.changeLanguage(lang as string)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (!lang || i18n.resolvedLanguage === lang) return
        i18n.changeLanguage(lang as string)
    }, [lang, i18n])

    return ret
}
