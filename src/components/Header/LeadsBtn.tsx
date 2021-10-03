import { FC } from 'react';
import { ReactComponent as LeadsIcon } from 'assets/leads.svg';

export const LeadsBtn: FC = () => (
  <div className="flex items-center justify-center h-20 px-5 overflow-hidden font-medium rounded-lg select-none bg-mirage-600 hover:cursor-pointer hover:bg-mirage-700">
    <LeadsIcon className="flex-shrink-0 w-8 mr-1 text-white" />
    <div className="flex flex-col">
      <div className="truncate">Leads</div>
      <div className="text-xs font-light truncate opacity-75">0 contacts</div>
    </div>
  </div>
);
