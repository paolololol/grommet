import styled from 'styled-components';

import {genericStyles} from '../../utils';
import {defaultProps} from '../../default-props';

const StyledDataTable = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
  ${genericStyles};
`;

StyledDataTable.defaultProps = {};
Object.setPrototypeOf(StyledDataTable.defaultProps, defaultProps);

const StyledDataTableRow = styled.tr`
  ${props =>
  `
    &:hover {
      background: ${props.theme.global.colors.tableHover};
    }
    ${props.onClick &&
      `
          cursor: pointer;
      `}
    ${props.size &&
    `
      display: table;
      table-layout: fixed;  
    `}
  `};
`;


StyledDataTableRow.defaultProps = {};
Object.setPrototypeOf(StyledDataTableRow.defaultProps, defaultProps);

const StyledDataTableBody = styled.tbody`
  ${props =>
  props.size &&
  `
    display: block;
    max-height: ${props.theme.global.size[props.size]};
    overflow: auto;
  `};
`;

StyledDataTableBody.defaultProps = {};
Object.setPrototypeOf(StyledDataTableBody.defaultProps, defaultProps);

const StyledDataTableHeader = styled.thead`
  ${props =>
  props.size &&
  `
    display: table;
    table-layout: fixed;
  `};
`;

StyledDataTableHeader.defaultProps = {};
Object.setPrototypeOf(StyledDataTableHeader.defaultProps, defaultProps);

const StyledDataTableFooter = styled.tfoot`
  ${props =>
  props.size &&
  `
    display: table;
    width: 100%;
    table-layout: fixed;
  `};
`;

StyledDataTableFooter.defaultProps = {};
Object.setPrototypeOf(StyledDataTableFooter.defaultProps, defaultProps);

export {
  StyledDataTable,
  StyledDataTableRow,
  StyledDataTableBody,
  StyledDataTableHeader,
  StyledDataTableFooter,
};
