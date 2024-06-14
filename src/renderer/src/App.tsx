import {
  ActionButtonsRow,
  Content,
  DragTopBar,
  FloatingNoteTitle,
  MarkDownEditor,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'
import { useRef } from 'react'

const App = () => {
  // reset scroll
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }
  return (
    <>
      <DragTopBar />
      <RootLayout>
        <Sidebar className="bg-[#31363F]">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="space-y-1 m-5" onSelect={resetScroll} />
        </Sidebar>
        <Content ref={contentContainerRef} className="border-l- bg-[#222831]">
          <FloatingNoteTitle className="pt-2 mb-0" />
          <MarkDownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
