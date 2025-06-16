import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  Home,
  SortControl,
  OrderControl,
  CountControl,
  ValuesControl,
  RunButtons,
  Checkboxes,
  ProfileButtons,
} from './controls';

interface Ctx {
  defaults: any;
  shuffles?: any;
  sizes?: any;
  sorts?: any;
  valueTypes?: any;
}

const ScatterPage: React.FC<Ctx> = ({ defaults, shuffles, sizes, sorts, valueTypes }) => (
  <>
    <Home />
    <h2>Scatter Plots</h2>
    <div>This visualization uses scatter plots to show the sort.</div>
    <article className="sorting">
      <div className="controls clear">
        <div>
          {sorts && <SortControl sorts={sorts} defaults={defaults} />}
          {sizes && <CountControl sizes={sizes} defaults={defaults} />}
          {shuffles && <OrderControl shuffles={shuffles} defaults={defaults} />}
          {valueTypes && <ValuesControl valueTypes={valueTypes} defaults={defaults} />}
        </div>
        <RunButtons />
      </div>
      <div id="boards"></div>
    </article>
    <style>{`#content {width:90%;max-width:none;}`}</style>
  </>
);

export function scatterPage(ctx: Ctx): string {
  return renderToStaticMarkup(<ScatterPage {...ctx} />);
}

const PipePage: React.FC<Ctx> = ({ defaults, shuffles, sizes, sorts, valueTypes }) => (
  <>
    <Home />
    <h2>Pipe</h2>
    <div>This visualization shows the profile for a given sort.</div>
    <article className="sorting">
      <div className="controls clear">
        <div>
          {sorts && <SortControl sorts={sorts} defaults={defaults} />}
          {sizes && <CountControl sizes={sizes} defaults={defaults} />}
          {shuffles && <OrderControl shuffles={shuffles} defaults={defaults} />}
          {valueTypes && <ValuesControl valueTypes={valueTypes} defaults={defaults} />}
        </div>
        <RunButtons />
      </div>
    </article>
    <div id="pipe"></div>
    <style>{`path{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:0.6;}`}</style>
  </>
);

export function pipePage(ctx: Ctx): string {
  return renderToStaticMarkup(<PipePage {...ctx} />);
}

const SinglePage: React.FC<Ctx> = ({ defaults, shuffles, sorts }) => (
  <>
    <Home />
    <div className="controls clear">
      <div>
        {sorts && <SortControl sorts={sorts} defaults={defaults} />}
        {shuffles && <OrderControl shuffles={shuffles} defaults={defaults} />}
      </div>
    </div>
    <div id="single"></div>
    <style>{`.wrapper{display:block;margin:auto;width:500px;}`}</style>
  </>
);

export function singlePage(ctx: Ctx): string {
  return renderToStaticMarkup(<SinglePage {...ctx} />);
}

const StickPage: React.FC<Ctx> = ({ defaults, shuffles, sizes, sorts, valueTypes }) => (
  <>
    <Home />
    <article className="sorting">
      <div className="controls clear">
        <div>
          {sorts && <SortControl sorts={sorts} defaults={defaults} />}
          {sizes && <CountControl sizes={sizes} defaults={defaults} />}
          {shuffles && <OrderControl shuffles={shuffles} defaults={defaults} />}
          {valueTypes && <ValuesControl valueTypes={valueTypes} defaults={defaults} />}
        </div>
        <RunButtons />
      </div>
    </article>
    <div id="sticks"></div>
  </>
);

export function stickPage(ctx: Ctx): string {
  return renderToStaticMarkup(<StickPage {...ctx} />);
}

const ProfilePage: React.FC<Ctx> = ({ defaults, shuffles, sizes, sorts, valueTypes }) => (
  <>
    <Home />
    <h2>Profiles</h2>
    <div>This visualization shows the profile for a given sort.</div>
    <article className="sorting">
      <div className="controls clear">
        <div>
          {sorts && <SortControl sorts={sorts} defaults={defaults} />}
          {sizes && <CountControl sizes={sizes} defaults={defaults} />}
          {shuffles && <OrderControl shuffles={shuffles} defaults={defaults} />}
          {valueTypes && <ValuesControl valueTypes={valueTypes} defaults={defaults} />}
          <Checkboxes />
        </div>
        <ProfileButtons />
        <div>
          Sorts: <span id="sorts"></span>
        </div>
      </div>
      <div id="graph"></div>
      <div id="previous"></div>
      <style>{`path{stroke:black;fill:none;} .line{fill:none;}`}</style>
    </article>
  </>
);

export function profilePage(ctx: Ctx): string {
  return renderToStaticMarkup(<ProfilePage {...ctx} />);
}
