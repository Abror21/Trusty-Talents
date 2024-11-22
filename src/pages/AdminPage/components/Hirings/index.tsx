import React, { useEffect, useState } from 'react';
import { StyledHiringsPage } from './style';
import { useIntl } from 'react-intl';
import { Button } from 'ui';
import { useNavigate } from 'react-router-dom';
import { HiringsTable } from './components/HiringsTable';
import useQueryApiClient from 'utils/useQueryApiClient';
import { JobFilter } from 'components';
import { Pagination, PaginationProps, Tabs } from 'antd';
import { smoothScroll } from 'utils/globalFunctions';

export const initialQeuryValues = {
  PageIndex: 1,
  PageSize: 10,
  Country: null,
  CompanyId: null,
  JobTitle: null,
  Status: null,
};

export function HiringsPage() {
  const intl = useIntl();
  const navigate = useNavigate();
  const [queryParams, setQueryParams] = useState(initialQeuryValues);

  const {
    isLoading,
    data: hiringDta,
    refetch,
    appendData,
  } = useQueryApiClient({
    request: {
      url: '/api/manage-cabinets/hiring/filter',
      method: 'GET',
      data: queryParams,
      disableOnMount: true,
    },
  });

  const handleChangeForm = (changedValues: any, allValues: any) => {
    const normalizedValues = {
      ...allValues,
      companyId: allValues.companyId?.length ? allValues.companyId : null,
      country: allValues.country?.length ? allValues.country : null,
    };

    setQueryParams((prevParams: any) => ({
      ...prevParams,
      ...normalizedValues,
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
    <StyledHiringsPage>
      <h1 className="title">{intl.formatMessage({ id: 'job_request' })}</h1>
      <Button
        className="add-btn"
        label={intl.messages.add_company && intl.formatMessage({ id: 'add_hiring' })}
        onClick={() => navigate('/admin/request-talent/add-talent')}
      />
      <Tabs
        type="card"
        items={
          [
            {
              label: intl.formatMessage({ id: 'open_requests' }),
              key: '1',
              children: <>
                          <HiringsTable
                            totalItems={hiringDta.data?.totalItems}
                            hiringDta={hiringDta?.data?.items}
                            refetch={refetch}
                            isLoading={isLoading}
                          />
                          <div className="pagination-container">
                            {hiringDta.data?.totalPages > 0 && (
                              <Pagination
                                total={hiringDta?.data?.totalItems}
                                pageSize={hiringDta?.data?.itemsPerPage}
                                itemRender={itemRender}
                                onChange={handlePaginationChange}
                                hideOnSinglePage={true}
                                current={queryParams.PageIndex}
                              />
                            )}
                          </div>
                        </>,
            },
            {
              label: intl.formatMessage({ id: 'drafts' }),
              key: '2',
              children: <h1>Drafts</h1>,
            },
            {
              label: intl.formatMessage({ id: 'closed_requests' }),
              key: '3',
              children: <h1>Closed Requests</h1>,
            }
          ] 
        }
      />
    </StyledHiringsPage>
  );
}
