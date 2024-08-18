import {
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    MenuItem,
    Select, styled,
    Typography
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LinkIcon from '@mui/icons-material/Link';

export const PrivacySettingsActions = () => {
    return (
        <List sx={{paddingTop: 0, paddingBottom: 0}}>
            <StyledListItem
                secondaryAction={(
                    <StyledSelect
                        displayEmpty
                        value={''}
                    >
                        <MenuItem value={''}>
                            Change Access
                        </MenuItem>
                    </StyledSelect>
                )}
            >
                <StyledListItemAvatar>
                    <AccountCircleOutlinedIcon/>
                </StyledListItemAvatar>
                <StyledListItemText
                    primary={(
                        <Typography variant={'body2'}>
                            Anyone at <a>Project</a> can view and edit
                        </Typography>
                    )}
                />
            </StyledListItem>

            <StyledListItem
                secondaryAction={<Button><Typography variant={'body2'} sx={{color: 'primary.light'}}>Set Password</Typography></Button>}
            >
                <StyledListItemAvatar>
                    <LinkIcon sx={{transform: 'rotate(-45deg)'}}/>
                </StyledListItemAvatar>
                <StyledListItemText
                    primary={(
                        <Typography variant={'body2'}>
                            Anyone with the link can edit
                        </Typography>
                    )}
                />
            </StyledListItem>
        </List>
    )
}

const StyledListItem = styled(ListItem)(() => ({
    padding: 0,
    '&:not(:last-of-type)': {
        marginBottom: '16px',
    },
}))

const StyledListItemAvatar = styled(ListItemAvatar)(() => ({
    minWidth: '30px',
    color: '#A1A1A1',
    display: 'flex',
    alignItems: 'center',
}))

const StyledListItemText = styled(ListItemText)(() => ({
    marginTop: 0,
    marginBottom: 0,
}))

const StyledSelect = styled(Select)(({theme}) => ({
    '& .MuiSelect-select': {
        padding: 0,
        border: 0,
        color: theme.palette.text.primary,
        fontWeight: 700,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-notchedOutline': {
        border: 0,
    },
    '& .MuiInputBase-input:focus': {
        boxShadow: 'none',
    },
    '& .MuiSvgIcon-root': {
        color: '#1672EC',
        width: '20px',
    },
}))
