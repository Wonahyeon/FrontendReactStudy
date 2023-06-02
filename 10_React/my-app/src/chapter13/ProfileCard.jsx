import React from 'react';
import Card from './Card';

function ProfileCard(props) {
  return (
    <Card
      title='wonah'
      backgroundColor='#afdfaf'
    >
      <p>안녕하세요. 원아현입니다.</p>
      <p>리액트를 사용해서 개발중입니다.</p>
    </Card>
  );
}

export default ProfileCard;