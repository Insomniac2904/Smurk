import { ActionButton, ActionButtonProps } from '@/components'
import { deleteNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { MdDeleteSweep } from 'react-icons/md'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDelete = async () => {
    await deleteNote()
  }

  return (
    <ActionButton onClick={handleDelete} {...props}>
      <MdDeleteSweep className="w-7- h-6" />
    </ActionButton>
  )
}
