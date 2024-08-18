import {
    Box, Button,
    List,
    Paper,
    styled,
    Typography,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';

import {recipients} from "../../data/recipients.ts";
import {DocumentLink} from "./DocumentLink.tsx";
import {SearchInput} from "./SearchInput.tsx";
import {Recipient} from "./Recipient.tsx";
import {PrivacySettingsActions} from "./PrivacySettingsActions.tsx";

export const Card = () => {
    return (
        <StyledPaper>
            <Typography variant={"h4"} component={'h1'}>
                Share project
            </Typography>
            <Box
                sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '16px' }}
            >
                <DocumentLink />
                <SearchInput />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography component={'h2'} variant={'body2'}>
                    Recipients
                </Typography>
                <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
                    {recipients.map(({ name, avatar, email, permission }) => (
                        <Recipient name={name} avatar={avatar} email={email} permission={permission} key={email} />
                    ))}
                </List>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography component={'h2'} variant={'body2'}>
                    Privacy Settings
                </Typography>
                <PrivacySettingsActions />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant={'contained'}>Done</Button>
                <Box>
                    <Button startIcon={<CodeIcon />} sx={{ marginRight: '16px' }}>
                        <Typography variant={'body2'} sx={{ color: 'text.primary' }}>
                            Get embed Code
                        </Typography>
                    </Button>
                    <Button
                        startIcon={<LinkIcon sx={{ transform: 'rotate(-45deg)', fontSize: '16px' }} />}
                        sx={{
                            '& .MuiButton-startIcon > *:nth-of-type(1)': {
                                fontSize: '16px',
                            }
                        }}
                    >
                        <Typography variant={'body2'} sx={{ color: 'text.primary' }}>
                            Copy Link
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </StyledPaper>
    )
}

const StyledPaper = styled(Paper)(() => ({
    padding: '40px',
    width: '560px',
    maxWidth: '100%',
    minWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '40px',
    boxShadow: '0px 16px 32px 2px #6161611A, 0px 8px 16px 2px #6161611A',
    borderRadius: '8px',
}))
