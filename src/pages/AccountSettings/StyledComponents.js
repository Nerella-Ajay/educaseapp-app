import styled from "styled-components";

export const ProfileSection = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
  padding-bottom: 1rem;
`;

export const AvatarWrapper = styled.div`
  position: relative;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
`;

export const CameraIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #7c3aed;
  padding: 4px;
  color: white;
  font-size: 10px;
  border-radius: 50%;
`;

export const UserDetails = styled.div`
  font-size: 0.875rem;

  p {
    color: #6b7280;
    margin-top: 0.2rem;
  }
`;

export const Description = styled.p`
  color: #374151;
  font-size: 0.95rem;
  line-height: 1.6;
`;

export const Divider = styled.div`
  border-top: 1px dashed #d1d5db;
  margin: 1.5rem 0;
`;

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 1.5rem;
    align-items: center;
    background-color: #f9fafb;
    font-family: 'Rubik', 'sans-serif';
    border: 2px solid #d1d5db;
`

export const Title = styled.h1`
    font-size: 1.875rem;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 0.5rem;
    width: 66%;
`
