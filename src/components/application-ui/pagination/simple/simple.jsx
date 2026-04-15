import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  TablePagination,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import PlaceholderBox from 'src/components/base/placeholder-box';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

export const PaginationActions = ({ count, page, onPageChange }) => {
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };
  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  return (
    <Stack
      direction="row"
      spacing={1}
    >
      {smUp ? (
        <>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={handleBackButtonClick}
            disabled={page === 0}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / 10) - 1}
          >
            Next
          </Button>
        </>
      ) : (
        <>
          <ButtonIcon
            variant="outlined"
            color="secondary"
            size="small"
            onClick={handleBackButtonClick}
            disabled={page === 0}
            startIcon={<ChevronLeftRoundedIcon />}
          />
          <ButtonIcon
            variant="outlined"
            color="secondary"
            size="small"
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / 10) - 1}
            startIcon={<ChevronRightRoundedIcon />}
          />
        </>
      )}
    </Stack>
  );
};
const Component = () => {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Card>
      <CardContent>
        <PlaceholderBox height={128} />
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          '.MuiTablePagination-toolbar': {
            justifyContent: 'space-between',
          },
          '.MuiTablePagination-spacer': {
            display: 'none',
          },
        }}
      >
        <Typography
          sx={{
            pr: 1,
          }}
          variant="subtitle2"
          color="text.secondary"
        >
          Showing
        </Typography>
        <TablePagination
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[]}
          ActionsComponent={PaginationActions}
        />
      </CardActions>
    </Card>
  );
};
export default Component;
