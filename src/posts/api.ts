import type { Post } from './types'

const mock: Post[] = [
	{
		id: 1,
		title: 'Lorem ipsum',
		content: 'Lorem ipsum...',
		writer: 'admin',
		created: '2025/12/31',
		updated: '2025/12/31',
		category: ['A'],
	},
	{
		id: 2,
		title: 'Dolor sit amet',
		content: 'Dolor sit amet...',
		writer: 'admin',
		created: '2025/12/31',
		updated: '2025/12/31',
		category: ['B'],
	},
	{
		id: 3,
		title: 'Consectetur adipiscing',
		content: 'Consectetur adipiscing...',
		writer: 'admin',
		created: '2025/12/31',
		updated: '2025/12/31',
		category: ['A', 'B'],
	},
]

export const fetchPosts = async (): Promise<Post[]> => {
	// 로딩 효과
	await new Promise(r => setTimeout(r, 150))

	return mock
}

export const updatePostTitle = async (id: number, title: string): Promise<void> => {
	await new Promise(r => setTimeout(r, 150))

	const target = mock.find(p => p.id === id)

	if (target) target.title = title
}
