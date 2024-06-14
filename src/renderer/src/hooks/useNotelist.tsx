import { notesAtom, selectedNoteIndexAtom } from '@renderer/store'
import { useAtom, useAtomValue } from 'jotai'

export const useNotelist = ({ onSelect }: { onSelect?: () => void }) => {
  const notes = useAtomValue(notesAtom)
  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteIndexAtom)
  const handelSelectingNotes = async (index: number) => {
    setSelectedNoteIndex(index)
    if (onSelect) {
      onSelect()
    }
  }

  return {
    notes,
    selectedNoteIndex,
    handelSelectingNotes
  }
}
