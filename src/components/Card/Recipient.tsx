import {Avatar, ListItem, ListItemAvatar, ListItemText, MenuItem, Select, styled, Typography} from "@mui/material";
import {permissionOptions} from "../../data/permissionOptions.ts";

export const Recipient = ({ name, permission, avatar, email }: {
    name: string,
    permission: 'view' | 'edit' | 'admin',
    avatar: string,
    email: string,
}) => {
    return (
        <StyledListItem
            key={name}
            secondaryAction={(
                <StyledSelect
                    value={permission}
                    disabled={permission === 'admin'}
                >
                    {permissionOptions.map(({ value, label }) => (
                        <MenuItem value={value} key={value}>{label}</MenuItem>
                    ))}
                </StyledSelect>
            )}
        >
            <ListItemAvatar>
                <Avatar alt={name} src={avatar} sx={{ width: 48, height: 48 }} />
            </ListItemAvatar>
            <StyledListItemText
                primary={<Typography variant={'body1'}>{name}</Typography>}
                secondary={<Typography variant={'caption'}>{email}</Typography>}
            />

        </StyledListItem>
    )
}

const StyledListItem = styled(ListItem)(() => ({
    padding: 0,
    '&:not(:last-of-type)': {
        marginBottom: '16px',
    },
}))

const StyledListItemText = styled(ListItemText)(() => ({
    marginTop: 0,
    marginBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}))

const StyledSelect = styled(Select)(({ theme }) => ({
    '& .MuiSelect-select': {
        padding: '8px 12px',
        color: theme.palette.primary.main,
        fontWeight: 700,
    },
    '& .MuiSelect-select:focus': {
        borderRadius: '8px',
    },
    '&:not(.Mui-disabled) .MuiSelect-icon': {
        color: theme.palette.primary.main,
    },
    '&.Mui-disabled .MuiOutlinedInput-notchedOutline,  .MuiOutlinedInput-notchedOutline': {
        borderRadius: '8px',
        borderColor: '#E0E0E0',
    },
}))
