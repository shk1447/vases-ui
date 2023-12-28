import { css } from '@mui/material';
import React, {
  useState,
  MouseEvent,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import { IconButton } from '../../../../../atoms/IconButton';
import { Tooltip } from '../../../../../atoms/Tooltip';
import { ICON_SignalCellular } from '../../../../../styles/icons';
import CommandData from '../../ConmmandRegistry/Actions/Shareable';
import { LabelingToolbarItemInfo } from '../../Interfaces/UI/Toolbar';
import { CanvasContext } from '../DrawingEditor';

const ToolBarItem = ({ ...props }: LabelingToolbarItemInfo) => {
  const _canvas = useContext(CanvasContext);

  const [AnchorEI, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const [enabled, setEnabled] = useState<boolean>(true);
  const [activated, setActivated] = useState<boolean>(false);

  useEffect(() => {
    if (_canvas?.sharedDatum && props.command.condition) {
      setEnabled(
        props.command.condition &&
          props.command.condition({
            sharedDatum: _canvas?.sharedDatum,
            undoList: _canvas?.undoList,
            redoList: _canvas?.redoList,
            currentController: _canvas?.currentController,
          }),
      );
    }
    if (_canvas?.currentController)
      setActivated(_canvas?.currentController === props.command.key);
  }, [
    _canvas?.sharedDatum,
    _canvas?.undoList,
    _canvas?.redoList,
    _canvas?.currentController,
  ]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const CommandAction = useCallback(() => {
    _canvas?.canvas?.current
      ?.stageWrapper()
      ?.commandRegistry?.execute(props.command.key);
  }, [_canvas?.canvas]);

  return (
    <Tooltip title={props.command.key}>
      <div
        css={css`
          opacity: ${enabled ? 1 : 0.5};
          border: ${activated ? '1px solid red' : 'none'};
        `}
      >
        <div
          css={css`
            width: 20px;
            height: 20px;
            padding: 5px;
          `}
          onClick={CommandAction}
        >
          <div>
            <IconButton
              css={css`
                color: #d8d7d7;
                padding: 0;
              `}
            >
              {props.command.toolbar?.icon}
            </IconButton>
          </div>
          <IconButton
            css={css`
              position: absolute;
              bottom: 0px;
              right: 0px;
              color: #d8d7d7;
              height: 10px;
              padding: 0px;
            `}
            onClick={handleClick}
          >
            {/* {props.templates ? (
              <ICON_SignalCellular
                css={css`
                  color: #d8d7d7;
                  font-size: 10px;
                `}
              ></ICON_SignalCellular>
            ) : null} */}
          </IconButton>
        </div>
      </div>
    </Tooltip>
  );
};

export default ToolBarItem;
