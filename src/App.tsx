import { FC, useState } from 'react';
import DraggableList from './DraggableList';

const App: FC = () => {
  const [chips1, setChips1] = useState([
    'React 01',
    'React 02',
    'React 03',
    'React 04',
    'React 05',
    'React 06',
    'React 07',
    'React 08',
    'React 09',
    'React 10',
    'React 11',
    'React 12',
    'React 13',
    'React 14',
    'React 15',
    'React 16',
    'React 17',
    'React 18',
  ]);

  const [chips2, setChips2] = useState([
    'React',
    'Node.js & Express',
    'MongoDB',
    'TypeScript with React Native',
    'AWS',
    'Docker & Kubernetes',
    'GraphQL',
    'Next.js',
    'Python & Django',
    'PostgreSQL',
    'Redis Cache',
    'Microservices Architecture',
    'CI/CD',
    'Vue.js',
    'TensorFlow & Machine Learning',
  ]);

  return (
    <div className="max-w-[700px]">
      <div>
        <h2 className="text-xl mt-4 mb-2 text-blue-700">Setup</h2>
        <pre className="bg-slate-100 m-0 p-2 overflow-auto inline-block border border-gray-300">
          {`$ git clone https://github.com/evalproject/dnd-kit-sortable-example
$ cd dnd-kit-sortable-example
$ pnpm install
$ pnpm start`}
        </pre>
      </div>
      <h2 className="text-xl mt-4 mb-2 text-green-700">Proper Behavior</h2>
      <DraggableList items={chips1} onChange={setChips1} />
      <h2 className="text-xl mt-4 mb-2 text-red-700">Issues To Fix</h2>
      <p>
        Below are the current issues when using chips with variable widths. The goal is to match the behavior of the
        working example above.
      </p>
      <p className="mt-2 underline">
        Some of the issues <b>when dragging</b> chips:
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li>Text size within chips is inconsistent</li>
        <li>Chip dimensions are not maintained</li>
        <li>Drop placeholder has incorrect dimensions and positioning</li>
        <li>Surrounding chips shift and resize incorrectly</li>
      </ol>
      <DraggableList items={chips2} onChange={setChips2} />
    </div>
  );
};

export default App;
