Code Sharing app

https://devchallenges.io/challenge/code-shraing-app-note-code
https://github.com/surmon-china/vue-codemirror

The application will allow users to store and share coding snippets

- [ ] Create a Coding Sharing App - NoteCode following given design.
- [ ] By default, users should see an HTML given snippet. See `Code Guide` for default HTML code.
- [ ] When users select the `Share` button, a new ID should be generated, and users can access the saved code with the generated ID. See `Code Guide` for more details.
- [ ] After code is saved and shared, `Share` button should be disabled until users make an edit.
- [ ] Users can choose the language and theme they want to save and share.

### Links

- https://highlightjs.org/demo
- https://www.npmjs.com/package/monaco-editor

@codemirror/lang-css
@codemirror/lang-html
@codemirror/lang-javascript
@codemirror/lang-json
@codemirror/lang-markdown
@codemirror/lang-php
@codemirror/lang-vue
@codemirror/language
@codemirror/lang-xml

https://github.com/codemirror/codemirror5/tree/master/theme

```tsx
import { javascript } from '@codemirror/lang-javascript'
export default {
  language: javascript
}
```

```tsx
export { oneDark } from '@codemirror/theme-one-dark'
export { materialDark } from 'cm6-theme-material-dark'
export { nord } from 'cm6-theme-nord'
export {
  amy,
  ayuLight,
  barf,
  bespin,
  birdsOfParadise,
  boysAndGirls,
  clouds,
  cobalt,
  coolGlow,
  dracula,
  espresso,
  noctisLilac,
  rosePineDawn,
  smoothy,
  solarizedLight,
  tomorrow
} from 'thememirror'

```
