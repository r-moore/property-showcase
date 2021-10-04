import { FC } from 'react';
import { CardList, Card } from 'components/CardList/CardList';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Modal from 'components/Modal';
import { useHistory, RouteComponentProps } from 'react-router-dom';

export const Developments: FC<RouteComponentProps<{ id?: string }>> = ({
  match,
}) => {
  const history = useHistory();

  return (
    <motion.main
      className="w-full h-auto p-5 md:rounded-lg bg-mirage-500"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <CardList>
        <motion.div
          className="flex flex-col justify-between p-4 mb-5 overflow-hidden bg-right-bottom bg-no-repeat rounded-lg shadow-lg cursor-pointer select-none text-mirage-700 h-36 bg-sand-300"
          style={{
            backgroundImage: `url('/buildings.svg')`,
            backgroundSize: 'auto 80%',
          }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <div>
            <h2 className="text-lg font-semibold leading-6">
              All Developments
            </h2>
            <h4 className="text-xs font-light tracking-wide opacity-50">
              Region-wide avilability
            </h4>
          </div>
          <div className="self-end w-auto px-2 py-1 text-xs font-bold tracking-wide uppercase bg-white rounded-lg shadow-sm">
            Select
          </div>
        </motion.div>
      </CardList>
      <div className="mb-1">
        <h2 className="text-base leading-3 tracking-wide">Property Focus</h2>
        <h4 className="text-xs font-light leading-10 tracking-wide opacity-50">
          Click to see more details, including available units within the
          development
        </h4>
      </div>
      <CardList>
        <AnimateSharedLayout type="crossfade">
          <Card
            id="palm-view"
            title="Palm View"
            subtitle="by NAKHEEL"
            buttonText="DETAILS"
            image="/developments/bedroom.jpg"
            onClick={() => history.push('/developments/palm-view')}
          />
          <Card
            id="the-address"
            title="The Address"
            subtitle="by EMAAR"
            buttonText="DETAILS"
            image="/developments/tower-dusk.jpg"
            onClick={() => history.push('/developments/the-address')}
          />
          <Card
            id="sparkle-towers"
            title="Sparkle Towers"
            subtitle="by TEBYAN"
            buttonText="DETAILS"
            image="/developments/poolside.jpg"
            onClick={() => history.push('/developments/sparkle-towers')}
          />
          {match.params?.id && (
            <Modal>
              <AnimatePresence>
                <motion.div
                  className="flex flex-col justify-end h-64 max-w-5xl min-h-full overflow-hidden bg-gray-300 bg-cover rounded-lg shadow-lg cursor-pointer select-none"
                  style={{
                    backgroundImage: `url('/photos/poolside.jpg')`,
                  }}
                  onClick={() => history.push('/developments')}
                  layoutId={`card-${match.params?.id}`}
                >
                  <motion.footer
                    className="flex items-stretch justify-between h-20 px-4 font-medium bg-white border-t rounded-b-lg bg-opacity-20 backdrop-blur-md text-mirage-700"
                    layoutId={`card-footer-${match.params?.id}`}
                  >
                    <motion.div
                      layoutId={`card-${match.params?.id}-footer-left`}
                      className="flex flex-col items-start justify-center"
                    >
                      <h2 className="text-xl font-semibold leading-6">Test</h2>
                      <h4 className="text-xs font-light opacity-75">Test</h4>
                    </motion.div>

                    <motion.div
                      layoutId={`card-${match.params?.id}-footer-right`}
                      className="flex items-end pb-4"
                    >
                      <div className="px-2 py-1 text-xs font-bold tracking-wide uppercase bg-white rounded-lg shadow-sm">
                        Select
                      </div>
                    </motion.div>
                  </motion.footer>
                </motion.div>
              </AnimatePresence>
            </Modal>
          )}
        </AnimateSharedLayout>
      </CardList>
    </motion.main>
  );
};
