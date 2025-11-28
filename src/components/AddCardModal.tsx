import React, { useState } from 'react'
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

type Props = {
  open: boolean
  onClose: () => void
  onCreate: (name:string) => Promise<void>
}

export default function AddCardModal({open,onClose,onCreate}:Props) {
  const [name, setName] = useState('')

  async function handleCreate() {
    if (!name) return
    await onCreate(name)
    setName('')
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>New card</DialogTitle>
      <DialogContent>
        <div className="space-y-4 mt-2">
          <TextField label="Card name" fullWidth value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleCreate}>Create</Button>
      </DialogActions>
    </Dialog>
  )
}
