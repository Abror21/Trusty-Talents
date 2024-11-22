import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Button, Tabs } from 'ui';
import { StyledHiringTabs } from './style';
import { HiringCard } from 'components/HiringCard';
import SvgSelector from 'assets/icons/SvgSelector';
import useQueryApiClient from 'utils/useQueryApiClient';
import { Pagination, PaginationProps } from 'antd';
import { smoothScroll } from 'utils/globalFunctions';
import { HiKey } from 'react-icons/hi';

export const initialQeuryValues = {
  PageIndex: 1,
  PageSize: 10,
  Status: ['Active'],
};

export function HiringTabs() {
  const intl = useIntl();
  const [queryParams, setQueryParams] = useState(initialQeuryValues);

  const {
    isLoading,
    data: hiringData,
    appendData,
  } = useQueryApiClient({
    request: {
      url: '/api/hirings/filter',
      method: 'GET',
      disableOnMount: true,
    },
  });

  const items = [
    {
      label: intl.formatMessage({ id: 'open_requests' }),
      key: 'open_requests',
      children: (
        <div>
          {hiringData?.data?.items?.map((item: any, index: number) => (
            <React.Fragment key={item.id}>
              {index > 0 && <hr />}
              <HiringCard item={item} />
            </React.Fragment>
          ))}
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: 'drafts' }),
      key: 'drafts',
      children: (
        <div>
          {hiringData?.data?.items?.map((item: any, index: number) => (
            <React.Fragment key={item.id}>
              {index > 0 && <hr />}
              <HiringCard item={item} />
            </React.Fragment>
          ))}
        </div>
      ),
    },
    {
      label: intl.formatMessage({ id: 'closed_requests' }),
      key: 'closed_requests',
      children: (
        <div>
          {hiringData?.data?.items?.map((item: any, index: number) => (
            <React.Fragment key={item.id}>
              {index > 0 && <hr />}
              <HiringCard item={item} />
            </React.Fragment>
          ))}
        </div>
      ),
    },
  ];

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

  const handleChange = (key: any) => {
    const correctKey = handelChangeKey(key);
    setQueryParams((prevParams: any) => ({
      ...prevParams,
      Status: Array.isArray(correctKey) ? correctKey : [correctKey],
    }));
  };

  const handelChangeKey = (key: string) => {
    if (key === 'open_requests') return 'Active';
    if (key === 'closed_requests') return 'Ended';
    if (key === 'drafts') return 'Draft';
  };

  return (
    <StyledHiringTabs className="admin-layout">
      <div className="hiring-tabs">
        <div className="sort-wrap">
          <div className="sort-icon">
            <SvgSelector id="sort" />
          </div>
        </div>
        <div className="tab-item">
          <Tabs onChange={handleChange} items={items} />
        </div>
        <div className="btn-container">
          <div className="btn-wrap">
            <Button className="hiring_btn" label={intl.formatMessage({ id: 'add_request' })} type="primary" />
          </div>
        </div>
      </div>

      {/* {hiringData && hiringData?.data?.totalPages > 0 && (
        <Pagination
          total={hiringData?.data?.totalItems}
          pageSize={hiringData?.data?.itemsPerPage}
          itemRender={itemRender}
          onChange={handlePaginationChange}
          hideOnSinglePage={true}
          current={queryParams.PageIndex}
        />
      )} */}
    </StyledHiringTabs>
  );
}
