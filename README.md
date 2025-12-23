## 왜 만들었나요

상태를 어디에 두는지에 따라 책임을 나누는 기준을 예제로 정리했습니다.

## 어떤 시나리오로 작성했나요?

- 상단: 게시글 목록(PostList)
- 하단: 선택된 게시글 상세(PostView)
- Edit 버튼: 모달(EditPostModal)에서 제목 수정

## 상태 책임 분리 기준

- 서버: posts 데이터(usePosts)
- 페이지: selectedId(선택한 게시글 ID)
- UI: modal opened(useDisclosure)
- Form: title input(모달 내부)
- Derived: isDirty / canSave(불필요한 상태 증가 방지)

## 핵심

- refetch나 전역 상태 없이도 페이지 맥락, UI, 폼 상태를 분리해 복잡도를 낮춘 방식
- 저장 가능 여부를 state로 두지 않고 derived로 계산
