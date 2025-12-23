import { useEffect, useMemo, useState } from 'react'
import { fetchPosts, updatePostTitle } from './api'
import type { Post } from './types'

export function usePosts() {
	const [posts, setPosts] = useState<Post[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		let alive = true

		fetchPosts().then(data => {
			if (!alive) return

			setPosts(data)
			setIsLoading(false)
		})

		return () => {
			alive = false
		}
	}, [])

	const byId = useMemo(() => {
		const map = new Map<number, Post>()

		posts.forEach(p => map.set(p.id, p))

		return map
	}, [posts])

	const saveTitle = async (id: number, nextTitle: string) => {
		setPosts(prev => prev.map(p => (p.id === id ? { ...p, title: nextTitle } : p)))

		await updatePostTitle(id, nextTitle)
	}

	return { posts, byId, isLoading, saveTitle }
}
