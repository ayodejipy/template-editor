<script setup lang="ts">
definePageMeta({
    layout: false,
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/',
    },
})

const { signIn } = useAuth()

async function handleLogin() {
	
	await signIn('github', {
		callbackUrl: '/'
	})
}
</script>

<template>
    <section class="w-full h-screen flex items-center justify-center">
        <UCard>
            <div class="space-y-3">
                <h5 class="leading-relaxed text-sm">
                    This demo uses sidebase (Github provider) for authentication.
                </h5>
                <UButton
                    icon="i-mage-github"
                    color="black"
                    variant="solid"
                    size="lg"
                    :ui="{ rounded: 'rounded-lg' }"
					@click="handleLogin"
                >
					<template #leading>
						<Icon name="i-carbon-logo-github" size="1.5em" />
					</template>
                    Login with Github
                </UButton>
            </div>
        </UCard>
    </section>
</template>
