import i18next from 'i18next'

export const i18nextInstance = i18next.createInstance(
  {
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          addPageModal: 'Add Page',
        },
      },
      pt: {
        translation: {
          addPageModal: 'Adicionar Página',
        },
      },
    },
    debug: true,
  },
  err => {
    if (err) return console.log('something went wrong loading', err)
  }
)
;(window as any).i18nextInstance = i18nextInstance
