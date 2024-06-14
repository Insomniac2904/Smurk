import { NotePreview } from '@/components'
import { useNotelist } from '@/hooks/useNotelist'
import { isEmpty } from 'lodash'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const NotePreviewList = ({ className, ...props }: NotePreviewListProps) => {
  const { notes, selectedNoteIndex, handelSelectingNotes } = useNotelist({})
  if (!notes) return null
  if (isEmpty(notes))
    return (
      <ul className={twMerge('text-center p-4', className)} {...props}>
        <span>
          Add Some Notes! <br />
          :)
        </span>
        {/* add AI generated productivity tip */}
      </ul>
    )

  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => (
        <NotePreview
          key={note.title + note.lastEditTime}
          isActive={selectedNoteIndex === index}
          onClick={() => handelSelectingNotes(index)}
          {...note}
        />
      ))}
    </ul>
  )
}
