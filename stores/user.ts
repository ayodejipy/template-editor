export const useUserStore = defineStore('user', () => {
	const { status, data } = useAuth()

	const user = computed(() => data.value?.user ?? null)

	const isLoggedIn = computed(() => status.value === 'authenticated')

	return { user, isLoggedIn }
})