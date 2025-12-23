import { EditModal } from '@/posts/EditModal'
import { PostList } from '@/posts/PostList'
import { PostView } from '@/posts/PostView'
import { useDisclosure } from '@/posts/useDisclosure'
import { usePosts } from '@/posts/usePosts'
import { useState } from 'react'
import './App.css'

function App() {
	const { posts, byId, isLoading, saveTitle } = usePosts()
	// page state
	const [selectedId, setSelectedId] = useState<number | null>(null)
	// ui state
	const edit = useDisclosure(false)

	const selected = selectedId ? byId.get(selectedId) : undefined

	return (
		<div className="flex flex-col gap-5 justify-center items-center w-full h-full bg-zinc-200">
			<div className="min-w-3xl min-h-52 p-5 bg-white shadow-md rounded-sm">
				<PostList
					posts={posts}
					isLoading={isLoading}
					selectedId={selectedId}
					onSelect={setSelectedId}
				/>
			</div>

			<div className="min-w-3xl min-h-52 p-5 bg-white shadow-md rounded-sm">
				<PostView
					post={selected}
					onEdit={() => {
						if (!selected) return

						edit.open()
					}}
				/>
			</div>

			<EditModal
				opened={edit.opened}
				onClose={edit.close}
				post={selected}
				onSave={async nextTitle => {
					if (!selected) return

					await saveTitle(selected.id, nextTitle)

					edit.close()
				}}
			/>
		</div>
	)
}

export default App
