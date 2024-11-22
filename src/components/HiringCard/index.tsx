import React from 'react';
import { StyledHiringCard } from './style';
import SvgSelector from 'assets/icons/SvgSelector';
import { useIntl } from 'react-intl';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

export function HiringCard({ item }: any) {
  const intl = useIntl();
  const navigate = useNavigate();
  return (
    <StyledHiringCard>
      <div className="left-side">
        <div className="hiring-card-title">
          <div className="title-color" onClick={() => navigate(`/for-employers/request-talent/${item.id}`)}>
            {item.jobTitle}
          </div>
          <div className="title-color">
            Manage Candidates (10) <span>1 NEW</span>
          </div>
        </div>
        <div>
          {item.location && <div className="country">{item.location}</div>}
          {item?.hiringDetails?.createdAt && (
            <div>Requested: {dayjs(item?.hiringDetails?.createdAt).format('DD.MM.YYYY')}</div>
          )}
          {item?.hiringDetails?.publicationEndDate && (
            <div>End date: {dayjs(item?.hiringDetails?.publicationEndDate).format('DD.MM.YYYY')}</div>
          )}
        </div>
      </div>

      <div className="rigth-side">
        <div className="hiring-card-creator">Request Creator: PP Admin System</div>

        <div className="svg-container">
          <span>
            {intl.formatMessage({ id: 'edit' })} <SvgSelector id="edit" />
          </span>
          <span>
            {intl.formatMessage({ id: 'copy' })}
            <SvgSelector id="copy" />
          </span>
          <span>
            {intl.formatMessage({ id: 'stop' })}
            <SvgSelector id="message-error" />
          </span>
        </div>
      </div>
    </StyledHiringCard>
  );
}
