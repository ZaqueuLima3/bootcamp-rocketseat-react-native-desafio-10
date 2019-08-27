import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  width: 100%;
  padding: 0 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.8)',
})`
  height: 60px;
  font-size: 15px;
  margin-bottom: 10px;
  padding-left: 15px;

  background-color: rgba(0, 0, 10, 0.4);
  border-radius: 4px;
  color: #fff;
`;

export const SignUpLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignUpLinkText = styled.Text`
  font-size: 14px;
  color: #fff;
`;
