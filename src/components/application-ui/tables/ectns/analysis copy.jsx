import AccentIconIndicatorsEctn from 'src/components/application-ui/stats-grid-lists/active-icon-cards/active-icon-cards-ectns';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import {
  Box,
  Card,
  InputAdornment,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {  useNavigate } from 'react-router';



const Analysis = ({ drafts }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = React.useState(true);
  const [query, setQuery] = useState('');
  const applyFilters = (drafts, query) => {
    
    return drafts?.filter((product) => {
      let matches = true;
      if (query) {
        const properties = ['draft_number'];
        let containsQuery = false;
        properties.forEach((property) => {
          if (product[property].toLowerCase().includes(query.toLowerCase())) {
            containsQuery = true;
          }
        });
        if (!containsQuery) {
          matches = false;
        }
      }
      return matches;
    });
};
const applyPagination = (drafts, page, limit) => {
  return drafts.slice(page * limit, page * limit + limit);
};
  const navigate = useNavigate();
  const handlePageChange = (_event, newPage) => {
    setPage(newPage);
  };
  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
  };
    const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value.trim());
  };
  const edit= (id)=>{
    console.log('edit',id);
    navigate(`/ectn/draft-form/${id}`);
   };
  const show= (id)=>{
    console.log('show',id);

    navigate(`/ectn/show/${id}`);
  };
  useEffect(()=>{
    console.log('teet',drafts);
      if(drafts != []){
        setLoading(false)
      }
  },[drafts])
  const filteredDrafts = applyFilters(drafts, query);
  const validatedDrafts = filteredDrafts?.filter((draft) => draft.status ===1);
  const paginatedDrafts = applyPagination(filteredDrafts, page, limit);
  const mobile = useMediaQuery(theme.breakpoints.down('md'));  
  
  return (
    <>
    <AccentIconIndicatorsEctn  totalE={drafts.length} ValidateE={validatedDrafts.length}/>
      <Box
        display="flex"
        pb={2}
        alignItems="center"
        justifyContent="space-between"
      >
         
          <Box
            flex={1}
            display={{
              xs: 'block',
              md: 'flex',
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                mb: {
                  xs: 2,
                  md: 0,
                },
              }}
            >
              <TextField
                size="small"
                fullWidth={mobile}
                onChange={handleQueryChange}
                value={query}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchTwoToneIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  my: '2px',
                }}
                placeholder={t('Filter by documents Number')}
              />
            </Box>
          </Box>        
      </Box>

      {loading ? (
        <div style={{display:'flex',justifyContent:'center'}}>
          <CircularProgress
            color="primary"
            size={80}
            align="center"
            className='nana'
            sx={{
              // display:'flex',
              // justifyContent:'left',
              xs: 2,
              animationDuration: '550ms',
              
            }}
          />
        </div>
         
        
      ) : (
        <>
            <Card>
                <TableContainer>
                    <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell  align="left">{t('documents number')}</TableCell>
                        <TableCell  align="left">{t('Value')}</TableCell>
                        <TableCell align="left">{t('Profile')}</TableCell>
                        <TableCell  align="left">{t('Created_at')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedDrafts.map((ectn) => (
                        <TableRow
                            hover
                            key={ectn.id}
                        >
                            <TableCell  align="left">
                            <Box
                                sx={{
                                maxWidth: 150,
                                minWidth: 150,
                                }}
                            >
                                <Typography variant="h6">{t(ectn.draft_number)}</Typography>
                            </Box>
                            </TableCell>
                            <TableCell  align="left">
                            <Box
                                sx={{
                                maxWidth: 150,
                                minWidth: 150,
                                }}
                            >
                                <Typography variant="h6">{(ectn?.cargaison?.invoice_value) }</Typography>
                            </Box>
                            </TableCell>
                            
                        <TableCell  align="left">
                            <Box
                                sx={{
                                maxWidth: 150,
                                minWidth: 150,
                                }}
                            >
                                <Typography variant="h6">{t(ectn.creadted_by)}</Typography>
                            </Box>
                            </TableCell>
                            <TableCell>
                            <Box
                                sx={{
                                maxWidth: 150,
                                minWidth: 150,
                                }}
                            >
                                <Typography variant="h6">{t(ectn.created_at.split('T')[0].split('-').reverse().join('-'))}</Typography>
                            </Box>
                            </TableCell>
                            
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
            
            </Card>
            <Box
                p={2}
                sx={{
                '.MuiTablePagination-select': {
                    py: 0.55,
                },
                }}
            >
                <TablePagination
                component="div"
                count={filteredDrafts.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 15]}
                slotProps={{
                    select: {
                    variant: 'outlined',
                    size: 'small',
                    sx: {
                        p: 0,
                    },
                    },
                }}
                />
            </Box>
        </>
      )}
    </>
  );
};
Analysis.propTypes = {
  drafts: PropTypes.array.isRequired,
};
Analysis.defaultProps = {
  drafts: [],
};
export default Analysis;
