import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote';
import { PlateRenderElementProps } from '@udecode/plate-core';
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from '@udecode/plate-heading';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import { Blockquote } from './Blockquote';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';

export const components = {
  [ELEMENT_H1]: (props: PlateRenderElementProps) => (
    <Heading variant="h1" {...props} />
  ),
  [ELEMENT_H2]: (props: PlateRenderElementProps) => (
    <Heading variant="h2" {...props} />
  ),
  [ELEMENT_H3]: (props: PlateRenderElementProps) => (
    <Heading variant="h3" {...props} />
  ),
  [ELEMENT_H4]: (props: PlateRenderElementProps) => (
    <Heading variant="h4" {...props} />
  ),
  [ELEMENT_H5]: (props: PlateRenderElementProps) => (
    <Heading variant="h5" {...props} />
  ),
  [ELEMENT_H6]: (props: PlateRenderElementProps) => (
    <Heading variant="h6" {...props} />
  ),
  [ELEMENT_PARAGRAPH]: Paragraph,
  [ELEMENT_BLOCKQUOTE]: Blockquote,
};
