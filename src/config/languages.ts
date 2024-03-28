import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { json } from '@codemirror/lang-json';
import { markdown } from '@codemirror/lang-markdown';
import { php } from '@codemirror/lang-php';
import { vue } from '@codemirror/lang-vue';
import { xml } from '@codemirror/lang-xml';

export const languages = {
  'Javascript': javascript.bind(null, { jsx: true, typescript: true }),
  'CSS': css,
  'HTML': html.bind(null, { autoCloseTags: true, matchClosingTags: true }),
  'JSON': json,
  'Markdown': markdown,
  'PHP': php,
  'Vue JS': vue,
  'XML': xml,
};
