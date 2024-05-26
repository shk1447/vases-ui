interface KeyCheckerParam {
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
  metaKey?: boolean;
}

const keyChecker = (
  param: KeyCheckerParam,
  event: KeyboardEvent | MouseEvent
) => {
  const { ctrlKey = false, altKey = false, shiftKey = false, metaKey } = param;
  return (
    ctrlKey === event.ctrlKey &&
    altKey === event.altKey &&
    shiftKey === event.shiftKey &&
    (metaKey ? metaKey === event.metaKey : true)
  );
};

export default keyChecker;
