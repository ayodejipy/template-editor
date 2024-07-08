import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
    pages: {
        // Change the default behavior to use `/login` as the path for the sign-in page
        signIn: '/login',
    },
    // A secret string you define, to ensure correct encryption
    secret: useRuntimeConfig().secret,
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
            clientId: useRuntimeConfig().public.ghClientID,
            clientSecret: useRuntimeConfig().ghClientSecret,
        }),
    ],
})
