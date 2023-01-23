import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick} className="pop-btn">
        <i className="fa fa-info-circle"></i>&nbsp;&nbsp;What does mAP mean?
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        className="pop-over">
        <Typography sx={{ p: 2 }} className="fine-font">mAP stands for <span className='emphasis'>mean Average Precision</span>, it's a metric used to evaluate object detection models. It is a measure of a model's accuracy and is used to compare the performance of different models.<br /><br />

        The average precision (AP) for an object class is calculated by measuring the precision of the model's predictions for that class at different recall levels. Precision is the proportion of true positive detections (correctly identified objects) out of all positive detections (correctly and incorrectly identified objects). Recall is the proportion of true positive detections out of all actual objects in the image.<br /><br />

        mAP is the mean of the average precision across all the classes in the dataset. It provides a single value that summarizes the model's performance across all classes, and it's widely used in object detection tasks. A higher mAP value indicates better overall performance of the model.</Typography>
      </Popover>
    </div>
  );
}