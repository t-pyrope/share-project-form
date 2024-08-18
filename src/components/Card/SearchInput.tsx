import {useId} from "react";
import {Box, Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, styled} from "@mui/material";
import {StyledInputBase} from "../../styles/StyledInputBase.tsx";
import {permissionOptions} from "../../data/permissionOptions.ts";

export const SearchInput = () => {
    const inputId = useId();

    return (
        <FormControl variant="standard">
            <InputLabel shrink htmlFor={inputId} sx={{ color: 'text.primary' }}>
                Search recipients
            </InputLabel>
            <Box sx={{ marginTop: '24px', display: 'flex', gap: 1 }}>
                <StyledInputBase
                    id={inputId}
                    placeholder={'Search for names or email...'}
                    endAdornment={
                        <InputAdornment position={"end"} sx={{ position: 'absolute', right: 10 }}>
                            <StyledSelect value={"view"}>
                                {permissionOptions.map(({ value, label }) => (
                                    <MenuItem value={value}>{label}</MenuItem>
                                ))}
                            </StyledSelect>
                        </InputAdornment>
                    }
                    sx={{ flexGrow: 1, }}
                />
                <Button variant={"contained"}>Share</Button>
            </Box>
        </FormControl>
    )
}

const StyledSelect = styled(Select)(() => ({
    '& .MuiSelect-select': {
        padding: '10px',
        border: 0,
        paddingRight: '40px !important',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-notchedOutline': {
        border: 0,
    },
    '& .MuiInputBase-input:focus': {
        boxShadow: 'none',
    }
}));
