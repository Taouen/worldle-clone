import Layout from './components/Layout';

const sets: string[] = [
  'znr',
  'khm',
  'stx',
  'afr',
  'mid',
  'vow',
  'neo',
  'snc',
  'dmu',
  'bro',
];

const answer: string = 'znr';

export default function Home() {
  return (
    <Layout>
      Play as much Enchant Worldle as you like!
      <div className="flex">
        {sets.map((set, index) => {
          return (
            /* Need some way to highlight the sets individually in yellow or green */
            <div key={`${set}`} className="px-1">
              <i
                className={`ss-2x ss ss-${set} ${
                  set === answer ? 'text-green-500' : null
                }`}
              ></i>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
