import React from 'react';
import { Button } from 'react-bootstrap';

import { ReactComponent as DownloadIcon } from '@assets/icons/arrow-down-circle.svg';
import styles from './DownloadButton.module.scss';

interface IDownloadButtonProps {
  downloadUrl: string;
  fileName: string;
}

const DownloadButton: React.FC<IDownloadButtonProps> = ({
  downloadUrl,
  fileName,
}) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="link"
      className={styles.component}
      onClick={handleDownload}
    >
      <DownloadIcon />
    </Button>
  );
};

export default DownloadButton;
