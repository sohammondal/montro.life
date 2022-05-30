namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    ENV: string
    HOST: string
    API_BASE_I: string
    API_BASE_II: string
    GA_CODE: string
    GTM_CODE: string
    HJID: string
  }
}
