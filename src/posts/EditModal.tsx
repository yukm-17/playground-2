import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useEffect, useMemo, useState } from 'react'
import type { Post } from './types'

export const EditModal = ({
	opened,
	onClose,
	post,
	onSave,
}: {
	opened: boolean
	onClose: () => void
	post?: Post
	onSave: (nextTitle: string) => Promise<void> | void
}) => {
	const [title, setTitle] = useState<string>('')

	// 폼 상태는 열릴 때만 초기화 -> 닫혀있을 땐 UI 상태가 주도
	useEffect(() => {
		if (!opened) return

		setTitle(post?.title ?? '')
	}, [opened, post?.title])

	const isDirty = useMemo(() => title !== (post?.title ?? ''), [title, post?.title])
	const canSave = opened && !!post && isDirty && title.trim().length > 0

	if (!opened) return null

	return (
		<div onClick={onClose} className="grid place-items-center fixed inset-0 backdrop-blur-sm p-4 ">
			<div
				onClick={e => e.stopPropagation()}
				className="flex flex-col gap-5 w-lg bg-white rounded-sm p-4 shadow-md shadow-gray-200"
			>
				<h3>Edit title</h3>

				<Input value={title} onChange={e => setTitle(e.target.value)} />

				<div className="flex justify-end gap-2">
					<Button variant="outline" onClick={onClose}>
						Cancel
					</Button>
					<Button disabled={!canSave} onClick={() => onSave(title)}>
						Save
					</Button>
				</div>

				<p className="text-gray-200">{!isDirty ? 'No changes' : 'Changed'}</p>
			</div>
		</div>
	)
}
