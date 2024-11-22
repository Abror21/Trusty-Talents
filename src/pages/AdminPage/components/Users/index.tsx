import { usersFilterInterface } from 'pages/AdminPage/Types';
import React, { useEffect, useState } from 'react';
import { UsersFilter } from './components/UsersFilter';
import Pagination from 'ui/Pagination/Pagination';
import useQueryApiClient from 'utils/useQueryApiClient';
import { AdminPageTitle, Button } from 'ui';
import { PaginationProps } from 'antd';
import { useIntl } from 'react-intl';
import { smoothScroll } from 'utils/globalFunctions';
import { UsersList } from './components/UsersList';
import { StyledUsersPage } from './style';

export const initialQeuryValues = {
  role: null,
  companyId: null,
  words: null,
  PageIndex: 1,
  PageSize: 10,
};

export function AdminUsers() {
  const [query, setQuery] = useState<usersFilterInterface>(initialQeuryValues);
  const intl = useIntl();

  const {
    isLoading: usersLoading,
    data: users,
    refetch: getUsers,
    appendData,
  } = useQueryApiClient({
    request: {
      url: '/api/manage-cabinets/organizations/filter',
      method: 'GET',
      data: query,
      disableOnMount: true,
    },
  });

  const handleChangeForm = (changedValues: any, allValues: any) => {
    const normalizedValues = {
      ...allValues,
      companyId: allValues?.companyId,
      words: allValues?.country,
      role: allValues?.role,
    };

    setQuery((prevParams: any) => ({
      ...prevParams,
      ...normalizedValues,
      PageIndex: 1,
    }));
  };

  useEffect(() => {
    if (query) {
      appendData(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

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
    setQuery((prevParams: any) => ({
      ...prevParams,
      PageSize: pageSize,
      PageIndex: page,
    }));
    smoothScroll('top', 95);
  };

  return (
    <StyledUsersPage>
      <AdminPageTitle label={intl.formatMessage({ id: 'managa_users' })} />
      <UsersFilter handleChangeForm={handleChangeForm} />
      <hr className="line" />
      <UsersList users={users.data} usersLoading={usersLoading} totalItems={users?.data?.totalItems} />
      <div className="pagination">
        {users.data?.totalPages > 0 && (
          <Pagination
            total={users?.data?.totalItems}
            pageSize={users?.data?.itemsPerPage}
            itemRender={itemRender}
            onChange={handlePaginationChange}
            hideOnSinglePage={true}
            current={query.PageIndex}
          />
        )}
      </div>
    </StyledUsersPage>
  );
}
