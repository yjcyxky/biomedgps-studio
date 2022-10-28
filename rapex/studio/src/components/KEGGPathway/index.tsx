import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Row } from 'antd';
import type { SortOrder } from 'antd/es/table/interface';
import map from 'lodash.map';
import React, { useRef } from 'react';
import { FormattedMessage } from 'umi';
import { makeQueryStr } from './util';
import './index.less';

type PathwayQueryParams = {
  /** Query string with honeysql specification. */
  query_str: string;
  /** Page, From 1. */
  page?: number;
  /** Num of items per page. */
  page_size?: number;
};

type PathwayData = {
  entrez_id: number;
  pathway_id: string;
  gene_symbol: string;
  ensembl_id: string;
  pathway_name: string;
};

type PathwayDataResponse = {
  total: number;
  page: number;
  page_size: number;
  data: PathwayData[];
};

type PageParams = {
  current?: number | undefined;
  pageSize?: number | undefined;
};

function formatResponse(response: PathwayDataResponse): Promise<Partial<PathwayDataResponse>> {
  return Promise.resolve({
    ...response,
    success: true,
    data: map(response.data, (item: any) => {
      return { key: `${item.pathway_id}_${item.ensembl_id}`, ...item };
    }),
  });
}

export type KEGGPathwayProps = {
  queryPathways: (params: PathwayQueryParams) => Promise<PathwayDataResponse>;
};

const KEGGPathway: React.FC<KEGGPathwayProps> = (props) => {
  const { queryPathways } = props;
  // const [showDetail, setShowDetail] = useState<boolean>(false);

  const requestPathways = async (
    params: PageParams & PathwayData,
    sort: Record<string, SortOrder>,
    filter: Record<string, React.ReactText[] | null>,
  ) => {
    console.log('requestPathways: ', params, sort, filter);
    const query_str = makeQueryStr(params, sort, filter);
    return await queryPathways({
      page: params.current,
      page_size: params.pageSize,
      query_str: query_str,
    })
      .then((response) => {
        return formatResponse(response);
      })
      .catch((error) => {
        console.log('requestPathways Error: ', error);
        return formatResponse({ total: 0, page: 1, page_size: 10, data: [] });
      });
  };

  const actionRef = useRef<ActionType>();
  // const [currentRow, setCurrentRow] = useState<DataType>();
  // const [selectedRowsState, setSelectedRows] = useState<DataType[]>([]);

  const columns: ProColumns<PathwayData>[] = [
    {
      title: <FormattedMessage id="pages.KEGGPathway.pathwayId" defaultMessage="Pathway ID" />,
      dataIndex: 'pathway_id',
      sorter: true,
      tip: 'Each pathway map is identified by the combination of 2-4 letter prefix code and 5 digit number.',
      render: (dom, entity) => {
        return (
          <a
            href={`https://www.kegg.jp/entry/${entity.pathway_id}`}
            rel="noreferrer"
            target="_blank"
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: <FormattedMessage id="pages.KEGGPathway.pathwayName" defaultMessage="Pathway Name" />,
      align: 'center',
      sorter: true,
      dataIndex: 'pathway_name',
      tip: 'The name of a KEGG pathway.',
    },
    {
      title: <FormattedMessage id="pages.KEGGPathway.geneSymbol" defaultMessage="Gene Symbol" />,
      align: 'center',
      dataIndex: 'gene_symbol',
      sorter: true,
      tip: 'A gene symbol is a short-form abbreviation for a particular gene.',
      // render: (dom, entity) => {
      //     return (
      //         <a
      //             onClick={() => {
      //                 // setCurrentRow(entity);
      //                 // setShowDetail(true);
      //             }}
      //         >
      //             {dom}
      //         </a>
      //     );
      // },
    },
    {
      title: <FormattedMessage id="pages.KEGGPathway.ensemblId" defaultMessage="Ensembl ID" />,
      dataIndex: 'ensembl_id',
      sorter: true,
      tip: 'Ensembl gene IDs begin with ENS for Ensembl, and then a G for gene.',
      // render: (dom, entity) => {
      //     return (
      //         <a
      //             onClick={() => {
      //                 // setCurrentRow(entity);
      //                 // setShowDetail(true);
      //             }}
      //         >
      //             {dom}
      //         </a>
      //     );
      // },
    },
    {
      title: <FormattedMessage id="pages.KEGGPathway.entrezId" defaultMessage="Entrez ID" />,
      align: 'center',
      sorter: true,
      dataIndex: 'entrez_id',
      tip: 'Entrez Gene provides unique integer identifiers for genes and other loci.',
      // render: (dom, entity) => {
      //     return (
      //         <a
      //             onClick={() => {
      //                 // setCurrentRow(entity);
      //                 // setShowDetail(true);
      //             }}
      //         >
      //             {dom}
      //         </a>
      //     );
      // },
    },
  ];

  return (
    <Row className="keggpathway">
      <ProTable<PathwayData, PageParams & PathwayData>
        className="keggpathway__table"
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        pagination={{
          showQuickJumper: true,
          position: ['topLeft'],
        }}
        request={requestPathways}
        columns={columns}
        rowSelection={
          {
            // onChange: (_, selectedRows) => {
            //     setSelectedRows(selectedRows);
            // },
          }
        }
      />
    </Row>
  );
};

export default KEGGPathway;