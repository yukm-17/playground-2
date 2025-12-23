import type { Post } from './types'

export const PostList = ({
	posts,
	isLoading,
	selectedId,
	onSelect,
}: {
	posts: Post[]
	isLoading: boolean
	selectedId: number | null
	onSelect: (id: number) => void
}) => {
	if (isLoading) return <p>Loading...</p>

	return (
		<div>
			<h2>Posts</h2>

			<ul>
				{posts.map(item => (
					<li
						key={item.id}
						className={`flex items-center gap-3 cursor-pointer ${
							item.id === selectedId && 'font-bold'
						}
						`}
						onClick={() => onSelect(item.id)}
					>
						<p>
							[{item.category}] {item.title}
						</p>
						<p>{item.writer}</p>
						<p>{item.created}</p>
						<p>{item.category}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
