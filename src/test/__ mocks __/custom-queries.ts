/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  queryHelpers,
  buildQueries,
  Matcher,
  MatcherOptions,
} from "@testing-library/react";

const queryAllByDataCy = (
  container: HTMLElement,
  id: Matcher,
  options?: MatcherOptions | undefined
) => queryHelpers.queryAllByAttribute("data-cy", container, id, options);

const getMultipleError = (c: any, dataCyValue: any) =>
  `Found multiple elements with the data-cy attribute of: ${dataCyValue}`;
const getMissingError = (c: any, dataCyValue: any) =>
  `Unable to find an element with the data-cy attribute of: ${dataCyValue}`;

const [
  queryByDataCy,
  getAllByDataCy,
  getByDataCy,
  findAllByDataCy,
  findByDataCy,
] = buildQueries(queryAllByDataCy, getMultipleError, getMissingError);

export {
  queryByDataCy,
  queryAllByDataCy,
  getByDataCy,
  getAllByDataCy,
  findAllByDataCy,
  findByDataCy,
};
