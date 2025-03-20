// styles.ts
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    bodyDefault: {
        flex: 1,
        backgroundColor: '#000',
      },

      // Fundo SVG padrão
      background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
      },

      // Container principal do conteúdo
      contentWrapper: {
        flex: 1,
      },

      // Header padrão para a aplicação
      headerDefault: {
        paddingVertical: 20,
        paddingHorizontal: 25,
        height: 100,
      },

      // Estrutura interna do header
      headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
      },

      // Texto de saudação no header
      headerGreeting: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
      },

      // Subtexto motivacional do header
      headerMotto: {
        fontSize: 12,
        color: '#fff',
        opacity: 0.8,
      },

      // Botão do perfil no header
      profileButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
      },

      // Imagem de perfil no botão
      profileImage: {
        width: '100%',
        height: '100%',
        backgroundColor: '#555',
        borderRadius: 24,
      },

      // Conteúdo da página
      pageContent: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#F5F5F5',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 20,
      },
});