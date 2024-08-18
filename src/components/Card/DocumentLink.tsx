import {useId} from "react";
import {FormControl, IconButton, InputAdornment, InputLabel} from "@mui/material";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import {StyledInputBase} from "../../styles/StyledInputBase.tsx";

export const DocumentLink = () => {
    const inputId = useId();

    return (
        <FormControl variant="standard">
            <InputLabel shrink htmlFor={inputId} sx={{ color: 'text.primary' }}>
                Document Link
            </InputLabel>
            <StyledInputBase
                placeholder={'The link to the document'}
                defaultValue={'https://www.setproduct.com/resources/agency/thisisthelinkanditsverylong'}
                id={inputId}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="Copy the link"
                            onClick={() => {}}
                            onMouseDown={() => {}}
                            edge="end"
                        >
                            <FilterNoneIcon sx={{ transform: 'rotate(180deg)', width: '15px', height: '15px' }} />
                        </IconButton>
                    </InputAdornment>
                }
                sx={{
                    '& .MuiInputAdornment-positionEnd': {
                        position: 'absolute',
                        right: 16,
                    }
                }}
            />
        </FormControl>
    )
}

