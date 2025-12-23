import { Button } from '@/components/ui/button'
import type { Post } from './types'

export const PostView = ({ post, onEdit }: { post?: Post; onEdit: () => void }) => {
	if (!post) {
		return (
			<div>
				<h2>View</h2>

				<p>Where is your post?</p>
			</div>
		)
	}

	return (
		<div className="flex flex-col gap-5">
			<h2>View</h2>

			<div className="flex justify-between items-center">
				<h3>
					[{post.category}] {post.title}
				</h3>

				<Button onClick={onEdit}>Edit</Button>
			</div>

			<p>
				{post.writer} | {post.created}
			</p>

			<p>{post.content}</p>
		</div>
	)
}
