import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 350px;
  margin-bottom: 10px;
  overflow: hidden;

  background: #e1e1e1;
  border-radius: 4px;
`;

export const Section = styled.View`
  padding: 10px 20px;
`;

export const Title = styled.Text`
  margin-bottom: 5px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
`;

export const Infos = styled.Text`
  margin-bottom: 5px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
`;
