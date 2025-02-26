import React from 'react';
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardLinks } from './styles';

interface MemberCardProps {
  name: string;
  role: string;
  imgSrc: string;
  scholarLink?: string;
  lattesLink?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, imgSrc, scholarLink, lattesLink }) => {
  return (
    <Card>
      <CardImage src={imgSrc} alt={`${name}'s picture`} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
        <CardLinks>
          {scholarLink && (
            <a href={scholarLink} target="_blank" rel="noopener noreferrer">
              Google Scholar
            </a>
          )}
          {lattesLink && (
            <a href={lattesLink} target="_blank" rel="noopener noreferrer">
              Lattes
            </a>
          )}
        </CardLinks>
      </CardContent>
    </Card>
  );
};

export default MemberCard;