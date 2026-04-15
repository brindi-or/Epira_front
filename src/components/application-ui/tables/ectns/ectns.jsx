import { useCallback, useEffect, useState } from 'react';
import { useRefMounted } from 'src/hooks/use-ref-mounted';
import Results from './results';
import { manageEctn } from 'src/utils/ectn';
import Analysis from './analysis';


function Component({isAnalysis}) {
  console.log('isss',isAnalysis);
  const isMountedRef = useRefMounted();
  const [drafts, setDrafts] = useState([]);
  const getDraftss = useCallback(async () => {
    try {
      const response = await manageEctn.getdrafts();
      console.log('ff',response)
      if (isMountedRef()) {
        setDrafts(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);
  useEffect(() => {
    getDraftss();
  }, [getDraftss]);
  if(isAnalysis){
    return <Analysis drafts={drafts} />;
  }else{
    return <Results drafts={drafts} />;
  }
  
}
export default Component;
