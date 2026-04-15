import { DeleteRounded, EditTwoTone, MoreVertRounded, ShowerTwoTone } from '@mui/icons-material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import {
  Box,
  Card,
  alpha,
  Chip,
  IconButton,
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
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,Button
} from '@mui/material';
import React, { useEffect } from 'react';
import { routes } from 'src/router/routes';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { ButtonSoft } from 'src/components/base/styles/button-soft';
import { RouterLink } from 'src/components/base/router-link';
import {  useNavigate } from 'react-router';



const Results = ({ drafts }) => {
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
  const paginatedDrafts = applyPagination(filteredDrafts, page, limit);
  const mobile = useMediaQuery(theme.breakpoints.down('md'));  
  
  return (
    <>
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
              
            <Button
              variant="outlined"
              color="success"
              background="success"
              to={routes.components['ectn-step1']}
              component={RouterLink} 
            
            >
              New documents
            </Button>
            </Box>
          </Box>        
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
                            <TableCell  align="left">{t('Reference')}</TableCell>
                            <TableCell  align="left">{t('BL number')}</TableCell>
                            <TableCell  align="left">{t('Value')}</TableCell>
                            <TableCell  align="left">{t('Conditionning')}</TableCell>
                            <TableCell align="left">{t('Status')}</TableCell>
                            <TableCell  align="left">{t('Created_at')}</TableCell>
                            <TableCell align="left">{t('Actions')}</TableCell>
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
                                  <Typography variant="h6">{ectn.draft_number}</Typography>
                                </Box>
                              </TableCell>
                               <TableCell  align="left">
                                <Box
                                  sx={{
                                    maxWidth: 150,
                                    minWidth: 150,
                                  }}
                                >
                                  <Typography variant="h6">{(ectn?.transport?.bl_number && ectn?.transport?.bl_number !=="MISSING") ? ectn?.transport?.bl_number:null}</Typography>
                                </Box>
                              </TableCell> 
                              <TableCell  align="left">
                                <Box
                                  sx={{
                                    maxWidth: 150,
                                    minWidth: 150,
                                  }}
                                >
                                  <Typography variant="h6">{t(ectn?.cargaison?.invoice_value)}</Typography>
                                </Box>
                              </TableCell>
                             <TableCell  align="left">
                                <Box
                                  sx={{
                                    maxWidth: 150,
                                    minWidth: 150,
                                  }}
                                >
                                  <Typography variant="h6">{(ectn?.cargaison?.condition_type_id==1) ?t("CONTENEUR"):((ectn?.cargaison?.condition_type_id==2) ?t("RO-RO"):((ectn?.cargaison?.condition_type_id==3) ?t("VRAC"):t('CONVENTIONNEL')))}</Typography>
                                </Box>
                              </TableCell>
                             
                              <TableCell align="left">
                             
                                <Chip 
                                  label={(ectn.status==0) ?t("In creation"):t("Verified")}
                                  color={(ectn.status==0) ? "warning":"success"}
                                />
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
                             
                              <TableCell
                                sx={{
                                  whiteSpace: 'nowrap',
                                }}
                                align="left"
                              >
                                <Tooltip
                                  title={t('Open')}
                                  arrow
                                >
                                  <IconButton
                                    sx={{
                                      '&:hover': {
                                        background: alpha(theme.palette.primary.main, 0.1),
                                      },
                                      color: theme.palette.primary.main,
                                    }}
                                    color="inherit"
                                    size="small"
                                     onClick={() => show(ectn.id)}
                                  >
                                    <ShowerTwoTone fontSize="small" />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip
                                  title={t('Edit')}
                                  arrow
                                >
                                  <IconButton
                                    sx={{
                                      '&:hover': {
                                        background: theme.palette.primary.light,
                                      },
                                      color: 'warning',
                                    }}
                                    color="inherit"
                                    size="small"
                                    onClick={() => edit(ectn.id)}
                                  >
                                    <EditTwoTone fontSize="small" />
                                  </IconButton>
                                </Tooltip>
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
              rowsPerPageOptions={[5, 10, 20, 50, 100]}
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
Results.propTypes = {
  drafts: PropTypes.array.isRequired,
};
Results.defaultProps = {
  drafts: [],
};
export default Results;
