import AutoDeleteTwoToneIcon from '@mui/icons-material/AutoDeleteTwoTone';
import DraftsTwoToneIcon from '@mui/icons-material/DraftsTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import LocalOfferTwoToneIcon from '@mui/icons-material/LocalOfferTwoTone';
import OutboxTwoToneIcon from '@mui/icons-material/OutboxTwoTone';
import { Chip, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import { RouterLink } from 'src/components/base/router-link';

const categoryTagIcons = {
  inbox: InboxTwoToneIcon,
  outbox: OutboxTwoToneIcon,
  favourites: FavoriteTwoToneIcon,
  drafts: DraftsTwoToneIcon,
  deleted: AutoDeleteTwoToneIcon,
};
const getTagIcon = (tag) => {
  if (tag.type === 'category_tag') {
    //@ts-ignore
    return categoryTagIcons[tag.id];
  }
  return LocalOfferTwoToneIcon;
};
const getColor = (tag) => {
  if (tag.type === 'label_tag') {
    return tag.color;
  }
  return 'inherit';
};
export const MailboxSidebarItem = (props) => {
  const { active, tag, ...rest } = props;
  const TagIcon = getTagIcon(tag);
  const color = getColor(tag);
  const showUnread = Boolean(tag.unreadMails && tag.unreadMails > 0);
  const href = tag.id !== 'inbox' ? `?tag=${tag.id}` : '?tag=inbox';
  return (
    <ListItemButton
      sx={{
        borderRadius: (theme) => theme.shape.borderRadius + 'px',
        mb: '3px',
        pr: 1,
        '&.Mui-selected .MuiListItemText-root': {
          fontWeight: 600,
        },
      }}
      component={RouterLink}
      href={href}
      selected={active}
      {...rest}
    >
      <ListItemIcon
        sx={{
          minWidth: 38,
        }}
      >
        <TagIcon
          color="inherit"
          sx={{
            color: color,
          }}
        />
      </ListItemIcon>

      <ListItemText
        primary={tag.name}
        primaryTypographyProps={{
          fontWeight: 500,
        }}
      />
      {showUnread && (
        <Chip
          size="small"
          variant="outlined"
          label={tag.unreadMails}
          color="secondary"
        />
      )}
    </ListItemButton>
  );
};
MailboxSidebarItem.propTypes = {
  active: PropTypes.bool,
  // @ts-ignore
  tag: PropTypes.object.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};
