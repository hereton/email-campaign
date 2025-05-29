import type { EditorThemeClasses } from 'lexical';

const emailCampaignTheme: EditorThemeClasses = {
  ltr: 'text-left',
  rtl: 'text-right',
  placeholder: 'text-gray-400 overflow-hidden text-ellipsis',
  paragraph: 'my-1',
  quote:
    'm-0 mb-4 py-2 px-4 border-l-4 border-gray-300 text-gray-600 italic',
  heading: {
    h1: 'text-4xl font-bold mb-4 mt-2',
    h2: 'text-3xl font-bold mb-3 mt-2',
    h3: 'text-2xl font-bold mb-2 mt-2',
    h4: 'text-xl font-bold mb-1 mt-2',
    h5: 'text-lg font-bold mb-1 mt-2',
    h6: 'text-base font-bold mb-1 mt-2',
  },
  list: {
    ul: 'list-disc pl-5 my-2',
    ol: 'list-decimal pl-5 my-2',
    listitem: 'mb-1',
  },
  image: 'editor-image',
  link: 'text-blue-500 hover:underline',
  text: {
    bold: 'font-bold',
    italic: 'italic',
    overflow: 'text-red-500',
    hashtag: 'text-blue-500',
    underline: 'underline',
    strikethrough: 'line-through',
    underlineStrikethrough: 'underline line-through',
    code: 'bg-gray-100 p-1 rounded text-sm font-mono',
  },
  // Add other Lexical classes as needed, e.g., code, table, etc.
};

export default emailCampaignTheme;