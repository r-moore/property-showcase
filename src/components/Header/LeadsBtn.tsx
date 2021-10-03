import { FC } from 'react';
import { ReactComponent as LeadsIcon } from 'assets/leads.svg';

export const LeadsBtn: FC = () => (
  <div className="flex items-center justify-center px-5 overflow-hidden font-medium rounded-lg select-none bg-mirage-600 hover:cursor-pointer hover:bg-mirage-700">
    <LeadsIcon className="w-8 mr-1 text-white" />
    <div className="flex flex-col">
      <div className="truncate">Leads</div>
      <div className="text-xs font-light opacity-75">0 contacts</div>
    </div>
  </div>
);
