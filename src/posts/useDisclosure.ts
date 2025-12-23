// src/shared/useDisclosure.ts
import { useCallback, useState } from 'react'

export const useDisclosure = (initial = false) => {
	const [opened, setOpened] = useState(initial)

	const open = useCallback(() => setOpened(true), [])
	const close = useCallback(() => setOpened(false), [])
	const toggle = useCallback(() => setOpened(v => !v), [])

	return { opened, open, close, toggle }
}
