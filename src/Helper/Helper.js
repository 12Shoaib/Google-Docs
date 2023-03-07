export const handleBold = () => {
    document.execCommand(`bold`);
}

export const handleItalic = () => {
document.execCommand("italic")
}

export const handleUnderline = () => {
document.execCommand("underline")
}
export const handleLeft = () => {
    document.execCommand("justifyLeft")
}
export const handleCenter = () => {
    document.execCommand("justifyCenter")
}
export const handleRight = () => {
    document.execCommand("justifyRight")
}
export const handleStretch = () => {
    document.execCommand("justifyFull")
}
export const strikeThrough = () => {
    document.execCommand("strikethrough")
}
export const handleOrderList = () => {
    document.execCommand("insertOrderedList")
}
export const handleRemoveFormat = () => {
    document.execCommand("removeFormat")
}
export const handleUnorderList = () => {
    document.execCommand("insertUnorderedList")
}
export const handleUndo = () => {
    document.execCommand("undo")
}
export const handleRedo = () => {
    document.execCommand("redo")
}
export const handlePrint = () => {
    window.print()
}
