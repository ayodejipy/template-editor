import { Heading } from '@ckeditor/ckeditor5-heading'
import { Essentials } from '@ckeditor/ckeditor5-essentials'
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles'
import { Link } from '@ckeditor/ckeditor5-link'
import { Paragraph } from '@ckeditor/ckeditor5-paragraph'
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support'
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing'



export const EditorPlugins = [
    SourceEditing,
    GeneralHtmlSupport,
    Heading,
    Essentials,
    Bold,
    Italic,
    Link,
    Paragraph,
]
