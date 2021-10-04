import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LeadsIcon } from 'assets/leads.svg';

export const LeadsBtn: FC = () => {
  return (
    <NavLink
      className="flex items-center justify-center h-20 px-5 overflow-hidden font-medium rounded-lg shadow-inner select-none group hover:cursor-pointer"
      activeClassName="bg-mirage-700 hover:bg-mirage-600"
      to="/leads"
    >
      <LeadsIcon className="flex-shrink-0 w-8 mr-1 text-white md:w-10" />
      <div className="flex flex-col">
        <div className="text-sm truncate md:text-base">Leads</div>
        <div className="font-light truncate opacity-75 md:text-xs">
          0 contacts
        </div>
      </div>
    </NavLink>
  );
};
