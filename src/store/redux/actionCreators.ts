import * as SlideActionCreators from './slideActionCreators.ts'
import * as SelectionActionCreators from './selectionActionCreators.ts'
import * as EditorActionCreators from './editorActionCreators.ts'

export default {
    ...SlideActionCreators,
    ...SelectionActionCreators,
    ...EditorActionCreators,
}