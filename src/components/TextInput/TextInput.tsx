import { TextField } from "@mui/material";
import { TextInputType } from "./TexInputType";

const TextInput = (props: TextInputType) => {
    return (
        <TextField
                                                    disabled={props.disabled}
                                                    id="outlined-basic"
                                                    label={props.label}
                                                    fullWidth={true}
                                                    sx={{
                                                    minWidth:300,
                                                    '& label.Mui-focused': {
                                                    color: props.color, // Borde en focus
                                                    },
                                                    '& .MuiOutlinedInput-root': {
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: props.color, // Borde en focus
                                                    },
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                        padding: '0 4px',
                                                        borderRadius: '4px',
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                    },
                                                    }}
                                                    value={props.value ?? ''}
                                                    onChange={(e) => props.onChange?.(e.target.value)}
                                                    slotProps={{ inputLabel: { shrink: true } }} 
                                                    />
    );
}
export default TextInput;