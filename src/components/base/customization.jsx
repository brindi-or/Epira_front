import DisplaySettingsRoundedIcon from '@mui/icons-material/DisplaySettingsRounded';
import { IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomizationDialog } from 'src/components/application-ui/dialogs/customization/customization-dialog';
import { CustomizationConsumer } from 'src/contexts/customization';
import { usePathname } from 'src/hooks/use-pathname';

const CustomizationButton = ({ color = 'inherit', sx = {} }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const handleDialogOpen = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };
  const pathname = usePathname();
  const shouldHideLayoutsSection = pathname.includes('/shells/');
  return (
    <CustomizationConsumer>
      {(settings) => {
        return (
          <>
            <Tooltip
              placement="bottom-end"
              arrow
              title={t('Customization options')}
            >
              <IconButton
                color={color}
                onClick={handleDialogOpen}
                sx={{
                  ...sx,
                }}
              >
                <DisplaySettingsRoundedIcon />
              </IconButton>
            </Tooltip>
            <CustomizationDialog
              open={open}
              onClose={handleDialogClose}
              canReset={settings.isCustom}
              onReset={settings.handleReset}
              onUpdate={settings.handleUpdate}
              values={{
                colorPreset: settings.colorPreset,
                direction: settings.direction,
                paletteMode: settings.paletteMode,
                stretch: settings.stretch,
                layout: settings.layout,
              }}
              hiddenLayoutsSection={shouldHideLayoutsSection}
            />
          </>
        );
      }}
    </CustomizationConsumer>
  );
};
export default CustomizationButton;
