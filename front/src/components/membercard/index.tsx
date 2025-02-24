import React from 'react';
import { Card, CardImage, CardContent, CardTitle, CardDescription } from './styles';

interface MemberCardProps {
  name: string;
  role: string;
  imgSrc: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, imgSrc }) => {
  return (
    <Card>
      <CardImage src={imgSrc} alt={`${name}'s picture`} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default MemberCard;