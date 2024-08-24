import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';

import { fetchCards } from '@store/cards/cardsSlice';
import { RootState, useAppDispatch } from '@store/index';
import Card from '@components/Card/Card';
import Filter from '@components/Filter/Filter';
import { IUnsplashImage } from '@type/IUnsplashImage';
import { TFilterCards } from '@type/TFilterCards';
import { MAX_PAGES } from '@data/constants';

const CardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<TFilterCards>('all');
  const { cards, status, error, page } = useSelector(
    (state: RootState) => state.cards,
  );
  const observerRef = useRef<HTMLDivElement | null>(null);

  const filteredCards =
    filter === 'liked'
      ? cards.filter((card: IUnsplashImage) => card.liked_by_user)
      : cards;

  const handleLoadMore = useCallback(() => {
    if (status !== 'loading' && page < MAX_PAGES) {
      dispatch(fetchCards(page + 1));
    }
  }, [dispatch, page, status]);

  useEffect(() => {
    if (observerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            handleLoadMore();
          }
        },
        { rootMargin: '100px' },
      );

      observer.observe(observerRef.current);

      return () => {
        if (observerRef.current) observer.unobserve(observerRef.current);
      };
    }
  }, [handleLoadMore]);

  return (
    <Container>
      <Filter filter={filter} onChange={setFilter} />

      <Row className="g-4">
        {filteredCards.map((card: IUnsplashImage) => (
          <Col key={card.id} xs={12} sm={6} lg={4} className="mb-4">
            <Card card={card} />
          </Col>
        ))}
      </Row>

      {/* Отображение спиннера при загрузке данных */}
      {status === 'loading' && (
        <div className="text-center my-4">
          <Spinner animation="border" />
        </div>
      )}

      {/* Невидимый элемент, за которым следит IntersectionObserver */}
      <div ref={observerRef} style={{ height: '1px' }} />
    </Container>
  );
};

export default CardList;
