## 光标移动

| 指令            | 效果                |
| :-------------- | :------------------ |
| ctrl+right end  | cursorEnd           |
| cmd+left home   | cursorHome          |
| ctrl+n down     | cursorDown          |
| ctrl+p up       | cursorUp            |
| ctrl+b left     | cursorLeft          |
| ctrl+f right    | cursorRight         |
| ctrl+e ctrl+a   | cursorLineEnd Start |
| pagedown pageup | cursorPageDown up   |
| cmd+up cmd+down | cursorTop           |
| cmd+u           | cursorUndo          |
| shift+cmd+\     | jumpToBracket       |
| ctrl+t          | transposeLetters    |

## select

shift + key

| 指令                                               | 效果                |
| :------------------------------------------------- | :------------------ |
| shift+ end home down left right up pagedown pageup |                     |
| shift+cmd+ down left right up                      |                     |
| shift+alt+cmd+ down left pagedown pageup right up  |                     |
| cmd+i                                              | expandLineSelection |
| shift+cmd+l                                        | selectHighlights    |
| alt+enter                                          | selectAllMatches    |

## insert

| 指令            | 效果                                |
| :-------------- | :---------------------------------- |
| ctrl+o          | lineBreakInsert                     |
| alt+cmd+up      | insertCursorAbove                   |
| alt+cmd+down    | insertCursorBelow                   |
| cmd+enter       | insertLineAfter                     |
| shift+cmd+enter | insertLineBefore                    |
| shift+alt+i     | insertCursorAtEndOfEachLineSelected |

## delete

| 指令                                  | 效果                     |
| :------------------------------------ | :----------------------- |
| ctrl+h ctrl+backspace shift+backspace | deleteLeft               |
| ctrl+delete ctrl+d                    | deleteRight              |
| ctrl+k cmd+delete                     | deleteAllRight           |
| cmd+backspace                         | deleteAllLeft            |
| alt+backspace alt+delete              | deleteWordLeft Right     |
| ctrl+alt+backspace ctrl+alt+delete    | deleteWordPartLeft Right |
| shift+cmd+k                           | deleteLines              |

## copy

| 指令              | 效果                         |
| :---------------- | :--------------------------- |
| shift+alt+down up | copyLinesDownAction UpAction |
| alt+cmd+c         | copyFilePath                 |
| shift+alt+cmd+c   | copyRelativeFilePath         |
| alt+cmd+c         | copyPath                     |
| cmd+k p           | copyPathOfActiveFile         |

## comment

| 指令        | 效果                 |
| :---------- | :------------------- |
| cmd+k cmd+c | addCommentLine       |
| shift+alt+a | blockComment         |
| cmd+/       | commentLine          |
| cmd+k cmd+u | removeCommentLine    |
| cmd+k cmd+/ | foldAllBlockComments |

## find

| 指令            | 效果                        |
| :-------------- | :-------------------------- |
| cmd+f           | find                        |
| cmd+e           | findWithSelection           |
| cmd+d           | addSelectionToNextFindMatch |
| cmd+g           | nextMatchFindAction         |
| shift+cmd+g     | previousMatchFindAction     |
| shift+cmd+f     | findInFiles                 |
| alt+cmd+enter   | replaceAll                  |
| shift+cmd+1     | replaceOne                  |
| shift+cmd+1     | replace                     |
| alt+cmd+enter   | replaceAll                  |
| shift+cmd+enter | replaceAllInFile            |
| shift+cmd+1     | replaceAllInFile            |
| shift+cmd+enter | replaceAllInFolder          |
| shift+cmd+1     | replaceAllInFolder          |

## word

| 指令                 | 效果                      |
| :------------------- | :------------------------ |
| alt+right            | cursorWordEndRight        |
| alt+left             | cursorWordStartLeft       |
| shift+alt+right      | cursorWordEndRightSelect  |
| shift+alt+left       | cursorWordStartLeftSelect |
| ctrl+alt+left        | cursorWordPartLeft        |
| ctrl+alt+right       | cursorWordPartRight       |
| ctrl+shift+alt+left  | cursorWordPartLeftSelect  |
| ctrl+shift+alt+right | cursorWordPartRightSelect |

## line

| 指令     | 效果                |
| :------- | :------------------ |
| alt+down | moveLinesDownAction |
| alt+up   | moveLinesUpAction   |
| ctrl+j   | joinLines           |

## beautiful

| 指令                  | 效果                 |
| :-------------------- | :------------------- |
| shift+alt+f           | formatDocument       |
| cmd+k cmd+f           | formatSelection      |
| shift+tab             | outdent              |
| cmd+]                 | indentLines          |
| cmd+[                 | outdentLines         |
| alt+cmd+[             | fold                 |
| alt+cmd+]             | unfold               |
| cmd+k cmd+0           | foldAll              |
| cmd+k cmd+j           | unfoldAll            |
| ctrl+alt+d ctrl+alt+d | docthis.documentThis |

## editor

| 指令                      | 效果                  |
| :------------------------ | :-------------------- |
| cmd+w                     | closeActiveEditor     |
| cmd+k cmd+w               | closeAllEditors       |
| shift+cmd+] alt+cmd+right | nextEditor            |
| shift+cmd+[ alt+cmd+left  | previousEditor        |
| shift+cmd+t               | reopenClosedEditor    |
| alt+cmd+tab               | showAllEditors        |
| cmd+\| splitEditor        |
| cmd+k cmd+\               | splitEditorOrthogonal |

## terminal

| 指令                             | 效果                             |
| :------------------------------- | :------------------------------- |
| cmd+c                            | terminal.copySelection           |
| alt+backspace                    | terminal.deleteWordLeft          |
| alt+delete                       | terminal.deleteWordRight         |
| cmd+f                            | terminal.focusFindWidget         |
| alt+cmd+down                     | terminal.focusNextPane           |
| alt+cmd+right                    | terminal.focusNextPane           |
| alt+cmd+up                       | terminal.focusPreviousPane       |
| alt+cmd+left                     | terminal.focusPreviousPane       |
| cmd+right                        | terminal.moveToLineEnd           |
| cmd+left                         | terminal.moveToLineStart         |
| ctrl+shift+` |terminal.new       |
| shift+cmd+c                      | terminal.openNativeConsole       |
| ctrl+cmd+down                    | terminal.resizePaneDown          |
| ctrl+cmd+left                    | terminal.resizePaneLeft          |
| ctrl+cmd+right                   | terminal.resizePaneRight         |
| ctrl+cmd+up                      | terminal.resizePaneUp            |
| alt+cmd+pagedown                 | terminal.scrollDown              |
| pagedown                         | terminal.scrollDownPage          |
| cmd+end                          | terminal.scrollToBottom          |
| cmd+down                         | terminal.scrollToNextCommand     |
| cmd+up                           | terminal.scrollToPreviousCommand |
| cmd+home                         | terminal.scrollToTop             |
| alt+cmd+pageup                   | terminal.scrollUp                |
| pageup                           | terminal.scrollUpPage            |
| cmd+a                            | terminal.selectAll               |
| shift+cmd+down                   | terminal.selectToNextCommand     |
| shift+cmd+up                     | terminal.selectToPreviousCommand |
| ctrl+shift+5                     | terminal.split                   |
| cmd+\                            | terminal.split                   |
| ctrl+` | terminal.toggleTerminal |
| cmd+k                            | terminal.clear                   |
