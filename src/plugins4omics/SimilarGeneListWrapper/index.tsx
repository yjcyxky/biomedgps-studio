import SimilarGeneList from '@/components/SimilarGeneList';
import { getDatasetRapexSimilarGenes, getDatasetRapexGenes } from '@/services/swagger/RapexDataset'
import { Drawer, Row } from 'antd';
import HelpMessage from '@/components/HelpMessage';
import SingleGene from '@/plugins4omics/SingleGene';
import React, { useState } from 'react';
import { useModel } from 'umi';
import './index.less';

const SimilarGeneListWrapper: React.FC = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [ensemlId, setEnsembl] = useState<string | null>(null);

  const { defaultDataset } = useModel('dataset', (ret: any) => ({
    defaultDataset: ret.defaultDataset,
    setDataset: ret.setDataset,
  }));

  return (
    <Row className='similar-genelist-wrapper'>
      <HelpMessage position='center'
        title={"Similar Genes Detection"}>
        <p>
          This module identifies genes with similar expression patterns within selected datasets and generates a list.
          <br />
          <b>Gene:</b> Select a gene of interest. You can input ensembl_id, gene_symbol or entrez_id for searching. (e.g. Dgat2, 67800 or ENSMUSG00000030747)
          <b>Organ:</b> Select an organ of interest.
          <b>DataSet:</b> Click the red box in the upper right corner of the page to select the data set you are interested in, and then select the data set from the drop-down menu here.
        </p>
      </HelpMessage>
      <SimilarGeneList
        defaultDataset={defaultDataset}
        querySimilarGenes={getDatasetRapexSimilarGenes}
        queryGenes={getDatasetRapexGenes}
        showDetails={(ensemblId) => {
          setEnsembl(ensemblId);
          setShowDetail(true);
        }}>
      </SimilarGeneList>

      <Drawer
        width={'80%'}
        visible={showDetail}
        className="gene-details"
        onClose={() => {
          setShowDetail(false)
          setEnsembl(null)
        }}
        closable={true}
        maskClosable={true}
      >
        <SingleGene ensemblId={ensemlId}></SingleGene>
      </Drawer>
    </Row>
  );
};

export default SimilarGeneListWrapper;
