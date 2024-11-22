import React, { useEffect, useState } from 'react';
import { StyledCVHubPage } from './style';
import { CvHubFilter } from './components/CvHubFilter';
import { CvHubList } from './components/CvHubList';
import { useIntl } from 'react-intl';
import useQueryApiClient from 'utils/useQueryApiClient';
import { smoothScroll } from 'utils/globalFunctions';
import { Button } from 'ui';
import { Pagination, PaginationProps } from 'antd';
import { ActionModal } from './components/ActionModal';

export const initialQeuryValues = {
  PageIndex: 1,
  PageSize: 10,
  DesiredPositionId: null,
  SkillIds: null,
  CountryId: null,
  LanguageIds: null,
};

export function CVHubPage() {
  const [queryParams, setQueryParams] = useState<any>(initialQeuryValues);
  const intl = useIntl();
  const [total, setTotal] = useState<number>(0);
  const [data, setData] = useState<any>([]);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(0);
  const [actionModal, setActionModal] = useState<{ open: false; userId?: number; actionType: string } | undefined>(
    undefined
  );

  const {
    data: freelancerData,
    isLoading,
    appendData,
  } = useQueryApiClient({
    request: {
      url: '/api/manage-cabinets/freelancer/filter',
      method: 'GET',
      data: queryParams,
    },
    onSuccess(res) {
      setTotal(res?.data?.data?.totalItems);
      setData(res?.data?.data?.items);
      setPageIndex(res?.data?.data?.pageIndex);
      setItemsPerPage(res?.data?.data?.itemsPerPage);
    },
  });

  const handleFormChange = (changedValues: any, allValues: any) => {
    setQueryParams((prevParams: any) => ({
      ...prevParams,
      ...allValues,
      PageIndex: 1,
    }));
  };

  useEffect(() => {
    if (queryParams) {
      appendData(queryParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams]);

  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return (
        <Button
          className="pagination-btn prev"
          label={intl.messages.previous && intl.formatMessage({ id: 'previous' })}
        />
      );
    }
    if (type === 'next') {
      return (
        <Button className="pagination-btn next" label={intl.messages.next && intl.formatMessage({ id: 'next' })} />
      );
    }

    return originalElement;
  };

  const handlePaginationChange = (page: number, pageSize: number) => {
    setQueryParams((prevParams: any) => ({
      ...prevParams,
      PageSize: pageSize,
      PageIndex: page,
    }));
    smoothScroll('top', 95);
  };

  return (
    <div className="page-placeholder">
      <StyledCVHubPage className="container">
        <h1 className="title">{intl.formatMessage({ id: 'cv_hub_title' })}</h1>
        <CvHubFilter handleFormChange={handleFormChange} />
        <CvHubList setActionModal={setActionModal} isLoading={isLoading} totalItems={total} data={data} />
        {total > 0 && (
          <div className="pagination-container">
            <Pagination
              total={total}
              pageSize={itemsPerPage}
              itemRender={itemRender}
              onChange={handlePaginationChange}
              hideOnSinglePage={true}
              current={pageIndex}
            />
          </div>
        )}
        <ActionModal actionModal={actionModal} setActionModal={setActionModal} />
      </StyledCVHubPage>
    </div>
  );
}
