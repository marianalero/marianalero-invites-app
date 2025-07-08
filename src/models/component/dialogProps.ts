export interface DialogProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  id?:number | null;
}
