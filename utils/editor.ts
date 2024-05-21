import { Heading } from '@ckeditor/ckeditor5-heading'
import { Essentials } from '@ckeditor/ckeditor5-essentials'
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles'
import { Link } from '@ckeditor/ckeditor5-link'
import { Paragraph } from '@ckeditor/ckeditor5-paragraph'
// import { SourceEditing } from '@ckeditor/ckeditor5-source-editing'
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support'

export const EditorPlugins = () => [
    GeneralHtmlSupport,
    // SourceEditing,
    Heading,
    Essentials,
    Bold,
    Italic,
    Link,
    Paragraph,
]
