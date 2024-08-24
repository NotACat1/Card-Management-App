import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Container, Alert } from 'react-bootstrap';

const ErrorPage: React.FC = () => {
  const error = (useRouteError() as Error) || {
    message: 'The page was not found',
  };

  return (
    <Container>
      <Alert variant="danger">
        <Alert.Heading>Something went wrong!</Alert.Heading>
        <p>{error.message}</p>
      </Alert>
    </Container>
  );
};

export default ErrorPage;
