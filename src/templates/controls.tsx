import * as React from 'react';

export const Home: React.FC = () => (
  <>
    <div>
      <a href="../../index.html">Index</a>
    </div>
    <div>
      <a href="javascript:history.back()">&lt;&lt; Back</a>
    </div>
  </>
);

interface SortControlProps {
  sorts: [string, any][];
  defaults: any;
}

export const SortControl: React.FC<SortControlProps> = ({ sorts, defaults }) => (
  <label>
    {' '}
    Sort:{' '}
    <select id="sort" defaultValue={defaults.sort}>
      {sorts.map(([key, info]) => (
        <option key={key} value={key}>
          {info.title}
        </option>
      ))}
    </select>
  </label>
);

interface OrderControlProps {
  shuffles: [string, any][];
  defaults: any;
}

export const OrderControl: React.FC<OrderControlProps> = ({ shuffles, defaults }) => (
  <label>
    {' '}
    Order:{' '}
    <select id="order" defaultValue={defaults.shuffle}>
      {shuffles
        .filter(([, v]) => v.title)
        .map(([key, info]) => (
          <option key={key} value={key}>
            {info.title}
          </option>
        ))}
    </select>
  </label>
);

interface CountControlProps {
  sizes: [string, any][];
  defaults: any;
}

export const CountControl: React.FC<CountControlProps> = ({ sizes, defaults }) => (
  <label>
    {' '}
    Point count:{' '}
    <select id="size" defaultValue={defaults.count}>
      {sizes.map(([key, info]) => (
        <option key={key} value={key}>
          {info.label}
        </option>
      ))}
    </select>
  </label>
);

interface ValuesControlProps {
  valueTypes: [string, any][];
  defaults: any;
}

export const ValuesControl: React.FC<ValuesControlProps> = ({ valueTypes, defaults }) => (
  <label>
    {' '}
    Values:{' '}
    <select id="value-type" defaultValue={defaults.valueType}>
      {valueTypes.map(([key, info]) => (
        <option key={key} value={key}>
          {info.title}
        </option>
      ))}
    </select>
  </label>
);

export const Checkboxes: React.FC = () => (
  <>
    <label>
      Swaps<input type="checkbox" id="swaps" defaultChecked />
    </label>
    <label>
      Comparisons<input type="checkbox" id="comps" />
    </label>
  </>
);

export const RunButtons: React.FC = () => (
  <>
    <div className="button-wrapper">
      <div className="run-buttons">
        <button id="create">Create</button>
        <button id="step">Step</button>
        <button id="auto">Auto</button>
      </div>
    </div>
    <style>
      {`.run-buttons { position: fixed; z-index: 100000; }
  .button-wrapper { float: right; height: 36px; width: 196px; }`}
    </style>
  </>
);

export const ProfileButtons: React.FC = () => (
  <>
    <button id="create">Create</button>
    <button id="run">Run</button>
  </>
);
