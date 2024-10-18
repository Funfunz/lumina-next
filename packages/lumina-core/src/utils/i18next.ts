import i18next, { Resource } from 'i18next'
import modalTranslations from '@/components/modals/modals.i18next.json'

const resources: Resource = {
  en: {
    translation: {},
  },
  pt: {
    translation: {},
  },
}

Object.keys(modalTranslations).forEach((namespace: string) => {
  Object.entries(modalTranslations[namespace as keyof typeof modalTranslations]).forEach(
    ([language, translations]: any) => {
      resources[language][namespace] = { ...translations }
    }
  )
})

export const i18nextInstance = i18next.createInstance(
  {
    fallbackLng: 'en',
    resources,
    debug: true,
  },
  err => {
    if (err) return console.log('something went wrong loading', err)
  }
)
;(window as any).i18nextInstance = i18nextInstance
